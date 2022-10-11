let handler = async (m, { conn, text, usedPrefix, command }) => {
let fetch = require("node-fetch")
let tio = 'мυʀѕι∂ вσт-χмℓ'
 await conn.sendFile(m.chat, 'https://database.tioclkp02.repl.co/Dengarkanlah.mp3', 'Dengarkanlah.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: tio,
 body: wm, sourceUrl: 'https://botcahx.ddns.net', thumbnail: await (await fetch('https://telegra.ph/file/c305f13d22afcfe92474c.jpg')).buffer()}} 
     })

}

handler.customPrefix = /^(crot)$/i
handler.command = new RegExp

module.exports = handler
