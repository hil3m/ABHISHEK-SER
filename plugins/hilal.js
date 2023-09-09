let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *HILAL*
hilaaall
HILEM BOT`
let img = 'https://i.imgur.com/O6LjRxB.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['hilal']
handler.tags = ['main']
handler.command = ['hilalpm', 'hilal', 'pmhilal'] 

export default handler
