const { MessageEmbed } = require("discord.js");

const help = (msg, client) => {

  const avatar = client.user.displayAvatarURL({format: "png"})

  const embed = new MessageEmbed()
  .setTitle("Kesha bot help")
  .setDescription('**[Visit Kesha-bot website for commands 🌈🛸👽](https://kesha.netlify.app/commands)**')
  .setThumbnail(
    avatar  
  )
  .setFooter({text: "Kesha-bot", iconURL: avatar}) 
  .setColor(msg.member.displayHexColor);
    msg.channel.send({ embeds: [embed] });
  }

module.exports = {
  help,
  name: "help",
  description: "check commands and how them work",
};
