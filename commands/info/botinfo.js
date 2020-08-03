const { RichEmbed, Attachment} = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const { } = require("../../datas.js");
const { stripIndents } = require("common-tags");
const dateFormat = require('dateformat');

module.exports = {
    name: "botinfo",
    aliases: ["bot"],
    category: "info",
    description: "minhas informações",
    run: (client, message, args) => {
        message.delete();
        const member = getMember(message, args.join(" "));
      
{
        // Member variables
        //const joined = formatDate(client.joinedAt);

        // const roles = member.roles
        // const guildRoles = message.guild.roles

        //     .filter(r => r.id !== message.guild.id)
        //     .map(r => r).join(", ") || 'none';

        // User variables
       // const created = formatDate(client.user.createdAt);
        //const created = Data;        
}
        var logo = 'https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FtSOQl9IZ_400x400.png?v=1596289716635'; //https://imgur.com/pgQnTtD.png
        var DiscorBot = 'https://imgur.com/FuNGHNp.png';
        const Data = new Date();
        //const MK = new Attachment('./assets/Mairu-Kururi.jpg', 'Mairu-Kururi.jpg')
        const CriadoD = dateFormat(client.user.createdAt, "dd/mm/yyyy");
        const CriadoH = dateFormat(client.user.createdAt, "HH:MM:ss");
        const MairuKururi = 'https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FMairu-Kururi.jpg?v=1596288426868';

        const embed = new RichEmbed()
            //.attachFile(MK)
            .setColor("#ab0dcf")
            .setAuthor(client.user.username, DiscorBot)   
            .setThumbnail(client.user.displayAvatarURL)

            .addField('💻 Minhas Informações:',
            `
            **> 💬Meu nome no servidor:** Mairu
            **> 👑 Minha Dona: ** <@!698915459764060170>
            **> ⚙️ Fui criada com ajuda e com os documentos de: ** <@!336311215099740160>
            **> Eu estou em:** ${client.guilds.size} servidores!
            **> 📅 Fui riada em:** ${CriadoD} às ${CriadoH}
            `, true
            )
            //**> Estar no total de:** [] Servidores
            .setDescription("Sou uma BOT de uso **privado**.\nFui criada afim de estudos e testes!")
            //.setImage('attachment://Mairu-Kururi.jpg')
            .setImage(MairuKururi)
            //**> 📅 Criado em:** no dia ${dateFormat(Data, "dd/mm/yyyy")} às ${dateFormat(Data, "HH:MM:ss")}

            .setTimestamp() //Horário que o comando foi usado
            .setFooter('Mundo de Aiko💜• © Todos os direitos reservados.', logo) //notas de rodapé

        message.channel.send(embed);
    }
}