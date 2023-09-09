let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *ask*
biziz
-`
let img = './ask.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['ask']
handler.tags = ['main']
handler.command = ['ask', 'askpm'] 

export default handler
