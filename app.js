// Variables
const button = document.querySelector("button");
const blockQuote = document.querySelector("blockquote");
const figcaption = document.querySelector("figcaption");
let randomNum;

// Events
button.addEventListener("click", () => {
  request()
    .then((data) => {
      console.log(data);
      randomNum = parseInt(Math.random() * 1643);
      console.log(randomNum);
      blockQuote.innerText = data[randomNum].text;
      figcaption.innerText = data[randomNum].author;
    })
    .catch((err) => {
      console.log("Error finding data!!");
    });
});

// Requests
let request = async () => {
  let response = await fetch("https://type.fit/api/quotes");
  return response.json();
};
