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
const banner = document.getElementById("banner")
const arrowLeft = document.getElementById("left_arrow")
const arrowRight = document.getElementById("right_arrow")
const mainImg = document.querySelector("#banner > img")
const mainImgText = document.querySelector("#banner > p")

//slides length => total images counts
const totalImg = slides.length

//left & right arrows eventListener to call function onclick
arrowLeft.addEventListener ("click", function() {
console.log("left")
})

arrowRight.addEventListener ("click", function() {
console.log("right")
})