import pkg from "xlsx";
import { writeFileSync } from "fs";

const { readFile, utils } = pkg;

const excelFilePath = "data.xlsx";

// 엑셀 파일을 읽어들임
const workbook = readFile(excelFilePath);

// 첫 번째 시트를 선택
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// 시트 데이터를 JSON으로 변환
const jsonData = utils.sheet_to_json(sheet);

// 가공된 데이터를 저장할 객체
const processedData = {};

// JSON 데이터를 원하는 형태로 가공
jsonData.forEach((row) => {
  const { "1단계": first, "2단계": second, "3단계": third, "격자 X": x, "격자 Y": y } = row;

  // 기본적으로 1단계 데이터를 키로 사용

  if (second && !third) {
    // 2단계 데이터가 존재하는 경우
    if (!processedData[first]) {
      // 1단계 데이터에 대한 객체가 없는 경우 생성
      processedData[first] = {};
    }
    processedData[first][second] = { x: Number(x), y: Number(y) };
  } else {
    // 1단계 데이터에 대한 객체가 없는 경우 생성
    if (!processedData[first]) {
      processedData[first] = {};
    }
    processedData[first]["x"] = Number(x);
    processedData[first]["y"] = Number(y);
  }
});

// 가공된 데이터를 JSON 파일로 저장
const jsonFilePath = "processed_data_구조이름.json";
writeFileSync(jsonFilePath, JSON.stringify(processedData, null, 2));

console.log("JSON 파일이 생성되었습니다:", jsonFilePath);
