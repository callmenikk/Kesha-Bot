const { MessageEmbed } = require("discord.js");

const getDrip = (msg, args) => {
	if (args.length === 0) {
		msg.channel.send("please mention member to make drip");
	  }else if(!msg.mentions.members.first()){
		msg.channel.send("mentioned user not found")
	  } else {
		const mentioned = msg.mentions.members.first().user.displayAvatarURL({format: 'png'});
		
		const exampleEmbed = new MessageEmbed()
		.setImage(`https://api.popcat.xyz/drip?image=${mentioned}`)
		.setColor('#16537e')
	
		msg.channel.send({embeds: [exampleEmbed]})
	  }
}

module.exports = {
	name: "drip",
	description: "makes user avatar in drip",
	getDrip
}