//ubah no lu biar ada owner nya
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Mursid S
item.ORG: ᴏᴡɴᴇʀ ʙᴏᴛ
item1.TEL;waid=6288233832771:6288233832771@s.whatsapp.net
item1.X-ABLabel:ᴅᴇᴠᴇʟᴏᴘᴇʀ мυʀѕι∂ вσт-χмℓ
item2.EMAIL;type=INTERNET:ʜᴀɴʏᴀ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙɪᴀꜱᴀ ᴋᴀᴋ
item2.X-ABLabel:Email
item3.ADR:;Yogykarta;
item3.X-ABADR:Yogykarta
item3.X-ABLabel:Lokasi
item4.EMAIL;type=INTERNET:mursidxml@gmail.com
item4.X-ABLabel:Email
item5.URL:${global.web}
item5.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER GW', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "𝘏𝘢𝘭𝘰 𝘬𝘢𝘬 𝘪𝘵𝘶 𝘰𝘸𝘯𝘦𝘳𝘬𝘶, 𝘬𝘢𝘭𝘢𝘶 𝘮𝘢𝘶 𝘤𝘩𝘢𝘵 𝘫𝘢𝘯𝘨𝘢𝘯 𝘭𝘶𝘱𝘢 𝘴𝘢𝘭𝘢𝘮 𝘺𝘢𝘩", sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|dev|botowner|own)$/i

module.exports = handler
