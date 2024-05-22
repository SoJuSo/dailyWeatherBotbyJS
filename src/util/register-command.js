// import "dotenv/config";
// import { ApplicationCommandOptionType, REST, Routes } from "discord.js";

// const { TOKEN } = process.env;

// const commands = [
//   {
//     name: "날씨",
//     description: "위치에 따라 날씨를 알려드려요.",
//     options: [
//       {
//         name: "광역시도",
//         description: "광역시도를 선택하세요.",
//         type: ApplicationCommandOptionType.String,
//         autocomplete: true,
//         required: true,
//         choices: [
//           {
//             name: "서울특별시",
//             value: "서울특별시",
//           },
//           {
//             name: "부산광역시",
//             value: "부산광역시",
//           },
//           {
//             name: "대구광역시",
//             value: "대구광역시",
//           },
//           {
//             name: "인천광역시",
//             value: "인천광역시",
//           },
//           {
//             name: "광주광역시",
//             value: "광주광역시",
//           },
//           {
//             name: "대전광역시",
//             value: "대전광역시",
//           },
//           {
//             name: "울산광역시",
//             value: "울산광역시",
//           },
//           {
//             name: "세종특별자치시",
//             value: "세종특별자치시",
//           },
//           {
//             name: "경기도",
//             value: "경기도",
//           },
//           {
//             name: "강원도",
//             value: "강원도",
//           },
//           {
//             name: "충청북도",
//             value: "충청북도",
//           },
//           {
//             name: "충청남도",
//             value: "충청남도",
//           },
//           {
//             name: "전라북도",
//             value: "전라북도",
//           },
//           {
//             name: "전라남도",
//             value: "전라남도",
//           },
//           {
//             name: "경상북도",
//             value: "경상북도",
//           },
//           {
//             name: "경상남도",
//             value: "경상남도",
//           },
//           {
//             name: "제주특별자치도",
//             value: "제주특별자치도",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const rest = new REST().setToken(TOKEN);

// (async () => {
//   try {
//     console.log("슬래시 명령어를 등록하고 있습니다.");

//     await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
//       body: commands,
//     });

//     console.log("슬래시 명령어 등록이 완료되었습니다.");
//   } catch (error) {
//     console.error(error);
//   }
// })();
import "dotenv/config";
import pkg from "discord.js";
const { REST, Routes, ApplicationCommand, StringOption } = pkg;

const { TOKEN } = process.env;

