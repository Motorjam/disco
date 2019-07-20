const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('ready', () => {   
    console.log('The bot is ready'); 
});

client.on('message', (msg) => {
if (msg.content === 'l!help') {
    msg.reply('fuck you');
}
if (msg.content === 'l!plug') {
    msg.reply('Follow me on Twitch, sub to me on YouTube :) https://www.twitch.tv/motorjam https://www.youtube.com/channel/UC93SMdJJOHf8tcF-PJ_ArxA');    
});


client.login(process.env.BOT_TOKEN);
