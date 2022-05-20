//메모리 용량 계산기 만들기//
//함수 두개 teraToGiga, teraToMega
//테라바이트를 기가바이트로 환산, 테라바이트를 메가바이트로 환산
//1TB = 1024GB

function teraToGiga(x) {
    console.log(x * 1024 + 'GB');
}

function teraToMega(x) {
    console.log(x * 1024 * 1024 + 'MB');
}

teraToGiga(1);
teraToMega(1);