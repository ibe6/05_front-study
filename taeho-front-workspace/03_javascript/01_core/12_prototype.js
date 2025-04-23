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
  login: function (userId) {
    console.log(`${userId}님 환영합니다.$`);
  }
};

//user객체를 상속받는 student객체 만들기 
const student = {
  passion: true,
  //__proto: user
}
// student.__proto__ = user;         //부모객체 지정 => 많이 안씀
// console.log(student);             //{ passion: true }
// console.log(student.__proto__);   //{ activate: true, login: [Function: login] }

Object.setPrototypeOf(student, user); //Object객체로 부모 지정
console.log(Object.getPrototypeOf(student)); //student의 부모인 user


const ssgStudent = {
  academy: '7'
};
Object.setPrototypeOf(ssgStudent, student);

for (let prop in ssgStudent) {
  console.log(prop, ssgStudent[prop]);
};


/*
  ## 생성자 함수 프로토타입 ##
  생성자 함수를 통해 생성된 객체 내에는 prototype이라는 속성이 자동으로 부여됨 
*/

const car = {
  brand: '기아'
}

function EV(model) {
  this.model = model;
}

EV.prototype = car;

const ev9 = new EV('EV9');





function Animal(name) {
  this.name = name;
  // this.speak = () => {          //생성자 내부에 메서드 정의
  //   console.log(`${this.name}이 짖습니다.`);
  // }
}

Animal.prototype.speak = function () {   //생성자 외부에 프로토타입에 정의           => 선호
  console.log(`${this.name}이 짖습니다.`);
};

const dog = new Animal('꼬막이');
const cat = new Animal('마루');

dog.speak();
cat.speak();

/**
 * 생성자 함수 내부에 메서드를 정의하지 않고 프로토타입에 메서드를 정의하는 이유
 * 1. 메모리 효율성
 *    > 생성자 함수 내부에 정의 : 인스턴스마다 독립적인 메서드 복사본이 생성됨 => 인스턴스가 많아질수록 메모리 사용이 증가
 *    > 프로토타입 정의         : Animal의 인스턴스가 몇개가 생성되든 프로토타입에 정의하면 모든 인스턴스가 공유해서 사용함 (싱글톤하고 비슷)
 * 2. 동적 업데이트 가능성 - 메서드를 수정해야할경우
 *    > 생성자 함수 내부에 정의 : 이미 생성된 각 인스턴스마다 하나같이 다~~~수정해야됨 다시 생성하지 않는 이상 
 *    > 프로토타입 정의         : 메서드만 수정하면 됨
 * */

//정적 메서드 : 모든 인스턴스가 동일하게 행동
Animal.run = function () {
  console.log('동물이 달립니다.');
};