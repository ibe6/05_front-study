/*
  ## 즉시 실행 함수 ##
  함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
  정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행 
*/

(function() {
  console.log('즉시실행함수! 함수 정의와 동시에 호출');
})();
// 기명 함수도 즉시실행 가능하나 재호출 불가
(function hello(name) {
  console.log('기명함수 즉시실행!');
  console.log(`${name}님 안녕하세요`);
})('홍길동');
// hello('world');
/*
  ## 중첩 함수 ##
  1. 함수 내부에서 정의된 함수를 중첩함수 또는 내부함수라고 함 
  2. 중첩함수를 포함하는 함수는 외부함수라고 함 
  3. 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 함 
  4. 외부함수는 내부함수 변수를 사용할 없음
     단, 내부함수는 외부함수의 변수를 사용할 수 있음 
*/
(function helloWorld(command){
  console.log(`${command} hello world`);
})('ino');
function outer(a){
  console.log('외부함수', a);

  function inner(b){
    console.log('inner function', a, b);
  }

  inner(a+1);
}

outer(10);


/*
  ## 콜백 함수 ##
  1. 인자로 다른 함수에 전달되서 실행되는 함수 
  2. 콜백함수를 전달받은 함수는 고차함수 라고 함 
  3. 즉, 콜백함수는 고차함수에 전달되어 헬퍼함수의 역할을 함 

  a 함수를 전달받은 b 함수는 본문에서 전달받은 a 함수를 다시 호출해야되므로 callback이라 함 
  a 함수 == 콜백함수
  b 함수 == 고차함수 
*/

// case 1. 경우에 따라 특정 값을 증가 혹은 감소 시켜야 하는 케이스
function increase(val){
  console.log('increase');
  return val + 1;
}

function decrease(val){
  console.log('decrease');
  return val - 1;
}

// 값에 변화(증감)를 주는 함수
function apply(func, val){
  return func(val);
}

console.log(apply(increase, 10));
console.log(apply(decrease, 10));


console.log(apply(num => num*2, 10));

// case 2. 로그인 처리할 때 아이디/비번/이메일/토큰 중 2개 체크(경우에 따라 달라짐)

// 각 요소 체크 함수 정의

const idCheck = () => {
  console.log('id check logic');
}

const pwCheck = () => {
  console.log('pw check logic');
}

const mailCheck = () => {
  console.log('mail check logic');
}

const tokenCheck = () => {
  console.log('token check logic');
}

const login = (check1, check2) => {
  console.log('로그인 처리 위한 공통 로직 실행');
  check1();
  check2();
}
login(idCheck, pwCheck);

// case 3. 경우에 따라 실행시킬 구문을 내가 원하는 횟수만큼 반복실행

function repeat(action, count){
  for(i=0;i<count;i++){
    action();
  }
};

repeat(() => {console.log('hello world')}, 3);