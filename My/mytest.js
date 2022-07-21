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

function decode(expr) {
    // write your solution here
console.log(expr);
const Lenght = expr.lenght;
console.log(Lenght);
let SubExpr;
const result = ""; /* итоговое декодированное выражение */

for (let i=0; i < Lenght; i = i + 10){
SubExpr = expr.slice(i,i+10);
console.log (SubExpr);
const decodeSubExpr = "";   /*декодирование одной буквы или пробела */  
   for( let n=0; n < 10; n = n + 2){
        if (SubExpr.slice(n, n + 2) == "**" ){
        result = result + " "
        console.log ( `здесь были *, выводим пробел ${result}`);
        break;
        }
        else {
            if (SubExpr.slice(n, n + 2) == "00" ){
                decodeSubExpr = decodeSubExpr + ""
                console.log ( `здесь были 0, добавляем пустую строку ${decodeSubExpr}`);
            } 
            else {
                if (SubExpr.slice(n, n + 2) == "10" ){
                    decodeSubExpr = decodeSubExpr + "."
                    console.log ( `здесь было 10, добавляем точку ${decodeSubExpr}`);

                } 
                else{
                    if (SubExpr.slice(n, n + 2) == "11" ){
                        decodeSubExpr = decodeSubExpr + "-"
                        console.log ( `здесь было 11, добавляем точкутире ${decodeSubExpr}`);
                    }   
                }   
            }
        }
   }
result = result + MORSE_TABLE[decodeSubExpr];
console.log ( `результат после  ${i} выполнения внешнего цикла`);
}
console.log(result);
return (result);

}

decode ("0000001011");
