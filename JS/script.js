////////////// START CLICK TO SHOW //////////////
//adapted from information found on W3 schools
var showLinksButtons = document.getElementsByClassName('WDBtn');

for (var i = 0; i < showLinksButtons.length; i++) {
  showLinksButtons[i].addEventListener('click', function() {
    var linksContainer = this.nextElementSibling;
    linksContainer.classList.toggle('show');
  });
}


var showLinksButtons = document.getElementsByClassName('CCBtn');

for (var i = 0; i < showLinksButtons.length; i++) {
  showLinksButtons[i].addEventListener('click', function() {
    var linksContainer2 = this.nextElementSibling;
    linksContainer2.classList.toggle('show');
  });
}

////////////// END CLICK TO SHOW //////////////


////////////// START RANDOM COLOUR //////////////
//adapted from information found on W3 schools

function getRandomColor() {
  return `hsla(${~~(360 * Math.random())}, 70%,  60%, 0.8)`
}

const randomColor = getRandomColor();
document.documentElement.style.setProperty('--random-color', randomColor);
////////////// END RANDOM COLOUR //////////////



document.addEventListener("DOMContentLoaded", function() {

  const button = document.getElementById('welcomeMessage');


  function showButton() {
      setTimeout(function() {
          // Display the button
          button.style.display = 'block';
          // Add flashing animation
          button.querySelector('h3').style.animation = 'flash 1s infinite';
      }, 15000); // 5000 milliseconds = 5 seconds
  }

  // Call the function to show the button
  showButton();
});
