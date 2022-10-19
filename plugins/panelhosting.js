let handler = async (m, { conn, text, usedPrefix, command }) => {
   let ar = ['Owner', 'Donasi']
   let ras = `Hai @${m.sender.split('@')[0]}`
    let sel = `Daftar List Panel Hosting`
    let rs = `Klik Disini`
const sections = [ {
	title: `ℓιѕт ραɴєℓ кυʀυкυυ-м∂`,
	rows: [
	   {title: `[ 𝗣𝗘𝗠𝗕𝗔𝗬𝗔𝗥𝗔𝗡 ] Sebelum Melakukan Tranksasi, Harap Konfirmasi Sama Owner.`, rowId: `#bayar `},//, description: `Menampilkan kecepatan bot`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 𝗠𝗨𝗥𝗔𝗛 ] 5K/Bulan 1GB Ram | 2GB Disk | 50% CPU`, rowId: `#owner `},//, description: `Terima kasih banyak semuanya`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 𝗠𝗨𝗥𝗔𝗛 ] 10K/Bulan 2GB Ram | 3 GB Disk | 70% CPU`, rowId: `#owner `},//, description: `Grup masih dalam pengembangan`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 𝗦𝗧𝗔𝗡𝗗𝗔𝗥 ] 15K/Bulan 4GB Ram | 4 GB Disk 90% CPU`, rowId: `#owner `},//, description: `Website owner`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 𝗦𝗧𝗔𝗡𝗗𝗔𝗥 ] 25K/Bulan 5GB Ram | 5 GB Disk | 100% CPU`, rowId: `#owner `},//, description: `Donasi untuk membantu bot, agar selau online`},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 𝗦𝗨𝗟𝗧𝗔𝗡 ] 45K/Bulan 7GB Ram | 7 GB Disk 150% CPU`, rowId: `#owner `},//, description: ``},
         {title: `[ 𝗣𝗔𝗞𝗘𝗧 𝗦𝗨𝗟𝗧𝗔𝗡 ] 90K/Bulan 7GB Unlimited Ram | Unlimited Disk | Unlimited CPU`, rowId: `#owner `},//, description: ``},
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
handler.command = /^(panelhost|panel|panelhosting)$/i

module.exports = handler
