const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        aliases: [],
        category: "utilities",
        description: "Invite the bot to your server.",
        accessableby: "Members"
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setAuthor({ name: "Invite!"})
        .setDescription("```Invite me to your server!```")
        .setTimestamp()
        .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL()});

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=985581940667219988&permissions=2184202560&scope=applications.commands%20bot`)
                    .setEmoji("🔗")
                    .setStyle("LINK")
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}
