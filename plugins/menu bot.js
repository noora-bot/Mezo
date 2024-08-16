function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms % 3600000 / 60000);
  let s = Math.floor(ms % 60000 / 1000);
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  let d = new Date(new Date + 3600000);
  let locale = 'ar';
  let week = d.toLocaleDateString(locale, { weekday: 'long' });
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender)
  let { money, joincount } = global.db.data.users[m.sender];
  let { exp, limit, level, role } = global.db.data.users[m.sender];
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
  let more = String.fromCharCode(8206);
  let readMore = more.repeat(850);
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
const PLUTO = 'https://telegra.ph/file/5fc26caa7580823ce9dda.jpg'
const mentionId = m.key.participant || m.key.remoteJid;

conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝🖥﹞⊰╼── •*
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}
╗──────¤مــعلـ🛖ـومــاتــك
> •مــســتــواك : ${level}
> •بــريــمــيــوم : ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''}
> •رتــبــتــك : ${role}
*• ──╾⊱﹝🖥﹞⊰╼── •*
╗───¤مــعلــومــات الــ🤖بــوت
> إســم الــبــوت:بلـوتو 
> •الــمــطــور :\nMohamed Elsony\n> FLEX-MD
> •مــدة الــتــشــغــيل : ${uptime}
*• ──╾⊱﹝🖥﹞⊰╼── •*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞🖥┊Pluto ス F.M.P┊🖥⌝*
*• ──╾⊱﹝🖥﹞⊰╼── •*
> Copyright © 2024 Pluto`,subtitle: "PLUTO",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: PLUTO } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                  contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: false,
                  },nativeFlowMessage: { buttons: [


                          {
                              name: 'single_select',
                              buttonParamsJson: JSON.stringify({
                                  title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                  sections: [
                                      {
                                          title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام زينون بـ🤖ـوت',
                                          highlight_label: 'بعبص براحتك يابرو 🤖',
                                          rows: [
                                              {
                                                  header: 'معلومات البوت',
                                                  title:'استدعاء معلومات البوت',
                                                  description: '',
                                                  id: ''
                                              },
                                              {
                                                  header: 'معلومات عن محمد السوني',
                                                  title: 'معلومات السوني',
                                                  description: '',
                                                  id: ''
                                              },
                                              {
                                                  header: 'معلومات عن فلكمس',
                                                  title: 'معلومات فلكس ',
                                                  description: '',
                                                  id: ''
                                              },
                                              {
                                                
                                                  header: 'طريقه استخدام البوت',
                                                  title: 'استخدام البوت',
                                                  description: '',
                                                  id: '.م4'
                                             }
                                          ]
                                      }
                                  ]
                              }),
                messageParamsJson: ''
              },
              {

            name: "quick_reply",
            buttonParamsJson: '{"display_text":"⌈🚀╎الدردشه المجهوله╎🚀⌋","id":".chathom"}'
                   },
                   {
                      name: "quick_reply",
            buttonParamsJson: '{"display_text":"مطورين","id":".المطور"}'
                   },
                   {
             name: "cta_url",
             buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029Vag5dT01t90dVIah1X1p","merchant_url":"https://whatsapp.com/channel/0029Vag5dT01t90dVIah1X1p"}'
                          }
                      ]
                  }
              }
          }
      }
  }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['معلومات-البوت']

export default handler;
