/*
  ## 즉시 실행 함수 ##
  함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
  정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행 
*/
// 익명 함수를 사용하는게 일반적임
(function() {
  console.log('즉시실행함수');
})();

// 기명 함수도 즉시실행 가능, 재호출 불가
(function hello(name){
  console.log('기명함수 즉시실행');
  console.log(`${name}님 안녕하세요.`);
})('길동');

// hello('나이스'); // 오류발생

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

  inner (a + 1);
  
  function inner(b){
    console.log('내부함수', a, b); // 내부함수에서 외부함수 변수 사용 가능
  }

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

// 특정값을 경우에 따라 증가 또는 감소
function increase(value) { // 전달값을 1증가
  return value + 1;
}
function decrease(value) { // 전달값 감소
  return value - 1;
}

// 값에 변화를 주는 함수
function apply(func, value) { // 첫번째 인자로는 어떻게 변화시킬껀지의 함수, 두번쨰 인자로는 변화시킬 값
  return func(value);
}

console.log(apply(increase, 5));

console.log(apply(decrease, 5));

// 특정값을 2배 증가
console.log(apply(a => a*2, 5));

/* ------------------------------------------------------- */

// 로그인 처리할 떄 아이디/비번/이메일/토큰 중에 매번 2개를 체크해야할 경우

// 요소 체크 함수
const idCheck = () => console.log('아이디 체크');
const pwdCheck = () => console.log('비번 체크');
const emailCheck = () => console.log('이메일 체크');
const tokenCheck = () => console.log('토큰 체크');

// 로그인 처리 함수
const login = (check1, check2) => {
  console.log('로그인 처리 공통 로직');
  // 검증절차
  check1();
  check2();
};

login(idCheck, pwdCheck);

login(emailCheck, pwdCheck);

login(idCheck, tokenCheck);