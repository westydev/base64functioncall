const { Base64 } = require("./Base64")
const { Filter } = require("./Filter")

class FunctionEncypt {
    constructor() { 
        this.Base64Handler = new Base64();
        this.FilterHandler = new Filter();
    }

    codeToBase64(functionString) {
        return this.Base64Handler.encodeToBase64(functionString);
    }

    base64ToCode(base64String) {
        return this.Base64Handler.decodeFromBase64(base64String);
    };

    async callBase64StringFunction(encodedString, args) {

        const decodedString = this.base64ToCode(encodedString);

        let functionArgList = [];

        await args.forEach(async arg => {
            await functionArgList.push(arg);
        });

        let endString = "";

        for (let i = 0; i < functionArgList.length; i++) {
            if(i == (functionArgList.length - 1) && functionArgList.length == 1) {
                endString += `(${this.FilterHandler.stringifyElement(functionArgList[i])})`;
            } else if (i == 0) {
                endString += `(${this.FilterHandler.stringifyElement(functionArgList[i])}`;
            } else if (i == (functionArgList.length - 1)) {
                endString += `, ${this.FilterHandler.stringifyElement(functionArgList[i])})`;
            } else {
                endString += `, ${this.FilterHandler.stringifyElement(functionArgList[i])}`;
            }
        }

        const functionNameListed = decodedString.split('\n');

        let satirNameFunction = 0;
        let val = [];

        for (let index = 0; index < functionNameListed.length; index++) {
            const str = await functionNameListed[index];

            if(str.includes("function"))  {
                satirNameFunction = index;
                await val.push(index);
            } else {
                await satirNameFunction++;
            }
        };

        const lineFunctionName = functionNameListed[val[0]];
        let functionName = this.FilterHandler.extractFunctionName(lineFunctionName);

        let callFunction = functionName+endString;
        let evaledCode = `${decodedString}\n${callFunction}`;

        return await eval(evaledCode);
    };

    async callBase64Code(encodedString) {
        return await eval(await this.base64ToCode(encodedString));
    };
}


module.exports = { FunctionEncypt }