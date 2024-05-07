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


var showLinksButtons = document.getElementsByClassName('SPBtn');

for (var i = 0; i < showLinksButtons.length; i++) {
  showLinksButtons[i].addEventListener('click', function() {
    var linksContainer3 = this.nextElementSibling;
    linksContainer3.classList.toggle('show');
  });
}

var showLinksButtons = document.getElementsByClassName('PCBtn');

for (var i = 0; i < showLinksButtons.length; i++) {
  showLinksButtons[i].addEventListener('click', function() {
    var linksContainer3 = this.nextElementSibling;
    linksContainer3.classList.toggle('show');
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


////////////// START WELCOME MESSAGE //////////////
document.addEventListener("DOMContentLoaded", function() {

  const button = document.getElementById('welcomeMessage');

  function showButton() {
      setTimeout(function() {
          button.style.display = 'block';
          button.querySelector('h3').style.animation = 'flash 1s infinite';
      }, 15000); //15 secs
  }
  showButton();
});
////////////// END WELCOME MESSAGE //////////////
