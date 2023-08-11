
 
 
 //  NAVBAR
 document.onreadystatechange = function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector(".navbar");
    const logoBlack = document.querySelector(".second_logo");
    const logoWhite = document.querySelector(".first_logo");
    const home_link = document.getElementById("anchor_phase");
    const home_link1 = document.getElementById("anchor_phase1");
    const home_link2 = document.getElementById("anchor_phase2");
    const home_link3 = document.getElementById("anchor_phase3");
    window.addEventListener("scroll", function (e) {
      lastScrollPosition = window.scrollY;

      if (lastScrollPosition > 650) {
        navbar.classList.add("navbar-dark");
        logoBlack.style.display = "block";
        logoWhite.style.display = "none";
        home_link.style.color="#539335"
        home_link1.style.color="#539335"
        home_link2.style.color="#539335"
        home_link3.style.color="#539335"
      } else {
        navbar.classList.remove("navbar-dark");
        logoBlack.style.display = "none";
        logoWhite.style.display = "block";
        home_link.style.color="white"
        home_link1.style.color="white"
        home_link2.style.color="white"
        home_link3.style.color="white"
      }
    });
  };


  
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();



(function () {
  const header_mobile = document.querySelector('.header_mobile');
    const icon = document.querySelector('.icon-container');
    const icon1 = document.querySelector('.icon-container1');
    const icon2 = document.querySelector('.icon-container2');
    const icon3 = document.querySelector('.icon-container3');
    const icon4 = document.querySelector('.icon-container4');
    const icon5 = document.querySelector('.icon-container5');
    icon.onclick = function () {
        header_mobile.classList.toggle('menu-open');
    }
    icon1.onclick = function () {
        header_mobile.classList.toggle('menu-open');
    }
    icon2.onclick = function () {
        header_mobile.classList.toggle('menu-open');
    }
    icon3.onclick = function () {
        header_mobile.classList.toggle('menu-open');
    }
    icon4.onclick = function () {
        header_mobile.classList.toggle('menu-open');
    }
    icon5.onclick = function () {
        header_mobile.classList.toggle('menu-open');
    }
}());




$(document).ready(function(){
  $("#btn1").click(function(){
      var element = document.getElementById('services');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-220)
      }, 1000);
  });
});

$(document).ready(function(){
  $("#btn2").click(function(){
      var element = document.getElementById('projects');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-120)
      }, 1000);
  });
});

$(document).ready(function(){
  $("#btn3").click(function(){
      var element = document.getElementById('contact');
      $('html, body').animate({
        scrollTop: (getOffset2(element).top-120)
      }, 1000);
  });
});

$(document).ready(function(){
$("#btn8").click(function(){
    var element = document.getElementById('about');
    $('html, body').animate({
      scrollTop: (getOffset2(element).top-120)
    }, 1000);
});
});





function getOffset2( el ) {
  var _x = 0;
  var _y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: _y, left: _x };
}


