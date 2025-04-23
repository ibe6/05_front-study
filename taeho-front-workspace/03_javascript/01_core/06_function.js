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
hello('대태호'); //함수 선언문으로 정의한 함수는 함수 선언보다 위에서 호출 가능 - 호이스팅
// hi('이재이');    //함수 표현식의 경우에는 안댐

function hello(name) {
  console.log(`${name}님 안녕하세요`);
}
function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello("fe");



/*
  ## 함수 표현식 ##
  1. 함수를 변수에 저장하는 방식 
  2. 주로 익명함수를 변수에 저장하는 용도로 사용 (기명함수도 대입 가능하긴 함)

  var 변수명 = function([매개변수]) {
    실행구문
    [return 결과;]
  };

  변수명();
*/

const hi = function (name) {
  console.log(`${name}님 안녕하세요,`);
};
hi('홍길동');

const calc = function add(a, b) {
  console.log(a + b);
};
calc(1, 11);



/*
  ## 매개변수와 인자(전달값) ##
  1. 함수 호출시 전달되는 값을 인자(argument)라고 함
     해당 값을 받아주기 위해 매개변수(parameter) 정의해둬야됨 
  2. 매개변수 선언시는 선언 키워드(var, let, const) 사용하지 않음
  3. 전개 구문(Spread Syntax) 또는 arguments 배열을 이용해 0개 이상의 인자를 처리할 수 있음
  4. 인자가 전달되지 않는 경우에 사용할 디폴트값을 지정할 수 있음 
*/

const paramTest = function (param) {
  console.log(param);
}
paramTest(10);
paramTest("asd");
paramTest([1, 2, 3]);

paramTest(1, 2, 3);       //여러개 값을 배열이 아니라 그냥 넘기면 초과되는 값은 무시함

const spreadTest = function (...args) {
  for (let arg of args) {
    console.log(arg);
  }
}
spreadTest(1, 2, 4, true, 'e');

const argumentsTest = function () {
  console.log(arguments, typeof arguments);
};
argumentsTest();              //[Arguments] {} object
argumentsTest(1, "2", true);    //[Arguments] { '0': 1, '1': '2', '2': true } object


function defaulfTest(x = 0, y = 0) { //매개변수 기본값 설정, 매개변수에 맞지 않게 전달하면 undefined가 뜸. 기본값 설정 가능
  console.log(`${x}, ${y}`);
};


/*
  ## 반환 ##
  1. 함수 실행 후 특정값을 반환할때 return 구문과 함께 값 작성 
  2. return 값; 을 통해 호출한 곳으로 값이 반환되며 함수 종료
  3. return; 을 통해 함수 강제 종료 가능
*/

function welcome(name) {
  return `${name}님 환영`;
}

let welcomeResult = welcome('ewf');
console.log(welcomeResult);

const bye = function () {
  console.log('wef');
  return;
}

