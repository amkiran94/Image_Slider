var slideIndex = 0;
showSlides(slideIndex);

function showSlides(slideNo) {
    slideIndex = slideNo;
    var slides = document.getElementsByClassName("slide");
    var btns = document.getElementsByClassName("btn");

    /** If slide no is greater than number of slides, activate first slide */
    if (slideNo > slides.length - 1) {
        slideNo = 0;
    }

    /** If slide no is lesser than 0, activate last slide */
    if (slideNo < 0) {
        slideNo = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '');
    }

    slides[slideNo].style.display = 'block';
    btns[slideNo].className = btns[slideNo].className.concat(' active');
    slideIndex = slideNo;
}

function prev() {
    slideIndex--;
    showSlides(slideIndex);
}

function next() {
    slideIndex++;
    showSlides(slideIndex);
}

