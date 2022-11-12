let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let jimp = require('jimp')
let PhoneNumber = require('awesome-phonenumber')
const defaultMenu = {
  before: `┌───────────────────⬣
│           *мυʀѕι∂ вσт-χмℓ*
└┬────────────────✽  
┌┤⬡ *Nama* : %name
││⬡ *Role* : %role
││⬡ *Level* : %level %exp / %maxexp
││⬡ *Total Xp* : %totalexp XP
││⬡ *Tanggal Islam* : %dateIslamic
││⬡ *Tanggal* : %date
││⬡ *Hari* : %week %weton
│└────────────────✽
│ ⬡ *Time* : %time WIB
│ ⬡ *Pengguna* : %name 
│ ⬡ *Limit* : %limit
│ ⬡ *Exp* : %totalexp
│ ⬡ *Level* : %level
│ ⬡ *Role* : %role
│ ⬡ *Premium* : ${global.prem ? 'Premium' : 'Gratisan'}
├─────────────────✽
│⬡ *Baileys* : Baileys Multi Auth
│⬡ *Uptime* : %uptime
│⬡ *Owner* : Mursid S
│⬡ *Database* : %rtotalreg dari %totalreg 
│⬡ *Memory Used* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│⬡ https://instagram.com/mursid.st
└───────────────────⬣`.trim(),
  header: '┌──「 *%category* 」──⬣',
  body: '│⬡ %cmd %islimit %isPremium',
  footer: '└──────────⬣\n',
  after: `
┌──「 *BIG THANKS TO* 」──⬣
│⬡ Allah SWT
│⬡ Adiwajshing
│⬡ Nurutomo as wabot-aq
│⬡ Istikmal as BochilGaming
│⬡ Ariffb as stikerin
│⬡ TioXd as BOTCAHX
│⬡ Aguz Familia
│⬡ Ziv San
│⬡ The.sad.boy01
│⬡ Nayla Hanifah
│⬡ X-Team
│⬡ Mark
│⬡ AlyaaXd
│⬡ Syahrul
│⬡ Vanesha Desu
│⬡ Aniq12
│⬡ Amirul Dev
│⬡ Rasell Comel
│⬡ Krizyn_ofc
│⬡ Mursid S
│⬡ All Creator Bot
│⬡ Para Donasi
└──────────⬣

*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'rpg', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'Epic RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'RPG'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('August 18, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9999999999999,
                            status: 1,
                            surface : 1,
                            message: 'мυʀѕι∂ вσт-χмℓ',
                            orderTitle: 'Menu',
                            thumbnail: await (await fetch('https://telegra.ph/file/0c7944e2159f74fa2397b.jpg')).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
    if (teks == '404') {
      let judul = `${ucapan()}, ${name}`.trim()
      const sections = [
            {
              "rows": [{
                "title": `ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ`,
                "description": "[ 👣 ] Nomor Pemilik Bot",
                "rowId": `${_p}creator`
              }, {
                "title": "sʏᴀʀᴀᴛ ᴋᴇᴛᴇɴᴛᴜᴀɴ ᴅᴀɴ ᴘᴇʀᴀᴛᴜʀᴀɴ",
                "description": "[ ✍️ ] Harap membaca Peraturan demi kenyamanan kita bersama",
                "rowId": `${_p}rules`
              }, {
                "title": "ꜱᴘᴇᴇᴅ ʙᴏᴛ",
                "description": "[ ⚡ ] Menampilkan kecepatan berjalan bot",
                "rowId": `${_p}ping`
              }, {
                "title": "ᴅᴏɴᴀsɪ",
                "description": "[ 🏝️ ] Dukung terus dengan cara berdonasi seikhlasnya, untuk mendukung agar bot berjalan 24 jam nonstop tanpa ada kendala",
                "rowId": `${_p}donasi`
              }, {
                "title": "ᴄʀᴇᴅɪᴛ",
                "description": "[ 🪧 ] Terimakasih atas dukungan dan support dari kalian, terimakasih banyak kepada pihak yang terkait dalam pembangunan мυʀѕι∂ вσт-χмℓ ",
                "rowId": `${_p}tqto`
              }, {
                "title": "ɢʀᴜᴘ ʙᴏᴛ",
                "description": "[ 📚 ] Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan",
                "rowId": `${_p}gcbot`
              }],
              "title": `тαмριℓαɴ ѕємυα ρєʀιɴтαн мυʀѕι∂ вσт-χмℓ `
            }, {
              "rows": [{
                "title": `ѕємυα ρєʀιɴтαн`,
                "description": "[ 🎭 ] Menu Semua Perintah",
                "rowId": `${_p}? all`
                }],
              "title": "─────「 1 」"
            }, {
              "rows": [{
                "title": `ᴍᴇɴυ gαмє`,
                "description": "[ 💬 ] Menu Untuk Game",
                "rowId": `${_p}? game`
              }],
              "title": "─────「 2 」"
            }, {
              "rows": [{
                "title": `ᴍᴇɴυ єχρ`,
                "description": "[ 🚀 ] Menu Untuk EXP",
                "rowId": `${_p}? xp`
              }],
              "title": "─────「 3 」"
            }, {
              "rows": [{
                "title": `ѕтɪᴄᴋᴇʀ`,
                "description": "[ 🐾 ] Menu Untuk Sticker",
                "rowId": `${_p}? stiker`
              }],
              "title": "─────「 4 」"
            }, {
              "rows": [{
                "title": `кєʀαɴg αᴊαιв`,
                "description": "[ 📝 ] Kerang Ajaib",
                "rowId": `${_p}? kerangajaib`
              }],
              "title": "─────「 5 」"
            }, {
              "rows": [{
                "title": `qυσтєѕ`,
                "description": "[ ⚔️ ] Menu Untuk Quotes",
                "rowId": `${_p}? quotes`
              }],
              "title": "─────「 6 」"
            }, {
              "rows": [{
                "title": `α∂мιɴ`,
                "description": "[ ⚙️ ] Menu Untuk Admin",
                "rowId": `${_p}? admin`
              }],
              "title": "─────「 7 」"
            }, {
              "rows": [{
                "title": `gʀυρ`,
                "description": "[ ⛽ ] Menu Untuk Group",
                "rowId": `${_p}? group`
              }],
              "title": "─────「 8 」"
            }, {
              "rows": [{
                "title": `ρʀємιυм`,
                "description": "[ 🖥️ ] Menu Untuk Premium Users",
                "rowId": `${_p}? premium`
              }],
              "title": "─────「 9 」"
            }, {
              "rows": [{
                "title": `ɪɴтєяɴєт`,
                "description": "[ 📞 ] Menu untuk Internet",
                "rowId": `${_p}? internet`
              }],
              "title": "─────「 10 」"
            }, {
              "rows": [{
                "title": `αɴσɴумσυѕ ᴄнαт`,
                "description": "[ 🎯 ] Menu Untuk Anonymous Chat",
                "rowId": `${_p}? anonymous`
              }],
              "title": "─────「 11 」"
            }, {
              "rows": [{
                "title": `мєɴυ ɴυℓιѕ & ℓσgσ`,
                "description": "[ 📑 ] Menu Nulis & Logo",
                "rowId": `${_p}? nulis`
              }],
              "title": "─────「 12 」"
            }, {
              "rows": [{
                "title": `мєɴυ ∂σᴡɴℓσα∂єя`,
                "description": "[ ✈️ ] Menu Downloader",
                "rowId": `${_p}? downloader`
              }],
              "title": "─────「 13 」"
            }, {
              "rows":[{
                "title": `тσσℓѕ`,
                "description": "[ 🎸 ] Menu untuk Tools",
                "rowId": `${_p}? tools`
              }],
              "title": "─────「 14 」"
            }, {
              "rows": [{
                "title": `мєɴυ ƒυɴ`,
                "description": "[ 📪 ] Menu Fun",
                "rowId": `${_p}? fun`
              }],
              "title": "─────「 15 」"
            }, {
              "rows": [{
                "title": `∂αтαвαѕє вσт`,
                "description": "[ 📊 ] Menu untuk Database",
                "rowId": `${_p}? database`
              }],
              "title": "─────「 16 」"
            }, {
              "rows": [{
                "title": `νσтє & αвѕєɴ`,
                "description": "[ 🎖️ ] Menu untuk Vote & Absen",
                "rowId": `${_p}? vote`
              }],
              "title": "─────「 17 」"
            }, {
              "rows": [{
                "title": `мєɴυ ιѕℓαм`,
                "description": "[ 🕋 ] Menu Islamic",
                "rowId": `${_p}? islamic`
              }],
              "title": "─────「 18 」"
            }, {
              "rows": [{
                "title": `ρєɴgυвαн ѕυαʀα`,
                "description": "[ 🎙️ ] Menu Pengubah Suara",
                "rowId": `${_p}? audio`
              }],
              "title": "─────「 19 」"
            }, {
              "rows": [{
                "title":  `ᴊα∂ι вσт`,
                "description": "[ 🖨️ ] Menu jadibot/belum tersedia",
                "rowId": `${_p}? jadibot`
              }],
              "title": "─────「 20 」"
            }, {
              "rows": [{
                "title": `ɪɴƒσ`,
                "description": "[ 🔩 ] Menu untuk Info",
                "rowId": `${_p}? info`
              }],
              "title": "─────「 21 」"
            }, {
              "rows": [{
                "title": `тαɴρα кαтєgσʀɪ`,
                "description": "[ 🔌 ] Menu Tanpa Kategori",
                "rowId": `${_p}? tanpakategori`
              }],
              "title": "─────「 22 」"
            }, {
              "rows": [{
                "title":  `σᴡɴєʀ`,
                "description": "[ 🔊 ] Menu Khusus Owner",
                "rowId": `${_p}? owner`
              }],
              "title": "─────「 23 」"
            }
          ]
    const listMessage = {
      text: `мυʀѕι∂ вσт-χмℓ adalah bot whatsapp yang di bangun dengan Nodejs, dengan menggunakan server panel yang sangat kencang, tapi tidak terlalu kencang-kencang banget.`.trim(),
      footer: wm,
      title: judul,
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? ' *Ⓛ* ' : '')
                .replace(/%isPremium/g, menu.premium ? ' *Ⓟ* ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 let buttonMessage= {
'document':{'url': 'https://github.com/Botcahx' },
'mimetype':'application/pdf',
'fileName':'мυʀѕι∂ вσт-χмℓ',
'jpegThumbnail': await(await fetch('https://telegra.ph/file/26b793f8427685e7fd668.jpg')).buffer(),
'fileLength':'99999999999999',
'pageCount':'1630173',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'renderLargerThumbnail': true,
'title': 'мυʀѕι∂ вσт-χмℓ',
'body':'ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ʙʏ ᴍᴜʀꜱɪᴅ',
'mediaType': 1,
'thumbnail': await(await fetch('https://telegra.ph/file/427822da10efced35a1f0.jpg')).buffer(),
'sourceUrl':'https://instagram.com/mursid.st'}},
'caption': text,
'footer': wm,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText': 'ѕємυα ρєʀιɴтαн'},'type':1},
{'buttonId':'.owner','buttonText':{'displayText': 'ρємιℓιк вσт'},'type':1},
{'buttonId':'.rules','buttonText':{'displayText': 'ʀυℓєѕ вσт'},'type':1},

],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
//await conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/263582cc62fcfbdacd094.jpg')).buffer(),  '*────────[ DASBOARD ]───────*', text, 'ᴅσɴαѕι', '.donasi', 'ρємιℓιк вσт', '.owner', m)
await conn.sendFile(m.chat, fs.readFileSync('./mp3/anuu.mp3'), '', false, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
