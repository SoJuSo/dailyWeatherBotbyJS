import "dotenv/config";
const { BASE_URL, SERVICE_KEY } = process.env;

const filterlist = {
  서울특별시: { x: 60, y: 127 },
  부산광역시: { x: 98, y: 76 },
  대구광역시: { x: 89, y: 90 },
  인천광역시: { x: 55, y: 124 },
  광주광역시: { x: 58, y: 74 },
  대전광역시: { x: 67, y: 100 },
  울산광역시: { x: 102, y: 84 },
  세종특별자치시: { x: 66, y: 103 },
  경기도: { x: 60, y: 120 },
  강원도: { x: 73, y: 134 },
  충청북도: { x: 69, y: 107 },
  충청남도: { x: 68, y: 100 },
  전라북도: { x: 63, y: 89 },
  전라남도: { x: 51, y: 67 },
  경상북도: { x: 89, y: 91 },
  경상남도: { x: 91, y: 77 },
  제주특별자치도: { x: 52, y: 38 },
};

const getTime = () => {
  // 1. 현재 시간(Locale)
  const curr = new Date();
  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  // 4. KST 반환
  return kr_curr;
};

export const getWeather = async (city) => {
  const time = getTime();
  console.log(time);
  // console.log(time.getDate() + 5, time.getDate() - 1);
  // console.log(time.getDate(), time.getHours());
  // 예외처리 Todo 0000 ~ 0030은 전날로 해줘야하지않은가 완료
  // 연, 월이 바뀔 경우 처리
  console.log(time.getHours());
  const targetTime = String(
    time.getMinutes() > 40 ? time.getHours() : time.getHours() - 1
  ).padStart(2, "0");

  const targetDate =
    Number(targetTime) > -1
      ? time.getFullYear() + String(Number(time.getMonth() + 1)).padStart(2, "0") + time.getDate()
      : time.getFullYear() +
        String(Number(time.getMonth() + 1)).padStart(2, "0") +
        time.getDate() -
        1;

  // console.log(targetDate, targetTime);
  const cord = filterlist[city];
  try {
    const res = await fetch(
      `${BASE_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${targetDate}&base_time=${
        Number(targetTime) > -1 ? targetTime : 23
      }00&nx=${cord.x}&ny=${cord.y}`
    );
    const data = await res.json();
    const items = await data.response.body.items.item;
    console.log(items);
    return { items, time: targetTime };
  } catch (error) {
    return { items: null, time: null };
  }
};
