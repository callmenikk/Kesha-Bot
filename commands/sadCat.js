const fetch = require('node-fetch')

const sadCat = async (msg, args) => {
	const text = args.join("+").trim().toLowerCase()

	if(!text){
		const alertmsg	= await msg.reply("please add some text to make meme for you")
		setTimeout(() => {
			alertmsg.delete()
		}, 5000)
	}else{
		msg.channel.send(`https://api.popcat.xyz/sadcat?text=${text}`)
	}
	
} 


module.exports = {
	name: "sad cat",
	description: "sends sad cat meme in channel",
	sadCat
}