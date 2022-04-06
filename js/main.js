function lupa_1() {
    var a = document.querySelector(".lupa")
    var b = document.querySelector(".lupa_1")
    var c = document.querySelector(".crtInput_div")

    a.style.display = "block"
    b.style.display = "none"
    c.style.display = "none"


}

function lupa() {
    var a = document.querySelector(".lupa");
    var b = document.querySelector(".lupa_1");
    var c = document.querySelector(".crtInput_div")

    a.style.display = "none"
    b.style.display = "block"
    c.style.display = "block"


}











function call() {

    var a = document.getElementById("call_back")

    a.style.right = "-400px"

    var b = document.getElementById("call_back_hidden")

    b.style.right = "40px"

    var c = document.getElementById("contact_fix")

    c.style.right = "-400px"

}

function rClose() {

    var a = document.getElementById("call_back")

    a.style.right = "40px"

    var b = document.getElementById("call_back_hidden")

    b.style.right = "-400px"

    var c = document.getElementById("contact_fix")

    c.style.right = "-160px"

}

function rclick() {

    var input = document.getElementById("input_number")

    input.style.borderBottomColor = "red"

}

function ipt_click() {

    var input = document.getElementById("input_number")

    input.style.borderBottomColor = "black"

}



function contact_fix(e) {


    var a = document.querySelector(".bg_hover")
    var b = document.querySelector(".contact_fix_hover")

    a.style.display = "block"
    b.style.display = "block"


}

function contact_fix_out(e) {
    var a = document.querySelector(".bg_hover")
    var b = document.querySelector(".contact_fix_hover")


    a.style.display = "none"
    b.style.display = "none"

}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}