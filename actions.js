const button = document.querySelector(".showMore");
const buttona = document.querySelector(".showMorea");
const buttonb = document.querySelector(".showMoreb");
const content = document.querySelector(".projectContent");
const contenta = document.querySelector(".projectContenta");
const contentb = document.querySelector(".projectContentb");

button.addEventListener("click", function () {
  content.classList.toggle("show");
});
buttona.addEventListener("click", function () {
  contenta.classList.toggle("show");
});
buttonb.addEventListener("click", function () {
  contentb.classList.toggle("show");
});

var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideImage");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
// Get the modal
var modal = document.getElementById("myModal");
var modalB = document.getElementById("myModalB");
var modalC = document.getElementById("myModalC");

// Get the button that opens the modal
var imgA = document.getElementById("project1");
var imgB = document.getElementById("project2");
var imgC = document.getElementById("project3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
imgA.onclick = function () {
  modal.style.display = "block";
};

imgB.onclick = function () {
  modalB.style.display = "block";
};
imgC.onclick = function () {
  modalC.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  modalB.style.display = "none";
  modalC.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modalB) {
    modalB.style.display = "none";
  } else if (event.target == modalC) {
    modalC.style.display = "none";
  }
};
