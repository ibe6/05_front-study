/*
  ## 함수 작성 방법 ##
  1. 함수 선언문 (function declaration)
  2. 함수 표현식 (function expression)
  3. 화살표 함수 (arrow function)
*/

/*
  ## 함수 선언문 ##
  1. 함수 이름을 결정해서 함수를 정의하는 방식 (== 기명함수 : 이름있는 함수)
  2. 단, 동일한 이름의 함수 정의시 마지막에 정의한 함수만 존재함 

  function 함수명([매개변수]){
    실행구문
    [return 결과;]
  }

  함수명();
*/
function hello(name){
  console.log(`${name}, hello.`);
}

function hello(name) {
  console.log(`${name}님 안녕`);
}

hello('mih');


/*
  ## 함수 표현식 ##
  1. 함수를 변수에 저장하는 방식 
  2. 주로 익명함수를 변수에 저장하는 용도로 사용 (기명함수도 대입 가능하긴 함)

  var|let|const 변수명 = function([매개변수]) {
    실행구문
    [return 결과;]
  };

  변수명();
*/

const hi = function(name) {
  console.log(`${name}, hello`);
};

hi(`whatisit`);

const calc = function add(a, b) {
  return a+b;
};

console.log(calc(3, 8));
console.log(add(2, 5));
/*
  ## 매개변수와 인자(전달값) ##
  1. 함수 호출시 전달되는 값을 인자(argument)라고 함
     해당 값을 받아주기 위해 매개변수(parameter) 정의해둬야됨 
  2. 매개변수 선언시는 선언 키워드(var, let, const) 사용하지 않음
  3. 전개 구문(Spread Syntax) 또는 arguments 배열을 이용해 0개 이상의 인자를 처리할 수 있음
  4. 인자가 전달되지 않는 경우에 사용할 디폴트값을 지정할 수 있음 
*/


// arguments 객체 사용 (ES5 스타일)
function sumAll() {
  let total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // 10

// Spread 문법과 Rest 매개변수(ES6 스타일)
function sumRest(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumRest(5, 10, 15)); // 30

// 4. 디폴트 매개변수 지정
function say(message = '안녕하세요') {
  console.log(message);
}
say();           // 안녕하세요
say('반갑습니다'); // 반갑습니다
 
/*
  ## 반환 ##
  1. 함수 실행 후 특정값을 반환할때 return 구문과 함께 값 작성 
  2. return 값; 을 통해 호출한 곳으로 값이 반환되며 함수 종료
  3. return; 을 통해 함수 강제 종료 가능
*/

// 1, 2. 특정 값을 반환하고 함수 종료
function multiply(a, b) {
  return a * b;
}
const result = multiply(3, 4);
console.log(result); // 12

// 3. return; 으로 함수 강제 종료
function checkNumber(num) {
  if(num <= 0) {
    console.log('0 또는 음수는 처리하지 않습니다.');
    return; // 함수 종료
  }
  console.log(`${num}은 양수입니다.`);
}
checkNumber(-5); // 0 또는 음수는 처리하지 않습니다.
checkNumber(10); // 10은 양수입니다.