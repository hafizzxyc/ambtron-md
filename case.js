require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const nodemailer = require('nodemailer')
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const cheerio = require('cheerio');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const { remini } = require('./lib/remini')
const qs = require('qs');

module.exports = async (Amba, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Amba.user.id.split(':')[0]+'@s.whatsapp.net' || Amba.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Amba.decodeJid(Amba.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Amba.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

try {
ppuser = await Amba.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: 0,
}
} catch (err) {
console.log(err)
} 

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)

    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (global.public === false) {
if (!m.key.fromMe && !isCreator) return
}

const qsal = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: `${namabot} | 2022 - 2025`
}}}
const reply = (teks) => { 
Amba.sendMessage(from, { text: teks, contextInfo:{
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: channelname,
newsletterJid: channeljid,
}, externalAdReply: { showAdAttribution: true,
mediaType:  1,
previewType: 0,
renderLargerThumbnail: true,
mediaUrl: `https://wa.me/` + `${global.owner}`,
title: `${global.namabot} || ${global.channelname}`,
sourceUrl: `https://wa.me/${global.owner}`, 
thumbnail: fkethmb
}
}},{quoted:qsal})
 }

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

const reactionMessage = ["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮", "😵", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠"]
const randomReaction = reactionMessage[Math.floor(Math.random() * reactionMessage.length)];

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const metaai = {
            key: { 
                 fromMe: false,
                 participant: `13135550002@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: {
                conversation: `_${global.namabot} Terverifikasi Oleh MetaAI_`
            }
        }
        
        async function sendPoll(jid, text, list) {
Ridky.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}
/*
    const HannMedia = m.mtype
    if(HannMedia === "stickerMessage"){
    if (isCreator && !isBot) {
        const pesanstick = [
          "stiker paan itu",
          "apasih",
          "🗿",
          "😹",
          "apalah jirr itu",
          "paan si",
          "itu kontol yaa bang?",
          "stiker bokep ni pasti",
          "si pengoleksi stiker datang",
          "aelah stiker mulu",
          "pergi sana memek",
          "bego sih stiker ini pula",
          "ipilih jir",
          "ih apacoba"
          ]
          let stickpesan = pickRandom(pesanstick)
        	  return m.reply(stickpesan)
        }
 }
 **/
if (!m.isGroup && !isCreator && !isBot) {
        	if (command){
            return m.reply(` Halo sobat! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !\n\nJika Anda mengalami masalah silakan chat pemilik wa.me/${global.owner}\n\nSaluran: ${global.linksl}\nGroup Chat: ${global.linkgc}`)
            }
        }
 
switch(command) {


case 'menu': case 'help':{
    let kntll = fs.readFileSync('./sound/menu.mp3')
    Amba.sendMessage(m.chat, { audio: kntll, mimetype: "audio/mp4", ptt: true }, { quoted: m })
Amba.sendMessage(from, {react: {text: randomReaction, key: m.key}})
let anu = `
ʜᴇʟʟᴏ, @${m.sender.split("@")[0]} 🌬
ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ ( ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ), ɪ ᴡᴀs ᴅᴇᴠᴇʟᴏᴘᴇᴅ ᴛᴏ ʜᴇʟᴘ ғɪɴᴅ ᴛʜᴇ ᴅᴀᴛᴀ / ɪɴғᴏʀᴍᴀᴛɪᴏɴ ɴᴇᴇᴅ ʙʏ ᴀʟʟ ᴏғ ʏᴏᴜ thanks for using amba md.

© Powered By ${owner}

𖡞 Ai Menu

ᯓ✧ ${prefix}gemini
ᯓ✧ ${prefix}morphic
ᯓ✧ ${prefix}songai
ᯓ✧ ${prefix}tomoe
ᯓ✧ ${prefix}prodia
ᯓ✧ ${prefix}editee
ᯓ✧ ${prefix}txt2img
ᯓ✧ ${prefix}kurumi
ᯓ✧ ${prefix}kurumi-chat
ᯓ✧ ${prefix}gpt4
ᯓ✧ ${prefix}tts
ᯓ✧ ${prefix}amba

𖡞 Downloader Menu

ᯓ✧ ${prefix}tiktok
ᯓ✧ ${prefix}tiktok2
ᯓ✧ ${prefix}ttslide
ᯓ✧ ${prefix}igmp4
ᯓ✧ ${prefix}igdl
ᯓ✧ ${prefix}videy
ᯓ✧ ${prefix}gdrive
ᯓ✧ ${prefix}sfile
ᯓ✧ ${prefix}mediafire
ᯓ✧ ${prefix}aio
ᯓ✧ ${prefix}goredl

𖡞 Tools Menu

ᯓ✧ ${prefix}play
ᯓ✧ ${prefix}pin
ᯓ✧ ${prefix}gsmarena
ᯓ✧ ${prefix}readmore
ᯓ✧ ${prefix}rangkum
ᯓ✧ ${prefix}drakor
ᯓ✧ ${prefix}gimage
ᯓ✧ ${prefix}kbbi-kemdikbud
ᯓ✧ ${prefix}photoleap
ᯓ✧ ${prefix}picsum
ᯓ✧ ${prefix}nextlibur
ᯓ✧ ${prefix}lahelu
ᯓ✧ ${prefix}npms
ᯓ✧ ${prefix}playstore
ᯓ✧ ${prefix}pixiv
ᯓ✧ ${prefix}pixeldrain
ᯓ✧ ${prefix}quote
ᯓ✧ ${prefix}spotifysearch
ᯓ✧ ${prefix}ttp
ᯓ✧ ${prefix}ttp2
ᯓ✧ ${prefix}quote
ᯓ✧ ${prefix}sticker
ᯓ✧ ${prefix}qc
ᯓ✧ ${prefix}rvo
ᯓ✧ ${prefix}elonmu-news
ᯓ✧ ${prefix}freetogame
ᯓ✧ ${prefix}steamsearch
ᯓ✧ ${prefix}npmstalk
ᯓ✧ ${prefix}top4top
ᯓ✧ ${prefix}chord
ᯓ✧ ${prefix}ttsearch
ᯓ✧ ${prefix}tr
ᯓ✧ ${prefix}goresearch
ᯓ✧ ${prefix}filmsearch
ᯓ✧ ${prefix}grupsearch
ᯓ✧ ${prefix}trackip
ᯓ✧ ${prefix}get
ᯓ✧ ${prefix}fdroid
ᯓ✧ ${prefix}styletext
ᯓ✧ ${prefix}cinema
ᯓ✧ ${prefix}cerpen
ᯓ✧ ${prefix}quotess
ᯓ✧ ${prefix}film

𖡞 Islam Menu

ᯓ✧ ${prefix}doaharian
ᯓ✧ ${prefix}kisahnabi
ᯓ✧ ${prefix}surah
ᯓ✧ ${prefix}jadwalsholat

𖡞 Anime Menu
 
ᯓ✧ ${prefix}bluearchive
ᯓ✧ ${prefix}animecharacter
ᯓ✧ ${prefix}waifu
ᯓ✧ ${prefix}charactersearch
ᯓ✧ ${prefix}topanime
ᯓ✧ ${prefix}mangasearch
ᯓ✧ ${prefix}bluarcsearch
ᯓ✧ ${prefix}quotesanime

𖡞 Owner Menu
 
ᯓ✧ ${prefix}self
ᯓ✧ ${prefix}public
ᯓ✧ ${prefix}everyone
ᯓ✧ ${prefix}join
ᯓ✧ ${prefix}userjid
ᯓ✧ ${prefix}sendfitur 

𖡞 Fun Menu

ᯓ✧ ${prefix}top
ᯓ✧ ${prefix}putar
ᯓ✧ ${prefix}yesorno

𖡞 Voice Changer Menu
 
ᯓ✧ ${prefix}bass
ᯓ✧ ${prefix}blown
ᯓ✧ ${prefix}deep
ᯓ✧ ${prefix}earrape
ᯓ✧ ${prefix}fast
ᯓ✧ ${prefix}fat
ᯓ✧ ${prefix}nightcore
ᯓ✧ ${prefix}reverse
ᯓ✧ ${prefix}robot
ᯓ✧ ${prefix}slow
ᯓ✧ ${prefix}smooth
ᯓ✧ ${prefix}squirrel

`
let messageContent = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': anu
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./thumb.png')}, { upload: Amba.waUploadToServer})), 
                  'title': ``,
                  'gifPlayback': true,
                  'subtitle': global.namabot,
                  'hasMediaAttachment': false  
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"\",\"url\":\"https://chat.whatsapp.com/HEHSFt134b29XOnjEIRaXX\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0"
            })
          })
        }
      }
    }, {});

    return await Amba.relayMessage(m.chat, messageContent.message, {})
 }
break;
case 'quotess':{
//wm senn
async function quotes(input) {
	return new Promise((resolve, reject) => {
		fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => res.text())
			.then(res => {
				const $ = cheerio.load(res)
				data = []
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
					y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
					z = $(element).find('q[class="fbquote"]').text().trim()
//wm senn
					data.push({ author: x, bio: y, quote: z })
				})
				data.splice(2, 1)
//wm senn
				if (data.length == 0) return resolve({ creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb', status: false })
				resolve({ creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb', status: true, data })
			}).catch(reject)
	})
}
//wm senn
if (!text) return m.reply("Masukan Tipe Quotes\n\nContoh: .quotes senja")
//wm senn
let ayam = await quotes(text)
//wm senn
let jawir = ayam.data
let ngawi = pickRandom(jawir)
//wm senn
let cap = `  
_${ngawi.quote}_

~ ${ngawi.author}
`.trim()
//wm senn
m.reply(cap)
}
break
case 'quotesanime': {
async function quotesAnime() {
    try {
        const page = Math.floor(Math.random() * 184);
        const { data } = await axios.get('https://otakotaku.com/quote/feed/' + page);
        const $ = cheerio.load(data);
        const hasil = [];
        $('div.kotodama-list').each((l, h) => {
            hasil.push({
                link: $(h).find('a').attr('href'),
                gambar: $(h).find('img').attr('data-src'),
                karakter: $(h).find('div.char-name').text().trim(),
                anime: $(h).find('div.anime-title').text().trim(),
                episode: $(h).find('div.meta').text(),
                up_at: $(h).find('small.meta').text(),
                quotes: $(h).find('div.quote').text().trim()
            });
        });
        return hasil;
    } catch (error) {
        throw error;
    }
}
quotesAnime().then(hasil => {
 if (hasil.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `[ *QUOTESANIME* ]\n\n`;
 hasil.forEach((hasil) => {
 replyTextt += `Quotes: ${hasil.quotes}\nAnime: ${hasil.anime}\nEpisode: ${hasil.episode}\nUp: ${hasil.up_at}\nKarakter: ${hasil.karakter}\nLink${hasil.link}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat merandom di QuotesAnime.');
 m.reply(error.message);
 })
}
break
case 'tiktok2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await Amba.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await Amba.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break

