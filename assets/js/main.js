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




// Scrollbar Custom
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

$("#toggle").click(function() {
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});

// navigation ends here

// nav animation

TweenMax.from("#brand", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
})
// 
TweenMax.staggerFrom("#menu li a", 1, {
  delay: 0.4,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.1);

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('visible');
});



// nav animation ends




// Projects animation

let t12 = gsap.timeline ({paused: true});


t12.to('#txtReveal', {y: '0%', duration: 0.5, stagger: 0.2});

t12.to('.line', {duration: 0.5, x: '0'});

ScrollTrigger.create ({
  trigger: '.paragraphAbout',
  start: 'bottom 80%',
  end: '+=50',
  pin: true,
  // toggleActions: 'play none reverse reset',
  onEnter: () => t12.play(),
  onLeaveBack: () => t12.reverse()
})

// Text Reveal

const textrev = gsap.timeline({paused: true});

textrev.from(".line span", 1.8, {
  y: 200,
  ease: "power4.out", 
  delay: 0,
  skewY: 10,
  stagger: {
    amount: 0.4
  }
});

ScrollTrigger.create({
  trigger: '.wrapper',
  start: 'top 50%',
  end: '+=20',
  pin: true,
  // toggleActions: 'play none reverse reset',
  onEnter: () => textrev.play(),
  onLeaveBack: () => textrev.reverse()
});

// Custom cursor
var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

$(".hoverEffect").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".hoverEffect").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});

$(".hoverEffect1").on("mouseenter", function () {
  cursor.addClass("active1");
  follower.addClass("active");
});

$(".hoverEffect1").on("mouseleave", function () {
  cursor.removeClass("active1");
  follower.removeClass("active");
});


function blur(x) {
  if (x.matches) { // If media query matches
    document.querySelector('.overlay').style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  } else {
    document.querySelector('.overlay').style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }
}

var x = window.matchMedia("(max-width: 768px)");
blur(x);
