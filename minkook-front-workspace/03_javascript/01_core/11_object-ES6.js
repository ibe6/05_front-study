/*
  ## 메소드 단축 ##
  ES6에서는 객체 내의 메소드 정의시 function 키워드를 생략한 축약 표현을 사용할 수 있음
*/



/*
  ## 프로퍼티 값 단축 구문 ##
  ES6에서는 특정 변수를 객체의 프로퍼티로 바로 정의할 수 있음 
  단, 프로퍼티명(키)은 변수 이름으로 부여됨 
*/



/*
  ## 구조 분해 할당 ##
  1. Destructuring Assignment
  2. 객체의 각 프로퍼티값을 개별 변수에 쉽게 할당할 수 있는 문법
  3. 단, 변수명을 객체의 프로퍼티명과 동일하게 맞춰야됨 
  4. 형식
     {변수1, 변수2, ..} = 객체;
*/

const car = {
  maker: 'bmw',
  model : 'x6',
  year : 2024
};

//구조 분해 할당 x => 직접 변수에 대입
// let maker = car.maker;
// let model = car.model;
// let year = car.year;

// *구조 분해 할당 o
let {maker, model, year} = car; //객체의 프로퍼티명을 변수명으로 사용하여 구조 분해 할당

console.log(maker,model,year); //bmw


//변수명을 프로퍼티명과 다르게 하고 싶을떄

const qna = {
  q : '한국의 수도는?',
  a : '서울'
};

let {q : question, a : answer} = qna;

console.log(question);
console.log(answer);