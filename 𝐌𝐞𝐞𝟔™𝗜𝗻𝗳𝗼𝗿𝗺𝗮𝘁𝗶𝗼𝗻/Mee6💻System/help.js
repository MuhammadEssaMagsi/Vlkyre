const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const speed = require("performance-now");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const os = require("os");
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `help`,
  commandType: "Mee6💻System",
  description: `ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg, Mee6Sitrep) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await ᴍᴇᴇgit.fetch();
    var Sender = ᴍᴇᴇ6.sender;
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    // var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    // personreceived = Receiver.substring(0, Receiver.length - 15);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.logGroup,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•@${personsending}*,𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      if (!ᴍᴇᴇ6.fromMe) return;
      if (!ᴍᴇᴇ6.isSenderSUDO) {
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
            `conversation`
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      var Sender = ᴍᴇᴇ6.sender;
      var personsending = Sender.substring(0, Sender.length - 15);
      const MeeHelper = `*𝘽𝙊𝙏 𝙄𝙉 𝘽𝙀𝙏𝘼*
シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩🛸*https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5

⬣ *🛸➾  𝙎𝙮𝙨𝙩𝙚𝙢*
• *${ᴋᴇɪ}help*  ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
• *${ᴋᴇɪ}ping*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ
• *${ᴋᴇɪ}uptime*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ᴜᴘᴛɪᴍᴇ
• *${ᴋᴇɪ}restart* ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ restart ᴛʜᴇ ʙᴏᴛ
• *${ᴋᴇɪ}update*  ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ
• *${ᴋᴇɪ}broadcast* ꜱᴇɴᴅ ʙʀᴏᴀᴅᴄᴀꜱᴛ ᴍᴇꜱꜱᴀɢᴇꜱ ᴛᴏ ᴀʟʟ ɢʀᴏᴜᴘꜱ/ᴅᴍꜱ ʏᴏᴜ ᴀʀᴇ ɪɴ


⬣ *🤩➾  𝘼𝙣𝙞𝙢𝙚* 
• *${ᴋᴇɪ}anime*  ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇ
• *${ᴋᴇɪ}animewallpaper*  ᴅᴏᴡɴʟᴏᴀᴅ ʜᴅ ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀꜱ
• *${ᴋᴇɪ}cuddle*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴜᴅᴅʟᴇ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}hug*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴜɢ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}pat*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴀᴛ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}slap*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱʟᴀᴘ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}wink*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴡɪɴᴋ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}yes*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʏᴇꜱ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}bite*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙɪᴛᴇ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}blush*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙʟᴜꜱʜ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}bored*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙᴏʀᴇᴅ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}confused*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴏɴꜰᴜꜱᴇᴅ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}cry*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄʀʏ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}goodnight*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ɢᴏᴏᴅɴɪɢʜᴛ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}happy*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴀᴘᴘʏ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}hi5*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜɪɢʜꜰɪᴠᴇ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}poke*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴏᴋᴇ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}sad*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱᴀᴅ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}thinking*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴛʜɪɴᴋɪɴɢ ɪᴍᴀɢᴇ

⬣ *🎣➾  𝙈𝙪𝙨𝙞𝙘*
• *${ᴋᴇɪ}lyrics*  ꜰɪɴᴅ ʟʏʀɪᴄꜱ ᴏꜰ ꜱᴏɴɢꜱ
• *${ᴋᴇɪ}ytdl*  ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢꜱ ᴅɪʀᴇᴄᴛ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ
• *${ᴋᴇɪ}yts*  ɢᴇᴛ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴꜱ ᴀɴᴅ ʟɪɴᴋꜱ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ


