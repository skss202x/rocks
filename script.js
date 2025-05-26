const totalImages = 250; // Change this to however many images you have
const imagePath = "picture/";
const imageElement = document.getElementById("randomImage");

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * totalImages) + 1;
  const filename = `${randomIndex}.jpg`;
  imageElement.src = imagePath + filename;
}

window.onload = showRandomImage;
