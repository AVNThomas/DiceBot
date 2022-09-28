const { Discord } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!args[0] || args[0] == "help") {
        message.channel.send("Utilisation: !roll <nombre>");
        message.channel.send("Exemple: !roll 6");
        return;
    }
    console.log(Math.random());
    roll = Math.floor(Math.random() * args[0]) + 1;
    message.channel.send("Vous avez fait un " + roll);
};