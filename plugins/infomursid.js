let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI DEVLOPER* ´ˎ˗
│ ✎ _Nama_ : Marcell
│ ✎ _Hobi_ : Belajar Bahasa Pemograman
│ ✎ _Umur_ : Belasan,
│ ✎ _Asal_ : Jawa Timur, Madiun
│ ✎ _Status_ : Pelajar 
┗━━═┅═━━––––––––––✦
│ ↬ _Group Official_ :
│    https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
│ ↬ _Group Random Gwa_ :
│    https://chat.whatsapp.com/EUexY1yhxAB6wjD9ZP6MOU
│ ↬ _Panel Murah_ :
│    https://chat.whatsapp.com/LkH5H4b2cck6lDcz7sMnIv
❖––––『 Sosial Media 』––––❖
│ 𖤍 _Instagram_ : 
│    instagram.com/m.rxcl_
│ 𖤍 _WhatsApp_ :
│    wa.me/6283805685278
│ 𖤍 _Website_ :
│   https://bit.ly/SaxiaShop
╰───────────────────๑
https://ẉbit.ly/
`.trim(), m)
}

handler.help = ['infodevloper']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler
