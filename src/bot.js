import "dotenv/config";
import { Client, EmbedBuilder, GatewayIntentBits } from "discord.js";
import { getCurrentWeather } from "./api/api.js";

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

    const weatherData = await getCurrentWeather(city);

    if (weatherData.items) {
      // const temperature = await weatherData.items
      //   .map((val) => {
      //     if (val.category === "T1H") return val.obsrValue;
      //   })
      //   .join("");
      const groupedData = weatherData.items.reduce((acc, curr) => {
        const { category, ...rest } = curr;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(rest);
        return acc;
      }, {});

      const temperature = groupedData.T1H[0].obsrValue ? groupedData.T1H[0].obsrValue : null;
      const rainyPerHour = groupedData.RN1[0].obsrValue ? groupedData.RN1[0].obsrValue : null;

      const humidity = groupedData.REH[0].obsrValue ? groupedData.REH[0].obsrValue : null;
      const precipitation = groupedData.PTY[0].obsrValue ? groupedData.PTY[0].obsrValue : null;

      // const windDirection = groupedData.VEC[0].obsrValue ? groupedData.VEC[0].obsrValue : null;
      const windSpeed = groupedData.WSD[0].obsrValue ? groupedData.WSD[0].obsrValue : null;

      const PTYdefine = (type) => {
        console.log(typeof type);
        switch (Number(type)) {
          case 0:
            return "🌞강수 없음";
          case 1:
            return "🌧️비";
          case 2:
            return "🌧️비/🌨️눈";
          case 3:
            return "🌨️눈";
          case 4:
            return "🌧️소나기";
          case 5:
            return "☔빗방울";
          case 6:
            return "🌧️빗방울/🌨️눈날림";
          case 7:
            return "🌨️눈 날림";
        }
      };

      const embed = new EmbedBuilder()
        .setTitle(`현재 ${city}의 날씨입니다.`)
        .addFields(
          { name: "🌡온도", value: `${temperature} ℃`, inline: true },
          { name: "⛅강수 형태  ", value: `${PTYdefine(precipitation)}`, inline: true },
          { name: "💧강수량  ", value: `${rainyPerHour} mm`, inline: true },
          { name: "** **", value: "** **" },
          { name: "💦습도  ", value: `${humidity} %`, inline: true },
          { name: "🌪️풍속  ", value: `${windSpeed} m/s`, inline: true }
        )
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
    } else {
      await interaction.reply(
        "오류 발생!! 에러가 지속될 경우 Joo_soju 디스코드 계정으로 문의 부탁드립니다."
      );
    }
  }
});

client.login(TOKEN);
