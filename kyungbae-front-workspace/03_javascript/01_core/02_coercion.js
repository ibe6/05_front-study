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

console.log(10 + '20'); /* 문자열을 더해 자동형변환 */

console.log(`10 + 20 = ${10+20} `); /* 템플릿 리터럴에 따라 문자열로 변경 */

console.log(String(10)); /* String 생성자 함수 사용 */

console.log((10).toString());

// 2. 숫자 타입(number)으로 변환 

console.log(10 - '5'); /* 산술연산자에 의해 자동형변환 */
console.log(10 * '2');
console.log(10 / '2');
console.log(10 % '3');

console.log(10 > '5'); /* 비교연산자에 의해 자동형변환 */

console.log(Number('10')); /* Number 생성자 함수 사용 */

console.log(parseInt('10')); /* parseInt(), parseFloat() 함수 사용 */
console.log(parseFloat('10'));

console.log(parseInt('10.1'));
console.log(parseFloat('10.1'));

console.log(parseInt('10000원')); /* string 자동 삭제하고 int 변환 */

// 3. 논리 타입(boolean)으로  변환 

/* 
  자바스크립트 엔진은 boolean 타입이 아닌 값들을
  Truthy값 (참으로 평가되는 값), Falsy값 (거짓으로 평가되는 값)으로 구분함

  Truthy값 - 값이 있는 경우 (123, 45.67, -100, 'asd', [10,20], ...)
  Falsy 값 - 값이 없는 경우 ( 0, 0.0, "", undefined, null, NaN)
*/

if(true) console.log('if(true)');
if(false) console.log('if(false)');

if(undefined) console.log('if(undefined)');
if(null) console.log('if(null)');
if(0) console.log('if(0)');
if(NaN) console.log('if(NaN)');
if(10) console.log('if(10)');
if("") console.log('if("")');
