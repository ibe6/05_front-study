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

// 객체 리터럴로 정의
const person = {
  //프로퍼티 : 객체의 상태를 나타내는 값(속성)
  name: '나',
  age: 20,
  hobbies: [  //프로퍼티로 배열 ㄱㄴ
    'game',
    'travel'
  ],
  home: {     //객체도 ㄱㄴ
    adress: '서울',
    phone: '123'
  },
  getInfo: function () {  //내부에 메서드도 ㄱㄴ ~~ toString
    return `${this.name}님은 ${this.age}살입니다.`;
  }, //후행쉼표(trailing comma) 사용 가능 - 뒤에 구문이 더 없어도 사용 가능
};

console.log(person);
console.log(person.getInfo());



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
  normal: 'normal case',              //  식별자 네이밍 규칙을 따르는 case
  's p a c e': 'space use',            // 공백 사용 - 식별자 네이밍 규칙이 아닌 case
  'test!~!~!~!~!@@': 'special use',
  '1number': 'start number',
  0: 1,                               // 숫자로 작성된 key는 내부적으로 문자열로 변환    '0': 1
  var: 'reserved word use',           //예약어 사용 - 권장X

  normal: 'new value'                 // 기존에 존재한 프로퍼티를 다시 선언시 마지막으로 덮어씌워짐
};

console.log(obj);


/*
  ## 프로퍼티 접근 ##
  1. 마침표 표기법 (dot notation)
     ㄴ 객체.프로퍼티명
  2. 대괄호 표기법 (square bracket notation)
     ㄴ 객체['프로퍼티명']
*/


console.log(obj.normal);      //new value
console.log(obj['normal']);   //선호하는 방식 아님
console.log(obj[0]);


/*
  ## 메소드 ##
  객체 내에 프로퍼티로 함수 할당시 메소드라고 함

  => 자바스크립트에서는 함수도 하나의 값으로 취급하므로 
     프로퍼티 값으로 함수를 할당할 수 있음 
*/
const movie = {
  title: '원스',
  'title en': 'Once',
  showTm: 98,
  openDt: '2000-02-03',
  status: '개봉',
  printActor: (flag) => {
    if (flag == '주연') {
      console.log('더보이즈주연');

    } else if (flag == '조연') {
      console.log('수');
      console.log('키피');
    }
  },
  toString: function () {
    //화살표함수 내에서는 this가 제대로 바인딩되지 않음 -> this 대신에 객체명
    return `제목 : ${this.title} 상영시간: ${this.showTm}`;
  },
}

movie.printActor('주연');


/*
  ## 동적으로 프로퍼티 추가,수정,삭제 ##
*/

movie.nation = 'usa'; //프로퍼티 추가
movie['title en'] = '한번';
movie.status = '상영종료';
delete movie.showTm;

/*
  ## in 연산자 ##
  특정 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인할 수 있는 연산자
  '프로퍼티명' in 객체 => 존재하면 true, 존재하지 않으면 false
*/

const academy = {
  name: 'ssg',
  address: '서울시',
}

console.log('name' in academy);
console.log('qwidj' in academy);

'name' in academy && console.log("만약이름프로퍼티가존재하면 출력");

/*
  ## for in 반복문 ##
  1. 객체가 가지고 있는 속성(property)명을 임의의 순서로 순차적으로 반환
  2. 반환되는 속성명은 string 타입이므로 속성값을 확인하기 위해서는 대괄호 표기법을 사용해야됨
  3. 조회 목적으로만 사용하는게 좋으며 추가/수정/제거는 하지 않는 것이 좋음
*/

for (let prop in academy) { //프로퍼티를 순회함
  console.log(`프로퍼티명: ${prop}, 프로퍼티값:${academy[prop]}`); //사용되는 prop이 String의 타입이므로 대괄호 academy.prop으로 안됨
}