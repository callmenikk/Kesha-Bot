const { MessageEmbed } = require('discord.js')
const cheerio = require("cheerio");
const request = require("request");

const GooglePhotos = async (msg, args) => {
  const photo_query = args.join(" ").trim().toLowerCase();

  if(!msg.channel.nsfw){
    const declineEmbed = new MessageEmbed()
      .setTitle('**Command  Declined ⚠️**')
    	.setDescription("**Sorry but this command can't be used here, you must use NSFW channel for that, I'm doing this because if you will input some NSFW words there, results will be 💀... \nanyways use NSFW channel**")
    	.setColor('#ff2929')

      await msg.reply({ embeds: [declineEmbed] })

    return
  }

  if (photo_query === '') {
    msg.reply("Please enter image name \nsomthing like that `$img kesha`");
    return;
  }

  const photoMessage = await msg.channel.send(
    `Looking for **${photo_query}** on internet. 🔍`
  );
  let dotsLength = 1;

  let interval = setInterval(() => {
	  
	  photoMessage.edit(
		  `Looking for **${photo_query}** on internet${".".repeat(dotsLength)} 🔍`
		  );
		  if (dotsLength === 4) {
			  dotsLength = 1;
			}
			dotsLength++;
  }, 1000);

  var options = {
    url: `https://www.qwant.com/?t=images&q=${photo_query}`,
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome",
    },
  };

  request(options, (error, response, responseBody) => {
    if (error) {
      return;
    }

    const $ = cheerio.load(responseBody);

    const links = $(".Card-module__Card___d7OS7 img");

    const urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr("src"));

    clearInterval(interval);
    const randomNumber = Math.floor(Math.random() * urls.length);
    photoMessage.delete()
    
    if(!urls[randomNumber]){
      msg.reply("Opps... somthing went wrong")
    }else {
      msg.channel.send(urls[randomNumber])
    }
  });
};

module.exports = {
  name: "google-photo",
  description: "searches and scraps google photos",
  GooglePhotos,
};
