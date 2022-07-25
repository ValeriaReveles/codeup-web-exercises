export default function DogFactsView(props) {
    console.log(props);
    return `<div class="container">
    <h1>Dog Facts</h1>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">${props.dogFacts[0]}</p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">${props.dogFacts[1]}</p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">${props.dogFacts[2]}</p>
        </div>
    </div>
    <button class="form-control" id="show-fact-btn">Show Facts</button>
    <a data-link href="/insert-dog-fact">Insert Dog Fact</a>
</div>
`;
}


export function DogFactsEvents() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function(event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "";
        }
    });
}