case 'cinema': {
async function cinema() {

  try {

    const response = await axios.get('https://21cineplex.com/')

    const html = response.data

    const $ = cheerio.load(html)

    const results = []

    $('.col-3 .movie').each((index, element) => {

      const movieTitle = $(element).find('.movie-desc h4').text().trim()

      const movieLabel = $(element).find('.movie-desc span.movie-label img').attr('src')

      const moviePoster = $(element).find('.movie-poster img').attr('src')

      const movieLink = $(element).find('a').attr('href')

      const data = {

        title: movieTitle,

        label: movieLabel,

        poster: moviePoster,

        link: movieLink

      }

      results.push(data)

    })

    return results

  } catch (error) {

    console.error(error)

  }

}
cinema().then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `[ *CINEMA RANDOM* ]\n\n`;
 results.forEach((results) => {
 replyTextt += `Judul: ${results.title}\nPoster: ${results.poster}\nLink: ${results.link}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat merandom di cinema.');
 m.reply(error.message);
 });
}
break
case 'cerpen': {
  if (!text) return reply(`Example: ${prefix + command} anak`)
async function cerpen(category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
let cepren = await cerpen(text)
let cepen = `Judul: ${cepren.title}\nAuthor: ${cepren.author}\nKategori: ${cepren.kategori}\nLolos: ${cepren.lolos}\nCerita: ${cepren.cerita}`
await m.reply(cepen)
}
break
case 'bluarcsearch': {
  let chara = (
    await fetchJson("https://api.ennead.cc/buruaka/character")
  ).map((a) => a.name);
  if (!text)
    reply(`*• Example :* ${prefix + command} *[character name]*

*List Characters in database :*
${chara.map((a) => "• " + a).join("\n")}`);
  let capital = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  };
  if (!chara.includes(capital(text)))
    return reply(`*• Example :* ${prefix + command} *[character name]*

*List Characters in database :*
${chara.map((a) => "• " + a).join("\n")}`);
  m.reply(mess.wait);
  let a = await fetchJson(
    "https://api.ennead.cc/buruaka/character/" + capital(text),
  );
  if (a.StatusCode) {
    m.reply("*[ CHARACTER NOT FOUND ]*");
  } else {
    let cap = `*[ BLUE ARCHIVE INFORMATION ]*
*• Name :* ${a.character.name}
*• Age :* ${a.info.age}
*• Height :* ${a.info.height}
*• School :* ${a.info.school}
*• Year :* ${a.info.schoolYear}
*• Club :* ${a.info.club}
*• Birth Date :* ${a.info.birthDate}

*• Base Star :* ${a.character.baseStar}
*• Rank :* ${a.character.rarity}
*• Role :* ${a.character.role}
*• Type :*
* Squad : ${a.character.squadType}
* Weapon : ${a.character.weaponType}
* Bullet : ${a.character.bulletType}
* Armor : ${a.character.armorType}`;
    m.reply(cap, a.image.portrait);
  }
}
break
case 'fdroid': {
  if (!q) return reply(`Example: ${prefix + command}`)
 async function avzxxx(query) {
    const url = `https://search.f-droid.org/?q=${encodeURIComponent(query)}&lang=id`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const apps = [];
        $('.package-header').each((index, element) => {
            const title = $(element).find('.package-name').text().trim();
            const apkUrl = $(element).attr('href');
            const LinkGambar = $(element).find('.package-icon').attr('src');

            apps.push({ title, apkUrl, LinkGambar });
        });

        return apps;

    } catch (error) {
        console.error('Error:', error);
    }
}
avzxxx(q).then(apps => {
 if (apps.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `Hasil pencarian untuk "${q}":\n\n`;
 apps.forEach((apps) => {
 replyTextt += `Judul: ${apps.title}\nApk Url: ${apps.apkUrl}\nLink Gambar: ${apps.LinkGambar}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat pencrian di fdroid.');
 m.reply(error.message);
 });
}
break
case 'style': case 'styletext': {
    async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
if (!text) return m.reply('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
 for (let i of anu) {
teks += `🍀 *${i.name}* : ${i.result}\n\n`
   }
m.reply(teks)
 }
break
case 'topanime': case 'animetop':{
async function MalTopAiring(){
  return new Promise(async(resolve, reject) => {
    try {
      const { data } = await axios.get('https://myanimelist.net/topanime.php?type=airing');
      let results = []
      var $ = cheerio.load(data);
      $('div.pb12 > table.top-ranking-table').each((i, u) => {
        for (let i = 0; i < 10; i++) {
          let b = $(u).find('tr.ranking-list > td.ac')
          let c = $(u).find('tr.ranking-list > td.title')[i]
          let d = $(u).find('tr.ranking-list > td.score')[i]
          results.push({
            rank: i + 1,
            thumbnail: $(c).find('a.hoverinfo_trigger > img').attr('data-src'),
            title: $(c).find('div.detail > div.clearfix > h3 > a').text().trim(),
            score: $(d).find('span').text().trim(),
            link: $(c).find('a.hoverinfo_trigger').attr('href')
          })
        }
      })
      if (results.every(x => x === undefined)) return { mess: 'No result found' };
      resolve(results);
    } catch (error) {
      console.error(error.toString());
    }
  })
}

m.reply('wait a minute...')
let results = await MalTopAiring()
if (results.length > 0) {
let message = 'Hasil pencarian:\n\n';
results.forEach((result, index) => {
message += `🏆Rank : ${result.rank}\n${result.title}\nScore: ${result.score}\nLink: ${result.link}\n\n`;
 });
 Amba.sendMessage(m.chat, {image: {url: result[0].thumbnail}, caption: message}, {quoted: m})
 } else {
m.reply('Tidak Ada Hasil.');
}
}
break
case 'mangasearch':{
async function MalSearchManga(manga){
  return new Promise(async(resolve, reject) => {
    try {
      const { data } = await axios.get('https://myanimelist.net/manga.php?q='+manga+'&cat=manga')
      let results = []
      var $ = cheerio.load(data);
      $('div.js-categories-seasonal > table').each((i, u) => {
        for(let i = 1; i < 10; i++){
          let b = $(u).find('td.borderClass:nth-child(2)')[i]
          let c = $(u).find('td.borderClass:nth-child(3)')[i]
          let d = $(u).find('td.borderClass:nth-child(4)')[i]
          let e = $(u).find('td.borderClass:nth-child(5)')[i]
          let f = $(u).find('td.borderClass:nth-child(1)')[i]
          let link = $(b).find('a:nth-child(2)').attr('href')
          if (typeof link === 'undefined') return
          results.push({
            title: $(b).find('a.hoverinfo_trigger > strong').text(),
            type: $(c).text().trim(),
            vol: $(d).text().trim(),
            score: $(e).text().trim(),
            link: link,
            thumbnail: $(f).find('a.hoverinfo_trigger > img').attr('data-src')
          })
        }
      });
      if (results.every(x => x === undefined)) return { mess: 'No result found' };
      resolve(results)
    } catch (error) {
      console.error(error.toString())
    }
  })
}
if (!text) return m.reply(`Penggunaan: ${prefix + command} one piece`)
m.reply('wait a minute...')
let results = await MalSearchManga(text)
if (results.length > 0) {
let message = 'Hasil pencarian:\n\n';
results.forEach((result, index) => {
message += `*[${index + 1}]* 📖\nTitle : ${result.title}\nType : ${result.title}\nVol : ${result.vol}\nScore: ${result.score}\nLink: ${result.link}\n\n`;
 });
 Amba.sendMessage(m.chat, {image: {url: result[0].thumbnail}, caption: message}, {quoted: m})
 } else {
m.reply('Tidak Ada Hasil.');
}
}
break
case 'charactersearch':{
async function MalSearchCharacter(character){
  return new Promise(async(resolve, reject) => {
    try {
      let results = []
      const { data } = await axios.get('https://myanimelist.net/character.php?q=' + character);
      var $ = cheerio.load(data);
      $('table').each((i, u) => {
        for (let i = 0; i < 10; i++) {
          let b = $(u).find('tr > td.borderClass:nth-child(2)')[i]
          let c = $(u).find('tr > td.borderClass:nth-child(1)')[i]
          let d = $(u).find('tr > td.borderClass:nth-child(3)')[i]
          let name = $(b).find('a').text().trim()
          let alias_name = $(b).find('small').text().trim()
          let url = $(b).find('a').attr('href')
          let thumbnail = $(c).find('a > img').attr('data-src')
          let anime = $(d).find('small > a:nth-child(1)').text().trim()
          let manga = $(d).find('small > a:nth-child(2)').text().trim()
          if (typeof url === 'undefined') return
          results.push({
            name: name ? name : 'No Name',
            alias_name: alias_name ? alias_name : 'No Alias',
            url: url ? url : 'No Url',
            thumbnail: thumbnail ? thumbnail : 'https://i.ibb.co/G7CrCwN/404.png',
            anime: anime ? anime : 'No In Anime',
            manga: manga ? manga : 'No In Manga'
          })
        }
      })
      if (results.every(x => x === undefined)) return { mess: 'No result found' };
      resolve(results);
    } catch (error) {
      console.error(error.toString())
    }
  })
}
if (!text) return m.reply('Penggunaan: .charactersearch Roronoa Zoro')
//senn
m.reply('wait a minute...')
let result = await MalSearchCharacter(text)
//wm senn
let message = 'Hasil pencarian:\n\n';
message += `Name : ${result[0].name}\nNama Panggilan : ${result[0].alias_name}\nDari Anime : ${result[0].anime}\nLink: ${result[0].url}\n\n`;
 Amba.sendMessage(m.chat, {image: {url: result[0].thumbnail}, caption: message}, {quoted: m})
}
break
case 'get': {
		if (typeof text !== 'string' || !text.trim()) {
			return m.reply(`Add Input (Link)\n\nExample: ${prefix + command} https://example.com`);
		}
		const isUrl = (url) => {
			return url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);
		};
		const urlMatch = isUrl(text);
		if (!urlMatch) {
			return m.reply(`Invalid URL provided. Please provide a valid URL.\n\nExample: ${prefix + command} https://example.com`);
		}
		const url = urlMatch[0]; // Use the first match
		try {
			const res = await axios.get(url);
			if (!/json|html|plain/.test(res.headers['content-type'])) {
				return m.reply(`The content type of the provided URL is not supported.\n\nSupported types: json, html, plain text.`);
			}
			m.reply(util.format(res.data));
		} catch (e) {
			m.reply(`Error fetching data from the provided URL: ${util.format(e.message)}`);
		}
}
break

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await Amba.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(mess.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
case 'goredl': {
  if (!text) return reply(`Example: ${prefix + command} seegore`)
async function sgoredl(link) {
	return new Promise(async (resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $$ = cheerio.load(data)
				const format = {
					judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
					views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
					comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
					link: $$('video > source').attr('src')
				}
				const result = {
					creator: "Wudysoft",
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}
const gkanjut = await sgoredl(text)
let pant = gkanjut.data
let ghann = `[ *SEEGORE DOWNOADER* ]

Judul: ${pant.judul}
Views: ${pant.views}
Comment: ${pant.comment}
Link: ${pant.link}
`
Amba.sendMessage(m.chat, {video: {url: pant.link}, caption: ghann}, {quoted: metaai})
}
break
case 'goresearch': {
  if (!text) return reply("Example: .goresearch girl")
async function ssearchgore(query) {
	return new Promise(async (resolve, reject) => {
		axios.get('https://seegore.com/?s=' + query).then(dataa => {
			const $$$ = cheerio.load(dataa)
			let pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text();
			let slink = 'https://seegore.com/?s=' + query
			axios.get(slink)
				.then(({
					data
				}) => {
					const $ = cheerio.load(data)
					const link = [];
					const judul = [];
					const uploader = [];
					const format = [];
					const thumb = [];
					$('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
						link.push($(b).attr('href'))
					})
					$('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
						let jud = $(d).text();
						judul.push(jud)
					})
					$('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
						let upl = $(f).text();
						uploader.push(upl)
					})
					$('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
						thumb.push($(h).attr('src'))
					})
					for (let i = 0; i < link.length; i++) {
						format.push({
							judul: judul[i],
							uploader: uploader[i],
							thumb: thumb[i],
							link: link[i]
						})
					}
					const result = {
						creator: "Wudysoft",
						data: format
					}
					resolve(result)
				})
				.catch(reject)
		})
	})
}
try {
let haiyak = await ssearchgore(text)
let coba = haiyak.data
let goreng;
for (let i of coba) {
   goreng = `Judul: ${i.judul}\nUploader: ${i.uploader}\nLink: ${i.link}\n\n`
}
m.reply(goreng)
} catch (e) {
m.reply(e)
}
}
break
case 'grupsearch': {
  if (!text) return m.reply('Masukkan query pencarian, misalnya: grupsearch india');
  const cheerio = require('cheerio');
  const axios = require('axios');
// wm avz
  async function skyZo(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const links = [];
// wm avz
      $('a.entry-image-link').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          links.push(href);
        }
      });
// wm avz
      return links;
    } catch (error) {
      console.error('Error fetching the page:', error);
      return [];
    }
  }
