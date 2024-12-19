const texts = document.querySelectorAll('.par4');
let index = 0;
setInterval( () => {
    texts[index].classList.remove ('active');
    index = (index + 1) %
    texts.length;
    texts[index] .classList.add('active');
}, 2000);

let count = 0;
const counterElement = document.getElementById('counter');
function incrementCounter() {
    if (count <= 100) {
        counterElement.textContent = `${count}M +`;
        count ++;
        setTimeout(incrementCounter, 500);
    }
}
incrementCounter ();

const numberElement = document.getElementById('number');
function numberIncrement () {
    if (count <= 20){
        numberElement.textContent = `${count}M +`;
        count++;
        setTimeout(numberIncrement,300);
    }
}
numberIncrement ();


const toggleBarButtton = document.querySelector('.toggle-bar-button');
const toggleBarContent = document.querySelector('.toggle-bar-content');
function toggleContent(){
    toggleBarContent.style.display
}

const slide = document.querySelector('.slide');
const menuFeatures = document.querySelector('.menu-feature');
slide.addEventListener('click', () => {
    menuFeatures.style.display = menuFeatures.style.display === 'block' ? 'none' : 'block';
});

const imageUpload = document.getElementById('image-Upload');
const uploadButton = document.getElementById('upload-button');
const imagePreview = document.getElementById('image-preview');
uploadButton.addEventListener('click', () => {
    imageUpload.click();

})
imageUpload.addEventListener('change', (e) => {
    const file = e.target.file[0];
    const reader = FileReader();
    reader.addEventListener('load', () => {
        const imageData = reader.result;
        const imageElement = document.createElement('img');
        imageElement.src = imageData;
        imagePreview.appendChild(imageElement);
    });
    reader.readAsDataURL('file');
});

const list = document.querySelector('.List');
const form = document.querySelector('.login-form-container');
const login = document.querySelector('.login-form');
function Displayaform() {
    Displayaform.style.display

}
list.addEventListener('click', () => {
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
});

const uploadIcon = document.getElementById('upload-button');
 uploadIcon = alert('Successfully Uploaded and submitted ');
 console.log( uploadIcon );
