/*
  1. 산술 연산자
      1) 더하기 : +      5 + 2 == 7
      2) 빼기   : -      5 - 2 == 3
      3) 곱하기 : *      5 * 2 == 10
      4) 나누기 : /      5 / 2 == 2.5
      5) 나머지 : %      5 % 2 == 1
      6) 제곱   : **     5 ** 2 == 25

  2. 증감 연산자
      1) 증가 : ++
      2) 감소 : --

  3. 대입 연산자 / 복합 대입 연산자
      1) 대입      : =
      2) 복합 대입 : +=, -=, *=, **=, /=, %=

  4. 비교 연산자
      1) greater than          : >
         greater than equal    : >=
      2) less than             : <
         less than equal       : <=
      3) equal value           : ==      1 == '1'  결과는 true
         equal value, type     : ===     1 === '1' 결과는 false
      4) not equal value       : !=
         not equal value, type : !==

      * 동등/일치 비교 연산자
        동등 비교(loose equality) 연산자와 일치 비교(strict equality) 연산자는 비교의 엄격 정도가 다름 
        동등 비교(==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교 
        일치 비교(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교 

  5. 논리 연산자
      1) 논리 AND : &&   (short circuit 지원)
      2) 논리 OR  : ||   (short circuit 지원)
      3) 논리 NOT : !

  6. 조건 연산자 (삼항 연산자)
      조건식 ? true일 때 반환값 : false일 때 반환값

  7. 문자열 연결 연산자
      +, +=

*/

console.log(2 ** 3);                // 8

// 숫자1, 문자'1' 비교
console.log(1 == '1');      // 동등비교연산자 (값만 체크)
console.log(1 === '1');     // 일치비교연산자 (값 + 타입 체크)

console.log(1 == true);
console.log(1 === true);

// 문자열간의 대소비교 (유니코드 순으로 비교)
console.log('apple' < 'banana');
console.log('cat' > 'Zoo');


/*
  ## short-circuit evaluation (단축 평가) ##
  표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것 

  피연산자1 or 피연산자2  => 피연산자1이 true일 경우 피연산자2의 과정 생략
  피연산자1 and 피연산자2 => 피연산자1이 false일 경우 피연산자2의 과정 생략
*/

// * if문 대체 
let num = 1;

/*
if(num % 2 == 0){
    console.log('짝수입니다.');
}else{
    console.log('홀수입니다.');
}
*/

// 조건 && 조건이 참일 경우 실행구문 
num % 2 == 0 && console.log('짝수입니다.');
// 조건 || 조건이 거짓일 경우 실행구문 
num % 2 == 0 || console.log('홀수입니다.');


// * 기본값 설정 
//   변수 = 대입할값 || default값;
let name = '' || '이름없음'; // '' 자리가 사용자 입력값이라고 가정, 만일 입력값이 없을 경우 기본값을 대입하고자 할 때 
console.log(name);

let age = 0 || 20;
console.log(age);

// '', 0 => 값이 없다로 판별 == Falsy값 (false로 간주)


/*
    ## nullish-coalescing-operator(null 병합 연산자, ??) ##
    ES11(ECMAScript2020)에 도입된 연산자로
    좌항의 피연산자가 null 또는 undefined일 경우 우항의 피연산자를 반환하고
    그렇지 않으면 좌항의 피연산자 반환 => 기본값 설정시 사용
*/
// let addr = '' ?? '주소없음';   // '' 대입
let addr = null ?? '주소없음';    // '주소없음' 대입
console.log(addr);