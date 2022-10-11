let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f0b1c19aca4215ffb4ac7.jpg', m, { packname: "wa.me/6287855066799", author: "мυʀѕι∂ вσт-χмℓ\n> Instagram : @mursid.st" })
}

handler.customPrefix = /^(ok|okey|otey|okeh)$/i
handler.command = new RegExp

module.exports = handler
