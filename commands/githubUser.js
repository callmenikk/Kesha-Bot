const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')

const getGithub = async (msg, args) => {
	const username = args.join(" ").trim().toLowerCase()
	
	if(!username){
		const err = await msg.reply("please mention user to get info")
		setTimeout(() => err.delete(), 5000)
	}else {
		fetch(`https://api.popcat.xyz/github/${username}`)
		.then(resp => resp.json())
		.then(user => {
			if(user.error === "User not found"){
				msg.channel.send(`**${username}** not found on github`)
			}else {
				const embed = new MessageEmbed()
				.setTitle(user.name)
				.setDescription(user.bio === "No Bio" ? "" : user.bio)
				.setURL(user.url)
				.setThumbnail(user.avatar) 
				.setColor("#000")
				.addFields(
					{ name: 'Followers', value: user.followers, inline: true },
					{ name: 'Following', value: user.following, inline: true },
					{ name: 'Public Repos', value: user.public_repos, inline: true },
				)

				msg.channel.send({embeds: [embed]})
			}
		}) 

	}
}


module.exports = {
	name: 'github',
	description: "tracks user's github profile",
	getGithub
}