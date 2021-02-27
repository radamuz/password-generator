function generatePassword() {
    var length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?¿.,;:-_\\!¡@#$~%&/()=[]{}ç*+",
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

var pass = generatePassword()

console.log(pass);