⬣ *👑➾  𝙂𝙧𝙤𝙪𝙥𝙨*
• *${ᴋᴇɪ}promote*  𝘗𝘳𝘰𝘮𝘰𝘵𝘦 𝘢 𝘮𝘦𝘮𝘣𝘦𝘳 𝘵𝘰 𝘢𝘥𝘮𝘪𝘯
• *${ᴋᴇɪ}spam*  Spam Messages ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}ban*  ᴍᴏᴅᴜʟᴇ ᴛᴏ Add the number to banlist.
• *${ᴋᴇɪ}unban*  ᴍᴏᴅᴜʟᴇ ᴛᴏ remove the number from banlist.
• *${ᴋᴇɪ}invite*  ᴍᴏᴅᴜʟᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
• *${ᴋᴇɪ}admins*  ᴛᴀɢ ᴀʟʟ ᴀᴅᴍɪɴꜱ ɪɴ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}disappear*  ᴛᴏɢɢʟᴇ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}setgoodbye*  ᴀ ɢᴏᴏᴅʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴡʜᴇɴᴇᴠᴇʀ ꜱᴏᴍᴇᴏɴᴇ ʟᴇᴀᴠᴇꜱ
• *${ᴋᴇɪ}mute*  ᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ꜰᴏʀ ᴀ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴛɪᴍᴇ
• *${ᴋᴇɪ}kick*  ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}groupdp*  ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ɪᴄᴏɴ
• *${ᴋᴇɪ}unmute*  ᴜɴᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
• *${ᴋᴇɪ}tagall*  ᴛᴀɢ ᴇᴠʀʏᴏɴᴇ ɪɴ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}setwelcome*  ᴡᴇʟᴄᴏᴍᴇ ɴᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ ᴡɪᴛʜ ᴀ ᴄᴜꜱᴛᴏᴍ ᴍᴇꜱꜱᴀɢᴇ


⬣ *🧀➾  𝙁𝙪𝙣𝙨*
• *${ᴋᴇɪ}google*  ꜱᴇᴀʀᴄʜ ᴀɴʏᴛʜɪɴɢ ᴏɴ ɢᴏᴏɢʟᴇ
• *${ᴋᴇɪ}carbon*  ᴄᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ᴏʀ ᴄᴏᴅᴇ ᴛᴏ ᴀ ᴄᴀʀʙᴏɴ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}pfgroupdp*  ɢᴇᴛ ᴅɪꜱᴘʟᴀʏ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴀ ɢʀᴏᴜᴘ
• *${ᴋᴇɪ}github*  ꜰɪɴᴅ ᴀɴʏ ɢɪᴛʜᴜʙ ᴘʀᴏꜰɪʟᴇ
• *${ᴋᴇɪ}joke*  ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇꜱ
• *${ᴋᴇɪ}meme*  ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴍᴇᴍᴇꜱ
• *${ᴋᴇɪ}ocr*  ᴏᴘᴛɪᴄᴀʟ ᴄʜᴀʀᴀᴄᴛᴇʀ ʀᴇᴄᴏɢɴɪᴛɪᴏɴ
• *${ᴋᴇɪ}sticker*  ᴄᴏɴᴠᴇʀᴛ ɪᴍᴀɢᴇ ᴛᴏ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}translate*  ʟᴀɴɢᴜᴀɢᴇ ᴛʀᴀɴꜱʟᴀᴛᴏʀ
• *${ᴋᴇɪ}tts*  ᴛᴇxᴛ ᴛᴏ ꜱᴘᴇᴇᴄʜ
• *${ᴋᴇɪ}weather*  ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ᴅᴀᴛᴀ ᴏꜰ ᴀ ᴘʟᴀᴄᴇꜱ
• *${ᴋᴇɪ}ud*  ᴜʀʙᴀɴ ᴅɪᴄᴛɪᴏɴᴀʀʏ ꜰᴏʀ ᴄʀᴀᴢʏ ᴘᴇᴇᴘꜱ


