let handler = async (m, { conn, text, usedPrefix, command }) => {
   let ar = ['Owner', 'Donasi']
   let ras = `Halo @${m.sender.split('@')[0]}`
    let sel = `Silahkan Pilih Menu Di Bawah Ini`
    let rs = `Klik Disini`
const sections = [ {
	title: `Pilih Salah Satu Menu `,
	rows: [
	   {title: `🏃‍♂️|кєᴄєραтαɴ вσт`, rowId: `#speed `},//, description: `Menampilkan kecepatan bot`},
        {title: `⚡|ѕρєє∂ тєѕт`, rowId: `#speedtest `},//, description: `Menampilkan uji kecepatan server bot`},
        {title: `🌱|ѕσυʀᴄє ᴄσ∂є`, rowId: `#sc `},//, description: `Script bot whatsapp`},
         {title: `🪸|тнαɴкѕ`, rowId: `#tqto `},//, description: `Terima kasih banyak semuanya`},
         {title: `🎗️|gʀυρ σffical`, rowId: `#gcbot `},//, description: `Grup masih dalam pengembangan`},
         {title: `🪐|ᴡєвѕιтє`, rowId: `#web `},//, description: `Website owner`},
         {title: `💸|ᴅσɴαѕι`, rowId: `#donasi `},//, description: `Donasi untuk membantu bot, agar selau online`},
         {title: `🧸|Info Devloper`, rowId: `#infodevloper `},//, description: `Inpo Devloper Xia?`},
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: wm,
  title: ras,
  buttonText: rs,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['info'].map((v) => v + ' <opsi>')
handler.tags = ['main']
handler.command = /^(Info)$/i

module.exports = handler
