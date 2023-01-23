const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
module.exports = {
	before(m) {
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			let chating = `Selamat pak, Level kamu naik!
*${before}* -> *${user.level}*
Ketik *.profile* Untuk cek`.trim()
			m.reply(chating)
			console.log(color(chating, 'pink'))
		}
	}
}
