let handler = async (m, { conn, text, usedPrefix, command }) => {
let fetch = require("node-fetch")
let tio = 'ʜᴀʏᴏ ʙᴀɴɢ ɢᴀʙᴏʟᴇʜ ɢɪᴛᴜ'
 await conn.sendFile(m.chat, 'https://database.tioclkp02.repl.co/Dengarkanlah.mp3', 'Dengarkanlah.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: tio,
 body: wm, sourceUrl: 'https://mursidxml.herokuapp.com/docs', thumbnail: await (await fetch('https://telegra.ph/file/5e169bddd254ec1bf180a.jpg')).buffer()}} 
     })

}

handler.customPrefix = /^(crot|ahah|ah|crit|anjir)$/i
handler.command = new RegExp

module.exports = handler
