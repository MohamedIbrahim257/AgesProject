$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});




const slide = {
  main : null,
  elementImg : null,
  imgSelected : 0,
  nextSlide: function (){
      if (this.imgSelected != null)
      {
          if (this.imgSelected < (this.elementImg.length - 1))
          {
              this.imgSelected++;
              this.normalizeSlide();
          }
      }
  },
  prevSlide: function (){
      if (this.imgSelected != null)
      {
          if (this.imgSelected > 0)
          {
              this.imgSelected--;
              this.normalizeSlide();
          }
      }
  },
  normalizeSlide: function (){

      for (num = 0; num < this.elementImg.length; num++)
      {
          this.elementImg[num].classList.remove("hideLeft","prevLeftSecond","prev","selected","next","nextRightSecond","hideRight");
      }

      this.elementImg[this.imgSelected].classList.add("selected");

      if (this.imgSelected > 2)
      {
          this.elementImg[this.imgSelected-2].classList.add("hideLeft");
          this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
          this.elementImg[this.imgSelected-1].classList.add("prev");
      }
      else if (this.imgSelected > 1)
      {
          this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
          this.elementImg[this.imgSelected-1].classList.add("prev");
      }
      else if (this.imgSelected > 0)
      {
          this.elementImg[this.imgSelected-1].classList.add("prev");
      }

      if ((this.imgSelected + 3) < this.elementImg.length)
      {
          this.elementImg[this.imgSelected+3].classList.add("hideRight");
          this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
          this.elementImg[this.imgSelected+1].classList.add("next");
      }
      else if ((this.imgSelected + 2) < this.elementImg.length)
      {
          this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
          this.elementImg[this.imgSelected+1].classList.add("next");
      }
      else if((this.imgSelected + 1) < this.elementImg.length)
      {
          this.elementImg[this.imgSelected+1].classList.add("next");
      }
  }
}

window.onload = () => {

  slide.main = document.getElementById("carousel");
  slide.elementImg = slide.main.getElementsByClassName("slideImg");

  for (num = 0; num < slide.elementImg.length; num++)
  {
      slide.elementImg[num].setAttribute("img-number", num);
      
      slide.elementImg[num].addEventListener("click", (event) => {
          slide.imgSelected = parseInt(event.target.parentElement.getAttribute("img-number"));
          slide.normalizeSlide();
      });

      if (slide.elementImg[num].classList.contains("selected"))
      {
          slide.imgSelected = num;
      }
  }

  document.getElementById("prev").addEventListener("click", () => {slide.prevSlide()});
  document.getElementById("next").addEventListener("click", () => {slide.nextSlide()});

}




$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
      itemsDesktop : [1499,4],
      itemsDesktopSmall : [1199,3],
      itemsTablet : [899,2],
      itemsMobile : [599,1],
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
  });
  
});