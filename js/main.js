$(document).ready(function () {
   
    // Toggle navbar
    $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("active");
    });


    //Add smooth scrolling to all links in navbar and Footer
    $(".navbar a").on('click', function(event) {

      if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {

        window.location.hash = hash;
      });
    } //End if
  });

  $(window).scroll(function() {
    var nav = $("#nav-view li");
    var top = 200;

    if ($(window).scrollTop() >= top) {

      nav.addClass('.scroll');

    } else {

      nav.removeClass('.scroll');

    }
  });
});


