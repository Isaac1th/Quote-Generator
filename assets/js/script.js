let apiQuotes = [];

// Show New Quote
function newQuote() {
  const randomQuote = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomQuote];
  console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (e) {}
}

// On Load
getQuotes();
