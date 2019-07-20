const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('ready', () => {   
    console.log('The bot is ready'); 
});

client.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.content.indexOf("l!") !== 0) return;
  
  const args = message.content.slice(2).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  function rng(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  //commands start here
  if (command === "help") {
    message.reply("fuck you");
  }
  if (command === "plug") {
    message.reply("Follow me on Twitch, sub to me on YouTube :) https://www.twitch.tv/motorjam https://www.youtube.com/channel/UC93SMdJJOHf8tcF-PJ_ArxA");
  }
  if (command === "roll") {
    var x = rng(0, 100);
    message.reply("You rolled " + x);
  }
  if (command === "rps") {
    if (args != ":black_circle:"||":page_facing_up:"||":scissors:") {
      message.reply("Say l!rps followed by either :black_circle: :page_facing_up: or :scissors: to play);
    }
  }
});

client.login(process.env.BOT_TOKEN);
