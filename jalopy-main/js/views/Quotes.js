let data;
// const quotes = [
//     {
//         quote: "If you can't love yourself, how the hell you gonna love somebody else?!",
//         author: "Rupaul Charles"
//     },
//     {
//       quote: "Some may never live, but the crazy never die.",
//       author: "Hunter S. Thompson"
//     },
//     {
//         quote: "War is organized murder and torture against our brothers.",
//         author: "Alfred Adler"
//     },
//     {
//         quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
//         author: "Lucy Liu"
//     },
//     {
//         quote: "If science fiction is the mythology of modern technology, then its myth is tragic",
//         author: "Ursula K. Le Guin"
//     },
//     {
//         quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
//         author: "Harvey Fierstein"
//     },
//     {
//         quote: "Follow sound business trends, not fashion trends.",
//         author: "Janice Dickenson"
//     },
//     {
//         quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
//         author: "Alice Walker"
//     },
// ]

export default function QuotesView(props) {
    data = props;
    return `<div class="container">
    <h1>Quotes For the Soul</h1>
    <div class="card">
        <div class="card-body" id="quotes"></div>
<!--    <button class="form-control" id="show-fact-btn">Show Quotes</button>-->
</div>`;
}

export function QuotesViewEvents() {
    const quotes = data.quotes
    const displayQuote = quotes;
    let html = document.querySelector("#quotes");
        for (let i = 0; i < quotes.length; i++){
          html.innerHTML += `<h>${quotes[i].author}:</h1> <p>"${quotes[i].quote}"</p> <br>`;
        }
}