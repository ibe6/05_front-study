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
console.log(10 + '20');             //문자열 연결 연산자 + : 문자열이 아닌 피연산자
console.log(true + '안녕');   
console.log(`10+20=${10+20}`)       //템플릿 리터럴의 표현식 삽입 : 표현식 결과가 문자열 타입으로 암묵적으로 변환
console.log(String(10));            //String 생성자 함수 사용 : 명시적 변환
console.log(String(true));    
console.log((10).toString());       // 4) toString() 메소드 이용 : 명시적 변환
console.log((true).toString());     
console.log(10 + 20);               // 2. 숫자 타입(number)으로 변환
console.log(String(true));    

// 2. 숫자 타입(number)으로 변환     
console.log(10-'5');                //산술연산자에 의한 변환 : 숫자가 아닌 피연산자가 숫자타입으로 암묵적으로 변환
console.log(10 * 'js');             //얘는 안됨 피연산자가 문자열임
console.log(10>'5')                 //됨 true
console.log(Number('10'));          //Number 생성자 사용
console.log(Number('10.1'));
console.log(Number(true));
console.log(Number(false));
console.log(parseInt('10'));        //parseInf, Floal 함수 사용 : 명시적 변환
console.log(parseFloat('10'));
console.log(parseFloat('100000.1원')); //100000.1
console.log(Number('100000.1원'));     //NaN

// 3. 논리 타입(boolean)으로  변환
/*
논리타입이 아닌 값들을 Truthy값, 아니면 Falsy값으로 구분함
*/

if(true) console.log('실행됨');
if(false) console.log('실행안됨');

if(undefined) console.log('실행안됨');
if(null) console.log('실행안됨');
if(0) console.log('실행안됨');
if(NaN) console.log('실행안됨');
if('') console.log('실행안됨');

console.log(Boolean('js'));
console.log(Boolean(''));
console.log(Boolean('1324'));
console.log(Boolean(0));