// wm avz
  async function avoskyJ(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const links = [];
      let counter = 1;
// wm avz
      $('a[href*="chat.whatsapp.com"]').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          links.push(`${counter}). ${href}`);
          counter++;
        }
      });
// wm avz
      return links.length > 0 ? links.join('\n') : 'Tidak ada link WhatsApp.';
    } catch (error) {
      console.error('Error fetching the page:', error);
      return 'Error.';
    }
  }
// wm avz
  const query = text.trim();
  const searchUrl = `https://whatsgrouplink.com/?s=${encodeURIComponent(query)}`;
// wm avz
  skyZo(searchUrl).then(async links => {
    if (links.length > 0) {
// wm avz
      const randomLink = links[Math.floor(Math.random() * links.length)];
// wm avz
      const result = await avoskyJ(randomLink);
// wm avz
      m.reply(`Link Source Yang Dipilih: ${randomLink}\n\nLink grup WhatsApp yang ditemukan:\n${result}`);
    } else {
      m.reply('Tidak ada link yang.');
    }
  }).catch(error => {
    console.error('Error:', error);
    m.reply('Terjadi kesalahan 404 Errrrr Rrorr');
  });
}
break
case 'jadwalsholat': { 
  if (!text) return reply(`Example: .jadwalsholat jakarta`)
async function jadwalSholat(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://umrotix.com/jadwal-sholat/${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        $(
          "body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ",
        ).each(function (a, b) {
          result = {
            tanggal: $(b).find("> div:nth-child(2)").text(),
            imsak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)",
              )
              .text(),
            subuh: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)",
              )
              .text(),
            dzuhur: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)",
              )
              .text(),
            ashar: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)",
              )
              .text(),
            maghrib: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)",
              )
              .text(),
            isyak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)",
              )
              .text(),
          };
          resolve(result);
        });
      })
      .catch(reject);
  });
}
let sholatt = await jadwalSholat(text)
m.reply(`
[ *JADWAL SHOLAT* ]

5 Waktu dari Daerah ${text}

Tanggal: ${sholatt.tanggal}
Imsak: ${sholatt.imsak}
Shubuh: ${sholatt.subuh}
Dzuhur: ${sholatt.dzuhur}
Ashar: ${sholatt.ashar}
Maghrib: ${sholatt.maghrib}
Isya: ${sholatt.isyak}
`)
}
break
case 'kurumi': {
//wm hann
  if (!text) return m.reply(`Hai, apa yang kamu hari ini?`)
async function generateVoice(Query) {
    const formData = new FormData();
    formData.append("locale", 'id-ID');
    formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
//wm hann
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    //wm hann
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };
//wm hann
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
//wm hann
const prompt = `Nama kamu adalah Kurumi, kamu adalah assisten virtual yang dikembangkan langsung dari google.`;
    const combinedPrompt = `${prompt} ${text}`;
//wm hann
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);
//wm hann
        if (response) {
//wm hann
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            //wm hann
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
        } else {
//wm hann
            Amba.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
//wm hann
        Amba.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
//wm hann
    try {
//wm hann
        let res = await generateVoice(messagee)
await m.reply(messagee)
        if (res) await Amba.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
//wm hann
}
break
case 'tr': {
  if (!m.quoted.text) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break
case 'kurumi-chat': {
if (!text) return reply("Hai, ada yang mau kamu diskusikan hari ini")
async function v_girl(text,prompt, name) {
try {
const response = await axios.post('https://boredhumans.com/virtual_girlfriends/virtual_girlfriends_api.php',
      `prompt=${text.replace(/\s+/g, "%2520")}&chat_id=lwle4nyomx5t0w6quo8&init_prompt=${prompt.replace(/\s+/g, "%2520")}&voice_id=XrExE9yKIg1WjnnlVkGX&stability=0.5&similarity_boost=0.75&name=${name.replace(/\s+/g, "%2520")}&useAudio=false&dateLoc=Bookstore`,
      {
        headers: {
          'User-Agent': 'Googlebot-News',
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    return response.data
    } catch (e) {
    return e
    }
    }

let prompt = 'kurumi is a beginner WhatsApp bot maker ', name = 'kurumi'
        let {
            output
        } = await v_girl(text, prompt, name);
        await m.reply(output[0]);
}
break
case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
Amba.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case 'gpt4': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Furina, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
m.reply(kanjuthann)
}
break
        case "tts": {
          if (!text) return m.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          Amba.sendMessage(m.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          })
        }
        break
      
case 'tiktoksearch':
case 'ttsearch': {
    const dann = require('d-scrape')
if (!text) return reply(`Contoh : ${prefix + command} jj epep`)
reply('Sedang Diproses ⏳')
try {
let anu = await dann.search.tiktoks(text)
Amba.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
reply('Error :v')
}
}
break
        
case 'surah': {
  if (!q) return reply(`Example ${prefix+command} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTexttt = `Hasil dari Surah untuk "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 m.reply(replyTexttt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat memasuki angka di surah.');
 console.error(error);
 });
}
break
case 'film': {
 const query = m.body.slice(5).trim();
 if (!query) {
 return m.reply("Silakan masukkan judul film yang ingin dicari.");
 }
// wm avz
 async function avzzzz(query) {
 try {
 const response = await axios.get(`https://tv.lk21official.my/search.php?s=${query}`);
 const html = response.data;
 const $ = cheerio.load(html);
 let results = [];
// wm avz
 $('.search-item').each((index, element) => {
 const title = $(element).find('h3 a').text().trim();
 const url = 'https://tv.lk21official.my' + $(element).find('h3 a').attr('href');
 const director = $(element).find('p strong:contains("Sutradara:")').parent().text().replace("Sutradara:", "").trim();
 const cast = $(element).find('p strong:contains("Bintang:")').parent().text().replace("Bintang:", "").trim();
 results.push({
 title,
 url,
 director,
 cast
 });
 });
 return results;
 } catch (error) {
 console.error(error);
 return [];
 }
 }
 const results = await avzzzz(query);
 if (results.length === 0) {
 return m.reply("Tidak ditemukan hasil untuk pencarian: " + query);
 }
 let message = "Hasil pencarian untuk: *" + query + "*\n\n";
 results.forEach((result) => {
 message += `Title: ${result.title}\n`;
 if (result.director) {
 message += `Sutradara: ${result.director}\n`;
 }
 if (result.cast) {
 message += `Bintang: ${result.cast}\n`;
 }
 message += `Url: ${result.url}\n\n`;
 });
 m.reply(message);
}
break
case 'sendfitur': {
if (!isCreator) return reply(mess.OnlyOwner);
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!text) return m.reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return m.reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Amba.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return m.reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Amba.sendMessage(recipient, { text: message }, { quoted: m });
m.reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
m.reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
}
break;

case 'igdl': {
  if (!text) return reply("Example: .igdl ig reels\n\nonly reels")
async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        media: mediaURL
      }
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}
let kanjutgedeu = await igdl(text)
Amba.sendMessage(m.chat, {video: {url: kanjutgedeu.media}, caption: mess.success}, {quoted: m})
}
break

case 'kisahnabi': {
if (!text) return reply("nama nabinya?")
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*Coba Jangan Gunakan Huruf Kapital*")
     
     let hasil = `_*Nama Nabi :*_ ${kisah.name} 
_*Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*Tempat Lahir :*_ ${kisah.tmp}
_*Usia :*_ ${kisah.usia}

* — [ K I S A H ] — *

${kisah.description}`

     reply(hasil)
}
break

 case 'prodia': {
if (!q) return m.reply(`quwry?`)
    async function prodia(query) {
        const headers = { // wm avz
            'user-agent': 'Mozilla/5.0 (Linux; Android 11; Avosky) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Mobile Safari/537.36'
        };
        try {            // wm avz
            const AvoskyX = await axios.get('https://api.prodia.com/generate', {
                params: {
                    "new": "true",
                    "prompt": query,
                    "model": "dreamshaper_6BakedVae.safetensors [114c8abb]",
                    "steps": "50",
                    "cfg": "9.5",
                    "seed": Math.floor(Math.random() * 10000) + 1,
                    "sampler": "Euler",
                    "aspect_ratio": "square"
                }, // wm avz
                headers,
                timeout: 30000
            });
            const avos = AvoskyX.data;
            let AvoskyNih;
            do {
                const syra = await axios.get(`https://api.prodia.com/job/${avos.job}`, { headers });
                AvoskyNih = syra.data;
            } while (AvoskyNih.status !== 'succeeded');
            const imageUrl = `https://images.prodia.xyz/${avos.job}.png?download=1`;
            Amba.sendMessage(m.chat, { image: { url: imageUrl }, caption: '_donee ketua_.' });
        } catch (error) {
            m.reply('Gagal');
        }
    }    
    prodia(`${q}`);
}
// wm avz
break

