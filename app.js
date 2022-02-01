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

const getApp = (guildId) => {
  const app = client.api.applications(client.user.id);
  if (guildId) {
    app.guilds(guildId);
  }

  return app;
};

const guildId = "938137069396566038";

client.on("ready", async () => {
  console.log("I'm ready");

  const commands = getApp(guildId).commands.get();

  await getApp(guildId).commands.post({
    data: {
      name: "animal",
      description: "animal",
    },
  });
});

client.on("messageCreate", async (msg) => {
  const prefix = "$";

  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "albums") {
    client.commands.get("kesha-albums").execute(msg, args);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "kesha-albums") {
    client.commands.get("album-reply").interaction(interaction);
  }
});

client.login(process.env.TOKEN);
