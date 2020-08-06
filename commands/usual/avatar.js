const Discord = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "avatar",
  category: "usual",
  aliases: ["foto"],
  description: "exibir a imagem da pessoa ❤️",
  usage: "<escolha a pessoa>",
  run: (client, message, args) => {
    message.delete();
    {
      //Primeiro Modelo
      // if (!message.mentions.users.size) {
      //     return message.channel.send(`Seu avatar: ${message.author.displayAvatarURL}`);
      // }
      // const avatarList = message.mentions.users.map(user => {
      //     return `avatar ${user.username}: ${user.displayAvatarURL}`;
      // });
      // // send the entire array of strings as a message
      // // by default, discord.js will `.join()` the array with `\n`
      //message.channel.send(avatarList);
    }
    const member = getMember(message, args.join(" "));
    let user = message.mentions.users.first();
    if (!user) user = message.author;

    //let color = message.member.displayHexColor;
    //if (color == '#000000') color = message.member.hoistRole.hexColor;
    var color = "#2cd388";
    var logo = 'https://cdn.glitch.com/d0f8adda-4b7c-46a7-818a-e6fea798efb8%2FtSOQl9IZ_400x400.png?v=1596289716635';
    const embed = new Discord.RichEmbed()
      //.setAuthor(`${ }`)
      .setTitle(`${member.displayName}`)
      .setImage(user.avatarURL)
      .setColor(color)
      .setTimestamp()
      .setFooter('Mundo de Aiko💜 & Dollars • © Todos os direitos reservados.', logo)
    message.channel.send({ embed });
  }
};