⬣ *🔞➾  𝘼𝙙𝙪𝙡𝙩 𝙉𝙎𝙁𝙒 18+ (𝘼𝙙𝙢𝙞𝙣 𝙊𝙣𝙡𝙮)*
• *${ᴋᴇɪ}ass*  ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~
• *${ᴋᴇɪ}bdsm*  ɪꜰ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴋɴᴏᴡ ᴡʜᴀᴛ ɪᴛ ɪꜱ, ꜱᴇᴀʀᴄʜ ɪᴛ ᴜᴘ
• *${ᴋᴇɪ}blowjob*  ʙᴀꜱɪᴄᴀʟʟʏ ᴀɴ ɪᴍᴀɢᴇ ᴏꜰ ᴀ ɢɪʀʟ ꜱᴜᴄᴋɪɴɢ ᴏɴ ᴀ ꜱʜᴀʀᴘ ʙʟᴀᴅᴇ!
• *${ᴋᴇɪ}cum*  ʙᴀꜱɪᴄᴀʟʟʏ ꜱᴛɪᴄᴋʏ ᴡʜɪᴛᴇ ꜱᴛᴜꜰꜰ ᴛʜᴀᴛ ɪꜱ ᴜꜱᴜᴀʟʟʏ ᴍɪʟᴋᴇᴅ ꜰʀᴏᴍ ꜱʜᴀʀᴘɪᴇꜱ
• *${ᴋᴇɪ}doujin*  ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴅᴏᴜᴊɪɴ ᴘᴀɢᴇ ɪᴍᴀɢᴇ!
• *${ᴋᴇɪ}feet*  ꜱᴏ ʏᴏᴜ ʟɪᴋᴇ ꜱᴍᴇʟʟʏ ꜰᴇᴇᴛ ʜᴜʜ?
• *${ᴋᴇɪ}femdom*  ꜰᴇᴍᴀʟᴇ ᴅᴏᴍɪɴᴀᴛɪᴏɴ?
• *${ᴋᴇɪ}foxgirl*  ɢɪʀʟ'ꜱ ᴛʜᴀᴛ ᴀʀᴇ ᴡᴀɴɴᴀʙᴇ ꜰᴏxᴇꜱ, ʏᴇꜱ
• *${ᴋᴇɪ}glasses*  ɢɪʀʟꜱ ᴛʜᴀᴛ ᴡᴇᴀʀ ɢʟᴀꜱꜱᴇꜱ
• *${ᴋᴇɪ}hentai*  ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴠᴀɴɪʟʟᴀ ʜᴇɴᴛᴀɪ ɪᴍᴀɢᴇ~
• *${ᴋᴇɪ}maid*  ᴍᴀɪᴅꜱ, ᴍᴀɪᴅ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ, ʏᴏᴜ ᴋɴᴏᴡ ᴡʜᴀᴛ ᴍᴀɪᴅꜱ ᴀʀᴇ
• *${ᴋᴇɪ}masturbation*  ꜱᴏʟᴏ Qᴜᴇᴜᴇ ɪɴ ᴄꜱɢᴏ! ʟᴏʟ
• *${ᴋᴇɪ}netorare*  ᴡᴏᴡ, ɪ ᴡᴏɴ'ᴛ ᴇᴠᴇɴ Qᴜᴇꜱᴛɪᴏɴ ʏᴏᴜʀ ꜰᴇᴛɪꜱʜᴇꜱ
• *${ᴋᴇɪ}orgy*  ɢʀᴏᴜᴘ ʟᴇᴡᴅ ᴀᴄᴛꜱ
• *${ᴋᴇɪ}panties*  ɪ ᴍᴇᴀɴ... ᴊᴜꜱᴛ ᴡʜʏ? ʏᴏᴜ ʟɪᴋᴇ ᴜɴᴅᴇʀᴡᴇᴀʀ?
• *${ᴋᴇɪ}pussy*  ᴛʜᴇ ɢᴇɴɪᴛᴀʟꜱ ᴏꜰ ᴀ ꜰᴇᴍᴀʟᴇ, ᴏʀ ᴀ ᴄᴀᴛ, ʏᴏᴜ ɢɪᴠᴇ ᴛʜᴇ ᴍᴇᴀɴɪɴɢ
• *${ᴋᴇɪ}school*  ꜱᴄʜᴏᴏʟ ᴜɴɪꜰᴏʀᴍꜱ!~ ʏᴀᴛᴛᴀ~!
• *${ᴋᴇɪ}tentacles*  ɪ'ᴍ ꜱᴏʀʀʏ ʙᴜᴛ, ᴡʜʏ ᴅᴏ ᴛʜᴇʏ ʟᴏᴏᴋ ʟɪᴋᴇ ɪɴᴛᴇꜱᴛɪɴᴇꜱ?
• *${ᴋᴇɪ}thighs*  ᴛʜᴇ ᴛᴏᴘ ᴘᴀʀᴛ ᴏꜰ ʏᴏᴜʀ ʟᴇɢꜱ, ᴠᴇʀʏ ʜᴏᴛ, ɪꜱɴ'ᴛ ɪᴛ?
• *${ᴋᴇɪ}uniform*  ᴍɪʟɪᴛᴀʀʏ, ᴋᴏɴʙɪɴɪ, ᴡᴏʀᴋ, ɴᴜʀꜱᴇ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ!~ ꜱᴇxʏ~
• *${ᴋᴇɪ}yuri*  ɢɪʀʟꜱ ᴏɴ ɢɪʀʟꜱ, ᴀɴᴅ ɢɪʀʟ'ꜱ ᴏɴʟʏ!


