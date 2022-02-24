window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel'), {
  		slidesToShow: 1,
  		dots: '#dots',
  		draggable: true,
  		arrows: {
    	prev: '.izq1',
    	next: '.der1'
  		}
	});
});