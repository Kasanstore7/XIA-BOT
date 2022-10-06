let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Mursid S
│ ✎ _Hobi_ : Ngoding, suka kamu, gamer/Kang recode biasa bg
│ ✎ _Umur_ : 18
│ ✎ _Asal_ : Yogyakarta
│ ✎ _Status_ : Pelajar SMK
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
│ ✎ _Instagram_ : 
│    instagram.com/mursid.st
│ ✎ _WhatsApp_ :
│    wa.me/6288233832771
│ ✎ _Website_ :
│ ✎ _https://mursidxml.mursidxd.repl.co_
╰───────────────────
`.trim(), m)
}

handler.help = ['infomursid']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler
