// import * from '.'
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,], 
    partials: [Partials.Channel, Partials.Message] 
});

client.on('ready', () => { // ready 이벤트시 실행할 함수
  console.log(`Logged in as ${client.user.tag}!`); // client.user 는 자신의 유저 객체이고 tag 는 유저 객체의 프로퍼티 입니다.
});

client.on('messageCreate', msg => { // message 이벤트시 msg (Discord.Message) 매개변수를 받고 실행할 함수
  if (msg.content === '!ping') { // Discord.Message 객체의 content 프로퍼티가 'ping' 일 때
    msg.reply('Pong!'); // reply 는 멘션 + , msg 로 출력됩니다.
  }
});

client.login('MTA2MDAxODkyMDE1MDUzMjE0Ng.GKEyt9.vCxh6c62X3l4xZwVwEUSHLOLK3-sS9iwX6stQo');