import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botnumber = '' //Ejemplo: +51927238856
global.confirmCode = ''

global.owner = [
  ['51927238856', '𝑪𝒓𝒊𝒔𝒔 𝑬𝒔𝒄𝒐𝒃𝒂𝒓', true],
  ['51965911060', '𝑺𝒉𝒂𝒅𝒐𝒘', true]
]

global.mods = []
global.prems = []

global.packname = `𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫`
global.author = '𝑩𝒌_𝑪𝒓𝒊𝒔𝒔𝟕'
global.wm = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.dev = '𝑩𝒚 𝑯𝒆𝒂𝒗𝒆𝒏𝒍𝒚 𝑻𝒆𝒂𝒎'
global.stickauth = `© Shadow By Cristian`
global.stickpack = `©️ Powered By Cristian`
global.wait = '🌙 *Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ*'
global.botname = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.textbot = `𝑩𝒚 𝑪𝒓𝒊𝒔𝒔 𝑬𝒔𝒄𝒐𝒃𝒂𝒓`
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.namechannel = 
global.catalogo = fs.readFileSync('./src/img/catalogo.png')
global.miniurl = fs.readFileSync('./src/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363357231409846@newsletter", serverMessageId: 100, newsletterName: namechannel, }, }, }

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://chat.whatsapp.com/Cj8oTiVQOvIISylM5yi5DP'
global.canal = 'https://whatsapp.com/channel/0029Vafxnat8qIzxOjUrwP41'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})



import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 


//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = '' //Ejemplo: +51965911060
global.confirmCode = ''


global.owner = [
  ['51927238856', '𝑪𝒓𝒊𝒔𝒔 𝑬𝒔𝒄𝒐𝒃𝒂𝒓', true],
  ['51965911060', '𝑺𝒉𝒂𝒅𝒐𝒘', true]
]


global.mods = []
global.prems = []


//Cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = 'ShadowBot-MD'
global.namebot = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.sessions = 'ShadowSession'
global.jadi = 'ShadowJadiBot'


global.packname = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.botname = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.wm = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.author = '𝑩𝒌_𝑪𝒓𝒊𝒔𝒔𝟕'
global.dev = '𝑩𝒚 𝑯𝒆𝒂𝒗𝒆𝒏𝒍𝒚 𝑻𝒆𝒂𝒎'
global.textbot = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫 : 𝑩𝒌_𝑪𝒓𝒊𝒔𝒔𝟕'
global.namebot = '𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫'
global.stickpack = `Sticker`
global.titulowm = '-❀ᩙ̈͟༚̮ ⡞᪲=ׅ͟͟͞꯱hׁׅ֮ɑׁׅժׁׅ݊ᨵׁׅׅᨰׁׅ ≼᳞ׄ ᵎ ˚꙳꤬ꨪ'
global.titulowm2 = '.‧·ீ੭ ¡ ᗃᮢ፝֟͡Sɪᴍᴘʟᴇ Wʜᴀᴛsᴀᴘᴘ Bᴏᴛ˚̩̩̥͙°̩̥༅˚'
global.igfg = '@usxr.crxxs'
global.titu = 'ʙʏ ʜᴇᴀᴠᴇɴʟʏ ᴛᴇᴀᴍ'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.7'
global.namechannel = 'お 𝑺𝒉𝒂𝒅𝒐𝒘 𝑩𝒐𝒕 - 𝑴𝑫 ☕ᭃ'
global.stickauth = `By Shadow 💫`
global.dis = ':⁖֟⊱┈֟፝❥'


global.catalogo = fs.readFileSync('./src/catalogo.png')


global.group = ''
global.group2 = ''
global.canal = ''
global.github = 'https://github.com/CrxstianEscobar/ShadowBot-MD' 
global.instagram = 'https://www.instagram.com/usxr.crxxs' 
global.whatsApp = 'https://wa.me/51927238856'

/*
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ᰔᩚ gᥱᥒᥱsіs ᥕһᥲ𝗍sᥲ⍴⍴ ᑲ᥆𝗍', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}};

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'GenesisBot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𖥔.𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨❞ ꔷ──᜔◇⃟̣̣⃕✨', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'GenesisBot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖ɢ ᴇ ɴ ᴇ ꜱ ɪ ꜱ ♡', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'GenesisBot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝐒𝐭𝐢𝐜𝐤𝐞𝐫 (^_^♪) 🤍', jpegThumbnail: catalogo }}};
*/

//Coloca el ID de tus Canales
global.ch = {
ch1: '',
ch2: ''
}


global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}


global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        


global.multiplier = 69
global.maxwarn = '3'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})