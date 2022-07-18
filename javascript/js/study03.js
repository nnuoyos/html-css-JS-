/* 
JavaScript 문법 정리
*/

//object shorthand assignment
/* let name="soyoung"
let age=20

let person={
    name:name,
    age:age
}
console.log(person) */


//키와 키 값에 들어가는 변수의 이름이 같다면
/* 
let name="soyoung"
let age=20

let person={
    name,
    age
}
console.log(person) */



//Destructuring 구조 분해
/* let person = {
    name:"soyoung",
    age:20
}
//let name = person.name
//let age = person['age'] 
let{name,age}=person
console.log(name, age)

let array = [1,2,3,4]
let [a,b,...rest]=array //a,b를 제외한 나머지 값을 rest에 넣는다
console.log(rest) //rest 값들은 array에 들어가있다 [3,4] */


//spread
/* let person={name:"soyoung", age:20}

let person2 = {...person, name:"mimi"} //객체의 깊은 복사 => 새로운 객체가 생성 됨
let person3 = person
console.log(person2)
console.log(person3)

console.log(person==person2)
console.log(person==person3)

let a=[1,2]
let b=[...a,3]
console.log(b)

let c=[...a,...b]
console.log(c) */



//삼항연산자
/* let person = {name:"soyoung", age:20}

if(person){
    console.log(person.name)
}else{
    console.log("there is no person")
} */

let person = {name:"soyoung", age:20}

if(person){
    console.log(person.name)
}else{
    console.log("there is no person")
}

console.log(person? person.name:"there is no person")