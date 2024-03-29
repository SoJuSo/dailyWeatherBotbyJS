import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { getCurrentWeather } from "./api/api.js";
import { embedGenerator } from "./util/embedGenerator.js";

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
    const city = interaction.options.get("광역시도").value;
    // const cityDetail = interaction.options.get("시군구").value
    //   ? interaction.options.get("시군구").value
    //   : null;
    const cityDetail = null;

    const weatherData = await getCurrentWeather(city);

    if (weatherData.items) {
      const embed = embedGenerator(city, cityDetail, weatherData.items);
      await interaction.reply({ embeds: [embed] });
    } else {
      await interaction.reply(
        "오류 발생!! 에러가 지속될 경우 Joo_soju 디스코드 계정으로 문의 부탁드립니다."
      );
    }
  }
});

client.login(TOKEN);
