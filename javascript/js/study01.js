// const a = Symbol(); // new를 붙이지 않는다
// const b = Symbol();

// console.log(a)
// console.log(b)
// console.log(a===b) //일치연산자로 확인해보면 false가 나온다
// console.log(a==b) //자료형은 달라도 내용만 일치하면 되는 동등연산자도 false가 나온다


//다른 개발자가 만들어놓은 객체
const id = Symbol('id');
 
const user ={
    name : 'Mike',
    age : 30,
}
//내가 작업
//user.showName = function(){};
const showName = Symbol('show name');
user[showName] = function(){
    console.log(this.name);
};

user[showName]();


//사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`)
}



/* const id1=Symbol.for('id');
const id2=Symbol.for('id');

id1===id2; //true (for 없이 생성했던 것과는 다르다) */

//이름을 얻고 싶을 때
/* Symbol.keyFor(id1) //"id" */


/* const id =Symbol('id 입니다.')
id.description; // "id 입니다." */


