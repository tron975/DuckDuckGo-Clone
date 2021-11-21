const searchText = document.getElementById('search-text')

searchText.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.querySelector(".search-icon").click();
    }
  });


const expandArrow = document.querySelector('.expand-card')
const card = document.querySelector('.card')

function expand() {
    if (card.style.height !== 'auto') {
        card.style.height = 'auto'
        expandArrow.style.transform="rotate(180deg)"
        expandArrow.style.borderRadius="0"
    }
    else {
        card.style.height = '20rem'
        expandArrow.style.transform="rotate(0deg)"
    }
}
