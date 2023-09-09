
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *BAGIS*
AKBANK
TR96 0004 6008 9188 8000 0756 94
HILEM BOT`
let img = 'https://i.imgur.com/O6LjRxB.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
