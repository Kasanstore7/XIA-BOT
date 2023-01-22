let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = `
๑━━━═『 Open Sewa Botz 』═━━━๑

   *SEWA BOT GRUP*
1. > Rp 10,000 /Bulan
   > Rp 75,000 /Tahun
   > Rp 2,500 /Minggu

   *SEWA BOT GRUP + PREMIUM*
2. > Rp 15,000 /Bulan
   > Rp 85,000 /Tahun
   > Rp 4,000 /Minggu

3. *SEWA PANEL MURAH*
  ♨️: https://chat.whatsapp.com/LkH5H4b2cck6lDcz7sMnIv
   
📮*NOTE* : Tidak melayani sewa bot permanen Tapi Klo mau 250k Gas...

🎗️*GRUP BOT* : 
https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz

wa.me/6283805685278 ( Owner )
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
