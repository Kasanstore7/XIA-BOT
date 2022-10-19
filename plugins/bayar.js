const kontol = "https://telegra.ph/file/f4b21013c0b52e0ef1b02.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, kontol, `
Silahkan scan barcode di atas untuk melakukan transaksi, wajin menyertakan bukti transfer
`.trim(), wm, 'Owner', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['bayar']
handler.tags = ['main', 'utama']
handler.command = /^(bayar)$/i

module.exports = handler
