let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let teks = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan мυʀѕι∂ вσт-χмℓ 

Kebijakan Privasi
1. Bot tidak akan merekam data riwayat chat user.
2. Bot tidak akan menyebarkan nomor users.
3. Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. Bot tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan мυʀѕι∂ вσт-χмℓ 
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
6. Dilarang keras menggunakan fitur bot 18+

Syarat Ketentuan мυʀѕι∂ вσт-χмℓ 
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. Bot dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. Bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

*BIG THANKS TO*
• Allah SWT
• Nurutomo
• Ariffb
• Istikmal
• Aguz Familia
• Syahrul
• Amirul Dev
• Ziv San
• BOTCAHX
• The.sad.boy01
• Nayla Hanifah
• Krizyn_Ofc
• Mursid S
• All creator Bot

Rules: 20 Oktober 2022
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: 'tes',
        sections:  [{title: "Klik di bawah", rows: [
        {title: 'Menu Utama', description: "Kembali ke semua perintah", rowId:".menu"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK AKAN DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    m.reply(teks)
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler
