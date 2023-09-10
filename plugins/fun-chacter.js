let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "Karakterini öğrenmek istediğiniz kişiyi alıntılayın veya ondan bahsedin"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "Sigma",
      "Cömert",
      "Huysuz",
      "Aşırı özgüvenli",
      "İtaatkâr",
      "İyi",
      "Kılıbık",
      "Kavgacı",
      "Hasta",
      "Sapık",
      "Taylor Tutkunu",
      "Yardımsever",
      "Muhteşem",
      "Seksi",
      "Sıcak",
      "Muhteşem",
      "Sevimli",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = ` @${mentionedUser.split("@")[0]} karakteri *${userCharacterSeletion} dir* 🔥⚡`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["karakter @tag"]
handler.tags = ['fun']
handler.command = /^(karakter)/i

export default handler 
