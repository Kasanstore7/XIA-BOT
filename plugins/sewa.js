let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = `
мυʀѕι∂ вσт-χмℓ

   *SEWA BOT GRUP*
1. Grup/60 Hari Rp 20,000 Dana
   Grup/60 Hari Rp 25,000 Pulsa
   Grup/60 Hari Rp 15,000 Gopay

   *SEWA BOT GRUP + PREMIUM*
2. Grup/30 Hari Rp 15,000 Dana /30 Day
   Grup/30 Hari Rp 15,000 Pulsa
   Grup/30 Hari Rp 15,000 Gopay /30 Day

3. *SEWA BOT GRUP + PREMIUM*
   Grup/15 Hari Rp 10,000 Dana /20 Day
   Grup/15 Hari Rp 10,000 Pulsa / 15 Day
   Grup/15 Hari Rp 10,000 Gopay /20 Day

4. *SEWA BOT GRUP + PREMIUM*
   Grup/10 Hari Rp 10,000 Dana /15 Day
   Grup/10 Hari Rp 10,000 Pulsa / 10 Day
   Grup/10 Hari Rp 10,000 Gopay /15 Day

5. *SEWA BOT GRUP + PREMIUM*
   Grup/7 Hari Rp 5,000 Dana /10 Day
   Grup/7 Hari Rp 5,000 Pulsa /10 Day
   Grup/7 Hari Rp 5,000 Gopay /10 Day

6. *SEWA BOT GRUP + FREETRIAL*
   Grup/Free Trial Rp 00,000 ( Request )
   Grup/Feee Trial Rp 00,000 ( Request )
   Grup/Free Trial Rp 00,000  ( Request )

[ 🚀 ] *NOTE* : Tidak melayani sewa bot permanen

Grup Bot : 
https://chat.whatsapp.com/FhSBFvhtzfN5hIVe1GXAfj

wa.me/6288233832771 ( Mursid S )
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
