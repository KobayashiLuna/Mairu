const Discord = require("discord.js");

module.exports = {
  name: "ping",
  category: 'info',
  aliases: ['pong'],
  description: 'pong!🏓',
  usage: '<só fazer o comando, rsrs>',
    run: async (client, message, args) => {
        message.delete();
        const msg = await message.channel.send(`<a:ThinkLoad:740966294060269638> **Calculando o Ping...**`).then(
        m => m.delete(10000));
        //msg.edit
        message.channel.send(`<a:Verification:740966298334527559> **Pong!**
        > A latência é de: **${Math.floor(msg.createdAt - message.createdAt)}ms**
        > A latência da API é de: **${Math.round(client.ping)}ms**`);
    }
}
