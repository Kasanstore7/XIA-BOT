//ubah no lu biar ada owner nya
//jan di jual kontoll
//sc ini freee
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Mursid S
item.ORG: ᴏᴡɴᴇʀ ʙᴏᴛ
item1.TEL;waid=6288233832771:6288233832771@s.whatsapp.net
item1.X-ABLabel:ᴅᴇᴠᴇʟᴏᴘᴇʀ мυʀѕι∂ вσт-χмℓ
item2.EMAIL;type=INTERNET:https://github.com/mursidxml
item2.X-ABLabel:Website
item3.ADR:;Yogykarta;
item3.X-ABADR:ʏᴏɢʏᴋᴀʀᴛᴀ
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
conn.sendMessage(m.chat, { text: `Hay kak *@${await m.sender.split('@')[0]}*, itu ownerku, jangan spam yah >_<`, mentions: [m.sender] }, { quoted: sentMsg })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|dev|own|dv|dp|ct|botown|ownbot)$/i

module.exports = handler
