$(function() {
  var controller = new ScrollMagic.Controller();
  
  var tl = new TimelineMax();
  tl.to("#name", 1, {alpha:0, repeatDelay:0.2, repeat:-1, yoyo:true})
  tl.play()
  
  var tween = new TimelineMax()
    .to('#logo1', 1,{ left: '0%', width: '25%', height: '100%', top: '25%' })
    .to('.white', 1,{ opacity: 0 }, 0)
    .to('#name', 0.2,{ opacity: 0 }, 0)
    .to('#media-container', 1,{ visibility: 'visible' }, 0)
    .to('#logo2', 1,{ left: '26%', width: '24%', height: '100%' }, 0)
    .to('#logo3', 1,{ left: '51%', width: '24%', height: '100%' }, 0)
    .to('#logo4', 1,{ left: '76%', width: '24%', height: '100%', top: '25%' }, 0)
  .to('#projects', 0.5,{ opacity: 1 }, 1)
  .to('#music', 0.5,{ opacity: 1 }, 1.2)
  .to('#photos', 0.5,{ opacity: 1 }, 1.4)
  .to('#contact', 0.5,{ opacity: 1 }, 1.6);
  /*var leftMove = new TimelineMax()
  .add([
    TweenMax.to(".left-down", 1, {x: "-50%"}),
]);*/

    var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
    .setTween(tween)
    .addTo(controller);
  
  //Test
  /*var tween = new TimelineMax()
    .to('.white', 1,{ opacity: 0 }, 0)
    .to('#name', 0.2,{ opacity: 0 }, 0)
    .to('#media-container', 1,{ opacity: 1 }, 0)
    .to('#projects', 0.5,{ opacity: 1 }, 0.8)
    .to('#music', 0.5,{ opacity: 1 }, 1)
    .to('#photos', 0.5,{ opacity: 1 }, 1.2)
    .to('#contact', 0.5,{ opacity: 1 }, 1.4);
  
  var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
    .setTween(tween)
    .addTo(controller);
  
  var logo1 = TweenMax.to('#logo1', 1,{ left: '0%', width: '25%', height: '100%', top: '25%' })

var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
    .setTween(logo1)
    .addTo(controller);
  
    var logo2 = TweenMax.to('#logo2', 1,{ left: '26%', width: '24%', height: '100%' })

var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
    .setTween(logo2)
    .addTo(controller);
  
    var logo3 = TweenMax.to('#logo3', 1,{ left: '51%', width: '24%', height: '100%' }, 0)

var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
    .setTween(logo3)
    .addTo(controller);
  
    var logo4 = TweenMax.to('#logo4', 1,{ left: '76%', width: '24%', height: '100%', top: '25%' }, 0)

var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
    .setTween(logo4)
    .addTo(controller);*/
  
  //End Test
  
    var pinContainer = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
     .setPin('#logo-container')
     .addTo(controller);
  
      var pinMediaContainer = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      offset: '10',
      reverse: true
    })
     .setPin('#media-container')
     .addTo(controller);
});