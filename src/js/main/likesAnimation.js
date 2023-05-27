// Get the welcomments__like-button element
var likeButton = document.getElementById("like-button-container");

// Calculate the middle position of the page
var middlePosition = window.innerHeight / 2;
// Define the percentage threshold for fixed positioning
var thresholdPercentage = 85; // Adjust this value as needed

// Function to handle scroll event
function handleScroll() {
  // Calculate the scrollable height of the page
  var scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  // Calculate the threshold position based on the percentage
  var thresholdPosition = (scrollableHeight * thresholdPercentage) / 100;
  // Check if the scroll position is within the middle section of the page
  if (window.scrollY > middlePosition && window.scrollY < thresholdPosition) {
    likeButton.classList.add("visible"); // Add visible class
    likeButton.classList.remove("fixed"); // Remove fixed class
  } else if (window.scrollY >= thresholdPosition) {
    likeButton.classList.remove("visible"); // Remove visible class
    likeButton.classList.add("fixed"); // Add fixed class
  } else {
    likeButton.classList.remove("visible"); // Remove visible class
    likeButton.classList.remove("fixed"); // Remove fixed class
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);