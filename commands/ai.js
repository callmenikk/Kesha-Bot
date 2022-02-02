const fetch = require('node-fetch')

const AI = async (msg, args) => {
	const message = args.join(" ").trim().toLowerCase()

	const URL = `https://api.monkedev.com/fun/chat?msg=${message}&key=${process.env.AI_TOKEN}`
	
	await fetch(URL)
	.then(response => response.json())
	.then(KeshaReply => {
		msg.channel.send(KeshaReply.response)
	})
}


module.exports = {
	name: "AI",       
	description: "Kesha chats with people",
	AI
}