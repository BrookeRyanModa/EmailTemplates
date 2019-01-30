const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};

$(document).ready(function() {

  function startAnimation() {
    var $el = $("#animation-shell");


    $el.text("ACCESS").removeClass("experience");
    sleep(1000)
        .then(() => $el.text("DISCOVERY"))
        .then(() => sleep(1000))
        .then(() => $el.text("CHOICE.").css('font-weight', '400'))
        .then(() => sleep(2000))
        .then(() => $el.text("THE TRUNKSHOW EXPERIENCE").addClass("experience"))
        .then(() => sleep(5000));
  }
  startAnimation();
  setInterval(startAnimation, 9000);

});