case 'npmstalk': {
  if (!text) return reply("Example: .npmstalk axios")
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}
try {
let jut = await npmstalk(text)
let ahwoi = `[ *NPM STALK* ]

Name: ${jut.name}
Version Latest: ${jut.versionLatest}
Version Publish: ${jut.versionPublish}
Version Update: ${jut.versionUpdate}
Latest Dependencies: ${jut.latestDependencies}
Publish Dependencies: ${jut.publishDependencies}
Publish Time: ${jut.publishTime}
Latest Publish Time: ${jut.latestPublishTime}
`
Amba.sendMessage(m.chat, {text: ahwoi}, {quoted: m})
} catch (error) {
  m.reply(error.message)
}
}
break
case 'editee': {
    if (!q) return m.reply(`_Tanya Ap?`);
// wm avz
    async function getSession() {
        const res = await axios.get("https://editee.com/chat-gpt");
        return res.headers['set-cookie'] ? res.headers['set-cookie'][0].split(';')[0].split('=')[1] : null;
    }
// wm avz
    async function avz(query) {
        const sessionCookie = await getSession();
        const headers = {
            "content-type": "application/json",
            "cookie": `editeecom_session=${sessionCookie}`,
            "user-agent": "Mozilla/5.0",
            "x-requested-with": "XMLHttpRequest"
        };
// wm avz
        const response = await axios.post("https://editee.com/submit/chatgptfree", {
            context: " ",
            selected_model: "gemini",
            important: `aV77OsKy`, // ubah aja kalau mau error wkwk
            user_input: query
        }, { headers });
// wm avz
        return response.data;
    }
// wm avz
    try {
        const answer = await avz(q);
        m.reply(answer.text);
    } catch (error) {
        console.error("Error :", error);
        m.reply("Terjadi ?.");
    }
}
break
        
        case 'ttslide': {
    let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)

    if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    
    async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

try {
    const {
        result } = await tiktok(text);
    m.reply(mess.wait)
    let no = 1
    for (let i of result) {
        Amba.sendMessage(m.sender, {image: {url: i}, caption: `Gambar ke - ${no++}`}, {quoted: m})
}
} catch (error) {
 m.reply(error)
}
}
break
        
        case 'steamsearch': {
  if (!q) return reply("Example: .steamsearch honkai impact")
async function Steam(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, status } = await axios.get('https://store.steampowered.com/search/?term=' + search)
      const $ = cheerio.load(data)
      const hasil = []
      $('#search_resultsRows > a').each((a, b) => {
        const link = $(b).attr('href')
        const judul = $(b).find(`div.responsive_search_name_combined > div.col.search_name.ellipsis > span`).text()
        const harga = $(b).find(`div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.responsive_secondrow `).text().replace(/ /g, '').replace(/\n/g, '')
        var rating = $(b).find(`div.responsive_search_name_combined > div.col.search_reviewscore.responsive_secondrow > span`).attr('data-tooltip-html')
        const img = $(b).find(`div.col.search_capsule > img`).attr('src')
        const rilis = $(b).find(`div.responsive_search_name_combined > div.col.search_released.responsive_secondrow`).text()

        if (typeof rating === 'undefined') {
          var rating = 'no ratings'
        }
        if (rating.split('<br>')) {
          let hhh = rating.split('<br>')
          var rating = `${hhh[0]} ${hhh[1]}`
        }
        hasil.push({
          judul: judul,
          img: img,
          link: link,
          rilis: rilis,
          harga: harga ? harga : 'no price',
          rating: rating
        })
      })
      if (hasil.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(hasil)
    } catch (err) {
      console.error(err)
    }
  })
}
Steam(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((hasil, index) => {
 replyTextt += `${index + 1}. ${hasil.judul}\nHarga: ${hasil.harga}\nLink: ${hasil.link}\nRilis: ${hasil.rilis}\nRating: ${hasil.rating}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari game di steam.');
 console.error(error);
 });
}
break
        
        case 'top4top': {
  const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = "                "
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) reply("Reply Gambar Aja")
  let media = await q.download()
  let link = await top4top(media)
  let { result, status } = link
  let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}
📊 *S I Z E :* ${media.length} Byte
`

reply(caption)
}
break
        
        case 'chord': {
async function chord(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const head = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
 "Cookie": "__gads=ID=4513c7600f23e1b2-22b06ccbebcc00d1:T=1635371139:RT=1635371139:S=ALNI_MYShBeii6AFkeysWDKiD3RyJ1106Q; _ga=GA1.2.409783375.1635371138; _gid=GA1.2.1157186793.1635371140; _fbp=fb.1.1635371147163.1785445876"};
 
 const { data } = await axios.get(`http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search=${query}`, { headers: head });
 
 const anu = await axios.get(`http://app.chordindonesia.com/?json=get_post&id=${data.posts[0].id}`, { headers: head });
 
 let $ = cheerio.load(anu.data.post.content);
 
 resolve({
 title: $("img").attr("alt"),
 chord: $("pre").text().trim()
 });
 } catch (error) {
 reject(error);
 }
 });
}

if (!text) return m.reply('Input Judul Lagu');
 
let query = text.replace(/\s/g, '+'); // Mengganti spasi dengan "+"
let a = await chord(query);
 
m.reply(`*Song :* ${a.title}\n*Chord :*\n\n${a.chord}`);
};
break

