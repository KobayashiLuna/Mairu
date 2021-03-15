const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");
const dateFormat = require('dateformat');

const Data = new Date();

module.exports = {
    name: "guildinfo",
    aliases: ["guild", "serverinfo"],
    category: "info",
    description: "informações do Servidor Discord",
    run: (client, message, args) => {
        message.delete();
        const member = getMember(message, args.join(" "));

        // Member variables
        //const joined = formatDate(member.joinedAt);
        //const guildJoined = formatDate(message.guild.joinedAt);

        const roles = member.roles
        const guildRoles = message.guild.roles

            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        //const created = formatDate(member.user.createdAt);
        //const guildCreated = formatDate(message.guild.createdAt);
        var logo = 'https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FtSOQl9IZ_400x400.png?v=1596289716635';
        const CriadoD = dateFormat(message.guild.createdAt, "dd/mm/yyyy");
        const CriadoH = dateFormat(message.guild.createdAt, "HH:MM:ss");

        const embed = new RichEmbed()
            .setColor("#ab0dcf")
            .setAuthor(message.guild.name, 'https://imgur.com/FuNGHNp.png') 
            .setThumbnail(message.guild.iconURL)

            // .addField('Informação como Membro:', stripIndents
            // `**> Nome em Exibição:** ${member.displayName}
            // **> Entrou no servidor em:** ${joined}
            // **> Possui os Cargos:** ${roles}`, true)

            .addField('💻 Informações do servidor:',
            `
            **> 👑 Dono(a) do servidor:** ${message.guild.owner}
            **> 📅 Criado em:** ${CriadoD} às ${CriadoH}
            **> 🌎 Região:** ${message.guild.region}
            **> 💻 Total de membros no servidor: (${message.guild.memberCount})** 
            `, true
            )

            // .addField('💻 Informações adicionais:',
            // `**> 🛡️ Todos os cargos:** ${guildRoles}
            // **> 👥 Usuários:** ${client.users.length}
            // **> ⚙️ canais:** ${client.channels.length}
            //  **> ${'<:online:660630393594183710>'} Online
            //  **> ${'<:ausente:660630393632063518>'} Ausente
            //  **> ${'<:offline:660630393715818526>'} Offline
            //  **> 🤖 Bots
            // `, true)

            .setTimestamp() //Horário que o comando foi usado
            .setFooter(`${message.guild.name} & Dollars • © Todos os direitos reservados.`, logo) //notas de rodapé

        message.channel.send(embed);
    }
}
