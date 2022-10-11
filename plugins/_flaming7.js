let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming7 MURSID BOT'
  m.reply('_Proses..._')
  let res = `https://reysekhaa.herokuapp.com/api/textpro/greenhoror?apikey=apirey&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `мυʀѕι∂ вσт-χмℓ`, m, false)
}
handler.help = ['flaming7'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming7)$/i

module.exports = handler
