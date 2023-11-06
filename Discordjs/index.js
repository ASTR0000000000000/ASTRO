const { Client: DiscordClient } = require("discord.js-selfbot-v13");
const dotenv = require('dotenv');
require('dotenv').config();

const client = new DiscordClient();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setPresence({
    status: 'dnd', 
  });
});

client.on('message', (message) => {
  if (message.content === '-ping') {
    message.reply('Pong!'); // Reply to the message with "Pong!"
  }
});

client.on('message', (message) => {
  if (message.content === "العاصفه") {
    message.reply("<@789872998558859274> ماركوس طبعا");
  }
});

client.on('message', (message) => {
  if (message.content === "الاسطوره") {
    message.reply("<@722086879238815745> جون طبعا ");
  }
});

client.on('message', (message) => {
  if (message.content === "مين الحب") {
    message.reply("<@852974341422972958> استرورى");
  }
});
client.on('message', (message) => {
  if (message.content === "القائد") {
    message.reply("<@908424014492479599> لاكى طبعا");
  }
});

client.on('messageCreate', (message) => {
  if (message.embeds.length > 0) {
    const embed = message.embeds[0];
    
    // قم بتحديد اللون المستهدف هنا (#EF5350)
    const targetColor = 0xEF5350; // لون #EF5350
    
    if (embed.color === targetColor) {
      // إذا كان لون الرسالة يطابق اللون المستهدف (#EF5350)، قم بالرد هنا
      message.reply('$transcript');
    }
  }
});


client.login(process.env.TOKEN);
