const { MessageEmbed } = require("discord.js");

const help = (msg, args) => {
  const params = args.join(" ").trim().toLowerCase();

  if (params === "msg") {
	const embed = new MessageEmbed()
	.setTitle('Chatting with Kesha AI')
	.setDescription("To get reply from kesha type `$msg [your message]` \n somthing like this `$msg hello there`")
	.setThumbnail('https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50')
	.setFooter({ text: 'Kesha bot', iconURL: 'https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50' })
	.setColor(msg.member.displayHexColor)

	msg.channel.send({embeds: [embed]})
  } else if(params === "play"){
	const embed = new MessageEmbed()
	.setTitle('Requesting Kesha songs')
	.setDescription("Kesha bot only plays, Kesha's songs and nothing else \n before you request music, you must be in voice chat")
	.addFields(
        { name: "Play", value: "`$play [query]` \n try something like this `$play die young`" },
        { name: "Stop", value: "`$stop` - stops music and leaves voice channel" },
        { name: "Skip", value: "`$skip` - skips currently playing music and goes on another one" },
        { name: "Queues", value: "When music isn't done yet and yo request new music using `$play` command it adds new song in queue" }
      )
	.setThumbnail('https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50')
	.setFooter({ text: 'Kesha bot', iconURL: 'https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50' })
	.setColor(msg.member.displayHexColor)

	msg.channel.send({embeds: [embed]})
  }else if(params === "albums"){
	const embed = new MessageEmbed()
	.setTitle("Kesha's Albums")
	.setDescription("Using `$albums` command will show you menu with Kesha's albums, selected Albums will show its description, When you click its title, it redirects you on Spotify Album")
	.setThumbnail('https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50')
	.setFooter({ text: 'Kesha bot', iconURL: 'https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50' })
	.setColor(msg.member.displayHexColor)

	msg.channel.send({embeds: [embed]})
  }else if(params === "img"){
    const embed = new MessageEmbed()
    .setTitle('Google Images')
    .setDescription("To get image from bot type `$img [query]` \nfor example like this `$img kesha`, \n\nfor some reason bot takes a while to search images, because bot web scrapes")
    .setThumbnail('https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50')
    .setFooter({ text: 'Kesha bot', iconURL: 'https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50' })
    .setColor(msg.member.displayHexColor)
  
    msg.channel.send({embeds: [embed]})
  }else {
    const embed = new MessageEmbed()
      .setTitle("Kesha bot **Help**")
      .addFields(
        { name: "Preifx", value: "`$`" },
        { name: "Kesha AI", value: "`$msg`" },
        { name: "Kesha music request", value: "`$play`" },
        { name: "Kesha's Albums", value: "`$albums`" },
        { name: "Google images", value: "`$img`" }
      )
      .setThumbnail(
        "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50"
      )
      .setFooter({
        text: "type `$help [command name]`",
        iconURL:
          "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50",
      })
      .setColor(msg.member.displayHexColor);

    msg.channel.send({ embeds: [embed] });
  }
};

module.exports = {
  help,
  name: "help",
  description: "check commands and how them work",
};
