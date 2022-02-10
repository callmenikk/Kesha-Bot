const { MessageEmbed } = require("discord.js");

const help = (msg, args) => {
  const params = args.join(" ").trim().toLowerCase();
  const embed = new MessageEmbed()
  .setTitle("Kesha bot help")
  .setDescription('**[Visit Kesha-bot website for commands 🌈🛸👽](https://kesha.netlify.app/commands)**')
  .setThumbnail(
    "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50"  
  )
  .setFooter({text: "Kesha-bot", iconURL: "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50"}) 
  .setColor(msg.member.displayHexColor);
    msg.channel.send({ embeds: [embed] });
  }

module.exports = {
  help,
  name: "help",
  description: "check commands and how them work",
};
