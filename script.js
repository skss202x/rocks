const totalImages = 10; // change this to the total number of rock images you uploaded
const imageElement = document.getElementById("randomImage");

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * totalImages) + 1; // random number from 1 to totalImages
  imageElement.src = `pictures/rock${randomIndex}.jpg`;
}

window.onload = showRandomImage;





