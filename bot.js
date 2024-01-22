import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

config();

const prefix = "!";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = process.env.TOKEN_;

client.on("ready", () => {
  console.log(`${client.user.tag} has logged In!`);
});

// client.on("messageCreate", async (msg) => {
//   console.log(msg.content);
//   console.log(msg.createdAt.toDateString());
//   console.log(msg.author.tag);

//   // await interaction.reply("메세지!");
// });

// client.on("interactionCreate", async (interaction) => {
//   console.log(interaction);
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === "ping") {
//     await interaction.reply("Pong!");
//   }
// });

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
  if (cmd) cmd.run(client, msg, args);
});

client.login(TOKEN);
