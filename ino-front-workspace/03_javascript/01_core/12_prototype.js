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
    console.log(`welcome ${user}`);
  }
};

// student inherit user

const student = {
  passion: true,
//  __proto__: user // 상속받을 부모객체 설정
};

// student['__proto__'] = user;

console.log(student.__proto__)


// Object.setPrototypeOf(), Object.getPrototypeOf(): [[Prototype]] 프로퍼티를 setter/getter
Object.setPrototypeOf(student, user);
console.log(Object.getPrototypeOf(student));
/*
  ## 생성자 함수 프로토타입 ##
  생성자 함수를 통해 생성된 객체 내에는 prototype이라는 속성이 자동으로 부여됨 
*/

for (const key in student) {
    console.log(key, student[key]);
}

const car = {
  brand: 'KIA'
};

function EV(model) {
  this.model = model;
}

EV.prototype = car;

const ev9 = new EV('ev9');

console.log(ev9.brand);

function Animal(name) {
  this.name = name;
}
EV.prototype.run = () => console.log("부르릉");
// Animal.prototype == {constructor : Animal}
console.log(Animal.prototype.constructor == Animal);
ev9.run();
// 보통 해당 생성자 함수로 생성되는 객체들이 
// 사용할 메소드(인스턴스 메소드)를 prototype으로 정의
Animal.prototype.speak = function(){
  console.log('barks'); // 권장사항
}

/* 왜 생성자 함수 내부 정의보다 prototype 정의가 권장되는가?
/ 1. 메모리 효율성
  > 생성자 함수 내부 정의 : 인스턴스마다 독립 메소드 복사본 생성
    => 인스턴스 증가에 따라 메모리 사용량도 함께 증가
  > prototype 정의
    모든 인스턴스가 동일 메소드 공유,
    => 싱글톤과 유사하게 동작, 메모리 효율성 높음
  2. 동적 업데이트 가능성
  > 생성자 함수 내부에 정의 : 각 인스턴스마다 메소드 일괄 수정 필요
  > prototype 정의 : prototype 메소드만 수정하면 인스턴스 전체에 즉시 반영
*/

const dog = new Animal('cookie');

dog.speak();

const cat = new Animal('cat');

cat.speak();

// Animal.prototypes.speak : Animal 객체로 호출 가능 인스턴스 메소드 정의

// * 정적 메소드 정의
Animal.run = function(){
  console.log('animal runs');
}

// * 정적 메소드 호출 : 생성자 함수명.메소드명()
Animal.run();