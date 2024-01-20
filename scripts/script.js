let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let api_url = 'https://api.quotable.io/random';

async function getQuote(url){
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(api_url)