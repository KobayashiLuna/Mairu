//const { RichEmbed, Discord } = require("discord.js");
const Discord = require("discord.js");
const { getMember } = require("../../functions.js");
const rm = require("discord.js-reaction-menu");

module.exports = {
  name: "gifs",
  category: ["usual", "reaction", "fun"],
  aliases: ["gif", "gf", "rgif", "rgf"],
  description: "coloca GIFzinha pra cada reação",
  usage: "<comando> + <help> = mostra a tabelinha | <comando> + <nome da reação>",
  run: (client, message, args) => {
    message.delete();

    const Data = new Date();
    
    var color = "#2cd388";
    var logo =
      "https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FtSOQl9IZ_400x400.png?v=1596289716635";
    var MairuKururi =
      "https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FMairu-Kururi.jpg?v=1596288426868";
    var DiscorBot = "https://imgur.com/FuNGHNp.png";
    
    var triste = 'https://imgur.com/5M9x9fU.gif';
    var feliz = 'https://imgur.com/4iQyNU3.gif';
    
   //var GIF = [];

    
    if (args[0].toLowerCase() === "smile") {
      const smile = new Discord.RichEmbed()
        //.setDescription(args.slice(1).join(" "))
        .setAuthor("Eu estou feliz", logo)
        .setColor(color)
        .setImage(feliz)
        .setTimestamp()
        .setFooter('Mundo de Aiko💜 & Dollars • © Todos os direitos reservados.', logo)

      message.channel.send(smile);
    } 
    else {
      
      new rm.menu(message.channel, message.author.id, [
        new Discord.RichEmbed()
          .setColor(color)
          .setAuthor("Tabela de GIFs", logo)
          .setDescription('**Página única**')
          .setThumbnail(client.user.displayAvatarURL)
          .addField('Comandos', `\n
          **> Smile** Feliz\n
          **> Blush** Envergonhada\n
          **> Hug** Abraços\n
          **> Cry** Chorando\n
          **> Bored** Aborrecida\n
          **> Sad** Triste\n
          `, true)
          .addField('Links dos Albuns', `\n
          *https://imgur.com/a/ntpvv0v*\n
          \n
          \n
          \n
          \n
          \n
          \n
          \n
          *https://imgur.com/a/Eob9QfF*\n
          `, true)
          .setImage(MairuKururi)
          .setTimestamp()
          .setFooter('Mundo de Aiko💜 & Dollars • © Todos os direitos reservados.', logo),
        
        new Discord.RichEmbed()
          .setColor(color)
          .setAuthor("Tabela de GIFs", logo)
          .setDescription('**Página 2**')
          .addField('**> Smile', `\n
          https://imgur.com/a/ntpvv0v
          `, true)
          .setImage(MairuKururi)
          .setTimestamp()
          .setFooter('Mundo de Aiko💜 & Dollars • © Todos os direitos reservados.', logo),
        
        new Discord.RichEmbed()
          .setColor(color)
          .setAuthor("Tabela de GIFs", logo)
          .setDescription('**Página 3**')
          .addField('**> Sad', `\n
          https://imgur.com/a/Eob9QfF
          `, true)
          .setImage(MairuKururi)
          .setTimestamp()
          .setFooter('Mundo de Aiko💜 & Dollars • © Todos os direitos reservados.', logo)
      ])
     //);
    }
  }
};
