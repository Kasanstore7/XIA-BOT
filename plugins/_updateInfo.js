import db from '../lib/database.js';

export async function all(m, { conn }) {
  let set = db.data.settings[this.user.jid];
  if (new Date() * 1 - set.status > 1000) {
    let _uptime = process.uptime() * 1000;
    let uptime = _uptime.toTimeString();
    await this.updateProfileStatus(
      `⏱️ Aktif Selama: ${uptime} || Mode: ${
        set.self ? 'Private' : 'Publik'
      } || Made by ` + global.tio
    ).catch((_) => _);
    set.status = new Date() * 1;
  }
}
