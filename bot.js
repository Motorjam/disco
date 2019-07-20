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
    }else {
      var msg1 = [":black_circle:", ":page_facing_up:", ":scissors:"];
      var throw = rng(1, 3);
      if (throw == 1 && args == ":black_circle:" || throw == 2 && args == ":page_facing_up:" || throw == 3 && args == ":scissors:") {
        message.channel.send(msg1[throw] + " It's a tie!");
      }else if (throw == 2 && args == ":black_circle:" || throw == 3 && args == ":page_facing_up:" || throw == 1 && args == ":scissors:") {
        message.channel.send(msg1[throw] + " I win!");
      }else if (throw == 3 && args == ":black_circle:" || throw == 1 && args == ":page_facing_up:" || throw == 2 && args == ":scissors:") {
        message.channel.send(msg1[throw - 1] + " You win!");
       }
     }
   }
});

client.login(process.env.BOT_TOKEN);
