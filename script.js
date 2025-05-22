const imageFilenames = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more image file names here as needed
];

const imagePath = "pictures/";
const imageElement = document.getElementById("randomImage");

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  imageElement.src = imagePath + imageFilenames[randomIndex];
}

// Load a random image when the page first loads
window.onload = showRandomImage;
