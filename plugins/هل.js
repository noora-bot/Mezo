let handler = async (m, { text, conn, command, usedPrefix }) => {

if (!text) return conn.sendMessage(m.chat, {text: `@${m.sender.split('@')[0]} أدخل السؤال أولا يا صديقي
مثال: ${usedPrefix + command} البوت يحبني
`.trim(), mentions: [m.sender] }, { quoted: m });

let cap = `
╭──────≼𝕊ℍ𝔸𝕎𝔸ℤ𝔸-𝔹𝕆𝕋≽──────╮
┆ السائل: @${m.sender.split('@')[0]}
┆ السؤال: ${command} ${text}
┆ الاجابة: ${['نعم','ممكن','في الاغلب نعم','في الاغلب لا','لا','مستحيل'].getRandom()}
╰──────≼𝕊ℍ𝔸𝕎𝔸ℤ𝔸-𝔹𝕆𝕋≽──────╯
`.trim();

await conn.sendMessage(m.chat, {text: cap, mentions: [m.sender] }, { quoted: m });
};
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^هل$/i
export default handler