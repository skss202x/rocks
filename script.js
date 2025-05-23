const imageFilenames = [
  "rock (1).jpg",
  "rock (2).jpg",
  "rock (3).jpg",
  // add more as needed
];

const imagePath = "pictures/";
const imageElement = document.getElementById("randomImage");

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  const imageName = encodeURIComponent(imageFilenames[randomIndex]);
  imageElement.src = imagePath + imageName;
}

window.onload = showRandomImage;





