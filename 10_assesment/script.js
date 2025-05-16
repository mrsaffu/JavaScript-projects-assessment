let search = "avengers";
let page = 1;
let pageLimit;
let marvelMovies;
console.log("Hi I am Global");
let card = document.getElementById("cardCont");
function dispay(searchData, page = 1) {
  let fetchapi = fetch(
    `https://www.omdbapi.com/?s=${searchData}&page=${page}&apikey=91b78565`
  );
  console.log(search);
  fetchapi
    .then((response) => {
      // console.log(response);
      let data = response.json();
      console.log(data);
      data.then((marvelMovie) => {
        console.log(marvelMovie);


         marvelMovies = marvelMovie.Search;
        pageLimit = Number(marvelMovie.totalResults);
        console.log(pageLimit);
        card.innerHTML = "";
        marvelMovies.map((m) => {
          // console.log(m);

          card.innerHTML += ` 
                <div class="card">
                <img src="${m.Poster}" alt="">
                <h4>${m.Title}</h4>
                <div>
                <p>Year : ${m.Year}</p>
                <p> Type : ${m.Type}</p>
                </div>
            </div>`;
        });
       
// ----------------- previous and next validation ------------------------------
        console.log("page", page);
        if (page * 10 >= pageLimit) {
          console.log("disable");

          nextButton.classList.add("buttonDisable");
        } else {
          console.log("HBi");
          nextButton.classList.remove("buttonDisable");
        }

        if (page === 1) {
          console.log("disable");

          previousButton.classList.add("buttonDisable");
        } else {
          console.log("HBi");
          previousButton.classList.remove("buttonDisable");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });


  
}

// --------------------- Seaearch Value -------------------------------

//  filter searched form hear

let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {
  search = document.getElementById("movieInput").value.toLowerCase().trim();
  console.log(search,"-----------------");
  if (search == "" ) {
    return (card.innerHTML = ` <p style="color:red">Please enter movie name atleast 3 cheracter ...!</p>`);
  }
  else if(search!==marvelMovies){
    return (card.innerHTML = ` <p style="color:red">This movie is not available ...!</p>`);

  }
  dispay(search);
  
});

// --------------------Display for next ----------------------------------

let nextButton = document.getElementById("nextButton");
let netB = nextButton.addEventListener("click", function () {
  page++;
  dispay(search, page);
});
console.log(nextButton);

// -----------------display for previous -----------------------();
let previousButton = document.getElementById("previousButton");
let previous = previousButton.addEventListener("click", () => {
  page--;
  dispay(search, page);
});

console.log(previousButton);

dispay(search);
