// $(document).ready(function () {
//   $(".customer-pic").slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     arrows: false,
//     dots: false,
//     pauseOnHover: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4
//         }
//       },
//       {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 3
//         }
//       }
//     ]
//   });
// });




// const slide = {
//   main : null,
//   elementImg : null,
//   imgSelected : 0,
//   nextSlide: function (){
//       if (this.imgSelected != null)
//       {
//           if (this.imgSelected < (this.elementImg.length - 1))
//           {
//               this.imgSelected++;
//               this.normalizeSlide();
//           }
//       }
//   },
//   prevSlide: function (){
//       if (this.imgSelected != null)
//       {
//           if (this.imgSelected > 0)
//           {
//               this.imgSelected--;
//               this.normalizeSlide();
//           }
//       }
//   },
//   normalizeSlide: function (){

//       for (num = 0; num < this.elementImg.length; num++)
//       {
//           this.elementImg[num].classList.remove("hideLeft","prevLeftSecond","prev","selected","next","nextRightSecond","hideRight");
//       }

//       this.elementImg[this.imgSelected].classList.add("selected");

//       if (this.imgSelected > 2)
//       {
//           this.elementImg[this.imgSelected-2].classList.add("hideLeft");
//           this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
//           this.elementImg[this.imgSelected-1].classList.add("prev");
//       }
//       else if (this.imgSelected > 1)
//       {
//           this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
//           this.elementImg[this.imgSelected-1].classList.add("prev");
//       }
//       else if (this.imgSelected > 0)
//       {
//           this.elementImg[this.imgSelected-1].classList.add("prev");
//       }

//       if ((this.imgSelected + 3) < this.elementImg.length)
//       {
//           this.elementImg[this.imgSelected+3].classList.add("hideRight");
//           this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
//           this.elementImg[this.imgSelected+1].classList.add("next");
//       }
//       else if ((this.imgSelected + 2) < this.elementImg.length)
//       {
//           this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
//           this.elementImg[this.imgSelected+1].classList.add("next");
//       }
//       else if((this.imgSelected + 1) < this.elementImg.length)
//       {
//           this.elementImg[this.imgSelected+1].classList.add("next");
//       }
//   }
// }



$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    pauseOnHover: false,
    pause:false,
    dots: true,
      itemsDesktop : [1499,4],
      itemsDesktopSmall : [1199,3],
      itemsTablet : [899,2],
      itemsMobile : [599,1],
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
  });
  
});





$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
      pauseOnHover: false,
      pause:true,
      responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

$(document).ready(function(){


  // Scroll Up Button
  
  $(window).scroll(function()
  {
      var scrolltop=$(this).scrollTop();
      if(scrolltop>=400)
      {
          $(".scrollUp").show();
      }
      else { $(".scrollUp").hide();
      }
      });
      $(".scrollUp").click(function()
      {
          $("html,body").animate({scrollTop: 0}, 1000);
      });
  
  
  });



  $(function(){
    var $modal = $('.modal');
    var HIDE_CLASS = 'is-hide';
    
    $('#js-startbtn').on('click',function(){
      $modal.removeClass(HIDE_CLASS);
    });
    
    $('.js-modal-close').on('click',function(){
      $modal.addClass(HIDE_CLASS);
    });
  });


//   window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("nav-sticky")
//   } else {
//     navbar.classList.remove("nav-sticky");
//   }
// }