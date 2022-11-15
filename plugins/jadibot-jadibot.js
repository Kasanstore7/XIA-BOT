import fs from 'fs'
import path from 'path'
import { toBuffer } from 'qrcode'
import ws from 'ws'
import Connection from '../lib/connection.js'
import Store from '../lib/store.js'

const { DisconnectReason, areJidsSameUser } = await import('@adiwajshing/baileys')

let handler = async (m, { conn: _conn, __dirname }) => {

    const parent = await Connection.conn
    if (!areJidsSameUser(parent.user.id, _conn.user.id))
        throw 'Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + parent.user.jid.split`@`[0] + '?text=.jadibot'


    const id = Connection.conns.size
    const logger = Connection.logger.child({ jadibot: id })
    const store = Store.makeInMemoryStore()
    const folder = path.join(__dirname, '../sessions-jadibot', m.chat.split('@')[0].toString())
    const authState = await Store.useMultiFileAuthState(folder)
    const opts = { store, logger, isChild: true, authState }

    let conn = await Connection.start(null, opts),
        lastQr

    // if it's been 2 minutes but there is nobody connect, just close it
    const timeout = setTimeout(() => {
        if (conn?.user) return
        logout()
    }, 2 * 60 * 1000)
    const logout = async () => {
        if (conn?.user?.jid) {
            await _conn.reply(conn.user.jid || m.chat, 'Koneksi terputus...')
        }
        try { conn.ws.close() } catch { }
        Connection.conns.delete(id)
        clearTimeout(timeout)
        // Remove session folder
        await fs.promises.rm(folder, { force: true, recursive: true })
    }
    const sendSuccesLoginMessage = async () => {
        let waiting = 0
        // Wait until user exist in conn object
        const wait = () => new Promise((resolve) => conn.user?.id ? resolve() : (waiting++, setTimeout(() => resolve(wait()), 500)))
        await wait()
        await _conn.reply(conn.user.jid || m.chat, `
Berhasil tersambung dengan WhatsApp - mu.
*NOTE: Ini cuma numpang*

\`\`\`
${JSON.stringify(conn.user, null, 2)}
\`\`\`
`.trim())
        clearTimeout(timeout)
    }

    conn.ev.on('connection.update', async (update) => {
        console.log(update)
        if (update.isNewLogin) {
            sendSuccesLoginMessage()
            // conn.isInit = true
        }
        // @ts-ignore
        const code = update.lastDisconnect?.error?.output?.statusCode || update.lastDisconnect?.error?.output?.payload?.statusCode
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== ws.CONNECTING) {
            await Connection.reload(conn, true, opts)
        } else if (code && code == DisconnectReason.loggedOut) {
            await logout()
            // Maybe release some of memory?
            conn = null
        }
        if (update.qr) {
            if (lastQr) {
                lastQr.delete()
                lastQr = null
            }
            lastQr = await _conn.sendFile(m.chat, await toBuffer(update.qr, { scale: 4 }), 'qrcode.png', `
Scan QR ini untuk jadi bot sementara
1. Klik titik tiga di pojok kanan atas
2. Ketuk perangkat tertaut
3. Scan QR ini 
QR akan Expired !
`.trim(), m)
        }
    })

    Connection.conns.set(id, conn)
    sendSuccesLoginMessage()
}


handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadibot$/i

handler.limit = true

export default handler
