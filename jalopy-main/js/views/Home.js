// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";
//
// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;
// const INTELLIJ_PROJECT_PATH = 'jalopy/';

// const imagePaths = [
//     "assets/jalopy1.jpeg",
//     "assets/jalopy2.jpeg",
//     "assets/jalopy3.jpeg"
// ]

export default function Home(props) {
    return `
        <header>
            <h1 style="text-align: center;">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img class="center" id="jalopy-img" src="assets/jalopy1.jpeg">
                <p>
                    "Welcome to my Jalopy application!"
                </p>    
                
                <button id="img-button">Click Me!</button>
            </div>
        </main>
    `;
}
let currentImageIndex = 1;
export function HomeEvents() {
    let a = 1;
    const button = document.querySelector("#img-button");
    button.addEventListener("click", function (event) {
        const image = document.querySelector("#jalopy-img");
        // imgage.setAttribute("src", `assets/jalopy2.jpeg`);
        // image.setAttribute("src", imagePaths[currentImageIndex]);
        image.setAttribute("src", `assets/jalopy${currentImageIndex}.jpeg`);

        currentImageIndex++;
        if (currentImageIndex === 4) {
            currentImageIndex = 1;
        }
    });
}

