class Filter {
    stringifyElement(element) {
        if (typeof element === 'string') {
          return `"${element}"`;
        } else if (Array.isArray(element)) {
          return `[${element.map(stringifyElement).join(', ')}]`;
        } else {
          return element;
        }
    }

    extractFunctionName(sourceCode) {
        const regex = /function\s+([A-Za-z_$][\w$]*)\s*\(/;
        const match = sourceCode.match(regex);
      
        if (match && match[1]) {
          return match[1];
        }
      
        return null;
    }
}

module.exports = { Filter };