const getBidenTweet = (msg, args) => {
	const tweet = args.join("+").trim().toLowerCase()

	if (!tweet) {
		msg.channel.send("input any message")
	}else {	
		msg.channel.send(`https://api.popcat.xyz/biden?text=${tweet}`)
	  }
}

module.exports = {
	name: "biden tweet",
	description: "when you input text it looks like biden tweeted",
	getBidenTweet
}