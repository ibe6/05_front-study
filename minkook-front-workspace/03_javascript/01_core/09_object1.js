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
const person = {
  // 프로퍼티 : 객체의 상태를 나타내는 값(속성)
  name:'홍길동',
  age :20,
  hobbies:[
    'game',
    'travel',

  ],
  home : {
    address:'seoul',
    phone : '02-1234-5678'
  },
  // 메소드 : 객체의 동작을 나타내는 값(행위)
  getInfo:function(){
    return `${this.name}은 ${this.age}세 입니다.`
  },
};
console.log(person.name); 
console.log(person.age); 
console.log(person.hobbies); 
console.log(person.home); 
console.log(person.getInfo()); 

const obj = {
  //식별자 네이밍 규칙 따르는 case
  normal: 'normal case',
  //식별자 네이밍 규칙이 아닌 case
  's p a c e' : 'space case', //공백 사용
  'test!': 'special use',     //특수문자 사용
  '1number': 'start number',  //숫자로 시작
  0: 1,             //숫자 키는 내부적으로 문자열로 반환
  var : 'reserved word use', //예약어 사용

  // 기존에 존재하는 키 중복 선언시 마지막 프로퍼티로 덮어씌어짐짐
  normal: 'new value'
}

console.log(obj.normal); 
//console.log(obj['normal']);
console.log(obj['s p a c e']);
console.log(obj['test!']);
console.log(obj['1number']);
console.log(obj[0]); 


/*
  ## 메소드 ##
  
*/
const movie = {
  title : '데드풀과 울버린',
  'title en' : 'Deadpool vs Wolverine',
  showTm : 128,
  openDt : '2024-01-01',
  status : '개봉',
  printActor: (flag) => {
    if(flag == '주연'){
      console.log('라이언 레이놀즈');
      console.log('휴 잭맨');
    }else if(flag == '조연'){
      console.log('카란 소니');
      console.log('모레나 바카린');
    }
  },

  toString: function(){
    // 메소드 내에서 현재 객체를 가리키고자 할 경우 this.
    // 단 화살표 내에서는 this가 제대로 바인딩 되지않음 => this 대신에 .을 사용
    return `제목: ${this.title}, 개봉일: ${this.openDt}, 상영시간: ${this.showTm}분, 상태: ${this.status}`;
  }
};

movie.printActor('주연');
movie['printActor']('조연'); 
console.log(movie.toString());
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

movie.nation = 'usa';

movie['title en'] = 'Deadpool vs Wolverine 2'; // 대괄호 표기법으로 수정
console.log(movie['title en']);
movie.status = '상영종료';

delete movie.showTm;




/*
  ## 프로퍼티 접근 ##
  1. 마침표 표기법 (dot notation)
     ㄴ 객체.프로퍼티명
  2. 대괄호 표기법 (square bracket notation)
     ㄴ 객체['프로퍼티명']
*/





/*
  ## 메소드 ##
  객체 내에 프로퍼티로 함수 할당시 메소드라고 함

  => 자바스크립트에서는 함수도 하나의 값으로 취급하므로 
     프로퍼티 값으로 함수를 할당할 수 있음 
*/



/*
  ## 동적으로 프로퍼티 추가,수정,삭제 ##
*/



/*
  ## in 연산자 ##
  특정 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인할 수 있는 연산자
  '프로퍼티명' in 객체 => 존재하면 true, 존재하지 않으면 false
*/

const academy = {
  name : 'SSG & INC',
  address : '서울시 강남구 삼성동',

};
console.log('name' in academy); 
console.log('address' in academy);
console.log('phone' in academy); 



/*
  ## for in 반복문 ##
  1. 객체가 가지고 있는 속성(property)명을 임의의 순서로 순차적으로 반환
  2. 반환되는 속성명은 string 타입이므로 속성값을 확인하기 위해서는 대괄호 표기법을 사용해야됨
  3. 조회 목적으로만 사용하는게 좋으며 추가/수정/제거는 하지 않는 것이 좋음
*/

for(let prop in academy){
  console.log(`프로퍼티명 : ${prop}, 프로퍼티값 : ${academy[prop]}`);
}

const student = new Object(); 
student.name = '홍길동';
student.age = 20;
student.getInfo = function(){
  return `${this.name}은 ${this.age}세 입니다.`
}
console.log(student); 


const student1 = {
  name : '홍길동',
  age : 20,
  getInfo : function(){
    return `${this.name}은 ${this.age}세 입니다.`
  }
};

const student2 = {
  name : '홍길동',
  age : 20,
  getInfo : function(){
    return `${this.name}은 ${this.age}세 입니다.`
  }
};

console.log(student1);
console.log(student2);


function Student(name,age){
  //생성자 함수 내부의 this는 생성자 함수로 생성되는 인스턴스를 가리킴
  this.name = name,
  this.age = age,
  this.getInfo = function(){
    return `${this.name}은 ${this.age}세 입니다.`
  };

  //return this; //new 키워드와 함께 해당 생성자 함수를 호출하면 생성된 인스턴스를 반환함
}

console.log(new Student('홍길동',20));
console.log(new Student('이순신',30));

const student3 = new Student('김말똥',20);
const student4 = new Student('김말순',34);

console.log(student3);
console.log(student4);

const stu = Student('강개순',35);
console.log(stu);
console.log(name); // 전역변수
                   //일반 함수로 호출하면 함수내의 this는 전역객체를 가리킴  