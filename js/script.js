const qoute = {
    quotes: [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "The best way to predict the future is to invent it.",
            author: "Alan Kay"
        },
        {
            quote: "The best way to predict the future is to invent it.",
            author: "Alan Kay"
        },
        {
            quote: "It's so easy to sit up and take notice, what's difficult is getting up and taking action.",
            author: "John F. Kennedy"
        },
        {
            quote: "it's so easy to be great my friend, cause most people are weak",
            author: "David Goggins"
        },
    ]
};

const btn = document.getElementById('generate-btn');
const qouteText = document.getElementById('qoute-text');
const authorText = document.getElementById('author-text');

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * qoute.quotes.length);
    const randomQuote = qoute.quotes[randomIndex];
    qouteText.textContent = randomQuote.quote;
    authorText.textContent = randomQuote.author;
    console.log(randomQuote);
});


