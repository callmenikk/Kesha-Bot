const { MessageEmbed } = require("discord.js");

const help = (msg, args) => {
  const params = args.join(" ").trim().toLowerCase();
  // { name: "Preifx", value: "`$`" },
  // { name: "Kesha AI", value: "`$msg`" },
  // { name: "Kesha music request", value: "`$play`" },
  // { name: "Kesha's Albums", value: "`$albums`" },
  // { name: "Ship", value: "`$ship [@mention]`" },
  // { name: "Drip", value: "`$drip [@mention]`" },
  // { name: "Biden Tweet", value: "`$bidentweet [your text]`" }, 
  const embed = new MessageEmbed()
  .setTitle("Kesha bot help")
  .setDescription('for commands visit website\n**https://kesha.netlify.app/**')
  .setThumbnail(
    "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50"
  )
  .setColor(msg.member.displayHexColor);

    msg.channel.send({ embeds: [embed] });
  }

module.exports = {
  help,
  name: "help",
  description: "check commands and how them work",
};
