// hero carousel
//target container
const heroImage = document.getElementById('heroImage');

// target buttons
const dots = document.querySelectorAll('.dot')

//index
let currentIn = 0;

// img array && slide length
const slideLength = 3;
const heroArr = createImages(slideLength, 'images/header-slider-img-0');

// create images push into an array
function createImages(arrLength, img) {
    const arr = [];
    for(let i = 1; i <= arrLength; i++){
        // create img object
        const image = new Image();
        // console.log(Image);
        // supply image source
        image.src = `${img}${i}.jpg`
        // console.log(image.src);
        // push into img array
        arr.push(image);
    };
    return arr;
};


// function which updates the picture src
function changePicture(){
    heroImage.src = heroArr[currentIn].src;
    // console.log(heroArr[currentIn].src)
};

// next img in array
function nextImage(){
    currentIn++;
    if(currentIn === slideLength){
        currentIn = 0;
    }
}

// switch image every 4 seconds
setInterval(() => {
    changePicture();
    nextImage();
}, 4000);


//hamburger menu stuff ====================================start
const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');

function showNav() {
    menuNav.style.display = 'block';
};

function hideNav() {
    menuNav.style.display = 'none';
};

function hamburgerState(isOpen) {
    menuButton.setAttribute('aria-expanded', isOpen.toString());
};

function toggleNav() {
    const isOpen = menuNav.style.display === 'block';
    
    if (!isOpen) {
        showNav();
    } else {
        hideNav();
    }

    hamburgerState(!isOpen);
}

menuButton.addEventListener('click', function () {
    toggleNav();
});
//hamburger menu stuff =======================================end