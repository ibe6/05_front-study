/*
  ## 즉시 실행 함수 ##
  함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
  정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행 

  보통 익명함수 사용
  기명 함수의 경우에도 사용 가능하지만 재호출 불가함
*/
(function () {
  console.log('익명 함수 즉시 실행');
})();

(function hello(name) {
  console.log("기명 함수 즉시 실행");
  console.log(name);
})('바로매개변수넘기기');



/*
  ## 중첩 함수 ##
  1. 함수 내부에서 정의된 함수를 중첩함수 또는 내부함수라고 함 
  2. 중첩함수를 포함하는 함수는 외부함수라고 함 
  3. 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 함 
  4. 외부함수는 내부함수 변수를 사용할 없음
     단, 내부함수는 외부함수의 변수를 사용할 수 있음 
*/

function outer(a) {
  console.log('외부함수', a);

  function inner(b) {
    console.log('내부함수', a, b);
  }

  inner(a + 1);
};



/*
  ## 콜백 함수 ##
  1. 인자로 다른 함수에 전달되서 실행되는 함수 
  2. 콜백함수를 전달받은 함수는 고차함수 라고 함 
  3. 즉, 콜백함수는 고차함수에 전달되어 헬퍼함수의 역할을 함 

  a 함수를 전달받은 b 함수는 본문에서 전달받은 a 함수를 다시 호출해야되므로 callback이라 함 
  a 함수 == 콜백함수
  b 함수 == 고차함수 
*/

// 경우에 따라서 즉정 값을 증가 또는 감소를 키져줘야하는 케이스
function increase(value) {
  return value + 1;
}
function decrease(value) {
  return value - 1;
}

function apply(func, value) { //변화를 일으킬 함수, 변화시킬 값
  return func(value);
}

console.log(apply(increase, 5)); //apply라는 변화를 조적하는메서드에 감소시키는 메서드와 감소시킬 값을 넘긴다.

console.log(apply(value => value * 2, 5)); //특정 값을 2배 증가시키고 싶은 경우 식을 바로 넘겨버린다.

// 로그인 처리시 아이디/비번/토큰 중에 매번 두개를 체크해야된다고 가정
/// 1. 각 요소 체크 함수 정의
const idCheck = () => console.log('아이디 체크 로직 실행');
const pwdCheck = () => console.log('비번 체크 로직 실행');
const emailCheck = () => console.log('이메일 체크 로직 실행');
const tokenCheck = () => console.log('토큰 체크 로직 실행');

/// 2. 로그인 처리용 함수 정의
const login = (check1, check2) => {
  console.log('로그인 처리를 위한 공통 로직 먼저 실행');
  ///검증 절차를 위해 전달된 두개의 체크용 함수 실행
  check1();
  check2();
};

///로그인 처리시 아이디, 비번을 체크해야됨
login(idCheck, pwdCheck);
///로그인 처리시 이메일 비번을 체크
login(emailCheck, pwdCheck);

login(idCheck, tokenCheck);

// 경우에 따라 실행시킬 구문을 내가 원하는횟수만큼 반복시켜서 실행되도록
function repeat(action, count) { //action은 메서드이다.
  for (let i = 0; i < count; i++) {
    action();
  }
}
repeat(() => console.log("do"), 5);