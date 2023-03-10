const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// get documents link to variables
const banner = document.getElementById("banner");
const arrowLeft = document.getElementById("left_arrow");
const arrowRight = document.getElementById("right_arrow");
const mainImg = document.querySelector("#banner > img");
const mainImgText = document.querySelector("#banner > p");

//slides length => total images counts
const totalImg = slides.length;

//left & right arrows eventListener to call function onclick
arrowLeft.addEventListener ("click", function() {
	moveToPrevSlide();
});

arrowRight.addEventListener ("click", function() {
	moveToNextSlide();
});

//Bullet points added by img in slides
//Active bullet added to frist-child
function bulletPoints() {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	const dots = document.querySelector("#banner .dots");
	dots.appendChild(dot);
	const dotSelected = document.querySelector(".dots :first-child");
	dotSelected.classList.add("dot_selected");
}

slides.forEach(bulletPoints);

//Change src for image & tagline
let i = 0;

function displayImg() {
 	mainImg.src = `./assets/images/slideshow/${slides[i].image}`;
 	mainImgText.innerHTML = slides[i].tagLine;
	
}

// setting infinite img & tagline slide
function moveToNextSlide() {
	if ( i === totalImg - 1 ) {
		i = 0
	} else {
		i++
	}
	displayImg();
	activeBullet();
}

function moveToPrevSlide() {
	if ( i === 0 ) {
		i = totalImg - 1
	} else {
		i--
	}
	displayImg();
	activeBullet();
}

//Update active bullet position to match displayed image
function activeBullet() {
	const dot = document.getElementsByClassName("dot")
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove("dot_selected")
	}
	dot[i].classList.add("dot_selected")
}