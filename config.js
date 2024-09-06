//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VWMGNwYXZEK09ETHdGMXVHak5RTVZJQXZ4bEFTVVVoRGJGYU1DK3VrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGJaZVA1T0tRa0IzeHFnRU1UaXlNSGNKekVySWN1d1o5VmMzdnZoZGdEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT1paV01QbjhBU2h3V1NlNVA1MkJnYXZTbVhWaTdKRHVWL01DVDhPVUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHNjhkclNaK0h4bU4ySG05TmVvZjJCa09ONHhWeXN4Zk8xNktPMWZBd1JFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLRTl1dTFhc3M3UXZmWkNRY1NaUG9UK1JMdDdBblp5WXFOeHJBRGJMa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJreTVKZzY1NUw1akI3ZEYvSUZENGpVelZxSjg5REhDT3JmTFB1UTNxM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JickJLNUgyQkxhY2ZjNWg4cFdiVEoxdUdPUm5OUHExWUYvUTgwS2Ewcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnlQcXI2di9XMWRBZnpVVGszVzNtU0FEZjNjb1NPbUpTazdzSDZ3dGJWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino0N1VwQlkrRDZpYklSRitsZElXZm5UbEZxeXovdzVHSnNjNHhveTJMS2djU1g3YjdxRmVMNjVjdk5UYTF2MlRtYTdUYVRDZFZhVWo5cG9RcHoreGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IjlLVnRiRkcvcEVTZUptRUVDTEY4Y2NOdTJOL2psL0Riem5lVktVQ1I3aTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0MTcyMDIyMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QkQ3RUFBNDlCOENFNzdDQTlCRTgwMTU2MjkxQ0U3QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjI2NjAxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTQxNzIwMjIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRCMERDRkExNUJFNkNGODNENkExM0E0Q0UwQjFDQjFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU2MjY2MDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFPQmQ2bHdQUnpxUWs4eUo1SkRETGciLCJwaG9uZUlkIjoiYjNkYzI1ZjktNDlkNS00ODA0LWIyZjEtNjk0ODRiNGI2NzhlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN2U3JTRXEvRnpqQ1JzUlcvNndJUHovQnZObz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNWZBSWZVVW9LTEFQUGZPUlBxZ0RML1RXOUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNk1EVk1IMzgiLCJtZSI6eyJpZCI6IjIzNDgxNDE3MjAyMjA6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2Ftc2kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052Y2dnb1ExZkhydGdZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imppc1ZJbEhVWUZyUWJuVnJLNmpEVGNnanhPZkttRm83SE1EMzBoSHcxbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlM2WXhaWFlDenBuTFFXam5jNjluVVp0c2lHUDBscm5XZVduZnY2M0xvanltMHQraVc2V1k1dlJna09OZDJKMmhFRkF0dUdpR2pTdTQyOXZKeXA4dUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyZ01mcStRZHlhWjRhM1I4NjNDUlJYR1JhRHpGZExZaXR0T1k1blFLNkJobE1LYXVwMUhlSUk3RmRnS0M3eHR1WXZQdUEzRklETVdJYTVhWlpLbCtnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDE3MjAyMjA6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTRyRlNKUjFHQmEwRzUxYXl1b3cwM0lJOFRueXBoYU94ekE5OUlSOE5aeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTYyNjU5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGVEIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
