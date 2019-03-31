var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var key = "1a74b68";
let results = document.querySelector('input');
let movieInfo ;


document.querySelector("button").addEventListener("click", movie);
function movie(e) {
  let title = results.value;
  e.preventDefault();
  let url = "http://www.omdbapi.com/?t=" +title + "&apikey=" +key;
  console.log(url)
fetch(url)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(({Title, Year, Rated, Released, Actors, Plot}) => {
      // let listItem = document.createElement("li");
      // document.querySelector("ul").appendChild(listItem);
      //values of the response object ---------------------- es6 syntax
      document.querySelector('.print').textContent = `${Title} ${Year} ${Rated} ${Released} ${Actors} ${Plot}`
      // document.querySelector('.print').textContent = response.Actor
      // results.innerHTML = ; //<------ PUT JSON RESPONSE HERE
      movieInfo = {Title, Year, Rated, Released, Actors, Plot}
    })
    .catch(err => {
      console.log(`error ${err}`);
    });

  };


document.querySelector('form').addEventListener('submit', display);

function display(e){
  e.preventDefault();
  console.log('clicked')
  fetch('saveMovie', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({movieInfo})
  })
}








// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
