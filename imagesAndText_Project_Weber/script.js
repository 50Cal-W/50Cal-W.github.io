// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/cheyenne_interior.jpg', 
 alt: 'C10 Pickup Interior',
 caption: 'Human craftsmanship is beautiful'
},
{ src: 'images/bird.jpg', 
 alt: 'bird',
 caption: 'and so is Natures'
},
{ src: 'images/mopar_row.jpg', 
 alt: 'mopar cars',
 caption: 'with elegant colors'
},
{ src:'images/bee.jpg', 
 alt: 'bee on flower',
 caption: 'and meticulous detail'
},
{ src:'images/dad.jpg', 
 alt: 'Man looking at car',
 caption: 'both have their unique beauty'
},
{ src:'images/the_woods.jpg', 
 alt: 'The woods',
 caption: 'The serenity of the forest'
},
	{ src:'images/roadrunner_engine.jpg', 
 alt: 'engine',
 caption: 'to the thunder of an engine'
},
	{ src:'images/smokies.jpg', 
 alt: 'Mountians',
 caption: 'You wouldnt think they would go together'
},
	{ src:'images/rowofcars.jpg', 
 alt: 'Row of Cars',
 caption: 'with such big differences'
},
	{ src:'images/road.jpg', 
 alt: 'Mountain road',
 caption: 'but they cross paths more than you would think'
},
];// JavaScript Document
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);