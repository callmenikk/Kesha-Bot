const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const execute = async (msg, args) => {
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("kesha-albums")
      .setPlaceholder("Select any Kesha's album")
      .addOptions([
        {
          label: "Animal",
          description: "2010",
          value: "animal",
        },
        {
          label: "Cannibal",
          description: "2010, EP",
          value: "cannibal",
        },
        {
          label: "Warrior",
          description: "2012",
          value: "warrior",
        },
        {
          label: "Rainbow",
          description: "2017",
          value: "rainbow",
        },
        {
          label: "High Road",
          description: "2020",
          value: "high road",
        },
      ])
  );

  await msg.reply({ content: "Select Kesha's album", components: [row] });
};

module.exports = {
  name: "kesha-albums",
  description: "keshas top albums",
  execute,
};
