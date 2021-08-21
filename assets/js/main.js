// const t11 = gsap.timeline ({paused: true})

// Favicon change
$(document).ready(function() {
  if (!window.matchMedia)
      return;

  var current = $('head > link[rel="icon"][media]');
  $.each(current, function(i, icon) {
      var match = window.matchMedia(icon.media);
      function swap() {
          if (match.matches) {
              current.remove();
              current = $(icon).appendTo('head');
          }
      }
      match.addListener(swap);
      swap();
  });
});

// Text Reveal Glitch
const text = baffle(".data");
  text.set({
        characters : '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
        speed: 120
  });
  text.start();
  text.reveal(4000);


//Text Reveal 
// let t11 = gsap.timeline ({defaults: {ease: 'SlowMo.easeOut'}});
let t11 = gsap.timeline ({paused: true});
let t13 = gsap.timeline ({paused: true});



t11.to('#txtReveal', {y: '0%', duration: 0.5, stagger: 0.2});
t13.to('#txtReveal1', {y: '0%', duration: 0.5, stagger: 0.2});


t11.to('.line', {
  duration: 0.5,
  x: 200
})

ScrollTrigger.create ({
  trigger: '.paragraphAbout',
  start: 'bottom 80%',
  end: '+=700',
  pin: true,
  // toggleActions: 'play none reverse reset',
  onEnter: () => t11.play(),
  onLeaveBack: () => t11.reverse()
})

ScrollTrigger.create ({
  trigger: '.contactText',
  start: 'top 60%',
  end: '+=700',
  pin: false,
  // toggleActions: 'play none reverse reset',
  onEnter: () => t13.play(),
  onLeaveBack: () => t13.reverse()
})

// gsap.to('.paragraphAbout', {
//   scrollTrigger: {
//     trigger: '.paragraphAbout',
//     start: 'bottom 80%',
//     end: '+=700',
//     pin: true,
//     toggleActions: 'play none reverse reset',
//     onEnter: () => t11.play()
//   },
//   x: 200,

  
// })

// Smooth scroll between sections 
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Scrollbar Custom
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}



// Projects animation

let t12 = gsap.timeline ({paused: true});


t12.to('#txtReveal', {y: '0%', duration: 0.5, stagger: 0.2});

t12.to('.line', {
  duration: 0.5,
  x: 200
})

ScrollTrigger.create ({
  trigger: '.projectAnim',
  start: 'bottom 80%',
  end: '+=500',
  pin: true,
  // toggleActions: 'play none reverse reset',
  onEnter: () => t12.play(),
  onLeaveBack: () => t12.reverse()
})

// Projects Horizontal Scroll
// $(function() {

//   $(".container").mousewheel(function(event, delta) {

//      this.scrollLeft -= (delta * 5);
   
//      event.preventDefault();

//   });

// });

// Hellas Web Projects Scroll
gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll(".block");
const blocks1 = document.querySelectorAll(".block01");
gsap.to(blocks, {
  xPercent: -140 * (blocks.length - 1),
  ease: "none",
  scrollTrigger: {
  trigger: ".container",
  pin: true,
  scrub: true,
  start: 'top 20%',
  end: () => "+=20%",
  // end: () => "+=" + document.querySelector(".container").offsetHeight
  }
});

gsap.to(blocks1, {
  xPercent: -140 * (blocks1.length - 1),
  ease: "none",
  scrollTrigger: {
  trigger: ".container1",
  pin: true,
  scrub: true,
  start: 'top 40%',
  end: () => "+=10%",
  // end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

// Skew scroll effect
