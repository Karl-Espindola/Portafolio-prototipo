const bars=document.querySelector('.bars');
const menu=document.querySelector('.menu');
var li__texto=document.querySelectorAll('.li__texto');

console.log(li__texto);

bars.addEventListener('click',function activar(){
	menu.classList.toggle('activar');
});


for (var i = 0; i < li__texto.length; i++) {

    li__texto[i].addEventListener('click', function remove() {
      menu.classList.remove('activar');
    });

}
