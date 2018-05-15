'use strict';
export {}
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
function fixit(input: string): string {
  input = input.replace('bots', 'odds').replace('https', 'https:');
  return input;
}

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

console.log(fixit(url));