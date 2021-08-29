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

TweenMax.staggerFrom("#menu li a", 1, {
  delay: 0.4,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.1);

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

//Skew effect
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

