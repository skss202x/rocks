const imageFilenames = [
  "rock (1).JPG",
  "rock (2).JPG",
  "rock (3).JPG",
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





