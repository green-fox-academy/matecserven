'use strict';

export{}

let lineCount: number = 4;
let linePyr: string = '*';
let lineSpace: string = ' ';
let lineSpaceCount: number = 1;


for (let k: number = 1; k <= lineCount; k++) {
    for (lineSpace = ' '; lineSpaceCount < lineCount; lineSpaceCount++ ) {
        lineSpace += ' ';       
    }  
    console.log(lineSpace + linePyr);
    lineSpaceCount = k+1;
    linePyr += '**';
}