function getTodaysQuote() {
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  const stored = JSON.parse(localStorage.getItem("quoteOfTheDay") || "null");

  if (stored && stored.dateKey === todayKey) {
    return QUOTES[stored.index];
  }

  const index = Math.floor(Math.random() * QUOTES.length);
  localStorage.setItem("quoteOfTheDay", JSON.stringify({ dateKey: todayKey, index }));
  return QUOTES[index];
}

const revealBtn = document.getElementById("reveal-btn");
const result = document.getElementById("result");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const focusText = document.getElementById("focus-text");

revealBtn.addEventListener("click", () => {
  const todaysQuote = getTodaysQuote();
  quoteText.textContent = todaysQuote.text;
  quoteAuthor.textContent = `— ${todaysQuote.author}`;
  focusText.textContent = todaysQuote.focus;
  result.classList.remove("hidden");
  revealBtn.textContent = "That's my quote today ✨";
  revealBtn.disabled = true;
});
