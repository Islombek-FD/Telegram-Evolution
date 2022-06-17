const { Telegraf } = require('telegraf');

const TOKEN = '5034663122:AAFhTX4tKVK62YMk8i5UBN3qWZF1PzW4Zpw';
const bot = new Telegraf(TOKEN);

const web_app_link = 'https://wondrous-douhua-4b14bf.netlify.app';

bot.start((ctx) => ctx.reply('Welcome to Web app bot', { reply_markup: { keyboard: [[{ text: 'Web App', web_app: { url: web_app_link } }]] } }));
bot.launch();