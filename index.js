const backgroundContainer = document.querySelector('.container');
let images = ['img5.jpeg','img6.jpeg','img7.jpeg','img8.jpeg'];
let index = 0;

setInterval(() => {
    backgroundContainer.style.backgroundImage = `url($
    {images[index]})`;
    index = (index + 1) %
    images.length;
}, 5000); 




