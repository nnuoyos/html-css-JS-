//생성자 함수

// function User(name, age){
//     this.name=name;
//     this.age = age;
//     this.sayName = function(){
//         console.log(this.name);
//     }
// }

// let user5=new User('Han', 40);
// user5.sayName();


//생성자 함수 : 상품객체를 생성해보자

// function Item(title, price){
//     //this = {}; 생략 가능
//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`가격은 ${price} 원 입니다.`)
//     }
//     //return this; 생략 가능
// }

// const item1 = new Item('인형', 3000)
// const item2 = Item('가방', 4000)
// const item3 = new Item('지갑', 9000)


// console.log(item1,item2,item3);

// item3.showPrice();




//계산 된 프로퍼티 Computed property
//객체 메서드 Object methods

// Object.assign(): 객체 복제

// const user = {
//     name: 'Mike',
//     age:30
// }

// const cloneUser = user;
// //이렇게 하면 클론이 될까? 안된다 왜냐하면
// //user 변수에는 객체 자체가 들어가있는게 아니라 객체가 저장되어 있는 
// //메모리주소인 객체에 대한 참조값이 저장. 따라서 클론유저를 만들어 유저를 담아도 그 참조값만 저장된다

// const newUser = Object.assign({}, user);
// // 여기서 빈 객체 {} 는 초기값 두번째 매개변수로 들어온 객체들이 초기값에 병합 된다
// {} + {name: 'Mike', age : 30} 

// newUser.name='Tom';
// console.log(user.name); //결과: 'Mike' , 위에서 이름을 바꾸어도 변함 없다 
// newUser != user //같은 객체가 아니다

// Object.assign({gender:'male'}, user);
// //성별 값만 있는 객체가 user를 병합 총 3개의 프로퍼티를 가지게 된다
// // gender : 'male' , name : 'Mike' , age : 30

// Object.assign({name: 'Tom'}, user);
// //이렇게 되면 user값을 덮어 쓰게 된다 Tom 대신 Mike가 됨




/* 두개 이상의 객체도 병합 가능 */
// const user = {
//     name : 'Mike'
// }
// const info1 = {
//     ae: 30,
// }
// const info2={
//     gender :'male',
// }
// Object.assign(user, info1, info2)



/* Object.keys() : 키 배열 반환 */

// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }

// Object.keys(user);


/* Object.values() : 값 배열 반환 */

// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }

// Object.values(user);


/* Object.fromEntries(): 키/값 배열을 객체로 */
// const arr =
// [
//     ["name","Mike"],
//     ["age",30],
//     ["gender","male"]
// ];

// Object.fromEntries(arr);



//예제

// let n ="name";
// let a ="age";

// const user = {
//     [n] : 'Mike',
//     [a] : 30,
//     [1+4]:5,
// };

// console.log(user);



// function makeObj(key, val){
//     return{
//         [key] : val
//     }
// }

// const obj= makeObj('이름', 33);
// console.log(obj);


const user={
    name: "Mike",
    age: 30,
};

const user2=Object.assign({},user); 
user2.name="Tom";

console.log(user);
console.log(user2);

