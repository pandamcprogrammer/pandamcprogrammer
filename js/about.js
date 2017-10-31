    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

/*$(function() {
      var controller = new ScrollMagic.Controller();

	  var fadein_scene = new ScrollMagic.Scene({
      triggerElement: '#about-photo',
      triggerHook: 'onleave',
      offset: '10',
      reverse: true
    })
     .setTween(TweenMax.to("#change", 1,{opacity: 0}))
     .addTo(controller);  
}); */