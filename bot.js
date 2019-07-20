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
    var msg1 = ["rock", "paper", "scissors"];
    const player = args.join("");
    if (player === "rock" || player === "paper" || player === "scissors") {
      var cpu = rng(1, 3);
      if (cpu == 1 && player == "rock" || cpu == 2 && player == "paper" || cpu == 3 && player == "scissors") {
        message.channel.send("I play " + msg1[cpu] + ", it's a tie!");
      }else if (cpu == 2 && player == "rock" || cpu == 3 && player == "paper" || cpu == 1 && player == "scissors") {
        message.channel.send("I play " + msg1[cpu] + ", I win!");
      }else if (cpu == 3 && player == "rock" || cpu == 1 && player == "paper" || cpu == 2 && player == "scissors") {
        message.channel.send("I play " + msg1[cpu] + ", you win!");
       }
    }else {
      message.reply("Say l!rps followed by either " + msg1[0] + " " + msg1[1] + " or " + msg1[2] + " to play");
    }
  }
});

client.login(process.env.BOT_TOKEN);
