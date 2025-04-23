 /*
  ## Array ##
  1. 다수의 데이터를 담을 수 있음 
  2. 크기에 제약없고, 타입에 제약없음
  3. 타입은 object 
  4. 형식 : [element, element, ..]
  5. 선언 방법 
      1) 변수 = new Array([크기]);
      2) 변수 = new Array(element, element, ..);
      3) 변수 = [];
      4) 변수 = [element, element, ..];
  6. 배열 내의 element 접근 방식
      배열[index]
  7. 후행쉼표를 지원함

  ## 변수 선언시 별도의 자료형 지정이 없기 때문에 어떤자료형이든 다 담을 수 있음 
        크기에 제약도 없기 때문에 자바에서의 ArrayList 컬렉션과 유사함
*/

// 1. 배열 리터럴을 통한 배열 생성
const arr1 = ['banana', 'apple', 'kiwi'];
arr1.push('pineapple');
// 2. 배열 생성자 함수를 통한 배열 생성
const arr2 = new Array();
console.log(`arr2 : ${arr2}`) // 인자 미전달시 텅 빈 배열
for(i in arr1){
   console.log(arr1[i]);
}

const arr3 = new Array(10); // 인자가 1개고 숫자일경우 크기 프로퍼티 설정

const arr4 = new Array(1, 2, 3, 'hi'); // 인자가 여러개고 숫자가 아닌 다른 타입 인자 전달시
console.log(arr4); // 인자가 요소로 담긴 배열

// 3. Array.of 메소드를 통한 배열 생성
const arr5 = Array.of(1,2,3,4,5);
arr5.push(6)
console.log(arr5);

/*
  ## 배열과 for문 ##
  1. for in 문
     1) 배열의 인덱스를 자동으로 가져옴
     2) 형식
        for(인덱스 in 배열) {
          본문
        }

  2. array에서의 for of 문
     1) 배열의 요소를 자동으로 가져옴
     2) 형식
        for(요소 of 배열) {
          본문
        }
*/
for (let i=0;i<arr5.length;i++){
   console.log(`idx: ${i}, value: ${arr5[i]}`);
}
for(idx in arr5){
   console.log(arr5[idx]);
}

for (ele of arr5) {
   console.log(`ele : ${ele}`);
}

/*
  ## Array 탐색 관련 메소드 ##

  1. Array.prototype.indexOf(element[, fromIndex])
      → 배열에 해당 요소가 위치해있는 첫번째 인덱스 반환 
      → 요소를 찾지 못하면 -1 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0

  2. Array.prototype.lastIndexOf(element[, fromIndex])
      → 배열에 해당 요소가 위치해있는 마지막번째 인덱스 반환 
      → 요소를 찾지 못하면 -1 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0
  
  3. Array.prototype.includes(element[, fromIndex])
      → 배열에 해당 요소가 존재하면 true, 존재하지 않으면 false 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0
  
*/






/*
      
  ## Array 동적으로 요소 추가/삭제 관련 메소드 ##

  1. Array.prototype.push(element1[, element2[, ...]])
     → 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

  2. Array.prototype.pop()
     → 배열의 마지막 요소를 제거하고 그 요소를 반환
     → 배열이 비어 있으면 undefined 반환
  
  3. Array.prototype.unshift(element1[, element2[, ...]])
     → 배열의 앞에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

  4. Array.prototype.shift()
     → 배열의 첫번째 요소를 제거하고 그 요소를 반환
     → 배열이 비어 있으면 undefined 반환

  5. Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
     → 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함
     → start : 배열의 변경을 시작할 인덱스
     → 옵션 deleteCount : 배열에서 제거할 요소의 개수
       1) 생략하면 start 부터 모든 요소를 제거
       2) 0 이하이면 아무 요소도 제거하지 않음
     → 옵션 item1, item2, ... : 배열에 추가할 요소들

*/





