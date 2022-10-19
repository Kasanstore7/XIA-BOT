let handler = async (m, { conn }) => {
let sid = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${sid} Bot Ini Menggunakan Script Github, jangan lupa follow & kasih star nya yaa pak :\n• https://github.com/Botwa021/M
`
conn.sendBut(m.chat, esce, wm3, 'Makasih', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
