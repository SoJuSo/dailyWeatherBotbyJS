import "dotenv/config";
import { Client, EmbedBuilder, GatewayIntentBits } from "discord.js";
import { getWeather } from "./api.js";

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

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "날씨") {
    const city = interaction.options.get("도시").value;

    const data = await getWeather(city);
    console.log(data.time);
    if (data.items) {
      const temperature = await data.items
        .map((val) => {
          if (val.category === "T1H") return val.obsrValue;
        })
        .join("");
      const embed = new EmbedBuilder()
        .setTitle(`${city}의 날씨입니다.`)
        .addFields({ name: "🌡온도", value: `${temperature} ℃`, inline: true });
      await interaction.reply({ embeds: [embed] });
    } else {
      await interaction.reply("오류 발생!");
    }
  }
});

client.login(TOKEN);
