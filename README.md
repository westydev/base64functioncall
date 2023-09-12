## Install
```
$ npm install --save-dev js-base64-caller
```

## Call Function Usage
```js
const { FunctionEncypt } = require("./src/FunctionEncrypt");

async function Main() {
    /* Original Function
    function test(a, b) {
        console.log(a + b)
    }
    */ 

    //Encoded: CiAgICBmdW5jdGlvbiB0ZXN0KGEsIGIpIHsKICAgICAgICBjb25zb2xlLmxvZyhhICsgYikKICAgIH0KICAgIA==

    const Base64Caller =  await new FunctionEncypt().callBase64Function("CiAgICBmdW5jdGlvbiB0ZXN0KGEsIGIpIHsKICAgICAgICBjb25zb2xlLmxvZyhhICsgYikKICAgIH0KICAgIA==", [1, 50]);
}

Main();
```

## Code To Base64 Usege

```js
const { FunctionEncypt } = require("./main");


async function Main() {

    const Code = `
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    `

    const functionEncypt = new FunctionEncypt();

    const base64Code = functionEncypt.codeToBase64(Code);

    console.log(base64Code); //CiAgICBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHsKICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsKICAgIH0KICAgIA==
}

Main()
```

## Call Base64 Code
```js
const { FunctionEncypt } = require("./main")
const fs = require("fs");

async function Main() {
    const code = await fs.readFile('./code.txt', 'utf8');

    const functionEncypt = new FunctionEncypt();
    functionEncypt.callBase64Code(code);
}

Main()
```
