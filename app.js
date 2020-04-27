const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv-flow').config();

const config = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    channel: process.env.CHANNEL
}


client.login(config.token);



client.on('ready', () => {
    client.channels.cache.get(config.channel).send("I'm Up !");
})
