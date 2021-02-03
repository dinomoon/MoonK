---
title: "[번역] 시간을 절약할 수 있는 20개의 자바스크립트 Shorthand Techniques"
date: "2021-02-03"
---

원문: <u>https://medium.com/javascript-in-plain-english/20-javascript-shorthand-techniques-that-will-save-your-time-f1671aab405f</u>

## 1. 변수 선언

```js
//Longhand
let x
let y = 20

//Shorthand
let x, y = 20
```

---

## 2. 여러 변수에 값 할당하기

```js
//Longhand
let a, b, c
a = 5
b = 8
c = 12

//Shorthand
let [a, b, c] = [5, 8, 12]
```

---

## 3. 3항 연산자

```js
//Longhand
let marks = 26
let result
if (marks >= 30) {
  result = "Pass"
} else {
  result = "Fail"
}
//Shorthand
let result = marks >= 30 ? "Pass" : "Fail"
```

---

## 4. 기본값 할당

```js
//Longhand
let imagePath
let path = getImagePath()
if (path !== null && path !== undefined && path !== "") {
  imagePath = path
} else {
  imagePath = "default.jpg"
}

//Shorthand
let imagePath = getImagePath() || "default.jpg"
```

---

## 5. AND(&&) Short circuit evaluation

인자가 항상 true인 함수를 사용할 때, And short circuit을 사용할 수 있다.

```js
//Longhand
if (isLoggedin) {
  goToHomepage()
}

//Shorthand
isLoggedin && goToHomepage()
```

조건에 따라 컴포넌트를 렌더링 할 수 있기 때문에 React에서 더 유용하다.

```jsx
<div> {this.state.isLoading && <Loading />} </div>
```

---

## 6. Swap two variables

```js
let x = "Hello", y = 55
//Longhand
const temp = x
x = y
y = temp

//Shorthand
[x, y] = [y, x]
```

---

## 7. Arrow Function

```js
//Longhand
function add(num1, num2) {
  return num1 + num2
}

//Shorthand
const add = (num1, num2) => num1 + num2
```

---

## 8. Template Literals

```js
//Longhand
console.log("You got a missed call from " + number + " at " + time)

//Shorthand
console.log(`You got a missed call from ${number} at ${time}`)
```

---

## 9. Multi-line String

```js
//Longhand
console.log(
  "JavaScript, often abbreviated as JS, is a\n" +
    "programming language that conforms to the \n" +
    "ECMAScript specification. JavaScript is high-level,\n" +
    "often just-in-time compiled, and multi-paradigm."
)
//Shorthand
console.log(
  `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.`
)
```

---

## 10. 여러 조건 체크하기

```js
//Longhand
if (value === 1 || value === "one" || value === 2 || value === "two") {
  // Execute some code
}

// Shorthand 1
if ([1, "one", 2, "two"].indexOf(value) >= 0) {
  // Execute some code
}
// Shorthand 2
if ([1, "one", 2, "two"].includes(value)) {
  // Execute some code
}
```

---

## 11. Object Property Assignment

객체에서 키의 이름과 값의 이름이 같다면 한 번만 써도 자바스크립트에서 자동적으로 할당해줍니다.

```js
let firstname = "Amitav"
let lastname = "Mishra"
//Longhand
let obj = { firstname: firstname, lastname: lastname }

//Shorthand
let obj = { firstname, lastname }
```

---

## 12. Stirng into a Number

parseInt나 parseFloat 메서드를 사용하면 string을 number로 변환할 수 있는데, +연산자도 같은 기능을 합니다.

```js
//Longhand
let total = parseInt("453")
let average = parseFloat("42.6")

//Shorthand
let total = +"453"
let average = +"42.6"
```

---

## 13. 문자열 반복

```js
//Longhand
let str = ""
for (let i = 0; i < 5; i++) {
  str += "Hello "
}
console.log(str) // Hello Hello Hello Hello Hello

// Shorthand
"Hello ".repeat(5)
```

누군가에게 사과하고 싶을 때

```js
"sorry\n".repeat(100)
```

---

## 14. Exponent Power

```js
//Longhand
const power = Math.pow(4, 3) // 64

// Shorthand
const power = 4 ** 3 // 64
```

---

## 15. Double NOT bitwise operator (~~)

~~연산자는 Math.floor()를 대신할 수 있다.

```js
//Longhand
const floor = Math.floor(6.8) // 6

// Shorthand
const floor = ~~6.8 // 6
```

하지만, ~~연산자는 32비트 정수형에서만 동작하므로 2147483647(2\*\*31 - 1) 보다 큰 수에서는 Math.floor()를 사용하는 것이 정확합니다.

---

## 16. 배열에서 가장 큰 수와 작은 수 찾기

```js
// Shorthand
const arr = [2, 8, 15, 4]
Math.max(...arr) // 15
Math.min(...arr) // 2
```

---

## 17. For loop

반복문을 사용할 때 보통 for를 사용하지만 for...of 또는 for...in을 사용할 수도 있습니다.

```js
let arr = [10, 20, 30, 40]
//Longhand
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
//Shorthand
//for of loop
for (const val of arr) {
  console.log(val)
}
//for in loop
for (const index in arr) {
  console.log(`index: ${index} and value: ${arr[index]}`)
}
```

객체도 for in loop에서 사용할 수 있습니다.

```js
let obj = { x: 20, y: 50 }
for (const key in obj) {
  console.log(obj[key])
}
```

---

## 18. 배열 합치기

```js
let arr1 = [20, 30]
//Longhand
let arr2 = arr1.concat([60, 80])
// [20, 30, 60, 80]

//Shorthand
let arr2 = [...arr1, 60, 80]
// [20, 30, 60, 80]
```

---

## 19. Deep cloning of multi-level object

```js
let obj = { x: 20, y: { z: 30 } }

//Longhand
const makeDeepClone = obj => {
  let newObject = {}
  Object.keys(obj).map(key => {
    if (typeof obj[key] === "object") {
      newObject[key] = makeDeepClone(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  })
  return newObject
}
const cloneObj = makeDeepClone(obj)

//Shorthand
const cloneObj = JSON.parse(JSON.stringify(obj))
//Shorthand for single level object
let obj = { x: 20, y: "hello" }
const cloneObj = { ...obj }
```

---

## 20. Get character from string

```js
let str = "jscurious.com"
//Longhand
str.charAt(2) // c

//Shorthand
str[2] // c
```
