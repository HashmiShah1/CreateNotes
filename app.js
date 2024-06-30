const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.querySelector("#author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;// content wo hy jis me quote hy api me object me dekhna
    author.innerHTML = data.author;// jesy author ka name author me likha hoa
}

getQuote(apiUrl);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width = 600, height = 300");
} 
