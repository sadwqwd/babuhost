const fs = require('fs')

global.namabot = "BabuHost"
global.namaowner = "Yudha"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./atta.jpg")
global.qris = fs.readFileSync("./dao.jpg")
global.owner = ['6289619183424']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• !pay
• !tambah
• !kurang
• !kali
• !bagi
• !open
• !close
• !hidetag
• !add
• !kick
• !stiker
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}