const choices = [
  {
    name: "서울특별시",
    value: "서울특별시",
  },
  {
    name: "서울특별시 종로구",
    value: "서울특별시_종로구",
  },
  {
    name: "서울특별시 중구",
    value: "서울특별시_중구",
  },
  {
    name: "서울특별시 용산구",
    value: "서울특별시_용산구",
  },
  {
    name: "서울특별시 성동구",
    value: "서울특별시_성동구",
  },
  {
    name: "서울특별시 광진구",
    value: "서울특별시_광진구",
  },
  {
    name: "서울특별시 동대문구",
    value: "서울특별시_동대문구",
  },
  {
    name: "서울특별시 중랑구",
    value: "서울특별시_중랑구",
  },
  {
    name: "서울특별시 성북구",
    value: "서울특별시_성북구",
  },
  {
    name: "서울특별시 강북구",
    value: "서울특별시_강북구",
  },
  {
    name: "서울특별시 도봉구",
    value: "서울특별시_도봉구",
  },
  {
    name: "서울특별시 노원구",
    value: "서울특별시_노원구",
  },
  {
    name: "서울특별시 은평구",
    value: "서울특별시_은평구",
  },
  {
    name: "서울특별시 서대문구",
    value: "서울특별시_서대문구",
  },
  {
    name: "서울특별시 마포구",
    value: "서울특별시_마포구",
  },
  {
    name: "서울특별시 양천구",
    value: "서울특별시_양천구",
  },
  {
    name: "서울특별시 강서구",
    value: "서울특별시_강서구",
  },
  {
    name: "서울특별시 구로구",
    value: "서울특별시_구로구",
  },
  {
    name: "서울특별시 금천구",
    value: "서울특별시_금천구",
  },
  {
    name: "서울특별시 영등포구",
    value: "서울특별시_영등포구",
  },
  {
    name: "서울특별시 동작구",
    value: "서울특별시_동작구",
  },
  {
    name: "서울특별시 관악구",
    value: "서울특별시_관악구",
  },
  {
    name: "서울특별시 서초구",
    value: "서울특별시_서초구",
  },
  {
    name: "서울특별시 강남구",
    value: "서울특별시_강남구",
  },
  {
    name: "서울특별시 송파구",
    value: "서울특별시_송파구",
  },
  {
    name: "서울특별시 강동구",
    value: "서울특별시_강동구",
  },
  {
    name: "부산광역시",
    value: "부산광역시",
  },
  {
    name: "부산광역시 중구",
    value: "부산광역시_중구",
  },
  {
    name: "부산광역시 서구",
    value: "부산광역시_서구",
  },
  {
    name: "부산광역시 동구",
    value: "부산광역시_동구",
  },
  {
    name: "부산광역시 영도구",
    value: "부산광역시_영도구",
  },
  {
    name: "부산광역시 부산진구",
    value: "부산광역시_부산진구",
  },
  {
    name: "부산광역시 동래구",
    value: "부산광역시_동래구",
  },
  {
    name: "부산광역시 남구",
    value: "부산광역시_남구",
  },
  {
    name: "부산광역시 북구",
    value: "부산광역시_북구",
  },
  {
    name: "부산광역시 해운대구",
    value: "부산광역시_해운대구",
  },
  {
    name: "부산광역시 사하구",
    value: "부산광역시_사하구",
  },
  {
    name: "부산광역시 금정구",
    value: "부산광역시_금정구",
  },
  {
    name: "부산광역시 강서구",
    value: "부산광역시_강서구",
  },
  {
    name: "부산광역시 연제구",
    value: "부산광역시_연제구",
  },
  {
    name: "부산광역시 수영구",
    value: "부산광역시_수영구",
  },
  {
    name: "부산광역시 사상구",
    value: "부산광역시_사상구",
  },
  {
    name: "부산광역시 기장군",
    value: "부산광역시_기장군",
  },
  {
    name: "대구광역시",
    value: "대구광역시",
  },
  {
    name: "대구광역시 중구",
    value: "대구광역시_중구",
  },
  {
    name: "대구광역시 동구",
    value: "대구광역시_동구",
  },
  {
    name: "대구광역시 서구",
    value: "대구광역시_서구",
  },
  {
    name: "대구광역시 남구",
    value: "대구광역시_남구",
  },
  {
    name: "대구광역시 북구",
    value: "대구광역시_북구",
  },
  {
    name: "대구광역시 수성구",
    value: "대구광역시_수성구",
  },
  {
    name: "대구광역시 달서구",
    value: "대구광역시_달서구",
  },
  {
    name: "대구광역시 달성군",
    value: "대구광역시_달성군",
  },
  {
    name: "대구광역시 군위군",
    value: "대구광역시_군위군",
  },
  {
    name: "인천광역시",
    value: "인천광역시",
  },
  {
    name: "인천광역시 중구",
    value: "인천광역시_중구",
  },
  {
    name: "인천광역시 동구",
    value: "인천광역시_동구",
  },
  {
    name: "인천광역시 미추홀구",
    value: "인천광역시_미추홀구",
  },
  {
    name: "인천광역시 연수구",
    value: "인천광역시_연수구",
  },
  {
    name: "인천광역시 남동구",
    value: "인천광역시_남동구",
  },
  {
    name: "인천광역시 부평구",
    value: "인천광역시_부평구",
  },
  {
    name: "인천광역시 계양구",
    value: "인천광역시_계양구",
  },
  {
    name: "인천광역시 서구",
    value: "인천광역시_서구",
  },
  {
    name: "인천광역시 강화군",
    value: "인천광역시_강화군",
  },
  {
    name: "인천광역시 옹진군",
    value: "인천광역시_옹진군",
  },
  {
    name: "광주광역시",
    value: "광주광역시",
  },
  {
    name: "광주광역시 동구",
    value: "광주광역시_동구",
  },
  {
    name: "광주광역시 서구",
    value: "광주광역시_서구",
  },
  {
    name: "광주광역시 남구",
    value: "광주광역시_남구",
  },
  {
    name: "광주광역시 북구",
    value: "광주광역시_북구",
  },
  {
    name: "광주광역시 광산구",
    value: "광주광역시_광산구",
  },
  {
    name: "대전광역시",
    value: "대전광역시",
  },
  {
    name: "대전광역시 동구",
    value: "대전광역시_동구",
  },
  {
    name: "대전광역시 중구",
    value: "대전광역시_중구",
  },
  {
    name: "대전광역시 서구",
    value: "대전광역시_서구",
  },
  {
    name: "대전광역시 유성구",
    value: "대전광역시_유성구",
  },
  {
    name: "대전광역시 대덕구",
    value: "대전광역시_대덕구",
  },
  {
    name: "울산광역시",
    value: "울산광역시",
  },
  {
    name: "울산광역시 중구",
    value: "울산광역시_중구",
  },
  {
    name: "울산광역시 남구",
    value: "울산광역시_남구",
  },
  {
    name: "울산광역시 동구",
    value: "울산광역시_동구",
  },
  {
    name: "울산광역시 북구",
    value: "울산광역시_북구",
  },
  {
    name: "울산광역시 울주군",
    value: "울산광역시_울주군",
  },
  {
    name: "세종특별자치시",
    value: "세종특별자치시",
  },
  {
    name: "세종특별자치시 세종특별자치시",
    value: "세종특별자치시_세종특별자치시",
  },
  {
    name: "경기도",
    value: "경기도",
  },
  {
    name: "경기도 수원시장안구",
    value: "경기도_수원시장안구",
  },
  {
    name: "경기도 수원시권선구",
    value: "경기도_수원시권선구",
  },
  {
    name: "경기도 수원시팔달구",
    value: "경기도_수원시팔달구",
  },
  {
    name: "경기도 수원시영통구",
    value: "경기도_수원시영통구",
  },
  {
    name: "경기도 성남시수정구",
    value: "경기도_성남시수정구",
  },
  {
    name: "경기도 성남시중원구",
    value: "경기도_성남시중원구",
  },
  {
    name: "경기도 성남시분당구",
    value: "경기도_성남시분당구",
  },
  {
    name: "경기도 의정부시",
    value: "경기도_의정부시",
  },
  {
    name: "경기도 안양시만안구",
    value: "경기도_안양시만안구",
  },
  {
    name: "경기도 안양시동안구",
    value: "경기도_안양시동안구",
  },
  {
    name: "경기도 부천시",
    value: "경기도_부천시",
  },
  {
    name: "경기도 광명시",
    value: "경기도_광명시",
  },
  {
    name: "경기도 평택시",
    value: "경기도_평택시",
  },
  {
    name: "경기도 동두천시",
    value: "경기도_동두천시",
  },
  {
    name: "경기도 안산시상록구",
    value: "경기도_안산시상록구",
  },
  {
    name: "경기도 안산시단원구",
    value: "경기도_안산시단원구",
  },
  {
    name: "경기도 고양시덕양구",
    value: "경기도_고양시덕양구",
  },
  {
    name: "경기도 고양시일산동구",
    value: "경기도_고양시일산동구",
  },
  {
    name: "경기도 고양시일산서구",
    value: "경기도_고양시일산서구",
  },
  {
    name: "경기도 과천시",
    value: "경기도_과천시",
  },
  {
    name: "경기도 구리시",
    value: "경기도_구리시",
  },
  {
    name: "경기도 남양주시",
    value: "경기도_남양주시",
  },
  {
    name: "경기도 오산시",
    value: "경기도_오산시",
  },
  {
    name: "경기도 시흥시",
    value: "경기도_시흥시",
  },
  {
    name: "경기도 군포시",
    value: "경기도_군포시",
  },
  {
    name: "경기도 의왕시",
    value: "경기도_의왕시",
  },
  {
    name: "경기도 하남시",
    value: "경기도_하남시",
  },
  {
    name: "경기도 용인시처인구",
    value: "경기도_용인시처인구",
  },
  {
    name: "경기도 용인시기흥구",
    value: "경기도_용인시기흥구",
  },
  {
    name: "경기도 용인시수지구",
    value: "경기도_용인시수지구",
  },
  {
    name: "경기도 파주시",
    value: "경기도_파주시",
  },
  {
    name: "경기도 이천시",
    value: "경기도_이천시",
  },
  {
    name: "경기도 안성시",
    value: "경기도_안성시",
  },
  {
    name: "경기도 김포시",
    value: "경기도_김포시",
  },
  {
    name: "경기도 화성시",
    value: "경기도_화성시",
  },
  {
    name: "경기도 광주시",
    value: "경기도_광주시",
  },
  {
    name: "경기도 양주시",
    value: "경기도_양주시",
  },
  {
    name: "경기도 포천시",
    value: "경기도_포천시",
  },
  {
    name: "경기도 여주시",
    value: "경기도_여주시",
  },
  {
    name: "경기도 연천군",
    value: "경기도_연천군",
  },
  {
    name: "경기도 가평군",
    value: "경기도_가평군",
  },
  {
    name: "경기도 양평군",
    value: "경기도_양평군",
  },
  {
    name: "강원도",
    value: "강원도",
  },
  {
    name: "강원도 춘천시",
    value: "강원도_춘천시",
  },
  {
    name: "강원도 원주시",
    value: "강원도_원주시",
  },
  {
    name: "강원도 강릉시",
    value: "강원도_강릉시",
  },
  {
    name: "강원도 동해시",
    value: "강원도_동해시",
  },
  {
    name: "강원도 태백시",
    value: "강원도_태백시",
  },
  {
    name: "강원도 속초시",
    value: "강원도_속초시",
  },
  {
    name: "강원도 삼척시",
    value: "강원도_삼척시",
  },
  {
    name: "강원도 홍천군",
    value: "강원도_홍천군",
  },
  {
    name: "강원도 횡성군",
    value: "강원도_횡성군",
  },
  {
    name: "강원도 영월군",
    value: "강원도_영월군",
  },
  {
    name: "강원도 평창군",
    value: "강원도_평창군",
  },
  {
    name: "강원도 정선군",
    value: "강원도_정선군",
  },
  {
    name: "강원도 철원군",
    value: "강원도_철원군",
  },
  {
    name: "강원도 화천군",
    value: "강원도_화천군",
  },
  {
    name: "강원도 양구군",
    value: "강원도_양구군",
  },
  {
    name: "강원도 인제군",
    value: "강원도_인제군",
  },
  {
    name: "강원도 고성군",
    value: "강원도_고성군",
  },
  {
    name: "강원도 양양군",
    value: "강원도_양양군",
  },
  {
    name: "충청북도",
    value: "충청북도",
  },
  {
    name: "충청북도 청주시상당구",
    value: "충청북도_청주시상당구",
  },
  {
    name: "충청북도 청주시서원구",
    value: "충청북도_청주시서원구",
  },
  {
    name: "충청북도 청주시흥덕구",
    value: "충청북도_청주시흥덕구",
  },
  {
    name: "충청북도 청주시청원구",
    value: "충청북도_청주시청원구",
  },
  {
    name: "충청북도 충주시",
    value: "충청북도_충주시",
  },
  {
    name: "충청북도 제천시",
    value: "충청북도_제천시",
  },
  {
    name: "충청북도 보은군",
    value: "충청북도_보은군",
  },
  {
    name: "충청북도 옥천군",
    value: "충청북도_옥천군",
  },
  {
    name: "충청북도 영동군",
    value: "충청북도_영동군",
  },
  {
    name: "충청북도 증평군",
    value: "충청북도_증평군",
  },
  {
    name: "충청북도 진천군",
    value: "충청북도_진천군",
  },
  {
    name: "충청북도 괴산군",
    value: "충청북도_괴산군",
  },
  {
    name: "충청북도 음성군",
    value: "충청북도_음성군",
  },
  {
    name: "충청북도 단양군",
    value: "충청북도_단양군",
  },
  {
    name: "충청남도",
    value: "충청남도",
  },
  {
    name: "충청남도 천안시동남구",
    value: "충청남도_천안시동남구",
  },
  {
    name: "충청남도 천안시서북구",
    value: "충청남도_천안시서북구",
  },
  {
    name: "충청남도 공주시",
    value: "충청남도_공주시",
  },
  {
    name: "충청남도 보령시",
    value: "충청남도_보령시",
  },
  {
    name: "충청남도 아산시",
    value: "충청남도_아산시",
  },
  {
    name: "충청남도 서산시",
    value: "충청남도_서산시",
  },
  {
    name: "충청남도 논산시",
    value: "충청남도_논산시",
  },
  {
    name: "충청남도 계룡시",
    value: "충청남도_계룡시",
  },
  {
    name: "충청남도 당진시",
    value: "충청남도_당진시",
  },
  {
    name: "충청남도 금산군",
    value: "충청남도_금산군",
  },
  {
    name: "충청남도 부여군",
    value: "충청남도_부여군",
  },
  {
    name: "충청남도 서천군",
    value: "충청남도_서천군",
  },
  {
    name: "충청남도 청양군",
    value: "충청남도_청양군",
  },
  {
    name: "충청남도 홍성군",
    value: "충청남도_홍성군",
  },
  {
    name: "충청남도 예산군",
    value: "충청남도_예산군",
  },
  {
    name: "충청남도 태안군",
    value: "충청남도_태안군",
  },
  {
    name: "전라북도",
    value: "전라북도",
  },
  {
    name: "전라북도 전주시완산구",
    value: "전라북도_전주시완산구",
  },
  {
    name: "전라북도 전주시덕진구",
    value: "전라북도_전주시덕진구",
  },
  {
    name: "전라북도 군산시",
    value: "전라북도_군산시",
  },
  {
    name: "전라북도 익산시",
    value: "전라북도_익산시",
  },
  {
    name: "전라북도 정읍시",
    value: "전라북도_정읍시",
  },
  {
    name: "전라북도 남원시",
    value: "전라북도_남원시",
  },
  {
    name: "전라북도 김제시",
    value: "전라북도_김제시",
  },
  {
    name: "전라북도 완주군",
    value: "전라북도_완주군",
  },
  {
    name: "전라북도 진안군",
    value: "전라북도_진안군",
  },
  {
    name: "전라북도 무주군",
    value: "전라북도_무주군",
  },
  {
    name: "전라북도 장수군",
    value: "전라북도_장수군",
  },
  {
    name: "전라북도 임실군",
    value: "전라북도_임실군",
  },
  {
    name: "전라북도 순창군",
    value: "전라북도_순창군",
  },
  {
    name: "전라북도 고창군",
    value: "전라북도_고창군",
  },
  {
    name: "전라북도 부안군",
    value: "전라북도_부안군",
  },
  {
    name: "전라남도",
    value: "전라남도",
  },
  {
    name: "전라남도 목포시",
    value: "전라남도_목포시",
  },
  {
    name: "전라남도 여수시",
    value: "전라남도_여수시",
  },
  {
    name: "전라남도 순천시",
    value: "전라남도_순천시",
  },
  {
    name: "전라남도 나주시",
    value: "전라남도_나주시",
  },
  {
    name: "전라남도 광양시",
    value: "전라남도_광양시",
  },
  {
    name: "전라남도 담양군",
    value: "전라남도_담양군",
  },
  {
    name: "전라남도 곡성군",
    value: "전라남도_곡성군",
  },
  {
    name: "전라남도 구례군",
    value: "전라남도_구례군",
  },
  {
    name: "전라남도 고흥군",
    value: "전라남도_고흥군",
  },
  {
    name: "전라남도 보성군",
    value: "전라남도_보성군",
  },
  {
    name: "전라남도 화순군",
    value: "전라남도_화순군",
  },
  {
    name: "전라남도 장흥군",
    value: "전라남도_장흥군",
  },
  {
    name: "전라남도 강진군",
    value: "전라남도_강진군",
  },
  {
    name: "전라남도 해남군",
    value: "전라남도_해남군",
  },
  {
    name: "전라남도 영암군",
    value: "전라남도_영암군",
  },
  {
    name: "전라남도 무안군",
    value: "전라남도_무안군",
  },
  {
    name: "전라남도 함평군",
    value: "전라남도_함평군",
  },
  {
    name: "전라남도 영광군",
    value: "전라남도_영광군",
  },
  {
    name: "전라남도 장성군",
    value: "전라남도_장성군",
  },
  {
    name: "전라남도 완도군",
    value: "전라남도_완도군",
  },
  {
    name: "전라남도 진도군",
    value: "전라남도_진도군",
  },
  {
    name: "전라남도 신안군",
    value: "전라남도_신안군",
  },
  {
    name: "경상북도",
    value: "경상북도",
  },
  {
    name: "경상북도 포항시남구",
    value: "경상북도_포항시남구",
  },
  {
    name: "경상북도 포항시북구",
    value: "경상북도_포항시북구",
  },
  {
    name: "경상북도 경주시",
    value: "경상북도_경주시",
  },
  {
    name: "경상북도 김천시",
    value: "경상북도_김천시",
  },
  {
    name: "경상북도 안동시",
    value: "경상북도_안동시",
  },
  {
    name: "경상북도 구미시",
    value: "경상북도_구미시",
  },
  {
    name: "경상북도 영주시",
    value: "경상북도_영주시",
  },
  {
    name: "경상북도 영천시",
    value: "경상북도_영천시",
  },
  {
    name: "경상북도 상주시",
    value: "경상북도_상주시",
  },
  {
    name: "경상북도 문경시",
    value: "경상북도_문경시",
  },
  {
    name: "경상북도 경산시",
    value: "경상북도_경산시",
  },
  {
    name: "경상북도 의성군",
    value: "경상북도_의성군",
  },
  {
    name: "경상북도 청송군",
    value: "경상북도_청송군",
  },
  {
    name: "경상북도 영양군",
    value: "경상북도_영양군",
  },
  {
    name: "경상북도 영덕군",
    value: "경상북도_영덕군",
  },
  {
    name: "경상북도 청도군",
    value: "경상북도_청도군",
  },
  {
    name: "경상북도 고령군",
    value: "경상북도_고령군",
  },
  {
    name: "경상북도 성주군",
    value: "경상북도_성주군",
  },
  {
    name: "경상북도 칠곡군",
    value: "경상북도_칠곡군",
  },
  {
    name: "경상북도 예천군",
    value: "경상북도_예천군",
  },
  {
    name: "경상북도 봉화군",
    value: "경상북도_봉화군",
  },
  {
    name: "경상북도 울진군",
    value: "경상북도_울진군",
  },
  {
    name: "경상북도 울릉군",
    value: "경상북도_울릉군",
  },
  {
    name: "경상남도",
    value: "경상남도",
  },
  {
    name: "경상남도 창원시의창구",
    value: "경상남도_창원시의창구",
  },
  {
    name: "경상남도 창원시성산구",
    value: "경상남도_창원시성산구",
  },
  {
    name: "경상남도 창원시마산합포구",
    value: "경상남도_창원시마산합포구",
  },
  {
    name: "경상남도 창원시마산회원구",
    value: "경상남도_창원시마산회원구",
  },
  {
    name: "경상남도 창원시진해구",
    value: "경상남도_창원시진해구",
  },
  {
    name: "경상남도 진주시",
    value: "경상남도_진주시",
  },
  {
    name: "경상남도 통영시",
    value: "경상남도_통영시",
  },
  {
    name: "경상남도 사천시",
    value: "경상남도_사천시",
  },
  {
    name: "경상남도 김해시",
    value: "경상남도_김해시",
  },
  {
    name: "경상남도 밀양시",
    value: "경상남도_밀양시",
  },
  {
    name: "경상남도 거제시",
    value: "경상남도_거제시",
  },
  {
    name: "경상남도 양산시",
    value: "경상남도_양산시",
  },
  {
    name: "경상남도 의령군",
    value: "경상남도_의령군",
  },
  {
    name: "경상남도 함안군",
    value: "경상남도_함안군",
  },
  {
    name: "경상남도 창녕군",
    value: "경상남도_창녕군",
  },
  {
    name: "경상남도 고성군",
    value: "경상남도_고성군",
  },
  {
    name: "경상남도 남해군",
    value: "경상남도_남해군",
  },
  {
    name: "경상남도 하동군",
    value: "경상남도_하동군",
  },
  {
    name: "경상남도 산청군",
    value: "경상남도_산청군",
  },
  {
    name: "경상남도 함양군",
    value: "경상남도_함양군",
  },
  {
    name: "경상남도 거창군",
    value: "경상남도_거창군",
  },
  {
    name: "경상남도 합천군",
    value: "경상남도_합천군",
  },
  {
    name: "제주특별자치도",
    value: "제주특별자치도",
  },
  {
    name: "제주특별자치도 제주시",
    value: "제주특별자치도_제주시",
  },
  {
    name: "제주특별자치도 서귀포시",
    value: "제주특별자치도_서귀포시",
  },
  {
    name: "이어도",
    value: "이어도",
  },
];

const commands = new ApplicationCommand()
  .setName("날씨")
  .setDescription("위치에 따라 날씨를 알려드려요.")
  .addOption(
    new StringOption()
      .setName("도시")
      .setDescription("도시를 입력하세요.")
      .setRequired(true)
      .setAutocomplete(true)
  );

commands.options[0].autocomplete = async (interaction) => {
  const focusedValue = interaction.options.getFocused();
  const filtered = choices.filter((choice) => {
    choice.includes(focusedValue);
  });
  await interaction.respond(filtered.map((choice) => ({ name: choice.name, value: choice.value })));
};

commands.execute = async (interaction) => {
  const 도시 = interaction.options.getString("도시");
  await interaction.reply({ content: `선택한 도시는 ${도시}입니다.` });
};

/**
 * jsdoc
 * 이렇게!
 * 잘 되빈다!
 */
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
