const { MessageEmbed } = require("discord.js");
const albums = require("./albums.json").albums;

const interaction = async (interaction) => {
  const filterAlbums = albums.find(
    (album) => album.name.toLowerCase() === interaction.values[0]
  );

  const embed = new MessageEmbed()
    .setColor(filterAlbums.color)
    .setTitle(filterAlbums.name)
    .setDescription(filterAlbums.description)
    .setURL(filterAlbums.spotify_URL)
    .setThumbnail(filterAlbums.album_URL) 
    .setFooter({
      text: "Artist: Kesha",
      iconURL:
        "https://i.scdn.co/image/ab6761610000e5ebf271138f95fbe8188d909d50",
    });

  await interaction.reply({
    content: `Information about album **${filterAlbums.name}**`,
    embeds: [embed],
  });
};

module.exports = {
  name: "album-reply",
  description: "user event on reply", 
  interaction,
};
