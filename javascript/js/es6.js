            
//화살표 함수

/* function pooh() {
    console.log('곰돌이 푸우');
}
pooh();

let pooh2 = () => {
        console.log('곰돌이 푸우2');
    };

    pooh2(); */

/* function pooh() {
        return '푸우는 꿀을 좋아해';
    }
    console.log(pooh());

let pooh2 = () => '푸우는 꿀을 좋아해!!';
    console.log(pooh2()); */



/*     let age = 30;
    let person = {
        name: '홍길동',
        age: 20,
        getInfo: function () {
            console.log(age);
        },
    };
    person.getInfo(); */



/*     let age = 30;
    let person = {
        name: '홍길동',
        age: 20,
        getInfo: function () {
            console.log(this.age);
        },
    };
    person.getInfo(); */

//화살표 함수는 익명함수로만 사용할 수 있다 스스로 this를 생성할 수 없다. this는 일반함수에서만 사용 가능
//일반 함수에서 this는 함수가 어떻게 호출 되는지에 따라 this 바인딩이 동적으로 결정되는데,
//화살표함수는 this가 정적으로 결정 된다. 언제나 상위 스코프의 this를 가리킨다


   /*  //화살표 함수
    let 이름 = 'SoYoung';
    let 나이 = 20;
    let person = { 이름, 나이 };
    console.log(person); */


/*     //객체 구조 분해 : 새로운 변수 이름으로 할당
    let blackPink = {
        name: '블랙핑크',
        num: 4,
    };
    let name = blackPink.name;
    let num = blackPink.num;

    let { name: userName, num: userNum } = blackPink;
    console.log(userName, userNum); */


    //스프레드 연산자 ...rest
/*     let array = [1, 2, 3];
    let [a, ...rest] = array;
    console.log(a, rest);
    console.log(array);

    let person = {
        name: '홍길동',
        age: 20,
        cute: true,
    };
    let { name, age, cute } = person;
    console.log(name, age, cute); */


/*     //객체 배열 스프레드 연산자
    let a = [1, 2];
    let b = [3, 4];
    let c = [5, 6];

    //let result = a.concat(b, c);
    let result = [...a, ...b, ...c];
    console.log(result); //[1,2,3,4,5,6] */


/*     //프로토타입
    class Car {
        constructor(make, color) {
            this.make = make;
            this.color = color;
        }
    }
    let hyundai = new Car('MrJung', 'Blue');
    //프로토타입은 예를 들면, 차를 구매해서 그 차에 튜닝을 하여도 차 원본 자체는 그대로이다 튜닝과정이 프로토타입
    Car.prototype.summary = function () {
        console.log(`This car is a ${this.make} in the color ${this.color}`);
        //여기서 화살표함수를 쓰면 사용이 불가능해진다
    };
    hyundai.summary();
    console.log(Car);
    console.log(hyundai); */

/*
    문제1
    다음 코드를 ES6문법을 이용하여 재작성 하시오
    let name="Jihun's fruit store"
    let fruits = ["banana","apple","mango"]
    let address = "Ulsan"

    let store ={ name:name , fruits:fruits, address:address}
    console.log(store)
    */
/*   let store = {
        name: "Jihun's fruit store",
        fruits: ['banana', 'apple', 'mango'],
        address: 'Ulsan',
    }; */
//console.log(store);
/*  let name="Jihun's fruit store"
    let fruits = ["banana","apple","mango"]
    let address = "Ulsan"
    let store ={ name, fruits, address}
    console.log(store); */

/*
    문제2
    ES6 문법을 이용하여 다음과 같이 출력하기
    제 가게 이름은 Jihun's fruit store 입니다. 위치는 Ulsan에 있습니다
    */
/* let store = {
        name: "Jihun's fruit store",
        fruits: ['banana', 'apple', 'mango'],
        address: 'Ulsan',
    };
    console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address} 입니다`); */

/*
    문제3
    다음 코드를 구조,분해,할당(디스트럭팅)을 이용하여 해결하시오
    함수 안을 바꿔야 함!
    */
/*     function calculate(obj) {
        let { a, b, c } = obj;
        return a + b + c;
    }
    calculate({ a: 1, b: 2, c: 3 });
    console.log(calculate); */
    /*
    문제4
    다음 문제에 정답이 true가 나오게 하시오
    */

/*                 let name = 'JiHun store';
    let fruits = ['banana', 'apple', 'mango'];
    let address = {
        country: 'Korea',
        city: 'Ulsan',
    };
    //객체 안의 객체를 불러올 때
    function findStore(obj) {
        let {
            name,
            address: { city },
        } = obj;
        return (name = 'JiHun store' && city == 'Ulsan');
    }
    console.log(findStore({ name, fruits, address })); */

    /* 
    문제 5번 다음과 같이 프린트 되도록 코드를 바꾸시오
    참고: 배열에서 건너뛰고 싶은 부분이 있다면 ,를 사용해서 그 자리 비울 수 있다
    */
/*        function getNumber(){
    let array=[1,2,3,4,5,6] //여기서부터 바꾸기
    let [first, ,third,forth, ,] = array
    return {first,third,forth}
    }
    console.log(getNumber()) //결과값 {first:1, third:3, forth:4} */

    /* 
    문제6 다음 결과가 true가 되게 하시오
    */
/*               function getCalenar(first, ...rest){
    return(
        first === "January" &&
        rest[0] === "February" &&
        rest[1] === "March" &&
        rest[2] === undefined
    );
    }
    console.log(getCalenar("January","February","March")); //여기를 바꾸기 */

    /* 
    문제7 두 array 중 최소값을 찾는 함수 완성하기
    */
/*              function getMinimum(){
    let a = [45,23,78]
    let b = [54,11,9]
    return Math.min(...a, ...b) //여기를 바꾸기
    }
    console.log(getMinimum()) */

    /* 
    문제8 다음 함수를 화살표 함수로 바꾸시오
    */
/*             function sumNumber(){ 
    //여기서부터 바꾸시오
    const sum=(a,b)=>a+b;
    return sum(40,10);
}
console.log(sumNumber());


let sumNumber2=(a,b)=> {return a+b;}
console.log(sumNumber2(10,40)); */

/* 
문제9번 다음 함수를 화살표함수로 바꾸시오
참고: 호이스팅 개념을 생각하자, 일반함수:리턴이 먼저 나와도 오류가 나지 않는다
화살표함수: function으로 선언된 것이 아니기때문에 선언 후 호출이라는게 중요
*/
/* function sumNumber(){
return addNumber(1)(2)(3);
function addNumber(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
}
console.log(sumNumber); */

/* function sumNumber(){
    let addNumber=(a)=>(b)=>(c)=>a+b+c;
    return addNumber(1)(2)(3);
}

console.log(sumNumber()); */