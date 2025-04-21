/*
  ## 프로토타입(Prototype) ##
  1. 자바스크립트는 Prototype 기반의 객체지향 언어로 
     Prototype을 활용해서 객체지향프로그래밍에서의 상속을 구현할 수 있음 
  2. 자바스크립트 객체에는 [[Prototype]] 이라는 숨김 프로퍼티가 존재
     자신의 부모 역할을 하는 객체와 연결되어있음 
     => 프로토타입 객체의 속성과 메소드를 상속받아 사용할 수 있음 
  3. __proto__ 포인터를 통해 [[Prototype]]을 가져오거나 설정할 수 있음(getter/setter) 
*/

const user = {
  activate: true,
  login: function(userId){
    console.log(`${userId}님 환영합니다.`);
  }
};

// user객체를 상속받는 student 객체 만들기
const student = {
  passion: true,
  // __proto__: user
};

// __proto__ : [[Prototype]] 프로퍼티를 setter/getter (요즘에 잘 사용하지 않음)
// student.__proto__ = user;
// console.log(student.__proto__);

// Object.setPrototypeOf(), Object.getPrototypeOf() : [[Prototype]] 프로퍼티를 setter/getter
Object.setPrototypeOf(student, user);
console.log(Object.getPrototypeOf(student));

// student객체를 상속받는 ssgStudent 객체 만들기
const ssgStudent = {
  academy: '캠퍼스세븐'
};
Object.setPrototypeOf(ssgStudent, student);

console.log(ssgStudent.academy);
console.log(ssgStudent.passion);  // 상속받고있는 student의 property
console.log(ssgStudent.activate); // 상속받고있는 user의 property

console.log('--------');

// for in문 상속 프로퍼티도 순회 대상에 포함됨 
for(let prop in ssgStudent){
  console.log(prop, ssgStudent[prop]);
}


/*
  ## 생성자 함수 프로토타입 ##
  생성자 함수를 통해 생성된 객체 내에는 prototype이라는 속성이 자동으로 부여됨 
*/
const car = {
  brand: 'KIA'
};

function EV(model){
  this.model = model;
}

EV.prototype = car;

const ev9 = new EV('EV9');
console.log(ev9);
console.log(ev9.brand);
console.log(ev9.__proto__);

// ----------------------------

function Animal(name){
  this.name = name;
  // * 생성자 함수 내부에 메소드 정의
  // this.speak = function(){
  //   console.log(`${this.name}이(가) 짖습니다.`);
  // }
}
// Animal.prototype == { constructor: Animal }
console.log(Animal.prototype.constructor == Animal);

// 보통 해당 생성자함수로 생성되는 객체들이 사용할 메소드(인스턴스 메소드)를 prototype으로 정의
// * 자기자신의 prototype 객체에 메소드 정의
Animal.prototype.speak = function(){
  console.log(`${this.name}이(가) 짖습니다.`);
};

const dog = new Animal('멍멍이');
const cat = new Animal('야옹이');

// Animal.prototype.speak : Animal 객체로 호출 가능한 인스턴스 메소드
dog.speak();
cat.speak();

/*
  * 생성자 함수 내부에 메소드를 정의하지 않고 prototype에 메소드를 정의하는 이유
  1. 메모리 효율성
     > 생성자 함수 내부에 정의 : 인스턴스마다 독립적인 메소드 복사본이 생성됨 
                                 => 인스턴스가 많아질 수록 메모리 사용량이 증가
     > prototype에 정의        : 모든 인스턴스가 동일한 메소드를 공유함 (싱글톤과 유사 개념)

  2. 동적 업데이트 가능성 (메소드를 수정해야될 경우)
     > 생성자 함수 내부에 정의 : 각 인스턴스마다 메소드를 일일히 수정해야됨 
     > prototype에 정의        : prototype의 메소드만 수정하면 인스턴스 전체에 즉시 반영됨 
*/

// * 정적 메소드 정의 
Animal.run = function(){
  console.log('동물이 달립니다.');
};

// * 정적 메소드 호출 : 생성자함수명.메소드명()
Animal.run();