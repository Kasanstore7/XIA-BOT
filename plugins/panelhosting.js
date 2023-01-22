let handler = async (m, { conn, text, usedPrefix, command }) => {
   let ar = ['Owner', 'Donasi']
   let ras = `Hai @${m.sender.split('@')[0]}`
    let sel = `Daftar List Store`
    let rs = `Klik Disini`
const sections = [ {
	title: `LIST Saxia Store`,
	rows: [
	   {title: `[ 𝗣𝗘𝗠𝗕𝗔𝗬𝗔𝗥𝗔𝗡 ] Sebelum Melakukan Tranksasi, Harap Konfirmasi Sama Owner.`, rowId: `#bayar `},//, description: `Menampilkan kecepatan bot`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 JADIBOT ] JADIBOT|1BULAN|15K`, rowId: `#owner `},//, description: `Terima kasih banyak semuanya`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 JADIBOTPREM ] JADIBOT|1BULAN|20K`, rowId: `#owner `},//, description: `Grup masih dalam pengembangan`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 SEWA ] SEWABOT|1BULAN|10K`, rowId: `#owner `},//, description: `Website owner`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 JASA ] JASARUN|1KALI|15K`, rowId: `#owner `},//, description: `Donasi untuk membantu bot, agar selau online`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 PANEL ] OpenPanel|Murah|Cht`, rowId: `#owner `},//, description: `Cht Owner Ready Panel Murah`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 PERMANEN ] SEWABOT/PREM|Permanen|250K`, rowId: `#owner `},//, description: `Khusus Sultan Chuy :v`},
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

handler.help = ['panelhosting']
handler.tags = ['main', 'utama']
handler.command = /^(saxiastore|saxialist$/i

module.exports = handler
