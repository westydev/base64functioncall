class Base64 {
    encodeToBase64(text) {
        return Buffer.from(text).toString('base64');
    }
      
    decodeFromBase64(base64Text) {
        return Buffer.from(base64Text, 'base64').toString('utf-8');
    }
}

module.exports = { Base64 }