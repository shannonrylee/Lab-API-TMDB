const API_KEY = "3457e5dd87861339ce372a4b4cc5a006";
const DOMAIN = "https://api.themoviedb.org/3";
const IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/original";
const searchInput = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", async () => {
  const userInput = searchInput.value;
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${API_KEY}`
  );
  console.log(response);
});

const response = response.data.results;

const div = document.createElement(`div`);
const div2 = document.createElement(`div`);
div.renderList.add(`movie`);
div.renderList.add(`title`);
console.log(div);

body.appendChild.div;

const renderList = (response) => {
  response.forEach(response);
  const responseID = responseID;
  console.log(responseID);
  const title = responseTitle;
  console.log(responseTitle);

  const renderList = document.createElement(`li`);
  renderList.textContent = `Movie Id: ${responseID} Title: ${title}`;
  body.appendChild(renderList);
};
