// hero carousel
//target image
const heroImage = document.getElementById('heroImage');
//array of alts for each image
const imageAlts = ['Photo of Vulcan factory from the outside with blue-coloured filter',
                   'Photo of a Vulcan employee who is actively welding',
                   'Photo of two Vulcan employees using tools and working together'
];

// dots 
const dots = document.querySelectorAll('.dot');
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
        // supply image source
        image.src = `${img}${i}.jpg`;
        image.alt = imageAlts[i - 1];
        // push into img array
        arr.push(image);
    };
    return arr;
};

// function which updates the picture src and alt
function changePicture(){
    heroImage.src = heroArr[currentIn].src;
    heroImage.alt = imageAlts[currentIn];
    updateDotColor(currentIn);
};

// next img in array
function nextImage(){
    currentIn++;
    if(currentIn === slideLength){
        currentIn = 0;
    }
}

// function to execute image change for interval timer
function changeImageCallBack(){
    changePicture();
    nextImage();
}

function updateDotColor(i){
    dots[currentIn].style.backgroundColor = '#429bd6';
    if(currentIn >= 1){
        dots[currentIn - 1].style.backgroundColor = 'white';
    } else if (currentIn === 0){
        dots[2].style.backgroundColor = 'white';
    }
}

// change image on 4 second timer
const changeImageInterval = setInterval(changeImageCallBack, 4000);

// cancel image interval when dot container is clicked
dots.forEach((dot) => 
    dot.addEventListener('click', () => {
        clearInterval(changeImageInterval);
    })
);

function updateImageSrcWithDot(num) {
    addEventListener('click', () => {
        const dot = document.querySelectorAll('.dot');
        heroImage.src = `images/header-slider-img-0${num}.jpg`;
        heroImage.alt = imageAlts[num - 1];
        for (let i = 0; i < dot.length; i++) {
            dot[i].style.backgroundColor = 'white';
        }
        dot[num - 1].style.backgroundColor = '#429bd6';
    });
}







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