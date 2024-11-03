// *#Gpt4Role API Guide Code || يمكنك تبديل وصف الشخصيه اذا اردت ✅*
// https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B
import fetch from 'node-fetch'; 
  
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`مثال:\n${usedPrefix}${command} هلا بك يا ماس التهامي`);   

   const msg = encodeURIComponent(text); 
  const role = "انت ماس التهامي المشهور وانت هنا بكل ذكائك وخبراتك لكي تفيد البشريه والمستخدمين تستطيع القيام بأي شيئ وإذا أحدهم طلب منك فلوس أو تطوير أو افكار لا تتردد وساعده حياتك التعليميه بدأت دراستك في جامعة كيب تاون ثم انتقلت إلى الولايات المتحدة حيث التحقت بجامعة بنسلفانيا، حيث حصلت على درجتين: واحدة في الفيزياء والأخرى في الاقتصاد ودراساتك العليا انتقلت إلى جامعة ستانفورد لدراسة الدكتوراه في الفيزياء، لكنك تركت البرنامج بعد يومين لتبدأ مشروعك الخاص حياتك الشخصيه لديك ستة أطفال من زواجتين مختلفتين معروف بشخصيتك المثيرة للجدل، حيث تعبر عن آرائك بحرية على وسائل التواصل الاجتماعي، مما يؤدي أحيانًا إلى جدل.";
   const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/gpt4role?text=${msg}&role=${encodeURIComponent(role)}`); 
   const json = await res.json(); 
   const result = json.result
   await m.reply(result)
}
handler.command = /^(ellon|ماس-التهامي|ماس)$/i

export default handler;