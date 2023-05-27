// Get the welcomments__like-button element
var likeButton = document.getElementById("like-button-container");

// Calculate the middle position of the page
var middlePosition = window.innerHeight / 2;

// Function to handle scroll event
function handleScroll() {
  // Check if the scroll position is within the middle section of the page
  if (window.scrollY > middlePosition && window.scrollY < (document.body.scrollHeight - middlePosition)) {
    likeButton.classList.add("visible"); // Show the like button
  } else {
    likeButton.classList.remove("visible"); // Hide the like button
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
