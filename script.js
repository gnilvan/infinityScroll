import dotenv from 'dotenve';

dotenv.config();

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []; 

// unsplash api
let count = 30;
const apiKey = process.env.API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to setAttributes on DOM
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//create elements for links, photos & add to the dom
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    //run function for each object in photosArray
    photoArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        // create image for photo
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        // put <img> in <a>, both in container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// get photos from unsplash api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos();
    } catch (error) {

    }
}

//check if scrolling near btm page load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        getPhotos(); 
        console.log('am being called')
    }
})

getPhotos();