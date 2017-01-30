const imgContainer = document.querySelector('.projects-container');
var indexOfImg = 0;
var load = setInterval(function animate(e){
  var lineWhenAnimate = imgContainer.offsetTop;
  var scrolled = window.scrollY+window.innerHeight-200;
  var imgs = imgContainer.querySelectorAll('a');
  if(lineWhenAnimate<=scrolled){
      imgs[indexOfImg].style.opacity="1";
      indexOfImg++;

}
if(indexOfImg == imgs.length){
 clearInterval(load);
}
},200);

const button = document.querySelector('.btn-download');


function animateButton(){
  if(button.offsetTop<=window.scrollY+window.innerHeight-300){
    button.classList.add('animate')

  }
}


function fixHeader(){
  const header = document.querySelector('header');
  const banner = document.querySelector('.banner');

  if(window.scrollY>0){
    banner.style.paddingTop = header.offsetHeight+'px';
    header.classList.add('fixed');
  }else{
    header.classList.remove('fixed');
    banner.style.paddingTop = 0;
  }
}



window.addEventListener('scroll',load);
window.addEventListener('scroll',animateButton);
window.addEventListener('scroll',fixHeader)
