let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = `
┏──「 *Beli Bot* 」─⬣
│ • Gopay : 088233832771
│ • Dana : 088233832771
│ • Smartfren : 088233832771
│ • Tri : 089674452300
┗────────⬣
*_NOTE_*: JANGAN KLIK BUTTON NANTI CRASH
`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 9999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: anu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}// Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|belibot|sewabot)$/i

module.exports = handler
