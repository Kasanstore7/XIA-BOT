let handler = async (m, { conn }) => {
let sid = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${sid} \nʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ꜱᴄʀɪᴘᴛ:\n• https://github.com/BOTCAHX/RTXZY-MD\n• Di Recode/Base Ulang By: SaxiaBotz\n⫹⫺ Klo Mau Sc Yg Udah Di Recode .owner
`
conn.sendBut(m.chat, esce, wm3, 'ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
