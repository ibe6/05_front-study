/*
  ## implicit-coercion ##
  1. 암묵적 타입 변환
  2. 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것 
  3. 암묵적 타입 변환은 코드에서 드러나지 않으므로 타입 변환된 결과를 예측할 수 있어야 오류 방지 가능 

  ## explicit-coercion ##
  1. 명시적 타입 변환
  2. 개발자의 의도에 따라 값의 타입을 변환시키는 것 
  3. 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 사용하는 방법,
     빌트인 메소드를 사용하는 방법이 있음 
*/

// 1. 문자열 타입(string)으로 변환 

// 1) 문자열 연결 연산자(+) : 문자열이 아닌 피연산자가 문자열 타입으로 암묵적으로 변환 
console.log(10 + '20');     // '1020'
console.log(true + '안녕'); // 'true안녕'

// 2) 템플릿 리터럴의 표현식 삽입 : 표현식 결과가 문자열 타입으로 암묵적으로 변환 
console.log(`10 + 20 = ${10 + 20}`);

// 3) String 생성자 함수 이용 : 명시적 변환
console.log(String(10));    // '10'
console.log(String(true));  // 'true'

// 4) toString() 메소드 이용 : 명시적 변환
console.log((10).toString());   // '10'
console.log((true).toString()); // 'true'

// -------------------------------------------------------------

// 2. 숫자 타입(number)으로 변환 

// 1) 산술연산자에 의한 변환 : 숫자가 아닌 피연산자가 숫자타입으로 암묵적으로 변환
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');
console.log(10 * 'JavaScript'); // NaN - 숫자로 변환이 불가한 피연산자이므로

// 2) 비교연산자에 의한 변환 : 숫자가 아닌 피연산자가 숫자타입으로 암묵적으로 변환
console.log(10 > '5');

// 3) Number 생성자 함수 이용 : 명시적 변환 
console.log(Number('10'));
console.log(Number('10.1'));
console.log(Number(true));
console.log(Number(false));

// 4) parseInt(), parseFloat() 함수 이용 : 명시적 변환 
console.log(parseInt('10'));
console.log(parseFloat('10'));

console.log(parseInt('10.01'));
console.log(parseFloat('10.01'));

console.log(parseInt('10000.1원'));   // 10000
console.log(parseFloat('10000.1원')); // 10000.1
console.log(Number('10000.1원'));     // NaN

// --------------------------------------------------------

// 3. 논리 타입(boolean)으로  변환 

/*
  자바스크립트 엔진은 boolean 타입이 아닌 값들을 
  Truthy값(참으로 평가되는 값), Falsy값(거짓으로 평가되는 값)으로 구분함 

  Truthy값 - 값이 있는 경우 ( 123, 45.67, -100, "ㅋㅋ", [10, 20], ... )
  Falsy값  - 값이 없는 경우 ( 0, 0.0, "", undefined, null, NaN )
*/

// 1) 암묵적 변환 
if(true) console.log('if(true)');
if(false) console.log('if(false)');

if(undefined) console.log('if(undefined)');
if(null) console.log('if(null)');
if(0) console.log('if(0)');
if(NaN) console.log('if(NaN)');
if(10) console.log('if(10)');
if('') console.log('if("")');
if('안녕') console.log('if("안녕")');

// 2) Boolean 생성자 함수 이용 : 명시적 변환 
console.log(Boolean('JavaScript'));
console.log(Boolean(''));
console.log(Boolean(1234));
console.log(Boolean(0));