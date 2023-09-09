let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *HILAL*
hilaaall
HILEM BOT`
let img = './Abhi2.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['hilal']
handler.tags = ['main']
handler.command = ['hilalpm', 'hilal', 'pmhilal'] 

export default handler
