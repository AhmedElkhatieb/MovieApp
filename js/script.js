// Loading
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("body").classList.remove("overflow-hidden");
  document.getElementById("loading").classList.replace("d-block", "d-none");
})
// Navbar
let sideLeft = $(".left").outerWidth(true);
$(".bar-btn").click(function () {
  let sideLeft = $(".side-bar").offset().left;
  if (sideLeft === 0) {
    $(".side-bar").css({ left: "-262.562px", transition: "left 1s" });
    document
      .querySelector(".open-close")
      .classList.replace("fa-x", "open-close-icon");
    $(".links").css({ paddingTop: "250px", opacity: "0" });
  } else {
    $(".side-bar").css({ left: "0", transition: "left 1s" });
    document
      .querySelector(".open-close")
      .classList.replace("open-close-icon", "fa-x");
    $(".links").css({ paddingTop: "0", opacity: "1" });
  }
});

async function getMovies(category) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWRlZmQ4NDNkZTRiYjQ1NDg4NGNjNGVlNmU4NWE4OSIsIm5iZiI6MTcyMTQxNDM1OC40NDQ2Niwic3ViIjoiNjY5YWIxNjdlMTQ5OTIxMTM1NTg0MGU5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JKPKfCpgoqnJ7hD9VZ3jjfMXiR_wqbtmB5hz0lRPNqY",
    },
  };

  const api = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  );
  const response = await api.json();
  console.log(response);
  return response;
}

async function getTrendMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWRlZmQ4NDNkZTRiYjQ1NDg4NGNjNGVlNmU4NWE4OSIsIm5iZiI6MTcyMTQxNDM1OC40NDQ2Niwic3ViIjoiNjY5YWIxNjdlMTQ5OTIxMTM1NTg0MGU5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JKPKfCpgoqnJ7hD9VZ3jjfMXiR_wqbtmB5hz0lRPNqY",
    },
  };

  const api = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  const response = await api.json();
  return response;
}

async function getSearchedMovies(input) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWRlZmQ4NDNkZTRiYjQ1NDg4NGNjNGVlNmU4NWE4OSIsIm5iZiI6MTcyMTQxNDM1OC40NDQ2Niwic3ViIjoiNjY5YWIxNjdlMTQ5OTIxMTM1NTg0MGU5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JKPKfCpgoqnJ7hD9VZ3jjfMXiR_wqbtmB5hz0lRPNqY",
    },
  };

  let searchedMovies = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`,
    options
  );
  let response = await searchedMovies.json();
  console.log(response);
  return response;
}

search = document.getElementById("search");
search.addEventListener("input", async function () {
  if (search.value === "") {
    let movies = await getMovies("now_playing");
    display(movies);
  } else {
    let movies = await getSearchedMovies(search.value);
    display(movies);
  }
});

function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
function displayStars(stars_count) {
  let stars = ``;
  if (stars_count < 0.5) {
    stars = `<i class='fa-solid fa-star text-muted fs-6'></i>`;
  } else if (stars_count < 1) {
    stars = `<i class='fa-regular fa-star-half-stroke text-warning fs-6'></i>`;
  } else if (stars_count < 1.5) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i>`;
  } else if (stars_count < 2) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-regular fa-star-half-stroke text-warning fs-6'></i>`;
  } else if (stars_count < 2.5) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i>`;
  } else if (stars_count < 3) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-regular fa-star-half-stroke text-warning fs-6'></i>`;
  } else if (stars_count < 3.5) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i>`;
  } else if (stars_count < 4) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-regular fa-star-half-stroke text-warning fs-6'></i>`;
  } else if (stars_count < 4.5) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i>`;
  } else if (stars_count < 5) {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-regular fa-star-half-stroke text-warning fs-6'></i>`;
  } else {
    stars = `<i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i><i class='fa-solid fa-star text-warning fs-6'></i>`;
  }
  return stars;
}
function display(movies) {
  console.log(movies.results);
  let box = ``;
  for (let i = 0; i < movies.results.length; i++) {
    let img = movies.results[i].poster_path
      ? `https://image.tmdb.org/t/p/w500/${movies.results[i].poster_path}`
      : `./img/default-movie.jpg`;
    let overviewText =
      movies.results[i].overview.length < 300
        ? movies.results[i].overview
        : movies.results[i].overview.slice(0, 300) + "...";
    let vote = movies.results[i].vote_average.toFixed(1);
    let stars_count = mapRange(vote, 0, 10, 0, 5);

    box += `
      <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="movie position-relative">
                        <div class="img">
                            <img src="${img}" alt="..." class="w-100 rounded-2">
                        </div>
                        <div class="movie-layer position-absolute">
                            <div class="slide-down">
                                <h2 class="text-center">${
                                  movies.results[i].title
                                }</h2>
                            </div>
                            <div class="rotate">
                                <p>
                                    ${overviewText}
                                </p>
                            </div>
                            <div class="slide-up">
                                <h3 class="h6 mb-5">Release Date: <span>${
                                  movies.results[i].release_date
                                }</span></h3>
                                <div class="rating-stars mb-2">
                                    ${displayStars(stars_count)}
                                </div>
                                <div>
                                    <span class="rating">${vote}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
      `;
  }
  $(".movie").mouseleave(function () { 
    console.log("left");
  });
  document.getElementById("rowBody").innerHTML = box;
}

