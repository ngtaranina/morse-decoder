console.log("Hello my world!");
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
console.log("Hello all of you!");
function decode(expr) {
    // write your solution here

const LengthOfExpr = expr.length;
let SubExpr;
let result = ""; /* итоговое декодированное выражение */

for (let i=0; i < LengthOfExpr; i = i + 10){
    SubExpr = expr.slice(i,i+10);
    let decodeSubExpr = "";   /*декодирование одной буквы или пробела */  

    for( let n=0; n < 10; n = n + 2){
            if (SubExpr.slice(n, n + 2) == "**" ){
            decodeSubExpr =  " ";
            n = 10;
            }
            else {
                if (SubExpr.slice(n, n + 2) == "00" ){
                    decodeSubExpr = decodeSubExpr + "";
                } 
                else {
                    if (SubExpr.slice(n, n + 2) == "10" ){
                        decodeSubExpr = decodeSubExpr + ".";                      
                    } 
                    else{
                        if (SubExpr.slice(n, n + 2) == "11" ){
                            decodeSubExpr = decodeSubExpr + "-";                            
                        }   
                    }   
                }
                
            }
    }
    if ( decodeSubExpr == " ") {
        result = result + " "
    }
    else{
        result = result + MORSE_TABLE[decodeSubExpr];  
    }
  
}

console.log(result);
return (result);

}

module.exports = {
    decode
}