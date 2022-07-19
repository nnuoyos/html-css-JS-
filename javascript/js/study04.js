//나머지 매개변수 Rest parameters 
// 전개 구문 Sprad syntax


//인수 전달
/* function showName(name){ //(name) 인수 개수 제한 없음
    console.log(name);
}
showName('Mike'); //Mike
showName('Mike','Tom'); //Mike
showName(); //undefined */


/* arguments */
/* function showName(name){
    console.log(arguments.length); //2
    console.log(arguments[0]); //Mike
    console.log(arguments[1]); //Tom
}
showName('Mike','Tom'); */


/* 나머지 매개변수 Rest parameters */
/* function showName(...names){ //점 ...을 찍고 뒤에 배열 이름을 정해준다
    console.log(names);
}

showName(); // []
showName('Mike'); //['Mike']
showName('Mike','Tom'); //['Tom'] */

/* 
나머지 매개변수 전달받은 모든 수를 더하기
*/
/* function add(...numbers){ 
    //numbers는 배열이므로 length가 있을 것이다 따라서 for문 사용 가능
    let result=0;
    numbers.forEach((num)=> (result += num));
    console.log(result)
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10); */

/* 
나머지 매개변수. user 객체를 만들어주는 생성자 함수 만들기
*/
/* function User(name,age, ...sikll){
    this.name = name;
    this.age=age;
    this.sikll=sikll;
}

const user1 = new User('Mike', 30 , 'html', 'css');
const user2 = new User('Tom', 20 , 'JS', 'React');
const user3 = new User('Jane', 10 , 'English');

console.log(user1);
console.log(user2);
console.log(user3); */


/* 전개 구문 (Spread syntax) : 배열 */
/* let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];
console.log(result);
 */
/* 전개 구문 (Spread syntax) : 객체 */
/* let user = {name:'Mike'}
let mike = {...user, age:30}
console.log(mike); //{name: 'Mike', age: 30} */


/* 
전개구문 arr1을 [4,5,6,1,2,3] 으로 만들기
*/
/* let arr1=[1,2,3];
let arr2=[4,5,6];

arr2.reverse().forEach(num => {
    arr1.unshift(num)
});

arr1 = [...arr2, ...arr1];
console.log(arr1); */


let user = {name : 'Mike'};
let info = {age:30};
let fe = ["JS", "react"];
let lang = ["Korean", "English"];

user = {
    ...user,
    ...info,
    skills : [...fe, ...lang],
};
console.log(user);