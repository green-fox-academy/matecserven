'use strict';

export {}

function substr(str: string, keyword: string): number {

    if (str.indexOf(keyword) != -1) {
        return str.indexOf(keyword);
    } else {
        return -1;
    }
    
    
}

console.log(substr("this is what I'm searching in", "searching"));