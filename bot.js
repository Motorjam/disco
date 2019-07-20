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
    const sayMessage = args.join(" ");
    if (args.length > 0) {
      var x = rng(0, 100);
      message.reply("you rolled " + x + " for \"" + sayMessage + "\"");
    }else {
      var x = rng(0, 100);
      message.reply("you rolled " + x);
    }
  }
  if (command === "dogs") {
    const sayMessage = args.join(" ");
    if (sayMessage.toLowerCase() === "i like dogs" || sayMessage.toLowerCase() === "i love dogs") {
      message.channel.send("Nice.");
    }else {
      message.reply("I don't really care");
    }
  }
  if (command === "rps") {
    const player = args.join("");
    if (player === "rock" || player === "paper" || player === "scissors") {
      var msg1 = ["rock", "paper", "scissors"];
      var throw = rng(1, 3);
      if (throw == 1 && player == "rock" || throw == 2 && player == "paper" || throw == 3 && player == "scissors") {
        message.channel.send("I play " + msg1[throw - 1] + ", it's a tie!");
      }else if (throw == 2 && player == "rock" || throw == 3 && player == "paper" || throw == 1 && player == "scissors") {
        message.channel.send("I play " + msg1[throw - 1] + ", I win!");
      }else if (throw == 3 && player == "rock" || throw == 1 && player == "paper" || throw == 2 && player == "scissors") {
        message.channel.send("I play " + msg1[throw - 1] + ", you win!");
       }
    }else {
      message.reply("Say l!rps followed by either :black_circle: :page_facing_up: or :scissors: to play");
    }
  }
});

client.login(process.env.BOT_TOKEN);
