/*
  ## object(객체) ##
  1. 자바스크립트는 객체 기반 프로그래밍 언어로 원시값을 제외한 나머지(함수, 배열, 정규표현식 등)은 모두 객체로 취급됨
  2. 객체는 0개 이상의 프로퍼티(속성)로 구성된 집합이며 프로퍼티는 키(key)와 값(value)으로 구성됨 
  3. 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값(value)이 될 수 있음 
  4. 프로퍼티 값(value)이 함수일 경우 method라고 부름 
  5. 객체 생성 방법
     1) Java, C++ 같은 클래스 기반 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 
        new 연산자와 함께 생성자를 호출하여 인스턴스를 생성함 
     2) JavaScript는 프로토타입 기반 객체지향 언어로 클래스 기반 객체지향 언어와 달리 다양한 객체 생성 방법 지원 
     3) 종류
        ㄴ 객체 리터럴  => 가장 일반적이고 간단함 ({프로퍼티 정의})
        ㄴ Object 생성자 함수 
        ㄴ 생성자 함수
        ㄴ ...
*/

// * 객체 리터럴 ({}로 정의하는 방법)
const person = {
  // 프로퍼티 : 객체의 상태를 나타내는 값(속성)
  name: '홍길동',
  age: 20, 
  hobbies: [
    'game',
    'travel'
  ],
  home: {
    address: 'seoul',
    phone: '02-1234-5678'
  },
  getInfo: function(){
    return `${this.name}님은 ${this.age}세 입니다.`;
  }, // 프로퍼티 나열은 쉼표로 구분, 후행쉼표(trailing comma) 사용 가능
};

console.log(person);


/*
  ## 프로퍼티 키 ##
  1. 프로퍼티 값에 접근하기 위한 식별자 
  2. 문자열이므로 따옴표 사용가능하지만 식별자 네이밍 규칙을 따르는 경우 사용안해도됨 
  3. 단, 식별자 네이밍 규칙을 따르지 않는 이름은 따옴표를 반드시 사용해서 작성해야됨 

  ## 프로퍼티 값 ##
  1. 자바스크립트에서 취급할 수 있는 모든 값 허용
  2. 각 자료형에 맞는 형식대로 작성해야됨 
  3. 함수(function)을 프로퍼티 값으로 작성시 해당 객체의 메소드로 칭함
*/

const obj = {
  // 식별자 네이밍 규칙 따르는 case
  normal: 'normal case',
  // 식별자 네이밍 규칙이 아닌 case
  's p a c e': 'space use',   // 공백 사용
  'test!': 'special use',     // 특수문자 사용
  '1number': 'start number',  // 숫자로 시작
  0: 1,                       // 숫자 키는 내부적으로 문자열로 변환 
  var: 'reserved word use',   // 예약어 사용
  // 기존에 존재하는 키 중복 선언시 마지막 프로퍼티로 덮어씌워짐
  normal: 'new value'
};

console.log(obj);
/*
  ## 프로퍼티 접근 ##
  1. 마침표 표기법 (dot notation)
     ㄴ 객체.프로퍼티명
  2. 대괄호 표기법 (square bracket notation)
     ㄴ 객체['프로퍼티명']
*/

// * 마침표 표기법
console.log(obj.normal);
// console.log(obj.'s p a c e');
// console.log(obj.'test!');
// console.log(obj.'1number');
// console.log(obj.0);
console.log(obj.var);

// * 대괄호 표기법
console.log(obj['normal']);
console.log(obj['s p a c e']);
console.log(obj['test!']);
console.log(obj['1number']);
console.log(obj['0']);
console.log(obj[0]);
console.log(obj['var']);



/*
  ## 메소드 ##
  객체 내에 프로퍼티로 함수 할당시 메소드라고 함

  => 자바스크립트에서는 함수도 하나의 값으로 취급하므로 
     프로퍼티 값으로 함수를 할당할 수 있음 
*/
const movie = {
  title: '데드풀과 울버린',
  'title en': 'Deadpool',
  showTm: 128,
  openDt: '2024-07-24',
  status: '개봉',
  printActor: (flag) => {
    if(flag == '주연'){
      console.log('라이언 레이놀즈');
      console.log('휴잭맨');
    }else if(flag == '조연'){
      console.log('카란 소니');
      console.log('모레나 바카린');
    }
  },
  toString: function() {
    // 메소드 내에서 현재 객체를 가리키고자 할 경우 this.
    // 단, 화살표함수내에서는 this가 제대로 바인딩 되지 않음 => this 대신에 객체명.
    return `제목: ${this.title}, 상영시간: ${this.showTm}분, 개봉일: ${this.openDt}`;
  }
};

movie.printActor('조연');
movie['printActor']('주연');
console.log(movie.toString());

/*
  ## 동적으로 프로퍼티 추가,수정,삭제 ##
*/
// * 프로퍼티 추가 : 존재하지 않는 프로퍼티로 값 할당시 동적으로 프로퍼티 생성
movie.nation = 'usa';
// * 프로퍼티 수정 : 존재하는 프로퍼티로 값 할당시 갱신됨
movie['title en'] = 'Deadpool & Wolverine';
movie.status = '상영종료';
// * 프로퍼티 삭제 : delete 연산자로 객체명.프로퍼티명로 삭제
delete movie.showTm;

console.log(movie);


/*
  ## in 연산자 ##
  특정 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인할 수 있는 연산자
  '프로퍼티명' in 객체 => 존재하면 true, 존재하지 않으면 false
*/
const academy = {
  name: 'SSG I&C',
  address: '서울시 강남구 삼성동',
};

console.log('name' in academy);
console.log('address' in academy);
console.log('phone' in academy);

'name' in academy && console.log(academy.name);


/*
  ## for in 반복문 ##
  1. 객체가 가지고 있는 속성(property)명을 임의의 순서로 순차적으로 반환
  2. 반환되는 속성명은 string 타입이므로 속성값을 확인하기 위해서는 대괄호 표기법을 사용해야됨
  3. 조회 목적으로만 사용하는게 좋으며 추가/수정/제거는 하지 않는 것이 좋음
*/
for(let prop in academy){ // let prop = 'name';  =>  let prop = 'address';
  console.log(`프로퍼티명: ${prop}, 프로퍼티값: ${academy[prop]}`);
}