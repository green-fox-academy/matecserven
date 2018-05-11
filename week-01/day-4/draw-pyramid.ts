'use strict';

export{}

let lineCount: number = 4;
let linePyr: string = '*';
let lineSpace: string = ' ';

for (let k: number = 1; k <= lineCount; k++) {
    for (let i: number = k; i < lineCount; i++ ) {
        lineSpace += ' ';       
    }  
    console.log(lineSpace + linePyr);
    linePyr += '**';
    lineSpace = ' ';
}