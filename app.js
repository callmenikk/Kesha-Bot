const { Client, Intents, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const app = require('express')()
require("dotenv").config();

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

app.get("/", (req, res) => {
  res.send({
    msg: "bot is deployed"
  })
})

client.commands = new Collection();
const commandFiles = readdirSync("./commands/").filter((file) =>
  file.endsWith(".js")
);


for (let files of commandFiles) {
  const command = require(`./commands/${files}`);
  client.commands.set(command.name, command);
}
 
client.on("ready", async () => {
  client.user.setActivity('Kesha 🌈🛸👽', { type: 'STREAMING' })
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
  if(cmd === "sadcat") client.commands.get("sad cat").sadCat(msg, args)
  if(cmd === 'github') client.commands.get("github").getGithub(msg, args)
  if(cmd === "clown") client.commands.get("clown").clownUser(msg, args)
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "kesha-albums") {    
    client.commands.get("album-reply").interaction(interaction);
  }
}); 

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Discord bot is on', port)
});

client.login("OTM4MTM2NDgwNDUzMzY1Nzcw.Yfl5rg.TfvDrOFbb5RK4xu9cDOl8G92zTA"); 
 
// there is comment to make sure changes exist