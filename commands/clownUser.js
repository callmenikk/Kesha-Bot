const { MessageEmbed } = require('discord.js')

const clownUser = async (msg, args) => {
	if(args.length === 0){
		const err = await msg.reply("Please mention user")
		setTimeout(() => {
			err.delete()
		}, 5000)
	}else if(!msg.mentions.members.first()){
		msg.channel.send("mentioned user not found")
	}else {
		const mentioned = msg.mentions.members.first().user.displayAvatarURL({format: 'png'});

		const clownEmbed = new MessageEmbed()
    	.setImage(`https://api.popcat.xyz/clown?image=${mentioned}`)
    	.setColor('#ff2929')

    	msg.channel.send({embeds: [clownEmbed]})
	}
}


module.exports = {
	name: "clown",
	description: "makes tagget user clown",
	clownUser
}