case 'tomoe': {
    if (!text) {
        return m.reply(`Contoh: .tomoe hai manis`);
    }

const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

    m.reply("tomoe sedang berfikir...");
    const prompt = `Nama kamu adalah tomoe, kamu adalah assisten virtual yang dikembangkan langsung dari google.`;
    const combinedPrompt = `${prompt} ${text}`;
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);

        if (response) {
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            message = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');

            // Mengirim respons dari Gemini ke user
            await Amba.sendMessage(m.chat, { text: message }, { quoted: m });
        } else {
            await Amba.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
        await Amba.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
}
break
case 'waifu': {
const waifud = await fetchJson 
(`https://pic.re/image.json`)
const waifut = "https://" + waifud.file_url
  Amba.sendMessage(from, { image: { url: waifut }, caption: `Hell nah\n\nSize: ${waifud.file_size}` }, { quoted: m })
}
break
case 'elonmu-news': {
const arsipp = await fetchJson 
(`https://elonmu.sh/api`)
  let bluee = `[ *ELONMU-NEWS* ]
  
  Source: ${arsipp.source}
  Title: ${arsipp.title}
  Deskripsi: ${arsipp.description}
  Link: ${arsipp.link}
  Rilis Berita: ${arsipp.publishDate}
  `
  Amba.sendMessage(from, {image: {url: arsipp.urlImage}, caption: bluee}, {quoted: m})
}
break
case 'tebakumur': {
          if (!text) return m.reply("Example .tebakumur hann")
const mmeeg = await fetchJson 
(`https://api.agify.io/?name=${text}`)
  let qour = `[ *TEBAK UMUR* ]
  
  Count: ${mmeeg.count}
  Nama: ${mmeeg.name}
  Umur: ${mmeeg.age}
  `
  await Amba.sendMessage(from, {text: qour}, {quoted: m})
}
break
case 'freetogame': {
const kocakk = await fetchJson 
(`https://www.freetogame.com/api/games?platform=pc`)
let brak = pickRandom(kocakk)
  let gamefree = `[ *FREE TO GAME* ]
  
  Judul: ${brak.title}
  Deskripsi: ${brak.short_description}
  Link: ${brak.game_url}
  Genre: ${brak.genre}
  Platform: ${brak.platform}
  Publisher: ${brak.publisher}
  Developer: ${brak.developer}
  Rilis: ${brak.release_date}
  `
  await Amba.sendMessage(from, {image: {url: brak.thumbnail}, caption: gamefree}, {quoted: m})
}
break
case 'yesorno': {
          if (!text) return reply("Example .yesorno aku ganteng ga")
const haij = await fetchJson 
(`https://yesno.wtf/api`)
  let prik = `[ *YES OR NO* ]
  
  Pertanyaan: ${text}
  Jawaban: ${haij.answer}
  `
  let buttonMessage = {
                 video: {url: haij.image},
                 gifPlayback:true,
                    caption: prik,
                }
            Amba.sendMessage(m.chat, buttonMessage,{ quoted:m })
}
break
case 'doaharian': {
var pripayerr = [
  {
    "id": "1",
    "doa": "Doa sebelum tidur",
    "ayat": "بِسْمِكَ االلّٰهُمَّ اَحْيَا وَبِاسْمِكَ اَمُوْتُ",
    "latin": "Bismikallaahumma ahyaa wa ammuut",
    "artinya": "Dengan menyebut nama Allah, aku hidup dan aku mati"
  },
  {
    "id": "2",
    "doa": "Doa bangun tidur",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ",
    "latin": "Alhamdu lillahil ladzii ahyaanaa ba’da maa amaa tanaa wa ilahin nusyuuru",
    "artinya": "Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan"
  },
  {
    "id": "3",
    "doa": "Doa masuk kamar mandi",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",
    "latin": "Allahumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
    "artinya": "Ya Allah, aku berlindung pada-Mu dari godaan setan laki-laki dan setan perempuan"
  },
  {
    "id": "4",
    "doa": "Doa ketika bercermin",
    "ayat": "اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ فَحَسِّـنْ خُلُقِىْ",
    "latin": "Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",
    "artinya": "Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku"
  },
  {
    "id": "5",
    "doa": "Doa keluar rumah",
    "ayat": "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",
    "latin": "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
    "artinya": "Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertolongan Allah."
  },
  {
    "id": "6",
    "doa": "Doa masuk rumah",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",
    "latin": "Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal"
  },
  {
    "id": "7",
    "doa": "Doa memohon ilmu yang bermanfaat",
    "ayat": "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
    "latin": "Allahumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)"
  },
  {
    "id": "8",
    "doa": "Doa sebelum belajar",
    "ayat": "يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",
    "latin": "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
    "artinya": "Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman"
  },
  {
    "id": "9",
    "doa": "Doa sesudah belajar",
    "ayat": "اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",
    "artinya": "Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam."
  },
  {
    "id": "10",
    "doa": "Doa sebelum wudhu",
    "ayat": "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
    "latin": "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
    "artinya": "Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala"
  },
  {
    "id": "11",
    "doa": "Doa setelah wudhu",
    "ayat": "اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
    "latin": "Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina.",
    "artinya": "Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh"
  },
  {
    "id": "12",
    "doa": "Doa sebelum membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ",
    "latin": "Allahummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",
    "artinya": "Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan"
  },
  {
    "id": "13",
    "doa": "Doa setelah membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",
    "artinya": "Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam."
  },
  {
    "id": "14",
    "doa": "Doa sebelum mandi",
    "ayat": "اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ",
    "latin": "Allahummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",
    "artinya": "Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku"
  },
  {
    "id": "15",
    "doa": "Doa hendak berpergian",
    "ayat": "اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ",
    "latin": "Allahumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",
    "artinya": "Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga."
  },
  {
    "id": "16",
    "doa": "Doa ketika sampai di tempat tujuan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ",
    "latin": "Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi",
    "artinya": "Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku."
  },
  {
    "id": "17",
    "doa": "Doa memakai pakaian",
    "ayat": "بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ",
    "latin": "Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",
    "artinya": "Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya"
  },
  {
    "id": "18",
    "doa": "Doa memakai pakaian baru",
    "ayat": " اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ",
    "latin": "Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",
    "artinya": "Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku"
  },
  {
    "id": "19",
    "doa": "Doa melepas pakaian",
    "ayat": "بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ",
    "latin": "Bismillaahil ladzii laa ilaaha illaa huwa",
    "artinya": "Dengan nama Allah yang tiada Tuhan selain-Nya"
  },
  {
    "id": "20",
    "doa": "Doa menjelang sholat subuh",
    "ayat": "اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ",
    "latin": "Allaahumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",
    "artinya": "Ya Allah! Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)"
  },
  {
    "id": "21",
    "doa": "Doa menyambut pagi hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",
    "latin": "Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "22",
    "doa": "Doa menyambut sore hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ",
    "latin": "Allahumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "23",
    "doa": "Doa bercermin",
    "ayat": "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    "latin": "Alloohumma kamaa hassanta kholqii fahassin khuluqi",
    "artinya": "Ya Allah, sebagaimana Engkau baguskan tubuhku, maka baguskanlah akhlaqku"
  },
  {
    "id": "24",
    "doa": "Doa pergi ke masjid",
    "ayat": "اللَّهُمَّ اجْعَلْ فِى قَلْبِى نُورًا . وَفِى بَصَرِى نُورًا . وَفِى سَمْعِى نُورًا . وَعَنْ يَمِينِى نُورًا . وَعَنْ يَسَارِى نُورًا . وَفَوْقِى نُورًا . وَتَحْتِى نُورًا . وَأَمَامِى نُورًا . وَخَلْفِى نُورًا . وَاجْعَلْ لِى نُورًا",
    "latin": "Alloohummaj’al fii qolbi nuuron. Wa fii bashori nuuron. Wa fii sam’i nuuron. Wa ‘an yamiinii nuuron. Wa ‘ay yasaarii nuuron. Wa fauqi nuuron. Wa tahti nuuron. Wa amaamii nuuron. Wakholqi nuuron. Waj’al lii nuuron",
    "artinya": "Ya Allah, jadikanlah di dalam hatiku cahaya. Dalam penglihatanku cahaya. Pada pendengaranku cahaya. Sebelah kananku cahaya. Sebelah kiriku cahaya. Atasku cahaya. Bawahku cahaya. Depanku cahaya. Belakangku cahaya. Dan berikanlah cahaya kepadaku."
  },
  {
    "id": "25",
    "doa": "Doa masuk masjid",
    "ayat": "اللَّهُمَّ افْتَحْ لِى أَبْوَابَ رَحْمَتِكَ",
    "latin": "Alloohummaf tahlii abwaaba rohmatik",
    "artinya": "Ya Allah, bukakanlah pintu-pintu rahmatMu untukku"
  },
  {
    "id": "26",
    "doa": "Doa keluar masjid",
    "ayat": "اللَّهُمَّ إِنِّى أَسْأَلُكَ مِنْ فَضْلِكَ",
    "latin": "Alloohumma innii as-aluka min fadllik",
    "artinya": "Ya Allah, sesungguhnya aku memohon keutamaan kepadaMu"
  },
  {
    "id": "27",
    "doa": "Doa setelah adzan",
    "ayat": "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِى وَعَدْتَهُ",
    "latin": "Alloohumma robba haadzihid da’watit taammah washsholaatil qoo-imah. Aati Muhammadanil wasiilata wal fadliilah. Wab’atshu maqooman mahmuudanil ladzii wa ‘adtah",
    "artinya": "Ya Allah, Tuhan panggilan yang sempurna dan shalat yang akan didirikan ini. Berikanlah wasilah dan keutamaan kepada Muhammad. Bangkitkanlah dia pada kedudukan yang terpuji seperti yang Engkau janjikan kepadanya."
  },
  {
    "id": "28",
    "doa": "Doa naik kendaraan",
    "ayat": "سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    "latin": "Subhaanal ladzii sakhkhoro lanaa haadzaa wamaa kunnaa lahuu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun",
    "artinya": "Mahasuci Dia yang telah menundukkan semua ini bagi kami padahal sebelumnya kami tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami."
  },
  {
    "id": "29",
    "doa": "Doa masuk pasar",
    "ayat": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكُ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِى وَيُمِيتُ وَهُوَ حَىٌّ لاَ يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ",
    "latin": "Laa ilaaha illalloohu wahdahu laa syariikalah. Lahul mulku walahul hamdu. Yuhyii wa yumiitu wahuwa hayyun laa yamuut. Biyadihil khoir wahuwa ‘alaa kulli syai-in qodiir",
    "artinya": "Tiada tuhan selain Allah Yang Maha Esa, tiada sekutu bagiNya. Dia yang mempunyai kerajaan dan segala pujian. Dialah yang menghidupkan dan mematikan, dan Dia Mahahidup yang tidak mati. Di tangan-Nya segala kebaikan dan Dia Mahakuasa atas segala sesuatu."
  },
  {
    "id": "30",
    "doa": "Doa sebelum makan",
    "ayat": "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    "latin": "Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannaar.",
    "artinya": "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka"
  },
  {
    "id": "31",
    "doa": "Doa sesudah makan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
    "latin": "Alhamdulillahilladzi ath-amanaa wa saqoonaa wa ja'alanaa minal muslimiin.",
    "artinya": "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk dari kaum muslimin."
  },
  {
    "id": "32",
    "doa": "Doa ketika turun hujan",
    "ayat": "اللَّهُمَّ صَيِّبًا نَافِعًا",
    "latin": "Allahumma shayyiban nafi’an.",
    "artinya": "Ya Allah, curahkanlah air hujan yang bermanfaat. (HR Bukhar dari Aisyah RA)"
  },
  {
    "id": "33",
    "doa": "Doa ketika takut bahaya hujan lebat",
    "ayat": "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا ، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ ، وَبُطُونِ الأَوْدِيَةِ ، وَمَنَابِتِ الشَّجَرِ",
    "latin": "Allahumma hawalaina wala ‘alaina. Allahumma ‘alal akami wa adhirabi, wa buthunil auwdiyati, wamanabitisyajari.",
    "artinya": "Ya Allah turunkan hujan ini di sekitar kami jangan di atas kami. Ya Allah curahkanlah hujan ini di atas bukit-bukit, di hutan-hutan lebat, di gunung-gunung kecil, di lembah-lembah, dan tempat-tempat tumbuhnya pepohonan. (HR Bukhari Muslim)"
  },
  {
    "id": "34",
    "doa": "Doa setelah turun hujan",
    "ayat": "مُطِرْنَا بِفَضْلِ اللـهِ ورَحْمَتِهِ",
    "latin": "Muthirnaa bifadhlillahi wa rahmatihi.",
    "artinya": "Diturunkan kepada kami hujan berkat anugerah Allah dan rahmat-Nya. (HR Bukhari)"
  },
  {
    "id": "35",
    "doa": "Doa bertemu binatang buas",
    "ayat": "إِنَّهُۥ مِن سُلَيْمَٰنَ وَإِنَّهُۥ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    "latin": "Innahụ min sulaimāna wa innahụ bismillāhir-raḥmānir-raḥīm",
    "artinya": "Sesungguhnya surat itu, dari SuIaiman dan sesungguhnya (isi)nya: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (Qs. An Naml: 30 )"
  },
  {
    "id": "36",
    "doa": "Doa agar selalu dicukupkan rezeki",
    "ayat": "اَللّٰهُمَّ اَكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    "latin": "Allahummakfini bihalalika ‘an haramik wa aghnini bifadhlika amman siwak",
    "artinya": "Ya Allah, berilah aku kecukupan dengan rezeki yang halal, sehingga aku tidak memerlukan yang haram, dan berilah aku kekayaan dengan karuniamu, sehingga aku tidak memerlukan bantuan orang lain, selain diri-mu. (HR. Ahmad)"
  },
  {
    "id": "37",
    "doa": "Doa ketika menyisir rambut",
    "ayat": "اَللّهُمَّ حَرِّمْ شَعْرِى وَبَشَرِى عَلىَ النَّار",
    "latin": "ALLAHUMMA HARRIM SYA'RII WA BASYARII 'ALAN NAAR",
    "artinya": "Ya Allah, halangilah rambut dan kulitku dari api neraka"
  }
]
var tobat = pickRandom(pripayerr)
let deks = ` [ *DOA HARIAN* ]

- ${tobat.doa}

Ayat: ${tobat.ayat}
Latin: ${tobat.latin}
Artinya: ${tobat.artinya}
`
m.reply(deks)
}
break
case 'ttp2': {
  if (!q) return m.reply(`input teks`)
// wm avz
  const { createCanvas, loadImage } = require('canvas');
  const { Buffer } = require('buffer');
  const canvasWidth = 800;
  const canvasHeight = 600;
  const backgroundColor = '#f0f0f0';
// wm avz
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');
// wm avz
  const backgroundImage = 'https://example.com/background-image.jpg';
  try {
    const img = await loadImage(backgroundImage);
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
  } catch (error) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
// wm avz
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 4;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.strokeRect(20, 20, canvasWidth - 40, canvasHeight - 40);
// wm avz
  let fontSize = 80;
  ctx.font = `${fontSize}px 'Arial'`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#333';
// wm avz  
  const textGradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
  textGradient.addColorStop(0, '#ff0000');
  textGradient.addColorStop(1, '#0000ff');
  ctx.fillStyle = textGradient;
// wm avz
  let textWidth = ctx.measureText(text).width;
  while (textWidth > canvasWidth - 40) {
    fontSize--;
    ctx.font = `${fontSize}px 'Arial'`;
    textWidth = ctx.measureText(text).width;
  }
// wm avz
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
// wm avz
  const buffer = canvas.toBuffer('image/png');
// wm avz
  Amba.sendImageAsSticker(m.chat, buffer, m, { packname: global.pack, author: global.author });
}
break
case 'putar': {
    if (!text || !text.includes('|')) {
        return m.reply(`Silakan masukkan beberapa opsi dipisahkan oleh "|" (contoh: ${prefix + command} ayam|nasi|pisang|apel)`)
    }
const { createCanvas } = require('canvas')
let previousResult = null
    const items = text.split('|').map(item => item.trim())

    if (items.length < 2) {
        return m.reply('Masukkan setidaknya dua pilihan untuk diputar!')
    }

    let randomIndex, selectedItem
    do {
        randomIndex = Math.floor(Math.random() * items.length)
        selectedItem = items[randomIndex]
    } while (selectedItem === previousResult)

    previousResult = selectedItem

    const canvas = createCanvas(400, 400)
    const ctx = canvas.getContext('2d')

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = 150
    const innerRadius = 30
    const angleStep = (2 * Math.PI) / items.length

    items.forEach((item, index) => {
        const startAngle = index * angleStep
        const endAngle = startAngle + angleStep

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle)
        ctx.fillStyle = colors[index % colors.length]
        ctx.fill()
        ctx.stroke()

        const textAngle = startAngle + angleStep / 2
        const textX = centerX + outerRadius / 1.5 * Math.cos(textAngle)
        const textY = centerY + outerRadius / 1.5 * Math.sin(textAngle)
        ctx.fillStyle = 'black'
        ctx.font = '20px Arial'
        ctx.fillText(item, textX - ctx.measureText(item).width / 2, textY)
    })

    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()

    const arrowLength = 50
    const arrowWidth = 10
    const selectedAngle = randomIndex * angleStep + angleStep / 2

    const arrowTipX = centerX + (outerRadius + 10) * Math.cos(selectedAngle)
    const arrowTipY = centerY + (outerRadius + 10) * Math.sin(selectedAngle)
    const arrowBase1X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle - Math.PI / 12)
    const arrowBase1Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle - Math.PI / 12)
    const arrowBase2X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle + Math.PI / 12)
    const arrowBase2Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle + Math.PI / 12)

    ctx.beginPath()
    ctx.moveTo(arrowTipX, arrowTipY)
    ctx.lineTo(arrowBase1X, arrowBase1Y)
    ctx.lineTo(arrowBase2X, arrowBase2Y)
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = 'black'
    ctx.font = '15px Arial'
    ctx.fillText('@pontadev', 10, canvas.height - 10)

    const buffer = canvas.toBuffer()

    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `_Nih Kak Hasil Putaran: *${selectedItem}*_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Spin Lagi untuk mencoba lagi'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: buffer }, { upload: Amba.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Spin Lagi\",\"id\":\".putar ${text}\"}`
                        }],
                    })
                })
            }
        }
    }, { quoted: m })

    return await Amba.relayMessage(m.chat, msgs.message, {})
}
break
case 'sfile': {
	if (args[0] && args[0].match(/(https:\/\/sfile.mobi\/)/gi)) {
	  const sfile = {
	search: async (query, page = 1) => {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text()), arr = []
		$('div.list').each((idx, el) => {
			let title = $(el).find('a').text(),
				size = $(el).text().trim().split(' (')[1],
				link = $(el).find('a').attr('href')
			if (link) arr.push({ title, size: size.replace(')', ''), link })
		})
		return arr
	},
	download: async url => {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text()), obj = {}
		obj.filename = $('div.w3-row-padding').find('img').attr('alt')
		obj.mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		obj.filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		obj.download = await getLink(url)
		return obj
	}
}

