$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

gsap
gsap.registerPlugin(ScrollTrigger);

gsap.to(".triangle2", {
  // x: 250, 
  y: 400,
  rotation: 360, 
  duration: 5, 
  scrollTrigger:{
    trigger: "#aboutme",
    start: "top center",
    // end: 'top center',
    scrub: true, 
    // markers: true,
  }
})