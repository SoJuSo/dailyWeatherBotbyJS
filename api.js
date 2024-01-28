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

export const getWeather = async (city) => {
  const cord = filterlist[city];
  try {
    const res = await fetch(
      `${BASE_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&dataType=JSON&base_date=20240128&base_time=2200&nx=${cord.x}&ny=${cord.y}`
    );
    const data = await res.json();
    const items = await data.response.body.items.item;
    return items;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
};