// Initial Movies
async function init() {
  let initial_movies = await getMovies("now_playing");
  display(initial_movies);
}
init();

async function showCat(category) {
  let x = await getMovies(category);
  display(x);
}
async function showTrending() {
  let x = await getTrendMovies();
  display(x);
}
// Links
$(".link").click(function () {
  $(".side-bar").css({ left: "-262.562px", transition: "left 1s" });
  $(".links").css({ paddingTop: "250px", opacity: "0" });
  document
    .querySelector(".open-close")
    .classList.replace("fa-x", "open-close-icon");
  clickedLink = $(this).text();
  console.log(clickedLink);
  switch (clickedLink) {
    case "Now Playing":
      showCat("now_playing");
      break;
    case "Popular":
      showCat("popular");
      break;
    case "Top Rated":
      showCat("top_rated");
      break;
    case "Trending":
      showTrending();
      break;
    case "Upcoming":
      showCat("upcoming");
      break;
  }
});


// Contact

var uName = document.getElementById("uName");
var uEmail = document.getElementById("uEmail");
var uPhone = document.getElementById("uPhone");
var uAge = document.getElementById("uAge");
var uPassword = document.getElementById("uPassword");
var uPassword2 = document.getElementById("uPassword2");

function validation(id, value){
  var regex = {
    uName: /^([A-Z]|[a-z]){2,20} ?(([A-Z]|[a-z]){1,20})?$/,
    uEmail: /^.+@.+\..+$/,
    uPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    uPhone: /^(\+2|002)?01[1250]\d{8}$/,
    uAge: /^(1[6-9]|[2-9][0-9]|100)$/
  }
  let inputElm = document.getElementById(id);
  if (regex[id].test(value) !== true){
    document.querySelector(`.${id}`).classList.replace("d-none","d-block");
    document.querySelector(".btn").classList.add("shake-x");
    $(".btn").mouseenter(function () { 
      if (($(".btn").css('marginLeft')) === "300px"){
        document.querySelector(".btn").classList.add("leave");
        document.querySelector(".btn").classList.remove("enter");
      }else{
        document.querySelector(".btn").classList.add("enter");
        document.querySelector(".btn").classList.remove("leave");
      }
    });
    return false;
  }
  else{
    document.querySelector(`.${id}`).classList.replace("d-block","d-none");
    document.querySelector(".btn").classList.remove("shake-x");
    document.querySelector(".btn").classList.remove("enter");
    document.querySelector(".btn").classList.remove("leave");
    $(".btn").off('mouseenter');
    return true;
  }
}
function checkPassword (){
  let pass = document.getElementById("uPassword");
  let pass2 = document.getElementById("uPassword2");
  if(pass.value === pass2.value){
    document.querySelector(".uPassword2").classList.replace("d-block", "d-none");
  }
  else{
    document.querySelector(".uPassword2").classList.replace("d-none", "d-block")
  }
}
let contactInputs = document.querySelectorAll(".contact");
for (let i = 0; i < contactInputs.length; i++){
  contactInputs[i].addEventListener("input",function(e){
    if (e.target.id !== 'uPassword2'){
      validation(e.target.id, contactInputs[i].value);
    }
    else{
      checkPassword();
    }
  })
}

// Animations
$(".movie").mouseenter(function () { 
  document.querySelector(".rotate").classList.add("rot")
});