import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { REST } from "discord.js";

config();

const client = new Client({
  intents:[
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],

});
const TOKEN = process.env.TOKEN_;

client.login(TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged In!`)
});

client.on('messageCreate', (msg) => {
  console.log(msg.content)
  console.log(msg.createdAt.toDateString())
  console.log(msg.author.tag)
});