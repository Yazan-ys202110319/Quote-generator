// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote : `"To be, or not to be, that is the question."`,
    person : `William Shakespeare`
},  {
    quote : `"I think, therefore I am."`,
    person : `René Descartes`
},  {
    quote : `"The only thing we have to fear is fear itself."`,
    person : `Franklin D. Roosevelt`
},  {
    quote : `"That which does not kill us makes us stronger.`,
    person : `Friedrich Nietzsche`
},  {
    quote : `"In the middle of difficulty lies opportunity."`,
    person : `Albert Einstein`
},  {
    quote : `"Life is what happens when you’re busy making other plans."`,
    person : `John Lennon`
}];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})