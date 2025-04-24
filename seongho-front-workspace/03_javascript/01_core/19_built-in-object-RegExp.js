/*
  ## 정규표현식 ##
  1. Regular Expression
  2. 어떤 문자열이 특정 패턴을 가지고 있는지 확인하기 위한 표현식
  3. 정규표현식을 잘 쓰게 되면 복잡한 조건식으로 검사할 필요가 없어짐
  4. 문자열을 대상으로한 패턴 매칭 기능을 제공하므로 유효한 데이터임을 확인하는 검증 절차에서 주로 사용 (유효성 체크)
  5. 정규 표현식은 대부분의 프로그래밍 언어와 코드 에디터에 내장되어 있음 
  6. JavaScript 정규식 작성 예시
     1) 리터럴 표기법
        const reg = /pattern/
        const reg = /pattern/flags
     2) 생성자 이용
        const reg = new RegExp('pattern');
        const reg = new RegExp(/pattern/);
        const reg = new RegExp('pattern', 'flags');
        const reg = new RegExp(/pattern/, 'flags');
  7. 정규식 관련 주요 메소드
     1) RegExp.prototype.test(targetStr) : 검색대상 문자열 중 정규식 패턴과 일치하는 부분이 있으면 true / 아니면 false 반환
     2) String.prototype.search(regExp)  : 검색대상 문자열 중 정규식 패턴과 일치하는 부분의 시작 인덱스 반환 / 없으면 -1 반환
     3) String.prototype.replace(regExp, changeStr) : 검색대상 문자열에서 정규식과 일치하는 부분을 바꿀 값으로 치환해서 반환  
*/

// 검색대상의 문자열
const targetStr = 'JavaScript';

// 패턴 검사를 위한 정규식 
// 1) 정규표현식 리터럴로 생성
let regExp = /j/i;   // 패턴 : j , 플래그 : i

// 2) RegExp 생성자 함수로 생성
regExp = new RegExp('j', 'i');
regExp = new RegExp(/j/, 'i');
regExp = new RegExp(/j/i);

console.log(regExp.test(targetStr));
console.log(targetStr.search(regExp));
console.log(targetStr.replace(regExp, '*'));



/*
  ## 정규식 메타 문자 ##
  1. 정규식에서 특별한 의미를 가지는 문자를 의미
  2. 검색 조건으로 삼을 특정 패턴을 제시할 수 있음
  3. 주요 메타 문자
     1) . : 모든 단일 문자를 의미
            ex) b.at    → (O) baat, bbat, bcat, bdat / (X) bat, baaat

     2) * : 0개 이상의 문자를 의미
            ex) good*   → (O) goo, good, goodd, gooddd

     3) + : 1개 이상의 문자를 의미
            ex) good+   → (O) good, gooddd / (X) goo

     4) ? : 0개 또는 1개 문자를 의미
            ex) colou?r → (O) color, colour / (X) colouuur

     5) ^ : 시작 문자를 의미
            ex) ^a      → (O) app, apple, asia / (X) banana, kiwi

     6) $ : 종료 문자를 의미
            ex) end$    → (O) end, the end, legend / (X) ending

     7) () : 괄호 내의 문자를 하나의 그룹으로 간주
             ex) (app)+A → (O) appA, appappA, appappappA / (X) appapA

     8) | : 또는을 의미
            ex) a(b|c)  → (O) ab, ac / (X) ad

     9) \ : 이미 정규식에서 사용되고 있는 메타문자를 일반 문자로 간주하고자 할 때 사용
            ex) \*, \., \?, ..

    10) {m} : m개의 문자를 의미  
              ex) a{3}  → (O) aaa
    
    11) {m,} : m개 이상의 문자를 의미
              ex) a{3,} → (O) aaa, aaaa, aaaaa, ..
      
    12) {,n} : n개 이하의 문자를 의미
              ex) a{,3} → (O) a, aa, aaa

    13) {m,n} : m개 이상 n개 이하의 문자를 의미
              ex) a{2,3} → (O) aa, aaa
*/

// 연습1. j로 시작하는 문자열인지 비교
regExp = /^j/;
console.log(regExp.test('javascript'));
console.log(regExp.test('jQuery'));
console.log(regExp.test('html'));
console.log(regExp.test('JavaScript'));

// 연습2. j로 시작하고 t로 끝나는 문자열인지 비교
regExp = /^jt$/;     // 부정확함
console.log(regExp.test('javascript'));
console.log(regExp.test('jt'));

regExp = /^j.+t$/;
console.log(regExp.test('javascript'));
console.log(regExp.test('jQuery'));

// 연습3. g로 시작하고 d로 끝나는데 그 사이에 o문자가 2글자 이상인지 비교
regExp = /^go{2,}d$/;
console.log(regExp.test('god'));
console.log(regExp.test('good'));
console.log(regExp.test('goood'));


/*
  ## 대괄호 표현식 ##
  1. 단일 문자 또는 조합 요소를 나타낼 때 사용
  2. 예시
     1) [ab]    : 문자 a 또는 b 를 의미 (| 안써도됨)
     2) [a-d]   : 문자 a 부터 d 까지를 의미 (즉, 문자 a, b, c, d 중 한개를 의미)
     3) [a-z]   : 영문 소문자 한개를 의미
     4) [A-Z]   : 영문 대문자 한개를 의미
     5) [0-9]   : 숫자 한개를 의미
     6) [가-힣] : 한글 한 글자를 의미 
*/

