const { RichEmbed } = require("discord.js");

module.exports = {
  name: 'reactionrole',
  category: 'moderation',
  //usage: 'uso nulo',
  description: 'adiciona um determinado cargo a um jogador por reação',

  run: async (client, message, args) => {
    client.on("raw", async dados => {
      if (
        dados.t !== "MESSAGE_REACTION_ADD" &&
        dados.t !== "MESSAGE_REACTION_REMOVE"
      )
        return;
      if (dados.d.message_id != "688186458095353870") return; //ID da Mensagem

      let servidor = client.guilds.get("637442192268460032"); //ID do Servidor Discord
      let membro = servidor.members.get(dados.d.user_id);

      let cargo1 = servidor.roles.get("638847343533359135"), //Register
        cargo2 = servidor.roles.get("637458338262810634"), //Membro
        cargo3 = servidor.roles.get("637446846167515152"), //Designer
        cargo4 = servidor.roles.get("637442996714995713"); //DJ

      if (dados.t === "MESSAGE_REACTION_ADD") {
        if (dados.d.emoji.id === "672476651082219541") {
          //Online
          if (membro.roles.has(cargo1)) return;
          membro.addRole(cargo1);
        } else if (dados.d.emoji.id === "672476706011086850") {
          //Ausente
          if (membro.roles.has(cargo2)) return;
          membro.addRole(cargo2);
        } else if (dados.d.emoji.id === "672476650998333470") {
          //Ocupado
          if (membro.roles.has(cargo3)) return;
          membro.addRole(cargo3);
        } else if (dados.d.emoji.id === "672476650474176520") {
          //Offline
          if (membro.roles.has(cargo4)) return;
          membro.addRole(cargo4);
        }
      }
      if (dados.t === "MESSAGE_REACTION_REMOVE") {
        if (dados.d.emoji.id === "672476651082219541") {
          //Online
          if (membro.roles.has(cargo1)) return;
          membro.removeRole(cargo1);
        } else if (dados.d.emoji.id === "672476706011086850") {
          //Ausente
          if (membro.roles.has(cargo2)) return;
          membro.removeRole(cargo2);
        } else if (dados.d.emoji.id === "672476650998333470") {
          //Ocupado
          if (membro.roles.has(cargo3)) return;
          membro.removeRole(cargo3);
        } else if (dados.d.emoji.id === "672476650474176520") {
          //Offline
          if (membro.roles.has(cargo4)) return;
          membro.removeRole(cargo4);
        }
      }
    });
  }
};
