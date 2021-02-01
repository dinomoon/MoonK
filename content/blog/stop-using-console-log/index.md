---
title: Stop Using console.log() in JavaScript(번역)
date: "2021-02-01"
---

코드를 디버깅하기 위해 console.log()를 자주 사용하는 JavaScript 개발자이신가요? 그것이 잘못된 것은 아닙니다. 하지만, console 객체에는 다른 놀라운 메서드들이 있습니다. 이 글에서는 이런 메서드들에 대해 설명하려고 합니다.

## console 객체는 왜 사용될까?

JavaScript에서 console 객체는 당신의 코드에서 사용한 변수의 값을 출력할 수 있는 browser debugging console에 접근할 수 있게 합니다. 종종, 맞는 값이 전달되고 있는지 확인하기 위해서 사용할 것입니다.<br><br>
브라우저에 값을 출력하기 위해서 대부분의 개발자들은 console.log()를 사용할 것입니다. 하지만, log는 console객체의 메서드 중 하나일뿐이고, 매우 유용한 다른 메서드들이 존재합니다.

## 1. console.log()

이 메서드는 콘솔에 값을 전달하기 위해 주로 사용됩니다. log() 안에는 모든 타입이 들어갈 수 있습니다.

### Example

```js
console.log("JavaScript")
console.log(7)
console.log(true)
console.log(null)
console.log(undefined)
console.log([1, 2, 3])
console.log({ a: 1, b: 2, c: 3 })
```

<p align='center'>
  <img src='https://miro.medium.com/max/351/1*L0vaz4jpLViLIJ-oXr2o6Q.png'/>
</p>
<hr>

## 2. console.error()

이 메서드는 테스트 코드를 작성할 때 유용하고 console에 error를 띄울 때 사용합니다. 기본적으로, error 메시지는 빨간색으로 하이라이트 되어있습니다.

### Example

```js
console.error("Error found")
```

<p align='center'>
  <img src="https://miro.medium.com/max/346/1*bLNgJWF1wGx1NRd53mTYPw.png" />
</p>
<hr>

## 3. console.warn()

이 메서드도 테스트 코드를 작성할 때 사용하고, console에 warning을 띄울 쌔 사용합니다. 기본적으로, warning 메시지는 노란색으로 하이라이트 되어있습니다.

### Example

```js
console.log("Warning!")
```

<p align='center'>
  <img src="https://miro.medium.com/max/349/1*z61it_h7bxHF84T_DCATcA.png" />
</p>
<hr>

## 4. console.clear()

이 메서드는 console을 비우고 싶을 때 사용합니다. 이 메서드를 사용하면 'Console was cleared'라고 console에 출력됩니다.

### Example

```js
console.clear()
```

<p align='center'>
  <img src="https://miro.medium.com/max/348/1*xsLNlkO-m9L0KP3TF81MSQ.png" />
</p>
<hr>

## 5. consle.time() and consle.timeEnd()

이 메서드들은 하나의 블럭이나 함수에서 얼만큼의 시간이 사용되는지 알고 싶을 때 사용합니다. 두 메서드는 string을 parameter로 받는데, 모두 같은 string을 parameter로 사용해야 합니다.

### Example

```js
console.time("timer")
const hello = function () {
  console.log("Hello Console!")
}
const bye = function () {
  console.log("Bye Console!")
}
hello() // calling hello();
bye() // calling bye();
console.timeEnd("timer")
```

<p align='center'>
  <img src="https://miro.medium.com/max/346/1*S63BR8aOlGfYfAhgaR9TJw.png" />
</p>
<hr>

## 6. console.table()

이 메서드는 console에 테이블을 생성해줍니다. array 또는 object를 넣어주면 자동으로 테이블이 생깁니다.

### Example

```js
console.table({ a: 1, b: 2, c: 3 })
```

<p align='center'>
  <img src="https://miro.medium.com/max/470/1*emG1EeptLSHsLbR2ulPfKg.png" />
</p>
<hr>

## 7. console.count()

이 메서드에 특정 값을 넣고 실행시키면 실행시킨만큼 특정 값의 count가 증가합니다.

### Example

```js
for (let i = 0; i < 3; i++) {
  console.count(i)
}
```

<p align='center'>
  <img src="https://miro.medium.com/max/346/1*hfucVhBEtQBFjgzTv3QoFg.png" />
</p>
<hr>

## 8. console.group() and console.groupEnd()

이 메서드를 사용하면 컨텐츠들을 그룹지을 수 있습니다. 같은 parameter를 전달해주면 그것이 그룹의 이름이 됩니다.

### Example

```js
console.group("group1")
console.warn("warning")
console.error("error")
console.log("I belong to a group")
console.groupEnd("group1")
console.log("I dont belong to any group")
```

<p align='center'>
  <img src="https://miro.medium.com/max/349/1*Q_Ok_EnFSioEiNES7vpq3A.png" />
</p>
<hr>

## Bonus: Styling your logs

### Example

```js
const spacing = "10px"
const styles = `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`
console.log("%cI am a styled log", styles)
```

<p align='center'>
  <img src="https://miro.medium.com/max/345/1*GgIhLJQK-_yV2FdLvV-u6A.png" />
</p>
