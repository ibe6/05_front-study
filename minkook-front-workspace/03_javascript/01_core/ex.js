/*
  실습. getTotal() 함수 구현하기
  1. 기능
     인자로 전달된 배열에 포함된 요소들 중 숫자만 더해서 반환하는 함수
     단, 소수 이하 자릿수는 모두 버린 뒤 더하기를 수행함
         숫자로 이루어진 문자열도 덧셈 연산 진행할 것
  2. 인자
     배열
  3. 반환
     배열에 포함된 숫자만 모두 더한 값
   ex) const array = ['hello', 'world', 10, 20, 30.23, '40', { cpu: 'i7' }, true, false, () => {}];
       console.log(getTotal(array));  // 100 출력
*/ 
const getTotal = (arr) => {
    let total = 0;
    arr.forEach(item => {
        if(!Number.isNaN(item/1) && typeof item != 'boolean'){
            //console.log(item);
            total += Number.parseInt(item);
        }
    });
    return total;
};

const array = ['hello','world',10,20,30.23,'40',{cpu:'i7'},true,false,() => {}];
console.log(getTotal(array));