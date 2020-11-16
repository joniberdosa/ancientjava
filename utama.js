const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ':V ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,   command);
}


client.once('ready', () => {
    console.log('ancientjava is online :V');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'coeg'){
        client.commands.get('coeg').execute(message, args);
    } else if (command == 'bjirr'){
        client.commands.get('bjirr').execute(message, args);
        
    }
});

client.login('Nzc2OTE2OTU1MDI5OTYyODEz.X672TA.olANH2_ThhStgTAs61ox-df3gW8');