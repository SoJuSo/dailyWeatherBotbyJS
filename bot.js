import "dotenv/config";
import { Client, EmbedBuilder, GatewayIntentBits } from "discord.js";
import { getWeather } from "./api.js";

// const prefix = "!";

const { TOKEN } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`${client.user.tag} has logged In!`);
});

// client.on("messageCreate", async (msg) => {
//   if (msg.author.bot) return;
//   console.log(msg);
//   // console.log(msg.content);
//   // console.log(msg.createdAt.toDateString());
//   // console.log(msg.author.tag);
//   msg.reply(`메아리입니다. ${msg.content}`);
//   // await interaction.reply("메세지!");
// });

// module.exports = {
//   data: new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!"),
//   async execute(interaction) {
//     await interaction.reply("Pong!");
//   },
// };

client.on("interactionCreate", async (interaction) => {
  // console.log(interaction);

  if (!interaction.isChatInputCommand()) return;

  // if (interaction.commandName === "ping") {
  //   await interaction.reply("Pong!");
  // }

  // if (interaction.commandName === "헬로") {
  //   await interaction.reply("하이!");
  // }
  if (interaction.commandName === "날씨") {
    console.log(interaction.createdAt);
    const city = interaction.options.get("도시").value;
    console.log(city);

    // await interaction.reply(`${city}의 날씨 안내해드리겠습니다!`);
    const data = await getWeather(city);
    const temperature = await data
      .map((val) => {
        if (val.category === "T1H") return val.obsrValue;
      })
      .join("");
    const embed = new EmbedBuilder()
      .setTitle(`${city}의 현재 날씨입니다.`)
      .addFields({ name: "온도", value: `${temperature}`, inline: true });
    await interaction.reply({ embeds: [embed] });
  }
});

// client.on("messageCreate", (msg) => {
//   if (msg.author.bot) return;
//   if (!msg.content.startsWith(prefix)) return;
//   if (msg.content.slice(0, prefix.length) !== prefix) return;

//   const args = msg.content.slice(prefix.length).trim().split(/ +/g);
//   const command = args.shift().toLowerCase();

//   const cmd = client.commands.get(command);
//   if (cmd) cmd.run(client, msg, args);
// });

client.login(TOKEN);
