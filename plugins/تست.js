import axios from 'axios'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import search from 'yt-search'

async function spotifyxv(query) {
  let token = await tokens();
  let response = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  const tracks = response.data.tracks.items
  const results = tracks.map((track) => ({
    name: track.name,
    artista: track.artists.map((artist) => artist.name),
    album: track.album.name,
    duracion: timestamp(track.duration_ms),
    url: track.external_urls.spotify,
    imagen: track.album.images.length ? track.album.images[0].url : '',
  }))
  return results
}

async function tokens() {
  const response = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from('acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009').toString('base64'),
    },
    data: 'grant_type=client_credentials',
  })
  return response.data.access_token
}

function timestamp(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

async function getBuffer(url, options) {
  try {
    options = options || {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        DNT: 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

async function getTinyURL(text) {
try {
    let response = await axios.get(https://tinyurl.com/api-create.php?url=${text});
    return response.data;
  } catch (error) {
    return text;
  }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw *╰⊱❗️⊱ *عمل سيء* ⊱❗️⊱╮*\n\مـثـال:\n${usedPrefix + command} عفروتو
try {
await m.react('⏳')
let songInfo = await spotifyxv(text)
if (!songInfo.length) throw *No se encontró una canción.*
let res = songInfo[0]
let fileSizeInMB = (await getBuffer(res.url)).length / (1024 * 1024)
let shortURL = await getTinyURL(res.url)
const info = `> سـ بـ و تـ يـ فـ ا ي  乂 بـ حـ ث\n  
✩ الـاغـنـيـه: ${res.name}\n
✩ الـفـنـان: ${res.artista.join(', ')}\n
✩ الـبـوم: ${res.album}\n
✩ الـمـده: ${res.duracion}\n
✩ مـصـدر الـاغـنـيـه: Spotify\n
✩ الـرابـط: ${shortURL}\n\n`
'- ↻enviando audio espere un momento soy lenta..'
let resImg = await fetch(res.imagen)
let thumbb = await resImg.buffer()
let { videos } = await search(res.name)
let q = '128kbps'
let v = videos[0].url
let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let ttl = await yt.title
let size = await yt.audio[q].fileSizeH
conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: ${ttl}.mp3, mimetype: 'audio/mpeg' }, { quoted: m })
let img = await getBuffer(res.imagen)
await conn.sendButton(m.chat, wm, info, songInfo[0].thumbnail, [
	['الـمـطـور', .المطور],
	['لـاوامـر الـتـحـمـيـل', .التحميل]
  ], null, [['قــنـاتـنـا', https:/]], m)
} catch (error) {
}}
handler.command = /^(اسبوتي|سيبوتيفاي)$/i
export default handler
