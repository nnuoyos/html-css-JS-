/* let [x,y] = [1,2];

console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane' */


/* let str ="Mike-Tom-Jane";
let [user1, user2, user3] = str.split('-');

console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'
 */

/* let [a,b,c] = [1,2]; */
/* let [a=3, b=4, c=5] = [1,2];
console.log(a); //1
console.log(b); //2
console.log(c); //5 기본값으로 5를 선언해놨기 때문 */


/* let [user1, ,user2] = ['Mike','Tom','Jane','Tony'];

console.log(user1); //'Mike'
console.log(user2); //'Jane' */


/* let a = 1;
let b = 2;
[a,b]=[b,a]; //임시변수 c를 만들어 로테이트로 돌리면서 변수 바꾸는 과정 필요 없음 */


//객체 구조 분해

/* let user = {name:'Mike', age:30};
//user 객체가 있고, name 과 age 프로퍼티가 있다
let {name, age} = user;
//중괄호로 감싼 변수선언, user객체를 할당

console.log(name); //'Mike'
console.log(age); // 30 */


/* //객체 구조 분해 : 새로운 변수 이름으로 할당
let user = {name:'Mike', age:30};
//let {name, age} = user;
let {name: userName, age: userAge} = user;
console.log(userName); //'Mike'
console.log(userAge); // 30 */


//객체 구조 분해: 기본값


let user = {
    name: 'Jane',
    age:18,
    gender:'female'
};

let {name,age,gender='male'}=user;
console.log(gender);