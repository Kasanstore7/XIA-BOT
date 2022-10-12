let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 
await conn.reply(m.chat, `Downloading media from Tiktok`, m)
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=SadTeams&url=${args[0]}` , txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((tt|tiktok)?(dl)?)$/i

module.exports = handler
