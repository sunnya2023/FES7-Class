//같은 함수 이름 여러번 실
function test() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
}

function test() {
    console.log('hello')
}

test()

//이 경우 'hello'한번만 출력 됨