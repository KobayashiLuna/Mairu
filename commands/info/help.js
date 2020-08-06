const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");
const dateFormat = require('dateformat');

const Data = new Date();
//const Invite = 'https://discord.com/api/oauth2/authorize?client_id=738472593291608124&permissions=8&scope=bot';

module.exports = {
  name: "help",
  category: "info",
  //aliases: ['h']
  description: "para ver meus comandos!",
  usage: "<só fazer o comando, rsrs>",
  run: (client, message, args) => {
    message.delete();
const member = getMember(message, args.join(" "));

        // Member variables
        //const joined = formatDate(member.joinedAt);
        const joinedD = dateFormat(member.joinedAt, "dd/mm/yyyy");
        const joinedH = dateFormat(member.joinedAt, "HH:MM:ss");

        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        //const created = formatDate(member.user.createdAt);
        var logo = 'https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FtSOQl9IZ_400x400.png?v=1596289716635';
        const createdD = dateFormat(member.user.createdAt, "dd/mm/yyyy");
        const createdH = dateFormat(member.user.createdAt, "HH:MM:ss");

        const embed = new RichEmbed()
            .setAuthor('Tabela de Informações', 'https://imgur.com/FuNGHNp.png')
            .setTitle('**INVITE**')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=738472593291608124&permissions=8&scope=bot')

            //.setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
              .setColor("#ab0dcf")

            .setThumbnail(client.user.displayAvatarURL) //imagem do lado            

            .addField('⚙️ Comandos:', stripIndents
            `**> Info:** help, ping, helpex, botinfo, guildinfo, userinfo
            **> Moderação:** prune
            **> Usual:** avatar, calculadora, limpeza
            **> Fun:** say`, true)

            .addField('💬 Invite:', stripIndents
            `**> Meu prefix padrão:** #
            **> Dados adicionais** `, true)
        
            .setTimestamp() //Horário que o comando foi usado
            .setFooter('Mundo de Aiko💜 & Dollars • © Todos os direitos reservados.', logo)
            //.setFooter(member.displayName, member.user.displayAvatarURL) //notas de rodapé
        message.channel.send(embed);
    }
};
