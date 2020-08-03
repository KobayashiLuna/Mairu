const Discord = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  //aliases: ['pong']
  description: "para ver meus comandos!",
  usage: "<só fazer o comando, rsrs>",
  run: (client, message, args) => {
    message.delete();
    message.channel.send("Não possuo este comando ainda 😋");
  }
};
