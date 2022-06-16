const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    config: {
        name: "support",
        aliases: [],
        category: "utilities",
        description: "Support.",
        accessableby: "Members"
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setAuthor({ name: "Support"})
        .setDescription("```Join in our discord server for help!```")
        .setTimestamp()
        .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL()});

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Support")
                    .setURL(`https://discord.gg/vB3XvvRcQc`)
                    .setEmoji("🩸")
                    .setStyle("LINK")
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}
