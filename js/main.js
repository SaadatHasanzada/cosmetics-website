const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.navbar');
const overlay=document.querySelector('.overlay');
const header=document.querySelector('header');
const heart=document.querySelector('.heart');
const cart=document.querySelector('.cart');
const cartIcon=document.querySelector('.cart-icon');
const bag=document.querySelector('.bag');
const user=document.querySelector('.user');
const close=document.querySelector('.close');
const input=document.querySelector('.input');
const basketContainer=document.querySelector('.basket-container');
const basketContainerSecond=document.querySelector('.basket-container__second');
let inputText=document.querySelector('.inputText');
const number=document.querySelector('.number');
const one=document.querySelector('.service_one');
const two=document.querySelector('.service_two');
const three=document.querySelector('.service_three');



// Basket menu
bag.addEventListener('mouseover',function(){
  basketContainerSecond.classList.add('basket-display');

})
bag.addEventListener('mouseout',function(){
  basketContainerSecond.classList.remove('basket-display');
})

cart.addEventListener('mouseover',function(){
  basketContainer.classList.add('basket-display');
})
cart.addEventListener('mouseout',function(){
  basketContainer.classList.remove('basket-display');
})







hamburger.addEventListener('click',function(){
  menu.classList.toggle('open');
overlay.classList.toggle('visible');
  header.classList.toggle('background');
  input.classList.toggle('background');
  change();
})
close.addEventListener('click',function(){
  menu.classList.toggle('open');
  overlay.classList.toggle('visible');

  header.classList.toggle('background');
  input.classList.toggle('background');
  change();
})

document.onclick=function(e){
  if(e.target.id!='navbar' && e.target.id!='hamburger' ){
    menu.classList.remove('open');
    overlay.classList.remove('visible');
    header.classList.remove('background');
    input.classList.remove('background');
    heart.src = '/assets/images/heart.svg';
cartIcon.src = '/assets/images/cart.svg';
  }
}

function change(){
  if (heart.src.indexOf('heart.svg')!=-1 && cartIcon.src.indexOf('cart.svg')!=-1 ) {
    heart.src  = '/assets/images/heart-black.svg';
    cartIcon.src  = '/assets/images/cart copy.svg';
}
 else {
heart.src = '/assets/images/heart.svg';
cartIcon.src = '/assets/images/cart.svg';
}
}


function myFunction(x) {
  if (x.matches) { 
number.textContent='0';
   one.textContent='ÜZ';
   two.textContent='SAÇ';
   three.textContent='BƏDƏN';
  } 
}

var x = window.matchMedia("(min-width: 968px)")
myFunction(x) ;
x.addListener(myFunction);