import "dotenv/config";
import { REST, Routes } from "discord.js";

const { TOKEN } = process.env;

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "헬로",
    description: "헬로!",
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
    // eslint-disable-next-line brace-style
  } catch (error) {
    console.error(error);
  }
})();