// 연습4. 시작부터 끝까지 숫자로만 이루어진 문자열인지 비교
regExp = /^[0-9]+$/;
console.log(regExp.test('123908734876123'));
console.log(regExp.test('123908강734876123'));

// 연습5. 시작부터 끝까지 영문자로만 이루어진 문자열인지 비교
regExp = /^[a-zA-Z]+$/;
console.log(regExp.test('HelloEveryOne'));
console.log(regExp.test('Hello EveryOne'));

// 연슴6. 시작부터 끝까지 한글로만 이루어진 문자열인지 비교
regExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
console.log(regExp.test('안녕하세요'));
console.log(regExp.test('ㅋㅋㅋㅋㅏㅏㅏㅏ'));


/*
  실습. verifyName() 함수 구현하기

  1. 기능
     전달된 인자값이 이름 형식이 맞는지를 검사하여
     맞을 경우 '이름 형식이 맞습니다.' 그게 아닐 경우 '이름 형식에 맞지 않습니다' 출력
     * 이름 형식 : 한글(자음모음결합)로 2글자이상 5글자이하
  2. 인자
     검사할 이름 문자열
  3. 반환
     없음
*/
const verifyName = (name) => {
  let regExp = /^[가-힣]{2,5}$/;
  if(regExp.test(name)){
    console.log('이름 형식이 맞습니다.');
  }else{
    console.log('이름 형식에 맞지 않습니다.');
  }
};

const nameArr = ['강보람', '강철', '강', 'John', '크리스티나'];
nameArr.forEach( name => verifyName(name) );


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
const verifyZipcode = (code) => {
  let regExp = /^[0-9]{5}$/;
  if(regExp.test(code)){
    console.log('우편번호 형식이 맞습니다.');
  }else{
    console.log('우편번호 형식에 맞지 않습니다');
  }
};

const zipcodeArr = ['08240', '08192', 'abcde', '123456'];
zipcodeArr.forEach( zipcode => verifyZipcode(zipcode) );



/*
  ## 이스케이프 문자 ## 
  1. \d : 숫자를 의미 (즉, [0-9] 와 동일)
  2. \D : 숫자가 아님을 의미 (즉, [^0-9] 와 동일)
  3. \w : 숫자/영문자/밑줄을 의미 (즉, [a-zA-Z0-9_] 와 동일)
  4. \W : 숫자/영문자/밑줄이 아님을 의미 (즉, [^a-zA-Z0-9_] 와 동일)
  5. \s : 단일 공백 문자를 의미 (스페이스/탭/폼피드/라인피드)
  6. \S : 단일 공백 문자가 아님을 의미
*/

// 연습7. 첫글자는 반드시 숫자이고 그 이후에는 숫자/영문자/밑줄로 이루어져있는지 비교
regExp = /^\d\w+$/;
console.log(regExp.test('1us23_sDf'));
console.log(regExp.test('uerw01_'));
console.log(regExp.test('99wqrjk!_sdf'));


/*
  ## 플래그 문자 ##
  1. g : 전역 탐색              (global)
  2. i : 대소문자 구분없이 탐색 (ignore)
  3. m : 여러줄 탐색            (multiple-line)
*/

// 연습8. 첫글자가 대소문자를 가리지 않고 j로 시작하는지 비교 
regExp = /^j/i;
console.log(regExp.test('javascript'));
console.log(regExp.test('JavaScript'));

// 연습9. j로 시작하는 부분을 찾아서 (***) 로 치환
console.log('javascript'.replace(regExp, '(***)'));
console.log('javascript\nJavaScript'.replace(regExp, '(***)'));

regExp = /^j/igm;
console.log('javascript\nJavaScript'.replace(regExp, '(***)'));


/*
  실습. verityMobile() 함수 구현하기
  
  1. 기능 
     전달된 인자값이 휴대전화번호 형식이 맞는지를 검사하여
     맞을 경우 '전화번호 형식이 맞습니다.' 그게 아닐 경우 '전화번호 형식에 맞지 않습니다' 출력
     * 전화번호 형식 : 010-숫자4자리-숫자4자리
  2. 인자
     검사할 전화번호 문자열
  3. 반환
     없음
*/
const verifyMobile = (phone) => {
  let regExp = /^010(-\d{4}){2}$/;
  console.log(regExp.test(phone) ? '전화번호 형식이 맞습니다.' : '전화번호 형식에 맞지 않습니다');
};

verifyMobile('010-abcd-5678');

/*
  실습. verifyId() 함수 구현하기

  1. 기능 
     전달된 인자값이 아이디 형식이 맞는지를 검사하여
     맞을 경우 '아이디 형식이 맞습니다.' 그게 아닐 경우 '아이디 형식에 맞지 않습니다' 출력
     * 아이디 형식 : 소문자|숫자|특수문자(-_)로만 구성, 첫글자는 소문자, 총 5~20자
  2. 인자
     검사할 아이디 문자열
  3. 반환
     없음
*/
const verifyId = (id) => {
  let regExp = /^[a-z][a-z0-9-_]{4,19}$/;
  console.log(regExp.test(id) ? '아이디 형식이 맞습니다.' : '아이디 형식에 맞지 않습니다');
};

verifyId('user_01');