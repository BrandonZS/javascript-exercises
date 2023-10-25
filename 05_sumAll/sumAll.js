const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    let sum = 0; 
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;




    //Primer intento, optimizado arriba !!
    /*let sum = 0;
    let smaller;
    let bigger;    
    if ((typeof num1)=="number" && num1 > 0 && (typeof num2)=="number" && num2 > 0){
        if(num1< num2){
            smaller = num1;
            bigger = num2;
        } else{
            smaller = num2;
            bigger = num1;
        }    
        for (let i = smaller; i<= bigger; i++){
            sum += i;
        }
    } else{
        return "ERROR";
    }
    return sum;*/
};

// Do not edit below this line
module.exports = sumAll;
