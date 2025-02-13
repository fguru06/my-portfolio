$(document).ready(function () {

    $('.nav-link').on('click', chkBtn);
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });

});

function chkBtn() {
    var id = $(this).attr('class').split(' ')[1].substr(3, 1);
    $('.sect').fadeOut(50, function () {
        $('.sect' + id).fadeIn();
    });
}


$('#myModal').on('shown.bs.modal', function () {
    $("#myModal").modal("show");
})

// text animation
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 2})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
