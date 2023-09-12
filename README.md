## Install
```
$ npm install --save-dev js-base64-caller
```

## Usage
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
