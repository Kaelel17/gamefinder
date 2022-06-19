//Home
let currentPage = 1;
let body = "";

if (window.localStorage.getItem("email") === null) {
  window.location.href = "index.html";
}

const fetchGames = (page) => {
  const API_URl =
    "https://api.rawg.io/api/games?key=323d24e77c714b23be95168582a653c5&page_size=50&page=" +
    page;

  fetch(API_URl)
    .then((response) => response.json())
    .then((data) => dataGame(data))
    .catch((error) => console.log(error));
};

fetchGames(currentPage);

const dataGame = (data) => {
  console.log(data);

  for (let i = 0; i < data.results.length; i++) {
    body += `<div class="rectangle">
              <div class="img-game" style="background-image: url('${data.results[i].background_image}')"></div> 
          <div class="data-card">
            <h2 class="game-name">${data.results[i].name}</h2>
            <h2 class="list-number">text</h2>
          </div>

          <div class="data-game">

              <div class="data-game__info">
                <p class="data-game__color">Release date:</p>
                <p class="data-game__text">${data.results[i].released}</p>
              </div>

              <div class="data-game__info" >
                <p class="data-game__color">Genres:</p>
                <p class="data-game__text">etc, etc</p>
              </div>

          </div>
            <div class="icons-genres">
            </div>
          
        </div>
        `;
  }
  console.log(body);
  document.querySelector(".box__rectangle").innerHTML = body;
};

const onScroll = () => {
  if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
    console.log("scroll");
    currentPage++;
    fetchGames(currentPage);
  }
};
window.addEventListener("scroll", onScroll);

//log out
const exit = document.querySelector(".log-out");
exit.addEventListener("click", function () {
  logOut();
});
function logOut(e) {
  window.localStorage.removeItem("email");
  window.location.href = "/";
}
