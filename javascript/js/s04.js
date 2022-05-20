//cafe(); //함수 호출 먼저 해도 된다 호이스팅 때문!

/* 함수의 선언 */
function cafe() {
    let espresso = 10;
    let milk = 170;
    let chocolate_syrup = 50;
    let whipping = 60;

    const AMERICANO = espresso;
    const LATTE = espresso + milk;
    const MOCHA = espresso + chocolate_syrup + milk;
    const WHIPPING_MOCHA = espresso + chocolate_syrup + milk + whipping;

    console.log('americano 칼로리: ' + AMERICANO);
    console.log('latte 칼로리: ' + LATTE);
    console.log('mocha 칼로리: ' + MOCHA);
    console.log('whippingMocha 칼로리: ' + WHIPPING_MOCHA);
}

cafe(); //함수 호출


console.log(''); //빈칸
/* 매개변수(parameter) / 인자 */
function plus(a, b) {
    console.log(a + b); //이 때 a, b는 인자
}

plus(3, 7); //함수 호출 3,7 은 매개변수
plus(3); //Not a Number



/* 삼각형의 넓이 계산기 */

function triangle(bottom, height) {
    let area = (bottom * height) / 2;
    console.log(area);
}

triangle(10, 20);
triangle(30, 20);
triangle(30, 10);
triangle(120, 220);
triangle(150, 220);