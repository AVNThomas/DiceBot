const { Discord } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!args[0] || args[0] == "help") {
        message.channel.send("Utilisation: !roll <nombre> ou !roll <nombre>d<nombre>");
        message.channel.send("Exemple: !roll 6 ou !roll 2d 6");
        return;
    }
    if (args[0].includes("d")) {
        let dice = args[0].split("d");
        let result = 0;
        let add = new Array();
        for (let i = 0; i < dice[0]; i++) {
            add[i] = Math.floor(Math.random() * dice[1]) + 1;
            result += add[i];
        }
        message.channel.send("Lancé de " + dice[0] + " dés à " + dice[1] + " faces [ " + add + ' ] Le résultat est: ' + result);
    } else {
        console.log(Math.random());
        roll = Math.floor(Math.random() * args[0]) + 1;
        message.channel.send("Vous avez fait un " + roll);
    }
};
