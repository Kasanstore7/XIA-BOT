const qrmursid = "https://telegra.ph/file/c8a8cabe89cda01e0fec9.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrmursid, `
┏──「 *Donasi • E-money* 」─⬣
│ • Gopay : 088233832771
│ • Dana : 088233832771
│ • Smartfren : 088233832771
│ • Tri : 089674452300
┗────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa ada kendala sama sekali_
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
