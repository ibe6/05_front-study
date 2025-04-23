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