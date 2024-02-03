import "dotenv/config";
import { filterlist } from "./api.const.js";
import { getCurrentKRTime, getTargetTimeZone } from "./api.util.js";
const { BASE_URL, SERVICE_KEY } = process.env;

export const getCurrentWeather = async (city) => {
  try {
    const time = getCurrentKRTime();
    const [targetDate, targetTime] = getTargetTimeZone(time);
    const cord = filterlist[city];

    const res = await fetch(
      `${BASE_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${targetDate}&base_time=${
        Number(targetTime) > -1 ? targetTime : 23
      }00&nx=${cord.x}&ny=${cord.y}`
    );
    // console.log(res);
    console.log(targetDate, Number(targetTime) > -1 ? targetTime : 23, cord.x, cord.y);
    const data = await res.json();
    const items = await data.response.body.items.item;
    console.log(items);
    return { items, time: targetTime };
  } catch (error) {
    console.log(error);
    return { items: null, time: null };
  }
};
