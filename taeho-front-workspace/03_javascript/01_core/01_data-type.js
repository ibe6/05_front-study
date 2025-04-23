
/*
  ## JavaScript 타입(자료형) ##
  1. string
      ㄴ 단일 문자와 문자열의 구분이 없음
      ㄴ 작은따옴표('')와 큰따옴표("") 모두 사용가능 (+ 백틱(``)도 사용 가능)
  2. number
      ㄴ 정수와 실수 구분이 없음  (123과 123.0은 같은 타입)
      ㄴ 추가로 NaN(Not a Number), Infinity, -Infinity가 있음
  3. boolean
      ㄴ true / false의 값을 가짐 
  4. object
      ㄴ 객체 자료형으로 메소드(method)와 속성(property)를 가지는 데이터
      ㄴ 배열, {}, 요소 등의 타입이 모두 object
  5. function
      ㄴ 함수 자료형
  6. undefined
      ㄴ 선언 후 값을 할당하지 않은 변수 (즉, 초기화가 되어있지 않은 변수)
      ㄴ 또는 값이 전달되지 않은 매개변수
*/


/*
  ## 숫자 타입 ##
  1. number
  2. 자바스크립트의 경우 하나의 숫자 타입만 존재
  3. 모든 수를 실수로 취급함 
  4. 추가적으로 특별한 값도 표현가능 
     1) Infinity  : 양의 무한대
     2) -Infinity : 음의 무한대
     3) NaN       : 산술 연산 불가(not-a-number)
*/
var integer = 10;
var double = 5.5;
var negative = -10;

console.log(integer, typeof (integer));
console.log(double, typeof (double));
console.log(negative, typeof (negative));
console.log(10 / 4);



/*
  ## 문자열 타입 ##
  1. string
  2. 텍스트 데이터를 나타내는데 사용
  3. 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트 데이터를 감싸서 표현
  4. 자바는 문자열을 객체로 표현하지만 자바스크립트의 문자열은 원시(primitive) 타입이다
*/
var string;
string = 'js';
string = 'jss'
string = '작은 따음표로 감싼 문자열내의 ""는 문자열로취급';
string = "큰따음표로 감싼 문자열 내의''는 문자열로 취급";
string = `백틱으로 감싼 문자열 내의 ""과''는 문자열로 취급`
console.log(string, typeof string);



/*
  ## 템플릿 리터럴 ##
  1. ES6부터 도입된 멀티라인 문자열
  2. 표현식 삽입(${}) 등 편리한 문자열 처리 기능을 제공 
  3. 백틱(``)으로 표현
*/
var str = '안녕하세요.\n반갑습니다.';
var multiline = `안
녕
하
세
요
이렇게백틱쓰면
할수잇ㅁㄴㅇ`;

console.log(str);
console.log(multiline);

var lastName = '이';
var firstName = '서연';
console.log('옆에 애 이름은' + lastName + firstName + '입니다.');

console.log(`옆에애 이름은 ${lastName}${firstName}입니다.`);






/*
  ## 논리 타입 ##
  1. boolean
  2. 논리적 참, 거짓을 나타내는 true, false 값 취급
*/

var flag = true;
flag = false;

console.log(flag, typeof (flag));



/*
  ## undefined ##
  1. var로 선언한 변수에 직접 값을 초기화 하지 않으면 
     암묵적으로 undefined로 초기화 됨 
  2. 따라서 직접 초기화 하지 않은 변수를 참조하면 undefined가 반환됨 
  3. undefined는 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값 
*/

var undef;
console.log(undef, typeof (undef));




/*
  ## null ##
  1. 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
  2. 이전에 할당 되어 있던 값에 대한 참조를 제거하는 것을 의미함
*/

var nullVal = 'something';
nullVal = null;
console.log(nullVal, typeof (nullVal));



/*
  ## object ##
  1. 객체 타입 (자바스크립트는 크게 원시(primitive)타입 / 객체타입으로 분류)
  2. 자바스크립트의 거의 모든 것이 객체 (배열, 함수 등등..)
     number, string, boolean, undefined, null, symbol 외의 모든 값을 객체로 취급 
*/

var user = {
  name: '대태호',
  age: 1,
  height: 130
};


console.log(user);
console.log(user.age);

/*
  * 정적 타입(static/strong type) 언어
    1) C, C++, Java, Kotlin 등
    2) 변수 선언시 데이터 타입을 사전에 선언(명시적 타입 선언)해야됨 (static type)
    3) 변수 타입 변경 불가 (strong type)
    4) 타입에 맞는 데이터만 할당 가능 
    5) 장단점
       - 장점 : 신뢰성이 높음 
       - 단점 : 유연성이 떨어짐 

  * 동적 타입(dynamic/weak type) 언어
    1) JavaScript, Python 등
    2) 변수 선언시 데이터 타입을 사전에 선언하지 않음
    3) 변수 선언이 아닌 할당(대입)에 의해 타입이 결정됨 (dynamic type)
    4) 재할당에 의해 변수 타입은 언제든지 변경 될 수 있음 (weak type)
    5) 장단점
       - 장점 : 유연성이 높음
       - 단점 : 신뢰성이 떨어짐
*/

var test;
console.log(typeof test);
test = 1;
console.log(typeof test);
test = 'js';
console.log(typeof test);