/*

  ## Array 기타 메소드 ##
  
  1. Array.prototype.concat(items1[, items2[, ...]])
     → 배열의 요소들을 하나로 합친 새로운 배열 반환 

  2. Array.prototype.slice(start, end)
     → 배열의 start 인덱스 이상 end 인덱스 미만 범위의 요소들을 새로운 배열로 복사해서 반환 

  3. Array.prototype.reverse()
     → 배열 내의 요소들을 역순으로 변경하여 반환 

  4. Array.prototype.toString() 
     → 배열 내의 요소들을 콤마(,)로 연결한 문자열 반환 

  5. Array.prototype.join([separator])
     → 배열의 각 요소를 separator 로 연결한 하나의 문자열을 반환
     → separator 생략 시 콤마(,)로 연결
  
  6. Array.prototype.entries()
     → 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 배열 반복자(Iterator) 객체를 반환

*/
const seasons = ['spring','summer', 'autumn', 'winter'];
const itr = seasons.entries();
for( let obj of itr){
   // console.log(obj) [index, element]
   console.log(`idx: ${obj[0]}, component: ${obj[1]}`);
}




/*

  ## Array 고차 함수 (콜백함수를 인자로 전달받는 함수) ##

  1. Array.prototype.sort([callbackFn(element1, element2)])
     → callbackFn에 의해 배열 내의 요소들을 정렬시켜 반환 
     → callbackFn 생략시 기본 오름차순으로 정렬 (문자열 요소일 경우 사전등재순으로 정렬)
     → callbackFn
       1) 반환값 : number (양수 반환시 비교되는 두 요소의 순서가 변경됨)
       2) 매개변수 
          (1) element1 : compare할 비교 요소1
          (2) element2 : compare할 비교 요소2
       즉, 오름차순 정렬시키고자 할 경우 => element1가 더 클 경우 양수 반환하도록 
           내림차순 정렬시키고자 할 경우 => element2가 더 클 경우 양수 반환하도록 
        

  2. Array.prototype.forEach(callbackFn(element[, index[, array]])[, thisArg])
     → 각 배열 요소에 대해 제공한 callbackFn 함수를 한 번씩 실행함
     → callbackFn
       1) 반환값 : 없음(undefined)
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : forEach() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  3. Array.prototype.map(callbackFn(currentValue[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 반환된 요소들을 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : 배열의 각 요소를 callbackFn 내부에서 처리한 값
       2) 매개변수
         (1) currentValue : 처리할 현재 요소
         (2) index        : 처리할 현재 요소의 인덱스
         (3) array        : map() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  4. Array.prototype.filter(callbackFn(element[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 구현된 테스트를 통과한 요소들만 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : true 또는 false
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : filter() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값
  
*/


const numvers = [30, 21, 101, 10, 1 , 201, 60 ,6];
console.log(`numbers before sort: ${numvers}`); // 숫자의 내부 정렬 로직은 문자열 변환 후 유니코드 순서로 결정
numvers.sort( (a, b) => b - a ); // 오름차순 -> 좌항 숫자가 더 클 경우 순서 변경 필요 -> 양수 반환
console.log(`numbers after sort: ${numvers}`);
numvers.forEach( (a) => console.log(a) );

const lectures = ['Java', 'MySQL', 'MyBatis', 'HTML', 'CSS', 'JavaScript'];

lectures.forEach( (ele, idx, arr) => {
   console.log(`element : ${ele}`);
   console.log(`index : ${idx}`);
   console.log(`arr : ${arr}`);
});


const newLectures = lectures.map(ele => '과목: ' + ele);
console.log(newLectures);

const datas = [true, 1, 'test', {}, []];
// 배열의 요소들의 타입을 모아둔 새로운 배열
datas.map( item => typeof item).forEach( item => console.log(item));

console.log(lectures.filter((ele) => ele.length > 5));

console.log(datas.filter( item => typeof(item) == 'object'));

const nums = [12, 5, 90, 45, 1, 18, 2, 19];
// 짝수 데이터만 *2 내림차순 정렬 출력
console.log('짝수 데이터만 *2 내림차순 정렬 출력');
nums.filter( item => item % 2 == 0).map(item => item * 2).sort( (a, b) => b-a).forEach( n => console.log(n));