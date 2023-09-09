let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *hilallll*
-melihe ait.
! melih ozel komut`
let img = './hilal.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['hilal']
handler.tags = ['main']
handler.command = ['hilalpm', 'hilal', 'pmhilal'] 

export default handler
