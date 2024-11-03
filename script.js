$(document).ready(function () {
    
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    
      $(".fadein").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("showme");
        }
        if (bottom_of_window < bottom_of_element) {
          $(this).removeClass("showme");
        }
      });
      
    });
  
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    
  
  
    const animationScript = ["Front End Developer", "Wordpress Developer", " Website Designer"];
  
    
    new Typed(".typing", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    new Typed(".typing2", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
   
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
   
  });
  
 
  const currentYear = new Date().getFullYear();
  
  document.getElementById('year').textContent = currentYear;