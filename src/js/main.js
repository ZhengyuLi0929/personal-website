/* Your JS here. */

/* modals */

/* https://www.w3schools.com/howto/howto_css_modals.asp */
/* modal 1 */
var section1 = document.getElementById('section1');
var modal1 = document.getElementById('modal1');
var close1 = document.getElementById("close1");
section1.onclick = function(){
    modal1.style.display = "block";
}
close1.onclick = function() {
    modal1.style.display = "none";
}

/*modal 2*/
var section2 = document.getElementById('section2');
var modal2 = document.getElementById('modal2');
var close2 = document.getElementById("close2");
section2.onclick = function(){
    modal2.style.display = "block";
}
close2.onclick = function() {
    modal2.style.display = "none";
}

/*modal 3*/
var section3 = document.getElementById('section3');
var modal3 = document.getElementById('modal3');
var close3 = document.getElementById("close3");
section3.onclick = function(){
    modal3.style.display = "block";
}
close3.onclick = function() {
    modal3.style.display = "none";
}


/* Carousel */
/* https://www.w3schools.com/howto/howto_js_slideshow.asp for standard slideshow and */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/* customize next and prev click*/
/* prev */
var arrow1 = document.getElementById("arrow1");
arrow1.onclick = function() {
    plusSlide(-1);
}

/* next */
var arrow2 = document.getElementById("arrow2");
arrow2.onclick = function() {
    plusSlide(1);
}


/* resize: navbar's padding + logo's font size */
/* https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    mouse_height = document.documentElement.scrollTop;
    if (mouse_height > 50) {
        document.getElementById("navi").style.padding = "10px 10px";
        document.getElementById("name").style.fontSize = "25px";
    } else {
        document.getElementById("navi").style.padding = "50px 10px";
        document.getElementById("name").style.fontSize = "35px";
    }

    document.getElementById("node1").classList.remove("active");
    document.getElementById("node2").classList.remove("active");
    document.getElementById("node3").classList.remove("active");
    var padding_value = 60; 
    // get the height of sections
    var h0 = document.getElementById("title0").clientHeight - padding_value;
    var h1 = h0 + document.getElementById("title1").clientHeight - padding_value;
    var h2 = h1 + document.getElementById("title2").clientHeight;
    var h3 = h2 + document.getElementById("title3").clientHeight;
    if (mouse_height > h0) {  // make the navbar highlight according to the position of mouse 
        if (mouse_height < h1) {
            document.getElementById("node1").classList.add("active");
        } else if (mouse_height < h2) {
            document.getElementById("node2").classList.add("active");
        } else{
            document.getElementById("node3").classList.add("active");
        } 
    }   
}