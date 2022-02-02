const cheerio = require("cheerio");
const request = require("request");

const GooglePhotos = async (msg, args) => {
  const photo_query = args.join(" ").trim().toLowerCase();

  if (!photo_query) {
    msg.reply("Please enter image name \nsomthing like that `$img kesha`");
    return;
  }

  const photoMessage = await msg.channel.send(
    `Looking for **${photo_query}** in internet. 🔍`
  );
  let dotsLength = 1;

  let interval = setInterval(() => {
	  
	  photoMessage.edit(
		  `Looking for **${photo_query}** in internet${".".repeat(dotsLength)} 🔍`
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
    photoMessage.edit(urls[randomNumber]);
  });
};

module.exports = {
  name: "google-photo",
  description: "searches and scraps google photos",
  GooglePhotos,
};
