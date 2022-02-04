const { Client, Intents, Collection } = require("discord.js");
const { readdirSync } = require("fs");
require("dotenv").config();

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

client.commands = new Collection();
const commandFiles = readdirSync("./commands/").filter((file) =>
  file.endsWith(".js")
);


for (let files of commandFiles) {
  const command = require(`./commands/${files}`);
  client.commands.set(command.name, command);
}
 
client.on("ready", async () => {
  console.log("I'm ready");
});

client.on("messageCreate", async (msg) => {
  const prefix = "$";


  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "albums") client.commands.get("kesha-albums").execute(msg, args);
  if (cmd === "help") client.commands.get("help").help(msg,args)
  if (cmd === "msg") client.commands.get("AI").AI(msg,args)
  if (cmd === "img") client.commands.get("google-photo").GooglePhotos(msg,args)
  if(cmd === "ship") client.commands.get("ship").getShip(msg,args)
  if(cmd === "drip") client.commands.get("drip").getDrip(msg,args)
  if(cmd === "bidentweet") client.commands.get("biden tweet").getBidenTweet(msg, args)
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "kesha-albums") {    
    client.commands.get("album-reply").interaction(interaction);
  }
}); 

client.login(process.env.TOKEN); 
 