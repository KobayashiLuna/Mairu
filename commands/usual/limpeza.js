
const Discord = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "limpar",
  category: "usual",
  aliases: ["lp", "lchat", "limpeza"],
  description: "coloca GIFzinha",
  usage: "<só usar o comando, rsrs>",
  run: (client, message, args) => {
    message.delete();

    const member = getMember(message, args.join(" "));
    let user = message.mentions.users.first();
    if (!user) user = message.author;
    var GIF = 'https://cdn.discordapp.com/attachments/684316889165725696/718616395113562112/yeet.gif';

    //let color = message.member.displayHexColor;
    //if (color == '#000000') color = message.member.hoistRole.hexColor;
    //var color = "#2cd388";
    //var logo = 'https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FtSOQl9IZ_400x400.png?v=1596289716635';
    //const embed = new Discord.RichEmbed()
      //.setAuthor(`${ }`)
      //.setTitle(`${member.displayName}`)
      //.setImage(user.avatarURL)
      //.setColor(color)
      //.setTimestamp()
      //.setFooter("Mundo de Aiko💜• © Todos os direitos reservados.", logo);
    //message.channel.send({ embed });
    message.channel.send(GIF);
    message.channel.send(GIF);
    message.channel.send(GIF);
  }
};
