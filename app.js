// how to fetch data from api there are three methods such as 
// 1.AJAX older way of doing the calls
// 2.fetch method
// 3. promise(3rd party) whcih is usually used recommended way

// The fetch Api provides a javascript interface for accessing and manipulatiog parts of the http 
// pipeline such as requests and response. it also provides a global fetch() method that provides
// an easy,logical way to fetch resourses asynchronously accross the network.

let input = document.getElementById("search");
input.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        let value = e.target.value;
        searchMovie(value);
    }
});
function searchMovie(searchText) {
    // console.log(searchText);
    window.fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=119d7249`)
        .then(data => {
            data.json().then(movies => {
                let moviesData = movies.Search;
                let output = [];
                for (let movie of moviesData) {
                    console.log(movie);
                    output += `
                      <div>
                          <img src=${movie.Poster} alt=${movie.Title} />
                          <h1>${movie.Title}</h1>
                          <p>${movie.Type}</p>
                          <p>${movie.Year}</p>
                      </div>
                      `;
                }
                document.getElementById("template").innerHTML = output;
            }).catch(err => console.log(err));
            // // convert response body into JSON object


        })
        .catch(err => console.log(err));
}
