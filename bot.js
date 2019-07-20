const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('ready', () => {   
    console.log('The bot is ready'); 
});

client.on('message', (msg) => {
if (msg.content === 'l!help') {
    msg.reply('fuck you');
}
});


client.login(process.env.BOT_TOKEN);