function toBinary(decimal) {
    let gt = decimal;
    let result = "";
    //xe kieu su lieu
    if(typeof gt === 'number' ){
        console.log('la so')
        if (gt == 0) {
            result = "0";
        }
        while (gt > 0) {
             result += gt % 2;
             gt = Math.floor(gt/2);
        };
        return result.split("").reverse().join("");
    }
    //**************************************** */
    if(typeof gt === 'string' ){
        switch(gt) {
            case 'a':
                gt = 10;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("");
            break;

            case 'b':
                gt = 11;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("");
            break;

            case 'c':
                gt = 12;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("");
            break;

            case 'd':
                gt = 13;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("");
            break;

            case 'e':
                gt = 14;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("");
            break;

            case 'f':
                gt = 15;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("");
            break;

            case 'aa':
                gt = 10;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("")+result.split("").reverse().join("");
            break;

            case 'bb':
                gt = 11;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("")+result.split("").reverse().join("");
            break;

            case 'cc':
                gt = 12;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("")+result.split("").reverse().join("");
            break;

            case 'dd':
                gt = 13;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("")+result.split("").reverse().join("");
            break;

            case 'ee':
                gt = 14;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("")+result.split("").reverse().join("");
            break;

            case 'ff':
                gt = 15;
                console.log(gt);
                while (gt > 0) {
                    result += gt % 2;
                    gt = Math.floor(gt/2);
                };
                return result.split("").reverse().join("")+result.split("").reverse().join("");
            break;

        }
   }
}

console.log('toBinary(FF) ➞ '+ toBinary('ff'))
console.log('toBinary(AA) ➞ '+ toBinary('aa'))
console.log('toBinary(FA) ➞ '+ toBinary('f')+toBinary('a'))

