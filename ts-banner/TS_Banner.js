const interval = setInterval(animateBanner(),1000);

let access = document.getElementsByClassName('access');
let discovery = document.getElementsByClassName('discovery');
let choice = document.getElementsByClassName('choice');

function animateBanner() {
  access.style.display = block;
  sleep(1500);
  access.style.display = none;

}
animateBanner();


// function stopAnimate () {
//   clearInterval(interval)
// }