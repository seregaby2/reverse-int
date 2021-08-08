module.exports = function reverse (n) {
   let num = Math.abs(n);
        let numStr = num.toString();
        let result = '';
        let remainder;
        for(let i = 0; i < numStr.length; i++) {
            remainder = num % 10;
            num = Math.floor(num / 10); 
            result = `${result}${remainder}`
        }
        return result;
    };

