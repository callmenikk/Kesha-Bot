const { MessageEmbed } = require("discord.js");

const getShip = async (msg, args) => {
  if (args.length === 0) {
    msg.channel.send("please mention member to ship");
  }else if(!msg.mentions.members.first()){
    msg.channel.send("mentioned user not found")
  } else {
    const mentioned = msg.mentions.members.first().user.displayAvatarURL({format: 'png'});
    const author = msg.member.user.displayAvatarURL({format: 'png'});
    
    const exampleEmbed = new MessageEmbed()
    .setImage(`https://api.popcat.xyz/ship?user1=${author}&user2=${mentioned}`)
    .setColor('#ff2929')

    msg.channel.send({embeds: [exampleEmbed]})
  }
};
module.exports = {
  name: "ship",
  description: "grabs input lyrics",
  getShip,
}; 
