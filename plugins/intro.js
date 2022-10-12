let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
┌───────────────⬣
│     *「 TEKS INTRO 」*
│ • *Nama     :*
│ • *Gender   :* 
│ • *Umur      :* 
│ • *Hobby    :* 
│ • *Kelas      :* 
│ • *Asal        :* 
│ • *Agama   :* 
 |  • *Status    :* 
└───────────────⬣
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler
