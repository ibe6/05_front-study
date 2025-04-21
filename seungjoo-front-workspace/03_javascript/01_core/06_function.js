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
  console.log(`${name}님 안녕하세요!`);

}

function hello(name){
  console.log(`${name}님 환영합니다!`);
}


hello('홍길동');



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

hello('김말똥'); //함수 선언문으로 정의한 함수는 호이스팅됨
hi("김개순");  //함수 표현식으로 정의한 함수는 호이스팅 안됨
const hi = function(name){
  console.log(`${name}님 환영합니다`);
};   //이름이 없는 익명함수가 변수에 대입하면 변수명이 곧 함수의 식별자가 됨

//동일한 이름으로 함수를 작성하는 경우 오류를 뱉음, 왜? 동일한 이름의 변수가 
//선언되려고 하므로
const calc = function add(a,b){
  console.log(a+b);
};
//단, 호출은 식별자로 해야됨
calc(10,20);
// add(10,20) => 애는 오류남


/*
  ## 매개변수와 인자(전달값) ##
  1. 함수 호출시 전달되는 값을 인자(argument)라고 함
     해당 값을 받아주기 위해 매개변수(parameter) 정의해둬야됨 
  2. 매개변수 선언시는 선언 키워드(var, let, const) 사용하지 않음
  3. 전개 구문(Spread Syntax) 또는 arguments 배열을 이용해 0개 이상의 인자를 처리할 수 있음
  4. 인자가 전달되지 않는 경우에 사용할 디폴트값을 지정할 수 있음 
*/
// 매개변수 테스트
/*function paramTest(param){ //함수 선언문
  console.log(param);
}*/

const paramTest = function(param){  //함수표현식으로 작성
    console.log(param);

};

paramTest('hello');
paramTest(10);
paramTest([1,2,3]);

paramTest('a', 'b','c'); //매개변수 수보다 더 많은 인자 전달시 초과되는 값은 무시됨
paramTest(); //매개변수 수보다 더 적은 인자 전달시 매개변수에는 초기화되지 않음 -> undefined



//* 전개구문(ES6) 테스트 ...agrs -> 전개연산자
/*function spreadTest(...args){
  console.log(args);
}*/
const spreadTest = function(...args){
  //console.log(args, typeof args); //인자값들이 담겨있는 배열임
  for(let arg of args){
    console.log(arg)
  }
};

spreadTest();
spreadTest(1,2);

//* arguments 테스트
const argumentsTest = function(){
  // >arguments : function마다 암묵적으로 하나씩 존재하는 객체
  console.log(arguments, typeof arguments);
};
argumentsTest();
argumentsTest(1,2);

// * 매개변수 기본값(ES6) 테스트
function defaultTest(x,y){
  console.log(`x: ${x}`);
  console.log(`y:${y}`);

}
defaultTest(1,2);
defaultTest(1);
defaultTest();   //디폴트값이 10,20출력


/*
  ## 반환 ##
  1. 함수 실행 후 특정값을 반환할때 return 구문과 함께 값 작성 
  2. return 값; 을 통해 호출한 곳으로 값이 반환되며 함수 종료
  3. return; 을 통해 함수 강제 종료 가능
*/
function welcome(name){
  return `${name}님 환영해요`;
  
  console.log(name);
}
let welcomeText = welcome("홍길동");

const bye = function(){
  console.log('잘가~');
  return;
};
let byetxt = bye();