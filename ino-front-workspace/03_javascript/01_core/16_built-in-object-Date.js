/*
  ## Date ##
  특정 날짜 및 시간 정보를 가지는 내장 객체

  1. Date() 생성자
      → 특정 날짜와 시간을 가진 Date 객체를 반환
      → 호출 형식
        1) new Date()
        2) new Date(value)                 // value : unix timestamp (1970-01-01 0:00:00 초부터 카운트하는 시간(단위:밀리초))
        3) new Date(dateString)            // 문자열 인식의 경우 동작이 일관적이지 않으므로 사용 안 하기를 권장
        4) new Date(year, monthIndex)      // monthIndex : 0 ~ 11
        5) new Date(year, monthIndex, day)
        6) new Date(year, monthIndex, day, hours)
        7) new Date(year, monthIndex, day, hours, minutes)
        8) new Date(year, monthIndex, day, hours, minutes, seconds)
        9) new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
*/

console.log(new Date(0));
console.log(new Date(24 * 60 * 60 * 1000)); // 1 day past( hour * min * sec * millisec)
console.log(new Date('2025/07/29/17:50:00')); // -> 9시간 전  시간 표기(KST - 9)
console.log(new Date(2025, 6, 29, 17, 50,30, 500));
/*
  ## Date 메소드 ##

  1. Date.now()
     → 현지 시간을 타임스탬프 형식으로 반환

  2. Date.prototype.getFullYear()
     → 현지 시간 기준 연도 반환
  
  3. Date.prototype.getMonth()
     → 현지 시간 기준 월 반환 (0 - 11)

  4. Date.prototype.getDate()
     → 현지 시간 기준 일 반환 (1 - 31)

  5. Date.prototype.getDay()
     → 현지 시간 기준 요일 반환 (일 - 토 => 0 - 6)

  6. Date.prototypye.getHours()
     → 현지 시간 기준 시 반환 (0 - 23)

  7. Date.prototype.getMinutes()
     → 현지 시간 기준 분 반환 (0 - 59)

  8. Date.prototype.getSeconds()
     → 현지 시간 기준 초 반환 (0 - 59)
  
  9. Date.prototype.getMiliseconds()
     → 현지 시간 기준 밀리초 반환 (0 - 999)
  
  10. Date.prototype.getTime()
      → 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초 반환

  11. Date.prototype.toXXXString
      → 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜 반환 
*/

console.log(Date.now());
console.log(new Date().getTime());

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // 0 - 11 

console.log(date.toISOString());
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toTimeString());