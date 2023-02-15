// Get the button element
var btn = document.getElementById("myButton");

// Add an event listener that will run a function when the mouse goes over the button
btn.addEventListener("mouseover", function() {
  // When the mouse goes over the button, change its background color
  btn.style.backgroundColor = "red";
});

// Add an event listener that will run a different function when the mouse goes out of the button
btn.addEventListener("mouseout", function() {
  // When the mouse goes out of the button, change its background color back to the default
  btn.style.backgroundColor = "";
});


// JavaScript for slideshow
var slideshow = document.querySelector(".slideshow");
var images = slideshow.querySelectorAll("img");
var currentIndex = 0;

setInterval(function() {
  // Set the current image to inactive
  images[currentIndex].classList.remove("active");
  images[currentIndex].classList.add("inactive");

  // Move to the next image
  currentIndex++;

  // If we've reached the end, go back to the first image
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Set the next image to active
  images[currentIndex].classList.remove("inactive");
  images[currentIndex].classList.add("active");
}, 3000); // Transition to the next image every 2 seconds


// Code so that when user clicks on the link it opens a new page
document.querySelector('.contact-link').addEventListener('click', function(e) {
  e.preventDefault();
  window.open(this.href, '_blank');
});
