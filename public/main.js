var save = document.getElementsByClassName("save");
var trash = document.getElementsByClassName("fa-trash");
var key = "1a74b68";
let results = document.querySelector('input');
let movieInfo ;
let saveMovie = document.getElementsByClassName("saved")


document.querySelector("button").addEventListener("click", movie);
function movie(e) {
  let title = results.value;
  e.preventDefault();
  let url = "http://www.omdbapi.com/?t=" +title + "&apikey=" +key;
  console.log(url)
  fetch(url)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(({Title, Rated, Released, Actors, Plot}) => {
      // let listItem = document.createElement("li");
      // document.querySelector("ul").appendChild(listItem);
      //values of the response object ---------------------- es6 syntax
      document.querySelector('.print').textContent = `${Title} ${Rated} ${Released} ${Actors} ${Plot}`
      // document.querySelector('.print').textContent = response.Actor
      // results.innerHTML = ; //<------ PUT JSON RESPONSE HERE
      movieInfo = {
        title: Title, 
        rated: Rated, 
        released: Released, 
        actors: Actors, 
        plot: Plot}
    
    })
    .catch(err => {
      console.log(`error ${err}`);
    });

  };



document.getElementById('save').addEventListener('click',  saveIt);
  function saveIt(e){
    console.log('click saved')
    const save =  document.querySelector('.print').textContent
    console.log(movieInfo)
    console.log(save);
    fetch('api/movie', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'movieInfo': movieInfo
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  };
