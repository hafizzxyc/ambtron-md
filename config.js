global.owner = [
  "6281360773542",
  "6282323738564"
]
global.namabot = "ᴀᴍʙᴀ - ᴍᴅ"
global.ownername = "< ᴀᴘɪɪs ᴍʏsᴛɪᴄʜ />"
global.pack = "ᴀᴍʙᴀ - ᴍᴅ"
global.author = "ᴀᴘɪɪs ᴍʏsᴛɪᴄʜ!!"
global.channelname = "ᴀᴘɪɪs ᴍʏsᴛɪᴄʜ"
global.channeljid = "5@newsletter"
global.linkgc = "https://chat.whatsapp.com/BIXaSclTXIf2nIehTuLTLs"
global.linksl = "https://chat.whatsapp.com/BIXaSclTXIf2nIehTuLTLs"
global.public = true
global.mess = {
    success: '</ sᴜᴋsᴇs sᴇɴɢɢᴋᴜᴜ />',
    admin: '*</ ᴘᴇʀɪɴᴛᴀʜ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴɴ />',
    botAdmin: 'ᴊᴀᴅɪᴋᴀɴ ᴀᴍʙᴀ - ᴍᴅ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ',
    OnlyOwner: 'ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ᴋʜᴜsᴜs ᴘᴇᴍɪʟɪᴋ ᴀᴍʙᴀ - ᴍᴅ (◍•ᴗ•◍)',
    OnlyGrup: 'ᴋʜᴜsᴜs ɢʀᴜʙ!!',
    private: 'ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ!!',
    wait: '*ᴛᴜɴɢɢᴜᴜ ʏᴀᴡᴡ*',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})