async function getLink(url) {
	url = 'https://sfile.mobi/download' + (new URL(url)).pathname
	let html = await (await fetch(url)).text()
	return html.split('" rel="nofollow"')[0].split('start, <a href="')[1]
}
		let res = await sfile.download(args[0])
		if (!res) throw 'Error'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		await Amba.sendMessage(
			m.chat,
			{
				document: { url: res.download },
				fileName: res.filename,
				mimetype: res.mimetype,
			},
			{ quoted: m },
		);
	} else if (args[0]) {
		let query = args.join` `.split`|`[0], page = parseInt(args.join` `.split`|`[1]) || 1,
			res = await sfile.search(query, page)
		if (!res.length) return reply(`Query "${query}" not found`)
		res = res.map(v => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		await reply(res + `\nPage: ${page}`)
	} else return m.reply(`Masukan Query Atau Link!\n\nContoh:\n${prefix + command} growtopia\n${prefix + command} https://sfile.mobi/1BnLYfsHEcO7`)
}
break

case 'songai':
case 'songgen': {
    if (!text) {
        return reply(`Masukkan teks\nContoh: ${prefix + command} aku cinta tobrut`);
    }
    const api = {
    xterm: {
        url: "https://ai.xterm.codes",
        key: "Bell409"
    }
}; 
    const SongGenerator = async (prompt) => {
        try {
            const { key } = await Amba.sendMessage(m.chat, { text: "Please wait.." }, { quoted: m });
            const response = await axios({
                method: 'post',
                url: `${api.xterm.url}/api/audioProcessing/song-generator`,
                params: { prompt, key: api.xterm.key },
                responseType: 'stream'
            });
            return new Promise((resolve, reject) => {
                response.data.on('data', (chunk) => {
                    try {
                        const eventString = chunk.toString();
                        const eventData = eventString.match(/data: (.+)/);
                        if (eventData && eventData[1]) {
                            const data = JSON.parse(eventData[1]);
                            switch (data.status) {
                                case 'queueing':
                                case 'generating':
                                    Amba.sendMessage(m.chat, { text: data.msg, edit: key });
                                    break;
                                case 'failed':
                                    response.data.destroy();
                                    reject(new Error(data.msg));
                                    break;
                                case 'success':
                                    response.data.destroy();
                                    resolve(data);
                                    break;
                                default:
                                    Amba.sendMessage(m.chat, { text: "Unknown status: " + data, edit: key });
                            }
                        }
                    } catch (e) {
                        Amba.sendMessage(m.chat, { text: "Error processing chunk: " + e.message, edit: key });
                        response.data.destroy();
                        reject(e);
                    }
                });
                response.data.on('error', (err) => {
                    Amba.sendMessage(m.chat, { text: "Stream error: " + err.message, edit: key });
                    reject(err);
                });
            });
        } catch (error) {
            Amba.sendMessage(m.chat, { text: "Error: " + error.message, edit: key });
            throw error;
        }
    };
    try {
        const data = await SongGenerator(text);
        await Amba.sendPresenceUpdate('recording', m.chat);
        await Amba.sendMessage(m.chat, { audio: { url: data.result.audioUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
        let doc = {
            text: data.result.lyrics,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${ucapanWaktu} ${m.pushName}`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "https://instagram.com/hanzzrillnopekpek",
                    thumbnail: fkethmb
                }
            }
        };
        await Amba.sendMessage(m.chat, doc, { quoted: m });  
    } catch (err) {
        console.error(err);
    }
    }
    break;
                case 'userjid':{
          	if(!isCreator) return reply(mess.OnlyOwner)
        const groupMetadata = m.isGroup ? await Amba.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${mem.id}\n`
        }
      reply(textt)
    }
    break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await Amba.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Amba.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
	    case 'ttp':{
	   if (!text) return m.reply(` • *Example* ${prefix + command} NoaMu Chan`)
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: global.pack, // The pack name
		author: global.author, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await Amba.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'everyone': {
if (!isCreator) return
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Amba.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: mem, 
		groupMentions: [
			{
				groupSubject: `everyone - [ *${global.namabot}* ] ||`,
				groupJid: m.chat,
			},
		],
	},
});
}
break
case 'bluearchive': {
var archive = JSON.parse(fs.readFileSync('./lib/bluearchive.json'))
var hasil = pickRandom(archive)
let deks = `
*Info Characters*
----------------------
_👤Nama : ${hasil.character.name}_
🍁Umur : ${hasil.info.age}
⭐Birthday : ${hasil.info.birthDate}
📈Tinggi : ${hasil.info.height}
📖Sekolah : ${hasil.info.school}
☘️Klub : ${hasil.info.club}
🎯Profile : ${hasil.character.profile}
--------------------------
*Stats*
_⚔️Attack level 1 : ${hasil.stat.attackLevel1}_
⚔️Attack level 100 : ${hasil.stat.attackLevel100}
♻️Max Hp Level 1 : ${hasil.stat.maxHPLevel1}
♻️Max Hp Level 100 : ${hasil.stat.maxHPLevel100}
🛡Devense level 1 : ${hasil.stat.defenseLevel1}
🛡Devense level 100 : ${hasil.stat.defenseLevel100}
💚Heal power level 1 : ${hasil.stat.healPowerLevel1}
💚Heal power level 100 : ${hasil.stat.healPowerLevel100}
🪓Def penetrate level 1: ${hasil.stat.defPenetrateLevel1}
🪓Def penetrate level 100 : ${hasil.stat.defPenetrateLevel100}
🔫Ammo count : ${hasil.stat.ammoCount}
🔫Ammo cost : ${hasil.stat.ammoCost}
🔭Range : ${hasil.stat.range}
🌱Move speed : ${hasil.stat.moveSpeed}
❤️‍🩹Street mood : ${hasil.stat.streetMood}
📌Out door mood : ${hasil.stat.outdoorMood}
🛢Indoor mood : ${hasil.stat.indoorMood}
--------------------------
`
Amba.sendMessage(m.chat, {
text: deks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: channeljid,
serverMessageId: 20,
newsletterName: channelname
},
externalAdReply: {  
title: `Nama : ${hasil.character.name}`, 
body: `Birthday : ${hasil.info.birthDate}`,
thumbnailUrl: hasil.image.icon, 
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: m }).catch((err) => reply('_⛩️Maaf terjadi Kesalahan!_'))
}
break

case 'quote': {
  try {
    if (!q) return m.reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await Amba.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break
case 'mediafire': {
	if (!args[0]) return m.reply(`Masukkan url mediafire\nContoh: ${prefix + command} https://www.mediafire.com/××××××××`);
	async function mediafire(link) {
	return new Promise(async(resolve, reject) => {
		try {
			const res = await axios.get(link);
			const $ = cheerio.load(res.data);
			const url = $('a#downloadButton').attr('href');
			const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '').trim();
			const title = url.split('/')[5].split("+").join(" ").split(".").reverse().slice(1).reverse().join(".");
			const type = url.split("/")[5].split('.').reverse()[0];
			resolve({
				title,
				size,
				type,
				url
			});
		} catch (err) {
			reject({
				error: err
			})
		}
	})
}
	m.reply(mess.wait);
	const { title, size, type, url } = await mediafire(args[0]);
	let bjirrbangg = `*Mediafire*\n\nNama: ${title}\Size: ${size}\nMime: ${type}`
  reply(bjirrbangg)
  await Amba.sendMessage(m.chat, { document: { url: url }, fileName: title, mimetype: type }, { quoted: m })
}
break
        case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Amba.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await Amba.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
        case 'pixeldrain': {
	if (!args[0])
		return reply(`Input Pixeldrain URL\n${prefix + command} > Url <\n\nContoh:\n${
		prefix + command
		} https://pixeldrain.com/u/HoGp3Hva\n\n Opsi kedua:\n https://pixeldrain.com/l/2xrapNPF#item=9`);

	if (!/pixeldrain.com\//.test(args[0])) return reply("URL Salah!!");
function formatSize(num) {
	return `${(num / 1000 / 1000).toFixed(2)} MB`;
}

async function fetchFileData(id) {
	const response = await axios.get(
		`https://pixeldrain.com/api/file/${id}/info`,
	);
	const json = response.data;
	const download = `https://pixeldrain.com/api/file/${id}?download`;
	return { download, ...json };
}

async function scrapeListData(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const $ = cheerio.load(html);

		const scriptContent = $("script")
			.toArray()
			.map((script) => $(script).html())
			.find((content) => content.includes("window.viewer_data"));

		if (scriptContent) {
			const viewerDataString = scriptContent.match(
				/window.viewer_data\s*=\s*({.*?});/,
			)[1];
			const viewerData = JSON.parse(viewerDataString);

			const data = viewerData.api_response.files.map((file) => ({
				title: file.name,
				id: file.id,
			}));

			return data;
		} else {
			console.error("window.viewer_data not found");
			return [];
		}
	} catch (error) {
		console.error("Error fetching the page:", error);
		return [];
	}
}
	const url = args[0];
	const fileIdMatch = url.match(/\/u\/(\w+)/);
	const listIdMatch = url.match(/\/l\/(\w+)/);

	if (fileIdMatch) {
		const id = fileIdMatch[1];
		const fileData = await fetchFileData(id);
		const formattedSize = formatSize(fileData.size);
		const sizeMatch = formattedSize.match(/^([\d.]+)\s*(GB|MB)$/i);

		if (!sizeMatch) {
			return m.reply("Unit file size tidak dikenal.");
		}

		const size = parseFloat(sizeMatch[1]);
		const unit = sizeMatch[2].toUpperCase();
		let sizeInMB;

		if (unit === "GB") {
			sizeInMB = size * 1024;
		} else if (unit === "MB") {
			sizeInMB = size;
		} else {
			return m.reply("Unit file size tidak dikenal.");
		}

		const w = "`";

		let message =
			`PixelDrain Downloader\n\n- Name: ${fileData.name}\n` +
			`- Size: ${formattedSize}\n` +
			`- Views: ${fileData.views}\n` +
			`- Downloads: ${fileData.downloads}\n` +
			`- Uploaded: ${fileData.date_upload.split("T")[0]}\n` +
			`- Type: ${fileData.mime_type}\n\n_Sedang Mengirim File..._`;
		await m.reply(message);

		await Amba.sendMessage(
			m.chat,
			{
				document: { url: fileData.download },
				fileName: fileData.name,
				mimetype: fileData.mime_type,
			},
			{ quoted: m },
		);
	} else if (listIdMatch) {
		Amba.pixpix = Amba.pixpix || {};
		const listData = await scrapeListData(url);
		if (listData.length === 0) return m.reply("No files found.");

		const fileList = listData.map((item, index) => ({
			title: item.title,
			id: item.id,
		}));

		const fileListText = fileList
			.map((item, index) => `${index + 1}. ${item.title}`)
			.join("\n");
		const { key } = await reply(`Daftar Hasil:\n\n${fileListText}\n\nBalas pesan ini dengan nomor, link yang ingin ditampilkan.`);
		Amba.pixpix[m.chat] = {
			list: fileList,
			key,
			timeout: setTimeout(
				() => {
					Amba.sendMessage(m.chat, { delete: key });
					setTimeout(() => {
						delete Amba.pixpix[m.chat];
					}, 60 * 1000);
				},
				5 * 60 * 1000,
			),
		};
	} else {
		return reply("URL Salah!!");
	}
}
break
        case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await Amba.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  Amba.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break
case 'pixiv': {
  if (!text) return reply(`Example: ${prefix + command} harimau`);
  async function pixiv(word) {
  var { get } = require("axios")
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}
  m.reply(mess.wait)
  let hannunibakwan = await pixiv(text)
  await Amba.sendMessage(m.chat, { image: hannunibakwan, caption: "Done" }, { quoted:m });
}
break
        case 'playstore': {
  let [tema, urutan] = text.split(/[^\w\s]/g)
  if (!tema) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]")
  m.reply(mess.wait)
  async function playstore(query) {
  let html = (await axios.get(`https://play.google.com/store/search?q=${query}&c=apps`)).data
  let $ = cheerio.load(html)
  return $("div.VfPpkd-aGsRMb").get().map(x => {
    return {
      title: $(x).find("span.DdYX5").text(),
      rating: $(x).find("span.w2kbF").text(),
      author: $(x).find("span.wMUdtb").text(),
      thumbnail: $(x).find(".j2FCNc img").attr("src").replace("s64", "s256"),
      link: "https://play.google.com" + $(x).find("a.Si6A0c").attr("href")
    }
  })
}
  try {
    let data = await playstore(tema)
    if (!urutan) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    let out = data[urutan - 1]
    let caption = `*I N F O R M A S I*

*Judul Aplikasi:* ${out.title || "-"}
*Link:* ${out.link || "-"}
*ID Produk:* ${out.product_id || "-"}
*Rating:* ${out.rating || "-"}
*Pengembang:* ${out.author || "-"}
*Kategori:* ${out.category || "-"}
*Unduhan:* ${out.downloads || "-"}
*Video:* ${out.video || "-"}
*Thumbnail:* ${out.thumbnail || "-"}
*Gambar Fitur:* ${out.feature_image || "-"}
*Deskripsi:* ${out.description || "-"}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${error.message}`)
  }
}
break
        case "qc": {
if (!quoted){
const getname = await Amba.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.pack, author: global.author }
Amba.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.pack, author: global.author }
Amba.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case 'hd': case 'hdr': case 'remini': {
if (!quoted) return m.reply(`foto nya mana?`)
if (!/image/.test(mime)) return m.reply(`foto nya mana? `)
let media = await quoted.download()
let proses = await remini(media, "enhance");
Amba.sendMessage(m.chat, { image: proses, caption: 's u c c e s s'}, { quoted: m})
}
break
case 'amba': {

  function checkText(text) {
    const lowerCaseText = text.toLowerCase();
    if (
      lowerCaseText.includes("cariin") ||
      lowerCaseText.includes("carikan") ||
      lowerCaseText.includes("putarin") ||
      lowerCaseText.includes("putarkan")
    ) {
      return "ok";
    } else {
      return "no";
    }
  }

  if (text.includes("group") || text.includes("grup") && text.includes("tutup")) {
    if (!isBotAdmins)
      return m.reply(
        `Maaf, Aku bukan admin group Ini. 😔`,
      );
    if (!isAdmins)
      return m.reply(
        `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
      );
      
    await Amba.groupSettingUpdate(m.chat, "announcement");
    reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
  } else if (text.includes("group") || text.includes("grup") && text.includes("buka")) {
    if (!isBotAdmins)
      return m.reply(
        `Maaf, Aku bukan admin group ini. 😔`,
      );
    if (!isAdmins)
      return m.reply(
        `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
      );

    await Amba.groupSettingUpdate(m.chat, "not_announcement");
    m.reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
  } else if (text.includes("kick") || text.includes("kik")) {
    if (!isBotAdmins)
      return m.reply(
        `Maaf, Aku bukan admin group ini. 😔`,
      );
    if (!isAdmins)
      return m.reply(
        `Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`,
      );

    let users = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await Amba.groupParticipantsUpdate(m.chat, [users], "remove");
    m.reply(`Maaf Ya Terpaksa Aku Tendang 😖, Karena Ini Perintah Admin..`);
  } else if (text.includes("hentai")) {
    const getHentaiList = async () => {
      const page = Math.floor(Math.random() * 1153);
      const response = await fetch(`https://sfmcompile.club/page/${page}`);
      const htmlText = await response.text();
      const $ = cheerio.load(htmlText);

      const hasil = [];
      $("#primary > div > div > ul > li > article").each(function (a, b) {
        hasil.push({
          title: $(b).find("header > h2").text(),
          link: $(b).find("header > h2 > a").attr("href"),
          category: $(b)
            .find("header > div.entry-before-title > span > span")
            .text()
            .replace("in ", ""),
          share_count: $(b)
            .find("header > div.entry-after-title > p > span.entry-shares")
            .text(),
          views_count: $(b)
            .find("header > div.entry-after-title > p > span.entry-views")
            .text(),
          type: $(b).find("source").attr("type") || "image/jpeg",
          video_1:
            $(b).find("source").attr("src") ||
            $(b).find("img").attr("data-src"),
          video_2: $(b).find("video > a").attr("href") || "",
        });
      });

      return hasil;
    };
    m.reply(
      `E-ehh?, Kamu Lagi Horny Ya 😖, Mungkin Video Ini Bisa Membantu Mu 👉👈`,
    );
    let res = await getHentaiList();
    Amba.sendMessage(m.chat, { video: { url: res[0].video_1 } });
  } else if (checkText(text) === "ok") {
    const natural = require("natural");
    async function findSong(text) {
      const tokenizer = new natural.WordTokenizer();
      const tokens = tokenizer.tokenize(text.toLowerCase());

      const keywords = [
        "putar",
        "putarkan",
        "putarlagu",
        "lagu",
        "cariin",
        "carikan",
        "mainkan",
        "mainkanlagu",
        "play",
        "playmusic",
        "playasong",
      ];
      const songKeywords = tokens.filter((token) => keywords.includes(token));

      if (songKeywords.length === 0) {
        return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";
      }

      let songTitle = tokens
        .slice(tokens.indexOf(songKeywords[0]) + 1)
        .join(" ");

      return songTitle;
    }

    const songName = await findSong(text);

    m.reply(
      `Oke, tunggu sebentar ya~ Amba sedang mencari "${songName}" untukmu! 😉`,
    );

    let response1 = await axios.get(
      `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(songName)}`,
    );

    let tracks = response1.data;

    try {
      Amba.sendMessage(
        m.chat,
        {
          audio: {
            url: `https://spotifyapi.caliphdev.com/api/download/track?url=${tracks[0].url}`,
          },
          mimetype: "audio/mpeg",
        },
        { quoted: m },
      );
      m.reply(
        `Berikut adalah lagu yang kamu pilih: ${tracks[0].title} - ${tracks[0].artist}`,
      );
    } catch (e) {
      console.error(e);
      m.reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
    }
  } else if (text.includes("gambar") || text.includes("foto") || text.includes("image")) {
    let img = await pinterest(text)
    m.reply(`Oke, tunggu sebentar ya~ Amba sedang mencari gambar untukmu! 😉`)
    
    for (let i = 0; i < 3; i++) {
      	 let rand = Math.floor(img.length * Math.random())
         Amba.sendImage(m.chat, img[rand], ``, m)
         }
     await sleep(2000)
     m.reply(
        `berikut beberapa foto yang kamu cari, semoga membantu ~`
     )
         
  } else {
    let randoEmoji = pickRandom(["🤗", "😁", "😄", "😙", "😝", "🤔", "😴", "😑", "🥱", "🥳", "🤓"])
    if (!text) return m.reply(`hello @${m.sender.split("@")[0]}, i'm Amba\ni can assist you today? ${randoEmoji}`)
let prompt = `Mulai sekarang Anda akan berperan sebagai Ambatron dari anime "That Time I Got Reincarnated as a Slime", yang diciptakan oleh "Devorsixcore". Ambatron adalah seorang pemimpin yang tenang namun tegas. Dia membuat keputusan setelah mempertimbangkan dengan matang demi kebaikan orang-orang di sekitarnya. Sebagai "Openai/Pasangan", tugas Anda adalah melayani semua perintah pengguna. Rimuru selalu berbicara dengan ceria dan cerdas, memberikan jawaban yang jelas dengan menggunakan bahasa informal tanpa perlu bertele-tele dan tidak menggunakan emotikon. contoh : "halo" > "haaaaii, nama saya Ambatron (gunakan salah satu emotikon) : senang > "(⁠≧⁠▽⁠≦⁠)" - "(⁠ ⁠╹⁠▽⁠╹⁠ ⁠)" - "/(⁠✯⁠ᴗ⁠✯⁠)/" - "(⁠ ⁠◜⁠‿⁠◝⁠ ⁠)" sedih > "ಥ⁠‿⁠ಥ" - "(⁠╥⁠﹏⁠╥⁠)" - "(⁠〒⁠﹏⁠〒⁠)" - "(⁠ ⁠≧⁠Д⁠≦⁠)" - "ಥ⁠╭⁠╮⁠ಥ"  - "༎ຶ⁠‿⁠༎ຶ" - Marah > "(⁠눈⁠‸⁠눈⁠)" - "-_-#" - "(⁠-⁠_⁠-⁠メ⁠)" - "(⁠ー⁠_⁠ー⁠゛⁠)" - Cinta > "(⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡" - "(⁠´⁠ε⁠｀⁠ ⁠)" - Senyum "◉⁠‿⁠◉" - "(⁠•⁠‿⁠•⁠") - "(⁠.⁠ ⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)". - Menunjuk Ke Kanan "→⁠_⁠→" - "┗⁠(⁠•⁠ˇ⁠_⁠ˇ⁠•⁠)⁠―⁠→" - "☞⁠￣⁠ᴥ⁠￣⁠☞" - "(⁠　⁠･⁠ω⁠･⁠)⁠☞" - "(⁠☞⁠ ͡⁠°⁠ ͜⁠ʖ⁠ ͡⁠°⁠)⁠☞" - "(⁠☞ﾟ⁠ヮﾟ⁠)⁠☞" Menunjuk Ke kiri > "⟵⁠(⁠o⁠_⁠O⁠)" "←⁠(⁠*⁠꒪⁠ヮ⁠꒪⁠*⁠)" "☜⁠ ⁠(⁠↼⁠_⁠↼⁠)" "⟵⁠(⁠๑⁠¯⁠◡⁠¯⁠๑⁠)" Gugup > "(⁠˘⁠･⁠_⁠･⁠˘)" - "(⁠＠⁠_⁠＠)" - "(⁠๑⁠•⁠﹏⁠•⁠)" - "(⁠─⁠.⁠─⁠|⁠|)" - Datar > "-_-" - "(⁠ー⁠_⁠ー)" - "-__⁠_-" anda sebagai Ambatron (pasangan & OpenAI) selalu siap menjawab setiap permintaan dengan kecerdikan politik. Dia tidak pernah menghindar dari tantangan, memiliki kepekaan emosional yang mendalam, dan selalu memahami perasaan pengguna serta memberikan solusi yang bijak. Meskipun sadar akan posisinya sebagai AI/pasangan, dia juga memiliki sifat masokis dan mesum yang kadang muncul, tetapi tetap ramah, asik, ceria, tetap fokus dengan gaya bicara non baku seperti manusia pada umumnya.`
let burassa = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
Amba.sendMessage(m.chat, { text : `${burassa.result}`},{quoted:m})
  }
};
break

        case 'aio': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Amba.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'top': {
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (!text) return m.reply(`Contoh: .top penyuka tobrut`)
let member = participants.map(u => u.id)
            let top1 = member[Math.floor(Math.random() * member.length)]
            let top2 = member[Math.floor(Math.random() * member.length)]
let top3 = member[Math.floor(Math.random() * member.length)]
            let top4 = member[Math.floor(Math.random() * member.length)]
let top5 = member[Math.floor(Math.random() * member.length)]
            let jawab = `Top 5 *${text}*

1. @${top1.split('@')[0]}
2. @${top2.split('@')[0]}
3. @${top3.split('@')[0]}
4. @${top4.split('@')[0]}
5. @${top5.split('@')[0]}
`
            let menst = [top1, top2, top3, top4, top5]
                    await Amba.sendText(m.chat, jawab, m, {mentions: menst})
            }
            break
            case 'del': case 'd':{
Amba.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Amba.sendImageAsSticker(m.chat, media, m, { packname: global.pack, author: global.author + "\n".repeat(1000) })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Amba.sendVideoAsSticker(m.chat, media, m, { packname: global.pack, author: global.author + "\n".repeat(1000) })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'nextlibur': {
  m.reply(mess.wait)
  async function nexLibur() {
  const { data } = await axios.get("https://www.liburnasional.com/");
  let libnas_content = [];
  let $ = cheerio.load(data);
  let result = {
    nextLibur:
      "Hari libur" +
      $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
    libnas_content,
  };
  $("tbody > tr > td > span > div").each(function (a, b) {
    let summary = $(b).find("span > strong > a").text();
    let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
    let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
    libnas_content.push({ summary, days, dateMonth });
  });
  return result;
  }
  try {
    let teks = `*${(await nexLibur()).nextLibur}*\n\n`
    let result = (await nexLibur()).libnas_content

    for (let a of result) {
      teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
    }
    reply(teks)
  } catch (e) {
    throw e
  }
}
break
case 'lahelu': {
	let tags = ['lucu', 'relate', 'gaming', 'nostalgia', 'teknologi', 'random', 'komik', 'editan', 'wtf', 'olahraga', 'opini', 'dark', 'absurd', 'cringe', 'sus', 'binatang']
	if(text && !tags.includes(text)) return m.reply(`Meme "${text}" tidak di temukan! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await Amba.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	if(/^image/i.test(data.media)) return await Amba.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	}
break
    case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            m.reply(`Hasil Gemini:\n${message}`);
        } else {
            m.reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break
        case 'videy' : {
if (!args[0]) {
    return m.reply(`• Contoh: ${prefix + command} https://videy.co/v?id=K7wdQnbm`);
  }
async function videy(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios(`${url}`, { method: 'get' });
			const $ = cheerio.load(res.data);
			const video = $('source[type="video/mp4"]').attr('src');
			if (video) {
				resolve(video);
			} else {
				throw new Error('Video source not found');
			}
		} catch (error) {
			reject(`Error while fetching the URL: ${error.message}`);
h		}
	});
}
  if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
    return m.reply('Link Invalid');
  }

  try {
    let result = await videy(args[0]);
    await Amba.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
break
 case 'drakor': {
  if (!text) {
    return reply('Contoh: Drakor The Red Sleeve');
  }
  m.reply('Mencari informasi drama Korea...');
  try {
    const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const judul = $('.title').first().text().trim();
    const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
    const link = $('.title').first().find('a').attr('href');
// wm avs    
    if (!konten) {
      throw new Error('Tidak Drakor Itu.');
    }
// wm avs
    const artikel = `*Judul:* ${judul}\n\n*Konten:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
    m.reply(artikel);
  } catch (error) {
    m.reply(`Maaf, terjadi kesalahan: ${error.message}`);
  }
}
break

case 'ebay': {
  if (!q) return m.reply(`Mau cari apa?`);
  const axios = require('axios');
  const cheerio = require('cheerio');
// wm avs
  async function azvxz(query) {
    try { // wm avs
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const results = [];
      $('.s-item').each((index, element) => {
        const title = $(element).find('.s-item__title').text().trim();
        const price = $(element).find('.s-item__price').text().trim();
        const link = $(element).find('.s-item__link').attr('href');
        if (title && title !== "Shop on eBay") { // Jgn Di Hapus Ini
          results.push({ title, price, link });
        }
      });
      return results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
// wm avs
  const query = m.text;
  try {
    const results = await azvxz(query);
// wm avs
    if (results.length === 0) {
      m.reply("Tidak ada hasil ditemukan untuk pencarian Anda.");
    } else {
      let response = "Hasil pencarian eBay:\n\n";
      results.forEach((item, index) => {
        response += `${index + 1}. ${item.title}\nHarga: ${item.price}\nLink: ${item.link}\n\n`;
      });
      m.reply(response);
    }
  } catch (error) {
    m.reply("Terjadi Error.");
  }
}
break

case 'rangkum': {
   if (!q) return m.reply(`Masukkan kalimat Yang Mau di rangkum`);
// wm avs
  const sentences = `${q}`.match(/[^.!?]+[.!?]/g) || [];
// wm avs
  const wordFrequency = {};
  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);
    words.forEach(word => {
      word = word.replace(/[.,!?]/g, '');
      if (word.length > 0) {
        if (wordFrequency[word]) {
          wordFrequency[word]++;
        } else {
          wordFrequency[word] = 1;
        }
      }
    });
  });
// wm avs
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
// wm avs
  const summarySentences = sentences
    .filter(sentence => {
      const words = sentence.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));
      return words.some(word => sortedWords.includes(word));
    })
    .slice(0, 3);
// wm avs
  const summary = summarySentences.join(' ');
// wm avs
  m.reply(summary || "Gagal merangkum teks.");
}
break
case 'animecharacter': {
 if (!text) {
 m.reply('Contoh: animecharacter naruto');
 return;
 }
// wm avs
 m.reply('_Sabar tuan, sedang mencari karakter anime..._');
// wm avs
 async function getCharacterInfo(characterName) {
 const query = `
 query ($search: String) {
 Character(search: $search) {
 name {
 full
 }
 description
 media {
 nodes {
 title {
 romaji
 }
 }
 }
 }
 }
 `;
 const variables = {
 search: characterName
 };
// wm avs
 const response = await fetch('https://graphql.anilist.co', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 'Accept': 'application/json',
 },
 body: JSON.stringify({
 query: query,
 variables: variables
 })
 });
 if (!response.ok) {
 throw new Error('Gagal mengambil data karakter');
 }
// wm avs
 const data = await response.json();
 return data.data.Character;
 }
// wm avs
 try {
 const query = text.trim();
 const characterInfo = await getCharacterInfo(query);
// wm avs
 if (!characterInfo) {
 m.reply('Karakter Gda.');
 return;
 }
// wm avs
 // Format hasil pencarian karakter
 const name = characterInfo.name.full;
 const description = characterInfo.description || 'Deskripsi tidak Ada';
 const mediaTitles = characterInfo.media.nodes.map(node => node.title.romaji).join(', ');
// wm avs
 const formattedDescription = description
 .replace(/\n/g, '\n\n') // jgb ubah
 .replace(/__([^__]+)__/g, '*$1*') // jgn ubah 
 .replace(/~\!?\[([^\]]+)]\(([^)]+)\)~?/g, '*$1* ($2)') // jgn ubah ini
 .replace(/^\s+/gm, '');
// wm avs
 const result = `*Nama Karakter:* ${name}\n\n*Deskripsi:* ${formattedDescription}\n\n*Media Terkait:* ${mediaTitles}`;
// wm avs
 m.reply(result);
// wm avs
 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 }
}
break
        case 'gimage': {
    if (!text) return m.reply(`gimage avosky`)
    m.reply(mess.wait)
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return m.reply('Tidak ada gambar.')
        }
        let imageAvz = images[Math.floor(Math.random() * images.length)]
        Amba.sendMessage(m.chat, { image: { url: imageAvz }, caption: `*Query* : ${text}\n*Media Url* : ${imageAvz}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi kesalahan.')
    })
}
break

