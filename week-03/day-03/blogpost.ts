'use strict';

export class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(name: string, title: string, date: string) {
    this.authorName = name;
    this.title = title;
    this.publicationDate = date;
  }
}

let blog1 = new BlogPost('John Doe', 'Lorem Ipsum', '2005.05.04.');
let blog2 = new BlogPost('Tim Urban', 'Wait but why', '2010.10.10.');
let blog3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '2017.03.28.');

blog1.text = 'Lorem ipsum dolor sit amet.';
blog2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
blog3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

console.log(blog1);
console.log(blog2);
console.log(blog3);
