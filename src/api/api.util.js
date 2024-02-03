export const getCurrentKRTime = () => {
  // 1. 현재 시간(Locale)
  const curr = new Date();
  console.log(curr);
  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  console.log(utc);
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  // 4. KST 반환
  console.log("한국 현재 시간", kr_curr);
  return kr_curr;
};

export const getTargetTimeZone = (date) => {
  const time = new Date(date);

  const targetTime = String(
    time.getMinutes() > 40 ? time.getHours() : time.getHours() - 1
  ).padStart(2, "0");

  const targetDate =
    Number(targetTime) > -1
      ? time.getFullYear() +
        String(Number(time.getMonth() + 1)).padStart(2, "0") +
        String(Number(time.getDate())).padStart(2, "0")
      : time.getFullYear() +
        String(Number(time.getMonth() + 1)).padStart(2, "0") +
        time.getDate() -
        1;

  return [targetDate, targetTime];
};
