let handler = async (m, { conn }) => {
let sid = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${sid} \nʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ꜱᴄʀɪᴘᴛ ɢɪᴛʜᴜʙ, ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ꜰᴏʟʟᴏᴡ & ᴋᴀꜱɪʜ ꜱᴛᴀʀᴛ ɴʏᴀ ᴘᴀᴋ :\n• https://github.com/BOTCAHX/RT-X-MD
`
conn.sendBut(m.chat, esce, wm3, 'ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
