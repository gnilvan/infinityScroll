const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = []; 


// unsplash api
const count = 10;
const apiKey = 'XsgRJ0x7xkFy1RDdb1FacHqTgp5s7DyLSc6ouQ05fAY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//create elements for links and photos, add to the dom

function displayPhotos() {
    //run function for each object in photosArray
    photoArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', )
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


getPhotos();