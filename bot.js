const Discord = require('discord.js'); 
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {   
    console.log('The bot is ready'); 
});

client.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //commands start here
  if (command === "help") {
    message.reply("fuck you");
}
  if (command === "plug") {
    msg.reply("Follow me on Twitch, sub to me on YouTube :) https://www.twitch.tv/motorjam https://www.youtube.com/channel/UC93SMdJJOHf8tcF-PJ_ArxA");
});

client.login(process.env.BOT_TOKEN);
