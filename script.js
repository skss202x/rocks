// Total number of rock images you have (update this if you add more)
const totalImages = 376; // Example: you have rock1.jpg to rock10.jpg

// Folder where images are stored
const imagePath = "pictures/";

// Reference to the <img> tag
const imageElement = document.getElementById("randomImage");

// Function to show a random rock image
function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * totalImages) + 1; // Generates 1 to totalImages
  const filename = `rock${randomIndex}.jpg`;
  imageElement.src = imagePath + filename;
}

// Load a random image when the page first loads
window.onload = showRandomImage;
