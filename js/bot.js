const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const bot = new TelegramBot('7750113572:AAH-EoGOG_K8FSw5-bl08ZGfcuVs5Bqr7q8', { polling: true });

// Handle the /start command and send the game link
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send the game to the user
  bot.sendGame(chatId, 'your_game_short_name');  // Replace 'your_game_short_name' with your actual game's short name
});

console.log('Bot is running...');
