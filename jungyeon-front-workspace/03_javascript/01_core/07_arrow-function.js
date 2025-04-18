/*
  ## 화살표 함수 ##
  1. arrow function
  2. 람다 함수라고도 표현 
  3. ES6에 도입
  4. function 키워드 대신에 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있음 
     => 가독성을 높이고 간단한게 표현 가능 
     => 본문이 한 줄인 함수 작성시 유용
  5. 익명함수만 화살표함수로 정의할 수 있음 
  6. 단, 화살표함수에서는 arguments를 지원하지 않음 
  7. 작성법 : () => { 실행내용 }
     1) (): 매개변수 작성란
     2) {}: 함수내의 코드 작성란 
  8. 특징
     1) 단일 매개변수일 경우 소괄호() 생략 가능
     2) 단일 실행문일 경우 중괄호{} 생략 가능
     3) 별도의 실행내용 없이 결과값만 존재할 경우 return 생략 가능 
*/

// case 1.
// 함수표현식
const exp1 = function(){
   console.log('exp1');
};
// 화살표함수
const arrow1 = () => console.log('arrow1'); // 단일 실행문은 {} 생략 가능

arrow1();

// case 2.
// 함수표현식
const exp2 = function(a){
   console.log('exp2');
   console.log(a);
};
// 화살표함수
const arrow2 = a => { // 단일 매개변수는 () 생략 가능
   console.log('arrow2');
   console.log(a);
};

arrow2(10);

// case 3.
// 함수표현식
const exp3 = function(a, b){
   console.log('exp3');
   console.log(a, b);
   return a + b;
};
// 화살표함수
const arrow3 = (a, b) => {
   console.log('arrow3');
   console.log(a, b);
   return a + b;
};

const result3 = arrow3(10, 20);
console.log(result3);

// case 4.
// 함수표현식
const exp4 = function(x, y) {
   return x * y;
};
// 화살표함수
const arrow4 = (x, y) => x * y; // 별도의 실행문 없이 바로 특정값 반환일 경우 {}와 return 생략 가능 

const result4 = arrow4(10, 20);
console.log(result4);


// case 5. 화살표함수에서는 arguments 사용불가 => 전개연산자로 대체
const arrow5 = () => console.log(arguments);
arrow5(10, 20, 30); // 오류는 안나지만 출력결과가 기존의 arguments와 다름 (사용 불가)

const arrow6 = (...args) => console.log(args);
arrow6(10, 20, 30);