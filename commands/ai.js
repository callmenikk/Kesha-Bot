const fetch = require('node-fetch')


const AI = (msg, args) => {
	const message = args.join(" ").trim().toLowerCase()

	const URL = `https://api.popcatdev.repl.co/chatbot?msg=${message}&owner=callmenikk&botname=Kesha`
	
	fetch(URL)
	.then(response => response.json())
	.then(KeshaReply => {
		if(!KeshaReply.response){
			msg.reply("beep boop beep... i died")
		}else {
			msg.reply(KeshaReply.response)
		}
	})
}


module.exports = {
	name: "AI",       
	description: "Kesha chats with people",
	AI
}