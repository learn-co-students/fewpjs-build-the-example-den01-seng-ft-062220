// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartTypes = {"♡": "♥", "♥": "♡"}
const likeHearts = document.querySelectorAll(".like");
const heartError = document.querySelector("#modal").classList.add("hidden");

likeHearts.forEach(likeHeart => {
  likeHeart.addEventListener("click", function(e){
    const heart = e.target;
    mimicServerCall(url="http://mimicServer.example.com", config={})
      .then(function(heartLike){
        heart.innerText = heartTypes[heart.innerText];
        heart.classList.toggle("activated-heart");
      })
      .catch(function(err){
        heartError.classList.toggle("hidden");
      })
  });
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}