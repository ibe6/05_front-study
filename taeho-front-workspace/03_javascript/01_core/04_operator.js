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


console.log(2 ** 3);            //8
console.log(1 == '1');           //t - 타입을 떠나서 값이 같은지 확인한다 - 동등비교연산자
console.log(1 === '1');         //f - 값+타입이 같아야한다 - 일치비교연산자
console.log(1 == true);         //t - 1은 값이 있어서 true, 결국 값이 같음

console.log('apple' < 'bananananana');


/*
  ## short-circuit evaluation (단축 평가) ##
  표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것 
  피연산자1 or 피연산자2  => 피연산자1이 true일 경우 피연산자2의 과정 생략
  피연산자1 and 피연산자2 => 피연산자1이 false일 경우 피연산자2의 과정 생략
*/

let num = 1;
// if(num % 2 == 1){
//     console.log('짝');
// }else{
//     console.log('홀');
// }

num % 2 == 0 && console.log('짝');  //참일경우 실행
num % 2 == 0 || console.log('홀'); //거짓일경우 실행


var name = '' || '이름없음'; //사용자가 이름을 입력하면 입력값이 대입되고 없으면 '이름없음'이 대입된다.
console.log(name);           //이름 없음
name = '재이';
console.log(name);           // 재이 출력

var age = 0 || 20;          //숫자는 0이 기본값임


//몰라도댐
/**
 * null 병합연산자
 * 좌항의 피연산자가 null 또는 undifined일 결루 우항의 피연산자를반환하고, 아니면 좌항의 피연산자 반환이 될까요 안될까요
 */
let addr = '' ?? '주소없음';
console.log(addr);              //빈문자열 출력 : 빈문자열이 존재하는 값으로 취급되어 좌항 피연산자가 출력이 될까요 안될까요

let addr2 = null ?? '주소없음';
console.log(addr2);              //주소없음 출력