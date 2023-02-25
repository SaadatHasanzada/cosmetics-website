const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.navbar');
const close=document.querySelector('.close');
const overlay=document.querySelector('.overlay');

    hamburger.addEventListener('click',function(){
  menu.classList.toggle('open');
  overlay.classList.toggle('visible');
})
close.addEventListener('click',function(){
  menu.classList.toggle('open');
  overlay.classList.toggle('visible');
})

document.onclick=function(e){
  if(e.target.id!='navbar' && e.target.id!='hamburger' ){
    menu.classList.remove('open');
    overlay.classList.remove('visible');
   
  }
}