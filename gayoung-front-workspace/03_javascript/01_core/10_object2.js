/*
    ## Object 생성자 함수 ##
    new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환 
    빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있음 
*/
const student = new Object();
console.log(student);

// 프로퍼티 추가
student.name = '홍길동';
student.age = 16;
student.getInfo = function(){
  return `${this.name}님은 ${this.age}살입니다.`;
};

console.log(student);



// 학생 객체 여러개 만들기 => 객체 리터럴
const student1 = {
  name: '홍길녀',
  age: 16,
  getInfo: function(){
    return `${this.name}님은 ${this.age}살입니다.`;
  }
};

const student2 = {
  name: '홍길동',
  age: 13,
  getInfo: function(){
    return `${this.name}님은 ${this.age}살입니다.`;
  }
};

console.log(student1);
console.log(student2);


/*
  ## 생성자 함수 ##
  1. new 키워드를 통해서 객체 생성을 진행시킬 수 있는 함수
  2. 함수명의 첫글자는 대문자로 작성
  3. 화살표함수로 작성 불가
  4. 프로퍼티를 함수내에 this.프로퍼티 로 정의 
  5. 예시
      function 생성자함수(param1, param2, param3, ..) {
        this.prop1 = param1;
        this.prop2 = param2;
        this.prop3 = param3;
        ..
        this.methodProp = function() {
            메소드내용
        }
      }

      new 생성자함수(1, 2, 3);
*/

function Student(name, age){
  // 생성자 함수 내부의 this는 생성자 함수로 생성되는 인스턴스를 가리킴
  this.name = name;
  this.age = age;
  this.getInfo = function(){
    return `${this.name}님은 ${this.age}살입니다.`;
  };

  // return this; // new 키워드와 함께 해당 생성자 함수를 호출하면 생성된 인스턴스를 반환 
}

const student3 = new Student('김말똥', 23);
const student4 = new Student('김말순', 34);

console.log(student3);
console.log(student4);

const stu = Student('강개순', 35); // new 키워드 없이 호출하면 일반 함수 호출한걸로 동작
console.log(stu);
console.log(name); // name 전역변수
                   // 일반 함수로 호출하면 함수내의 this는 전역 객체(nodejs:global, 브라우저:window)를 가리킴