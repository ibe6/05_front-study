/*
  ## JavaScript 변수 선언 방법 ##
  1. var 
  2. let
  3. const 

  ## 세가지 종류별 특징 ##
  ┌───────┬─────────────┬────────┬─────────────┬────────┬───────────┐
  │       │    scope    │ 재선언 │   할당전    │ 재할당 │   용도    │
  ├───────┼─────────────┼────────┼─────────────┼────────┼───────────┤
  │  var  │ 함수 스코프 │  가능  │  undefined  │  가능  │ 함수 변수 │
  ├───────┼─────────────┼────────┼─────────────┼────────┼───────────┤
  │  let  │ 블럭 스코프 │ 불가능 │  undefined  │  가능  │ 지역 변수 │
  ├───────┼─────────────┼────────┼─────────────┼────────┼───────────┤
  │ const │ 블럭 스코프 │ 불가능 │ 사용 불가능 │ 불가능 │   상수    │
  └───────┴─────────────┴────────┴─────────────┴────────┴───────────┘
*/


/*
  ## var ##
  ES5까지 변수를 선언할 수 있는 유일한 방법
*/
var userId;
console.log(userId); //특징1. 할당전: undefined(초기화 없이 선언 가능)

var userId = 'user01'; //특징2. 재선언: 가능(동일 스코프에서 중복 선언 허용)
console.log(userId);

userId = "user02";  //특징3. 재할당: 가능
console.log(userId); 

function varScopeTest(){
  var userPwd = "pass02";


if(true){
  var userAge = 10;
}

console.log(userPwd);   //특징4 scope: 함수 스코프라서 함수안의 또다른 블럭안에
                        //선언된 변수라면 함수 안에서 사용 가능
console.log(userAge); 
}
varScopeTest();
          //let이랑 const쓰는게 권장사항
/*
  ## let ##
  var의 단점을 보완하기 위해 ES6부터 도입된 새로운 변수 선언 키워드 
*/
let userName;
console.log(userName); // 특징1. 할당전 : undefined(초기화 없이 선언 가능)

//let userName = "홍길동"; 특징2.재선언 : 불가능(동일 스코프에 중복선언 허용x)
userName = "홍길동";
userName = "고길동";
console.log(userName); // 특징3. 재할당 가능


function letScopeTest(){
  letUserAddr = "서울";

  if(true){
    let userAge = 10;
  }
  console.log(userAddr); //특징4 : 블럭스코프여서 userAge에서 오류남
  console.log(userAge);

}
letScopeTest();


/*
  ## const ##
  let과 동일하게 var의 단점을 보완하기 위해 ES6에 도입된 키워드
  단, 상수(constant)를 선언하기 위해 사용됨 
*/




/*
  * 상수 : 재할당이 금지된 변수
           const 키워드로 선언된 변수에 원시값 할당하면 더이상 변경 불가
           일반적으로 상수명은 대문자로 선언해서 상수임을 명확하게 나타내는걸 권장
           여러 단어로 이루어진 경우 Snake Case(_사용)로 표현하는게 일반적
*/
//const hobby; // 1. 할당전 사용불가, 초기화 해야함
const hobby = "요리";
//2. 재선언 불가능

//hobby = "등산" //3. 재할당 불가능

function constScopeTest(){
  const dream = "요리사";

  if(true){
    const userAge = 10;
  }

  console.log(dream);
  console.log(userName);
}
constScopeTest();  //블럭 스코프임!!


/*
  ## 호이스팅(hoisting) ##
  1. 끌어올린다고 표현
  2. JavaScript 엔진이 해당 코드를 실행하기 전에
     var로 선언된 변수나 함수 선언문 등을 해당 scope내의 맨 상단으로 끌어올리는 것처럼 보이는 현상 
  3. 특징
     1) 특정 범위 내에서 변수가 선언된 줄 이전에 해당 변수값을 사용할 수 있음 
     2) 특정 범위 내에서 변수가 선언된 줄 이전에 해당 변수를 참조할 수 있음 (만일 초기화가 되어있지 않을 경우 undefined)
     3) 변수 선언과 동시에 초기화 하는 구문에서 변수 선언문만 분리해서 먼저 처리함 
     4) 함수가 선언된 줄 이전에 해당 함수를 호출 할 수 있음 
*/

// *var변수 호이스팅
               //실행 순서   값
console.log(x);   // 2     undefined
var x;            // 1 
x = 10;           // 3
console.log(x);   // 4       10

console.log(y);
var y = 20; // 이 순간에 호이스팅 되서 var y;만 진행이 됨. 이후에 undefined출력되고 20이 대입되고, 20 출력!


console.log(y);
//함수 호이스팅(함수 선언 위치보다 이전에 함수 호출 구문 작성가능)

/*
위의 코드 한큐에 실행시 내부적으로 실행되는 순서
var x;
var y;
console.log(x);
x = 10;
console.log(x);
console.log(y);
y = 20;
console.log(y);

/*
  ## 전역 변수 ##
  1. 특정 함수 밖에 선언된 변수
  2. 전역에서 해당 변수를 사용할 수 있음 
  
  ## 지역 변수 ##
  1. 특정 블럭(함수, 제어문 등)에서 선언된 변수
  2. 선언된 영역에서만 해당 변수를 사용할 수 있음 (var는 제외)
*/

//전역 변수
console.log(userId);
console.log(userName);
console.log(x);
console.log(y);
console.log(nokeyword);

//키워드 선언없이하면 전역변수로 잡힘