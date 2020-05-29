// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.once(`reconnecting`, () => {
  console.log(`Reconnecting!`);
});
client.once(`disconnect`, () => {
  console.log(`Disconnect!`);
})
let NICKNAME = 'music_bot';
client.on('message', async msg => {
  const command = msg.content.toLowerCase();
  if (msg.author.bot) { return; }
  if (command.startsWith('exhausted')) {
    msg.channel.send(`1. Disadvantage on Ability Checks\n2. Speed Halved\n3. Disadvantage on Attack rolls and Saving throws\n4. Hit point maximum halved\n5. Speed reduced to 0\n6. Death `);
  }
  if (command.startsWith('unconscious')) {
    msg.channel.send(`An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings
    \nThe creature drops whatever it’s holding and falls prone.
    \nThe creature automatically fails Strength and Dexterity Saving Throws.
    \nAttack rolls against the creature have advantage.`);
  }
  if (command.startsWith('stunned')) {
    msg.channel.send(`A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.
    \nThe creature automatically fails Strength and Dexterity Saving Throws.
    \nAttack rolls against the creature have advantage.`);
  }
  if (command.startsWith('restrained')) {
    msg.channel.send(`A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
    \nAttack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
    \nThe creature has disadvantage on Dexterity Saving Throws.`);
  }
  if (command.startsWith('prone')) {
    msg.channel.send(`A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.
    \nThe creature has disadvantage on Attack rolls.
    \nAn Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.`);
  }
  if (command.startsWith('poisoned')) {
    msg.channel.send(`A poisoned creature has disadvantage on Attack rolls and Ability Checks. \n It can also have other adverse effects, at DM discretion`);
  }
  if (command.startsWith('petrified')) {
    msg.channel.send(`A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.\n
    The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.\n
    Attack rolls against the creature have advantage.\n
    The creature automatically fails Strength and Dexterity Saving Throws.\n
    The creature has Resistance to all damage.\n
    The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.`);
  }
  if (command.startsWith('paralyzed')) {
    msg.channel.send(`A paralyzed creature is incapacitated (see the condition) and can’t move or speak.\n
    The creature automatically fails Strength and Dexterity Saving Throws.\n
    Attack rolls against the creature have advantage.\n
    Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`);
  }
  if (command.startsWith('invisible')) {
    msg.channel.send(`An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.\n
    Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.`);
  }
  if (command.startsWith('incapacitated')) {
    msg.channel.send(`An incapacitated creature can’t take Actions or Reactions.`);
  }
  if (command.startsWith('grappled')) {
    msg.channel.send(`A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.\n
    The condition ends if the Grappler is incapacitated (see the condition).\n
    The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell.`);
  }
  if (command.startsWith('frightened')) {
    msg.channel.send(`A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.
    The creature can’t willingly move closer to the source of its fear.`);
  }
  if (command.startsWith('deafened')) {
    msg.channel.send(`A deafened creature can’t hear and automatically fails any ability check that requires hearing.`);
  }
  if (command.startsWith('charmed')) {
    msg.channel.send(`A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.\n
    The charmer has advantage on any ability check to interact socially with the creature.`);
  }
  if (command.startsWith('blinded')) {
    msg.channel.send(`A blinded creature can’t see and automatically fails any ability check that requires sight.\n
    Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.`);
  }
  if(command.includes('condition')){
    msg.channel.send('LIST OF CONDITIONS:\nblinded\ncharmed\ndeafened\nfrightened\ngrappled\nincapacitated\ninvisible\nparalyzed\npetrified\npoisoned\nprone\nrestrained\nstunned\nunconscious\nexhausted');
  }
  if (command.includes('casual')) {
    msg.channel.send('!play https://youtu.be/xHP2GgxYddY?list=PLSkW9yhFguFRP0FZbD3W1_aY1gzYS9KBl');
  }
  if (command.includes('shut up')) {
    let message = "yeah, shut up";
    if (command.includes('bauder')) {
      message += (' bitch');
    }
    msg.channel.send(`${message}!`)
  }
  if (command.includes('loli')) {
    msg.channel.send('https://pedo.help');
  }
  if (command.includes('bauder')) {
    msg.channel.send('@shiro');
  }
  if (command.includes('smitty') || msg.content.includes('austin')) {
    msg.channel.send('@laxog');
  }
  if (command.includes('hunter')) {
    msg.channel.send('@DM');
  }
  if (command.includes('colton')) {
    msg.channel.send('@precht, @prosch, @liuf');
  }
  if (command.includes('lundy')) {
    msg.channel.send('@wren');
  }
  if (command.includes('bryce')) {
    msg.channel.send('@yaza');
  }
  if (command.includes('boss')) {
    msg.channel.send('!play https://www.youtube.com/playlist?list=PLtVWk0ZeBy0PNRxOgQv5pBZ8zmt9lAlFs');
  }
  if (command.includes('dungeon')) {
    msg.channel.send('!play https://youtu.be/FBaI2bwnHGI');
  }
  if (command.includes('combat')) {
    msg.channel.send('!play https://www.youtube.com/watch?v=tigBxYfHfH4&list=PLymPg-Cc86_ZY86xXdAjnx-Nzaa3arIqe');
  }
  if (command.startsWith('oh boy')) {
    msg.channel.send('oh boy indeed');
  }
  if (command.includes('kill list')) {
    msg.channel.send(`DEAD:\n Krioleeg Prujot\n Shantel Samson\n Sengart Todina \n Benjamin Sandin\n\nALIVE AS FAR AS YOU KNOW:\n Chelsey Stramble\n Karl Fredrickson\n Charles Damekross\n Shelby Worgslayer\n Sossiree Kroni\n Beloz`)
  }
  else if (command.includes('commands')) {
    msg.channel.send(`CONDITIONS: \nsends the list of condition commands\n\n`);
    msg.channel.send(`NAME_OF_PERSON: \nsends who they play\n\n`);
    msg.channel.send(`SHUT UP: \ntells them to shut up\n ALSO TRY: shut up, bauder\n\n\n`);
    msg.channel.send(`LOLI: \nsends link to pedo.help\n\n`);
    msg.channel.send('CASUAL: \nsend casual music playlist\n\n');
    msg.channel.send('DUNGEON:\n send dungeon ambient playlist\n\n');
    msg.channel.send('COMBAT:\n send combat music playlist\n\n');
    msg.channel.send('BOSS:\n send boss fight playlist\n\n');
  }
  else if (command.startsWith('nickname')) {
    let words = msg.content.split(" ");
    if (words[1]) {
      let wordsFiltered = words.filter((word) => (word !== 'nickname'));
      let mToSend = '';
      for (word of wordsFiltered) {
        mToSend += `${word} `
      }
      msg.channel.send(`YOU HAVE SET MY NICKNAME TO:${mToSend}.`);
      NICKNAME = mToSend;
    }
    else {
      msg.channel.send(`My nickname is ${NICKNAME}. if you would like to change it, say nickname, then what you wish it to be`);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
