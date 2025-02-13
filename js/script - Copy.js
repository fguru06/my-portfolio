$(document).ready(function () {

    $('.nav-link').on('click', chkBtn);
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
    /*gsap.to(".bg-text", {
  duration: 1,
  scale: 0.1,
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: [7,15],
    from: "edges",
    axis: "x",
    ease: "power2.in",
    amount: 1.5
  }
});
    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "center bottom",
    end: "center top",
    scrub: true,
    markers: true
  }
});
tl.to(".bg-text", {yPercent: 350, duration: 1})
tl.to(".bg-text", {rotation: 360, duration: 3})
tl.to(".bg-text", {xPercent: 350, duration: 1})*/

});

function chkBtn() {
    var id = $(this).attr('class').split(' ')[1].substr(3, 1);
    //console.log('id = ' + id);
    $('.sect').fadeOut(50, function () {
        $('.sect' + id).fadeIn();
        /*if(id == 2){
            $("body,html").animate({
                scrollTop: $('.sect2').offset().top - 50
            }, 'slow' //speed
        );
        }*/
        
    });
    //$('.sect'+id).scrollTop(0);
    //$('.container').animate({scrollTop: $('.sect'+id).scrollTop() + 100},'slow');
}

// Get the modal

//$("#myModal").modal();

$('#myModal').on('shown.bs.modal', function () {
    $("#myModal").modal("show");
    //$('#video1')[0].play();
})
/*$('#myModal').on('hidden.bs.modal', function () {
  $('#video1')[0].pause();
})*/