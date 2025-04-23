const arr3 = new Array(10);
console.log(arr3); //10개의 빈 배열이 생성됨

const fruits = ['banana','apple','kiwi'];

for(let i  = 0; i<fruits.length; i++){
    console.log(`인덱스: ${i}, 요소:${fruits[i]}`);
}

console.log('------------------------------');

for(let i  in fruits){
    console.log(`인덱스: ${i}, 요소:${fruits[i]}`);
}

const cities = ['seoul','roma','newyork','sidney'];

for(let city of cities){
    console.log(`요소: ${city}`);
}

const foodList = ['물회','삼계탕','냉면','물회','수박'];

console.log(foodList.indexOf('물회'));
console.log(foodList.indexOf('물회',1));
console.log(foodList.indexOf('삼겹살'));

console.log(foodList.lastIndexOf('물회'));


const months = ['Jan','Mar','Apr','Apr','Jun','Jun'];

console.log(months.pop());
console.log(months); 

console.log(months.push('Jul'));
console.log(months);

months.shift(); 
months.unshift('Feb'); //6
months.unshift('Jan'); //7
console.log(months);

months.splice(4,1,'May');

console.log(months);


const idol1 = ['아이브','오마이걸'];
const idol2 = ['에스파','트와이스'];
const idol3 = ['블랙핑크','레드벨벳'];

idol1.concat(idol2,idol3); //concat은 원본 배열을 변경하지 않음
console.log(idol1); 



const datas = [true,1,'text',{},{}];

datas.map(item =>  typeof item)
.forEach((item) => console.log(item));

//종합
const nums = [12,5,90,45,1,18,2,19];

nums.filter(num => num % 2 == 0)
    .map(num => num * 2)
    .sort((a,b) => a - b)
    .forEach(num => console.log(num));

