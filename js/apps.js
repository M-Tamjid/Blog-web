let menuBtn = document.querySelector('#menu_bars');
let menu = document.querySelector('.navbar');
menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  menu.classList.toggle('active');
  search.classList.remove('fa-times');
  searchBox.classList.remove('active');
}
let search = document.querySelector('#search_icon');
let searchBox = document.querySelector('.search_form');
search.onclick = () =>{
  search.classList.toggle('fa-times');
  searchBox.classList.toggle('active');
  menuBtn.classList.remove('fa-times');
  menu.classList.remove('active')
}
menuBtn.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  menu.classList.remove('active')
}
search.onscroll = () =>{
  search.classList.remove('fa-times');
  searchBox.classList.remove('active');
}