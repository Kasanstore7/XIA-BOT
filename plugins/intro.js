let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•───────────⬣
│     *「 TEKS INTRO 」*
│ • *Nama     :*
│ • *Gender   :* 
│ • *Umur      :* 
│ • *Hobby    :* 
│ • *Kelas      :* 
│ • *Asal        :* 
└───────────────⬣
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler
