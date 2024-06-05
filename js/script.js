//open hamburger

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-button').onclick = () =>{
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}

//open cart

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-button').onclick = () =>{
    closer.style.display = 'block';
    cart.classList.toggle('active');
}

//open login

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-button').onclick = () =>{
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}

//close hamburger/cart/login

let closer = document.querySelector('#closer');

closer.onclick = () =>{
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

//search bar mobile

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-button').onclick = () =>{
    searchForm.classList.toggle('active');
}

//remove search bar mobile on scroll

window.onscroll = () =>{
    searchForm.classList.remove('active');
}

//image slider

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhd25sd2MiLCJhIjoiY2xlODRwbzZnMGM0dTN4bDhzazBlZDBlaCJ9.igCcycUF_Tde-WiAVOf2WA';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [103.7884, 1.3068], // starting center in [lng, lat]
zoom: 10 // starting zoom
});
 
// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([103.7884, 1.3068])
.addTo(map);
// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
)