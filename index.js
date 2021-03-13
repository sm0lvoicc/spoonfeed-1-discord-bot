const Discord = require('discord.js');
const bot = new Discord.Client;
const prefix = "prefix";

bot.on('ready', () =>{
    console.log("bot is online, yey");
});

bot.on("message", async (message) => {
    if (message.content == `${prefix}ping`){
        message.channel.send("pong!");
    };
});

bot.login("TOKEN");