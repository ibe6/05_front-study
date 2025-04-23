
/*
    ## 대괄호 표현식 ##
    1. 단일 문자 또는 조합 요소를 나타낼 때 사용
    2. 예시
*/

//연습 4. 시작부터 끝까지 숫자로만 이루어진 문자열인지 비교
regExp = /^[0-9]+$/;
console.log(regExp.test('1234')); //true

//연습 5. 시작부터 끝까지 영문자로만 이루어진 문자열인지 비교
regExp = /^[a-zA-Z]+$/;
console.log(regExp.test('HelloEveryOne'));
console.log(regExp.test(12344141));

//연습 6. 시작부터 끝까지 한글로만 이루어진 문자열인지 비교
regExp = /^[가-힣]+$/;
console.log(regExp.test('안녕하세요'));
console.log(regExp.test('HelloEveryOne'));
console.log(regExp.test(12344141));

/*
  실습. verifyName() 함수 구현하기

  1. 기능
     전달된 인자값이 이름 형식이 맞는지를 검사하여
     맞을 경우 '이름 형식이 맞습니다.' 그게 아닐 경우 '이름 형식에 맞지 않습니다' 출력
     * 이름 형식 : 한글(자음모음결합)로 2글자이상 6글자이하
  2. 인자
     검사할 이름 문자열
  3. 반환
     없음
*/
const verifyName = (name) => {
    const regExp = /^[가-힣]{2,5}$/;
    if(regExp.test(name)){
        console.log('이름 형식이 맞습니다.');
    }else{
        console.log('이름 형식에 맞지 않습니다.');
    }
};
verifyName('홍길동김김김김'); 


/*
  실습. verifyZipcode() 함수 구현하기

  1. 기능
     전달된 인자값이 우편번호 형식이 맞는지를 검사하여
     맞을 경우 '우편번호 형식이 맞습니다.' 그게 아닐 경우 '우편번호 형식에 맞지 않습니다' 출력
     * 우편번호 형식 : 숫자 5자리 
  2. 인자
     검사할 우편번호 문자열
  3. 반환
     없음
*/
const verifyZipcode = (zipcode) => {
    const regExp = /^[0-9]{5}$/;
    if(regExp.test(zipcode)){
        console.log('우편번호 형식이 맞습니다.');
    }else{
        console.log('우편번호 형식에 맞지 않습니다.');
    }
};
verifyZipcode('123457');