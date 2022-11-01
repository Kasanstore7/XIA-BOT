let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m
const status = db.data.settings[conn.user.jid] = 0
    // update status
if (new Date() * 1 - status > 1000) {
        let uptime = clockString(_uptime);
		let bio = `Aktif selama ${uptime}`
		await conn.setBio(bio).catch(_ => _)
        status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}
