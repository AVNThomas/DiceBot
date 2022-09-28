/*
//  Dev by Thomas Dehennault
//  A simple discord bot dice project
*/

const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// command manager
client.on('message', message => {
    if (message.content.startsWith('!') && message.author.id !== client.user.id) {
        const args = message.content.slice(1).trim().split(/ +/ );
        const command = args.shift().toLowerCase();

        // check if file exists
        if (fs.existsSync(`./src/commands/${command}.js`)) {
            const commandFile = require(`./commands/${command}.js`);
            commandFile.run(client, message, args);
        } else {
            message.channel.send('Command not found!');
        }
    }});


client.login(process.env.TOKEN);