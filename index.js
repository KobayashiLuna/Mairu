//imports
const { Client, Collection} = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const colors = require('colors');
const ytldl = require("ytdl-core");
//const TOKEN = ;

const client = new Client({
    disableEveryone: true
})

// Coleções
const cooldowns = new Collection();
client.commands = new Collection();
client.aliases = new Collection();


{//Função de recarregar os comandos
// function loadCmds () {
// client.categories = fs.readdirSync("./commands/");

// delete require.cache[require.resolve(`./commands/${f}`)]
// }
// function emoji (id) {
//     return client.emojis.get(id).toString();
//}
}

//Constantes
const DonoID = '698915459764060170';

//Cores
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

{
    //Para privar os comandos a sua ID
 "ownerID"; "698915459764060170"
  }

  //if(message.author.id !== config.ownerID) return;
  //if(message.author.id !== config.DonoID) return;

config({
    path: __dirname + "/.env"
});

// Para rodar o command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

//STATUS
let presence = ["animes <3", "series <3", "meu prefix é #"];

client.on("ready", () => {
    console.log(`Estou online!, meu nome é ${client.user.username}`.warn);
    console.log(`Tag = ${client.user.tag}`.info);
    console.log(`ID = ${client.user.id}`.info);
//==============================================================
//PRESENCE
//==============================================================
{//EXEMPLO #1
//     let status = [
//         {name: `Estou servindo ${Client.guilds.size} servidores, que fazem parte da minha beta`, type: 'Watching'},
//         {name: `O meu dono é o Julio | ポルト#1751`, type: 'Watchting'},
//         {name: `Estou em desenvolvimento!`, type: 'Watching'}
//     ]
//     function setStatus(){
//         let randomStatus = status[Math.floor(Math.random()*status.length)]
//             Client.user.setPresence({game: randomStatus})
//     }
//     setStatus()
//     setInterval(() => setStatus(),300000)
// });
}

{//EXEMPLO #2
// client.user.setPresence({
//         status: "dnd", //Online = Online | idle = Ausente | dnd = Ocupado.
//         game: {
//             name: "Eu ser programada",
//             type: "WATCHING" //PLAYING = Jogando | LISTING = Ouvindo | WATCHING = Assistindo | STREAMING = Live.
//         }
//     })
// });
}

setInterval(function() {
    let status = presence[Math.floor(Math.random()*presence.length)]
    client.user.setPresence({
        status: "dnd",
        game: {
            name: status,
            type: "WATCHING"
        }
    })
}, 30000)})
//==============================================================
//PARA AS MENSAGENS FUNCIONAREM
//==============================================================
client.on("message", async message => {
    const prefix = "#"; //aparentemente o PREFIX do bot

    //console.log(`${message.author.username} falou: ${message.content}`); //SIMPLES LOG

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);         
//==============================================================
//COMANDOS TESTES
//==============================================================

//==============================================================
//STOP BOT
//==============================================================

//==============================================================
//MUSIC
//==============================================================

//==============================================================
//BLACKLIST DE PALAVRAS
//==============================================================

//==============================================================
{//COMANDO DE RELOAD
//==============================================================
// if (msg === 'reload') {
//     message.channel.send({embed: {description: "Todos os comandos foram carregados"}})
//     message.channel.send('Todos os comandos foram carregados')
//     loadCmds()
// }
}
//==============================================================
});
//==============================================================
//REACTION ROLE
//==============================================================

client.on('raw', async dados => {

    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != '688186458095353870') return //ID da Mensagem

    let servidor = client.guilds.get("637442192268460032") //ID do Servidor Discord
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('638847343533359135'), //Register
        cargo2 = servidor.roles.get('637458338262810634'), //Membro
        cargo3 = servidor.roles.get('637446846167515152'), //Designer
        cargo4 = servidor.roles.get('637442996714995713')  //DJ

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "672476651082219541"){ //Online
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.id === "672476706011086850"){ //Ausente
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }else if(dados.d.emoji.id === "672476650998333470"){ //Ocupado
            if(membro.roles.has(cargo3)) return
            membro.addRole(cargo3)
        }else if(dados.d.emoji.id === "672476650474176520"){ //Offline
            if(membro.roles.has(cargo4)) return
            membro.addRole(cargo4)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "672476651082219541"){ //Online
            if(membro.roles.has(cargo1)) return
           membro.removeRole(cargo1)
        }else if(dados.d.emoji.id === "672476706011086850"){ //Ausente
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }else if(dados.d.emoji.id === "672476650998333470"){ //Ocupado
            if(membro.roles.has(cargo3)) return
            membro.removeRole(cargo3)
        }else if(dados.d.emoji.id === "672476650474176520"){ //Offline
            if(membro.roles.has(cargo4)) return
            membro.removeRole(cargo4)
        }
    }
}); 
//==============================================================
//PRO BOT FUNCIONAR
//==============================================================
client.login(process.env.TOKEN);
//.login(token);
//client.login(process.env.DISCORD_TOKEN);
//client.login(TOKEN);