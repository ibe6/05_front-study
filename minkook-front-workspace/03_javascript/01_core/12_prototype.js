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
  active : true,
  login : function(userId) {
    console.log(`${userId}님이 로그인 하였습니다.`);
  }
};

// user객체를 상속받는 student 객체 만들기
const student = {
  passion : true,
  //__proto__ : user //user객체를 상속받음
  
};

Object.setPrototypeOf(student, user); //student의 __proto__를 user로 설정
console.log(Object.getPrototypeOf(student)); //user객체가 출력됨


/*
  ## 생성자 함수 프로토타입 ##
  생성자 함수를 통해 생성된 객체 내에는 prototype이라는 속성이 자동으로 부여됨 
*/

const ssgStudent ={
  academy:'캠퍼스세븐'
};
Object.setPrototypeOf(ssgStudent,student);
console.log(ssgStudent.academy);
console.log(ssgStudent.passion);
console.log(ssgStudent.active);

//for in 문 상속 프로퍼티도 순회 대상에 포함됨
for(let prop in ssgStudent){
  console.log(prop,ssgStudent[prop]); //academy, passion, active
}


function Animal(name){
  this.name = name;
}
console.log(Animal.prototype.constructor == Animal);

Animal.prototype.speak = function(){
  console.log(`${this.name}가 소리내어 짖습니다.`);
};
const dog = new Animal('멍멍이');
const cat = new Animal('야옹이');
dog.speak(); 
cat.speak();

/*
  생성자 함수 내부에 메소드를 정의하지 않고 prototype에 메소드를 정의하는 이유
  1. 메모리 효율성
    > 생성자 함수 내부에 정의 : 인스턴스마다 독립적인 메소드 복사본이 저장됨
  2. 동적 업데이트 가능
    > 생성자 함수 내부에 정의 : 긱 인스턴스마다 메소드를 일일히 수정해야 됨
    > prototype에 정의 : 메소드 추가/변경 가능 => 모든 인스턴스에 적용됨
  
*/

// * 정적 메소드 정의
Animal.run = function(){
  console.log('동물이 달립니다.');
}

Animal.run(); //정적 메소드 호출