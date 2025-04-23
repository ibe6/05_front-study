/*
  ## 메소드 단축 ##
  ES6에서는 객체 내의 메소드 정의시 function 키워드를 생략한 축약 표현을 사용할 수 있음
*/

const dog1 = {
  name: '뽀삐',
  eat: function (food) {
    console.log(`${this.name}은(는) ${food}을(를) 맛있게 먹어요.`);
  }
};
// ES6 => 메소드 단축 o
const dog2 = {
  name: '해피',
  eat(food) {
    console.log(`${this.name}은(는) ${food}을(를) 맛있게 먹어요.`);
  }
};
dog2.eat('고구마');

/*
  ## 프로퍼티 값 단축 구문 ##
  ES6에서는 특정 변수를 객체의 프로퍼티로 바로 정의할 수 있음 
  단, 프로퍼티명(키)은 변수 이름으로 부여됨 
*/
let id = 'qwe';
let price = 3000;
let product1 = {
  id: id,
  price: price
};


let product2 = { id, price };
console.log(product2);

/*
  ## 구조 분해 할당 ##
  1. Destructuring Assignment
  2. 객체의 각 프로퍼티값을 개별 변수에 쉽게 할당할 수 있는 문법
  3. 단, 변수명을 객체의 프로퍼티명과 동일하게 맞춰야됨 
  4. 형식
     {변수1, 변수2, ..} = 객체;
*/

const car = {
  maker: '벤틀리',
  model: '비싼거',
  year: 2025
};

// let maker = car.maker;   직접 변수에 대입 안됨:구조분해할당X

// let {maker, model, year} = car;  구조 분해 할당O


let maker, model, year;              //선언후 구조분해할당
({ maker, model, year } = car);


const qna = {
  q: '한국의 수도는?',
  a: 'LA'
};

let { q: question, a: answer } = qna; //변수명을 기존 프로퍼티와 다르게하고싶을 때


