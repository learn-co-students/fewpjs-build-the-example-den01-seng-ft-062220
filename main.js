// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heartStates = {
  "♡": "♥",
  "♥": "♡"
};

const errorModal = document.querySelector("#modal");
errorModal.classList.add("hidden");
const likeButtons = document.querySelectorAll(".like");
likeButtons.forEach(likeButton => {
  likeButton.addEventListener("click", function(event){
    let targetHeart = event.target;
    mimicServerCall(url="http://mimicServer.example.com", config={})
      .then(function(serverMessage){
        targetHeart.textContent = heartStates[targetHeart.textContent];
        targetHeart.classList.toggle("activated-heart");
      })
      .catch(function(error){
        errorModal.classList.toggle("hidden");
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
