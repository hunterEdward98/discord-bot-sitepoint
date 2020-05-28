// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'casual') {
    msg.reply('https://youtu.be/xHP2GgxYddY?list=PLSkW9yhFguFRP0FZbD3W1_aY1gzYS9KBl');
  }

  if (msg.content === 'boss') {
    msg.reply('https://www.youtube.com/playlist?list=PLtVWk0ZeBy0PNRxOgQv5pBZ8zmt9lAlFs');
  }

  if (msg.content === 'dungeon') {
    msg.reply('https://youtu.be/FBaI2bwnHGI');
  }

  if (msg.content === 'combat') {
    msg.reply('https://www.youtube.com/watch?v=tigBxYfHfH4&list=PLymPg-Cc86_ZY86xXdAjnx-Nzaa3arIqe');
  }
  if (msg.content === 'commands') {
    msg.reply('casual: \nsend casual music playlist');
    msg.reply('dungeon:\n send dungeon ambient playlist');
    msg.reply('combat:\n send combat music playlist');
    msg.reply('boss:\n send boss fight playlist');
  }
});

client.login(process.env.DISCORD_TOKEN);
