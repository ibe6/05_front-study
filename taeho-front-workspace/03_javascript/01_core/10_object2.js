/*
    ## Object 생성자 함수 ##
    new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환 
    빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있음 
*/
const student = new Object();
console.log(student);           //{}

// 객체에 프로퍼티 추가+set
student.name = '이재이';
student.age = 0;
student.getInfo = function () {
  return `${this.name}님은 ${this.age}살입니다.`
};

console.log(student);           // { name: '이재이', age: 0, getInfo: [Function (anonymous)] }



const student1 = {
  name: '재이',
  age: 1,
  getInfo: () => {
    return `${this.name}님은 ${this.age}살입니다.`
  },
};

const student2 = {
  name: '재삼',
  age: 2,
  getInfo: () => {
    return `${this.name}님은 ${this.age}살입니다.`;
  },
};

// 객체 리터럴은 동일한 프로퍼티를 갖는 여러 객체를 만들어낼때 계속 작성해야돼서 귀찮음뱔로임
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

      생성자함수가 그냥 함수와 다른 점은
      1. 앞으로를 대문자로 하여 구문한다.
      2. 변수에 대입 시 new키워드를 사용한다.
          만약 new 카워드가 없을 경우는 -> undefined -> 일반 함수 호출
          new 없이 함수 실행하면 그건 그냥 "함수 실행"일 뿐이고,**return값이 없으면 변수에 담기는 건 undefined


      new : 인스턴스, 각각 고유한 객체 값을 가짐
      일반 호출 : 전역 객체

*/


// const Student = (name, age) => {    //호살표함수는 this를 가질 수 없기 때문에 객체 생성 불가

// };

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return `${this.name}님은 ${this.age}살입니다.`;
  };
  // return 1;
}

const student3 = new Student('대태호', 100);
const student5 = Student('대태호', 100);    //js에서는 메서드를 변수에 담을 수 있지만, new없이 사용하면 전역 객체를 가르키게 된다.
console.log(student3);
console.log(student5); //리턴값이 없으면 undefined
console.log(student5.name); //값은 출력이 되는데 전역객체



