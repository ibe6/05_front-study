/*
  ## 조건문  ##
  1. if문
     1) 자바에서의 if문 작성법과 동일
     2) else if로 여러 조건 제시 가능
     3) else로 모든 조건의 결과가 false일 경우 실행내용 작성가능

  2. switch문 
     1) 자바에서의 switch문 작성법과 동일
     2) 단, 추가로 switch문 비교대상자를 true 작성시
        case문에 조건식을 작성할 수 있음 
*/

// 나이에 따른 구분 
const age = '25';    // '25' | '' | null

let result;

if(!age) { // age가 존재하지 않을 경우   =>  "" | null
   result = '나이를 입력하지 않았습니다.';
}else{

   /*
   if(age < 0 || age > 120){
      result = "잘못된 나이";
   }else if(age <= 7){
      result = "미취학 아동";
   }else if(age <= 13){
      result = '초등학생';
   }else if(age <= 19){
      result = '청소년';
   }else {
      result = '성인';
   }
   */

   switch(true){
      case age < 0 || age > 120 : result = '잘못된 나이'; break;
      case age <= 7             : result = '미취학 아동'; break;
      case age <= 13            : result = '초등 학생'; break;
      case age <= 19            : result = '청소년'; break;
      default                   : result = '성인'; 
   }

}

console.log(`age: ${age}`);
console.log(`result: ${result}`);


/*
  ## 반복문 ##
  1. while문
     자바에서의 while문 작성법과 동일
  2. for문
     자바에서의 for문 작성법과 동일
     단, 초기식 작성시 var나 let을 통해 작성
*/

// 1부터 10까지 증가되는값 출력
let n = 1;
while(n <= 10){
   console.log(n++);
}

for(let i=1; i<=10; i++){
   console.log(i);
}