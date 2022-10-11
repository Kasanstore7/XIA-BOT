let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/31a705379b764fa20c5e5.png', m, { packname: "ig @mursid.st\ntiktok @mursid_st", author: "мυʀѕι∂ вσт-χмℓ" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|makasih|makasih|makaciw)$/i
handler.command = new RegExp

module.exports = handler
