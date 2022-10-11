let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Bot Ini Menggunakan Script Github, jangan lupa follow & kasih star nya yaa pak :\n• https://github.com/BOTCAHX/RTXZY-MD
`
conn.sendBut(m.chat, esce, wm3, 'Makasih Mursid', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
