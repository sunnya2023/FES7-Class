//문제 1 : 

function sum(x, y) {
    return x + y
}
add(1, 3)

function minus(x, y) {
    return x - y
}
add(1, 3)

function multifly(x, y) {
    return x * y
}

add(1, 3)
function divide(x, y) {
    return x / y
}
add(1, 3)

function solution(num1, num2) {
    return num1 - num2
}

//문제 2 : '10,000,000,000'와 같은 문자를 입력받안 1000000000와 같은 숫자를 반환하는 함수를 만들어주세요
let str = '10,000,000,000'
function strigToNumber(str) {
    let answer = parseInt(str.replaceAll(',', ' '))
    return answer
}
strigToNumber(str)

//문제3: hello를 3번 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요
//입력:world
//출력:['w','o','r','l','d']

let str1 = 'world'
function split(str1) {
    let answer = str1.split('')
    return answer
}
split(str1)

//문제 4 :
//나의 풀이
function calc(a, b) {
    let answer = (a + b) * (a + b)
    return answer
}
calc(3, 5)

//4.1풀이
function calc(a, b) {
    let sum = a + b
    let answer = sum * sum
    return answer
}
calc(3, 5)

//4.2 풀이


//문제 5 :

//let question = x ** 2 + 4x-12
function QuadraticEquation(x) {
    let question = (x ** 2) + 4 * x - 12
    return question
}
QuadraticEquation(3)