*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
⬡${ᴋᴇɪ}antilink
⬡${ᴋᴇɪ}uglycheck
⬡${ᴋᴇɪ}gaycheck
⬡${ᴋᴇɪ}lesbiancheck
⬡${ᴋᴇɪ}handsomecheck
⬡${ᴋᴇɪ}beautycheck
⬡${ᴋᴇɪ}time
⬡${ᴋᴇɪ}rate
many many more!
`;
      // ===============================================================================
      // 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
      // ===============================================================================
      if (!arg[0]) {
        const runtime = function (seconds) {
          seconds = Number(seconds);
          var d = Math.floor(seconds / (3600 * 24));
          var h = Math.floor((seconds % (3600 * 24)) / 3600);
          var m = Math.floor((seconds % 3600) / 60);
          var s = Math.floor(seconds % 60);
          var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
          var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
          var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
          var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
          return dDisplay + hDisplay + mDisplay + sDisplay;
        };
        uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.MEE,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              contextInfo: {
                mentionedJid: [ᴍᴇᴇ6.sender],
              },
              caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*👓𝓜𝓮𝓮6™* ▽ 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙐𝙨𝙚𝙧𝘽𝙤𝙩

*•@${personsending}*,
シ︎💡𝐏𝐫𝐞𝐟𝐢𝐱: ${ᴋᴇɪ}
シ︎⚙️𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ￫ ${vers.vers}
シ︎💻𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: _${os.platform()}_
シ︎🛰️𝐏𝐢𝐧𝐠: _${latensie.toFixed(6)}s_
シ︎⚰️𝐔𝐩𝐓𝐢𝐦𝐞: _${runtime(process.uptime())}_


${MeeHelper}‍`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
      var ᴍᴇᴇ6ʍօ = "⤥ 💡𝐂𝐨𝐦𝐦𝐚𝐧𝐝\n";
      var command = Mee6Sitrep.get(arg[0]);
      if (command) {
        ᴍᴇᴇ6ʍօ += `⤤ ${
          (ᴋᴇɪ, command.name === undefined ? "Null" : command.name)
        }

⤥ 🧀𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 
⤤ ${
          (command.commandType,
          command.commandType === undefined ? "Null" : command.commandType)
        }

⤥ 🖊️𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 
⤤ ${
          (command.description,
          command.description === undefined ? "Null" : command.description)
        }`;
        return ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.MEE,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: ᴍᴇᴇ6ʍօ,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
