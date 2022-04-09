# 데이터 타입

- string 문자열 "text"
- number 상수 1234
- boolean true, false
- 값이 없음, 비어있음 null
- 정의하지 않음, 존재하지 않음 undefined

# 변수

- var -> 사용하지 않음
- const -> 재사용하지 않을 변수
- let -> 재사용할 수 있는 변수

## 변수 예시

### const

const a = 5;
a = 6;
동작하지 않음. a는 재사용하지 않고 5

### let

let b = 5;
b = 6;
b는 6으로 변경됨

# list, array

const me = "genius";
const days = [1, 2, true, false, null, undefined, "text", me];

console.log(days[2]); -> true
days[2] = "false"
console.log(days[2]); -> false
days.push("sun")

# object

const player = {
name: "sean",
age: 37,
male: true
};

console.log(playser.name); -> sean
player.married = true -> object에 추가

# function

function sayHello(name) {
console.log("Hello my name is " + name);
}

sayHello("sean"); -> Hello my name is sean

# example

object 안에 함수를 나열할 수 있음.

const calculator = {
add: function (a, b) {
console.log(a+b);
},
minus: function (a, b) {
console.log(a-b);
},
divide: function (a, b) {
console.log(a/b);
},
multiple: function (a, b) {
console.log(a\*b);
}
}

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.divide(10, 2);
calculator.multiple(3, 4);

# return

## 예시 1

const age = 10;
function calculateKrAge(ageOfForeigner) = {
return ageOfForeinger + 2;
}

const krAge = calculateKrAge(96);

## 예시 2

const calculator = {
add: function (a, b) {
return a+b;
},
minus: function (a, b) {
return a-b;
},
divide: function (a, b) {
return a/b;
},
multiple: function (a, b) {
return a\*;
}
}

const plusResult = calculator.add(2, 3);

return을 하면 함수는 종료한다.

# conditin

if(condition){
///condition == ture
} else {
///condition == false
}

const age = parseInt(prompt( "How old are you?") );

if(isNaN(age) || age <0) {
console.log("Please write a real positive number");
} else if (age < 18) {
console.log("You are too young.")
} else if (age >= 18 && age <= 50) {
console.log("You can drink a beer.")
} else if (age > 50 && age <= 80) {
console.log("You can drink a soju.")
} else {
console.log("Take your health.");
}
