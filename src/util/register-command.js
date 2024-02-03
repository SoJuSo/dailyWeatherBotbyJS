import "dotenv/config";
import { ApplicationCommandOptionType, REST, Routes } from "discord.js";

const { TOKEN } = process.env;

const commands = [
  {
    name: "날씨",
    description: "위치에 따라 날씨를 알려드려요.",
    options: [
      {
        name: "광역시도",
        description: "광역시도를 선택하세요.",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
          {
            name: "서울특별시",
            value: "서울특별시",
          },
          {
            name: "부산광역시",
            value: "부산광역시",
          },
          {
            name: "대구광역시",
            value: "대구광역시",
          },
          {
            name: "인천광역시",
            value: "인천광역시",
          },
          {
            name: "광주광역시",
            value: "광주광역시",
          },
          {
            name: "대전광역시",
            value: "대전광역시",
          },
          {
            name: "울산광역시",
            value: "울산광역시",
          },
          {
            name: "세종특별자치시",
            value: "세종특별자치시",
          },
          {
            name: "경기도",
            value: "경기도",
          },
          {
            name: "강원도",
            value: "강원도",
          },
          {
            name: "충청북도",
            value: "충청북도",
          },
          {
            name: "충청남도",
            value: "충청남도",
          },
          {
            name: "전라북도",
            value: "전라북도",
          },
          {
            name: "전라남도",
            value: "전라남도",
          },
          {
            name: "경상북도",
            value: "경상북도",
          },
          {
            name: "경상남도",
            value: "경상남도",
          },
          {
            name: "제주특별자치도",
            value: "제주특별자치도",
          },
        ],
      },
    ],
  },
];

const rest = new REST().setToken(TOKEN);

(async () => {
  try {
    console.log("슬래시 명령어를 등록하고 있습니다.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("슬래시 명령어 등록이 완료되었습니다.");
  } catch (error) {
    console.error(error);
  }
})();