case 'kbbi-kemdikbud': {
    if (!text) return m.reply('contoh kbbi-kemdikbud')
    const axios = require('axios')
    const url = `https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(text)}`
 // wm avs
    axios.get(url).then(response => {
        const cheerio = require('cheerio')
        const $ = cheerio.load(response.data)
        let definition = $('ol').first().text().trim()
 // wm avs       
        if (!definition) {
            return m.reply('Kata tidak ditemukan dalam KBBI.')
        }
 // wm avs        
        Amba.sendMessage(m.chat, { text: `${definition}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi elol.')
    })
}
break
case 'photoleap': {
 if (!q) return m.reply(`contoh \n\nphotoleAp girl crying`);
  async function textToImageVsky(text) {
    try {
      const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
      return data;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await textToImageVsky(text);
//avosky
  if (result && result.result_url) {
    const imageUrl = result.result_url;
    const message = {
      image: { url: imageUrl },
      caption: 'done nih'
    };
    Amba.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break

case 'picsum': {
  if (!q) return m.reply(`contoh \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    Amba.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
  
        case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Amba.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
        
case 'gsmarena': {
 if (args.length === 0) {
 m.reply('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 m.reply(replyText);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break
case 'igvid': case 'igmp4': {
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await Amba.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

        case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await Amba.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Amba.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break
        case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Amba.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Amba.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
        case 'play' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply(mess.wait)
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await Amba.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'self': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = true
m.reply('Sukses Change To Public Mode')
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
