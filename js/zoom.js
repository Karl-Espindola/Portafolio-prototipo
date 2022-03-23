$(".img-port-img").click(function(e){
	var enlaceImagen=e.target.src;
	console.log(enlaceImagen);
	var zoom='<div class="zoom">'+
					'<img src="'+enlaceImagen+'" class="img-modal">'+
					'<div class="btn-close"><i class="fas fa-times-circle"></i></div>'+
				 '</div>';
   	
   	$("body").append(zoom);
   	$(".btn-close").click(function(){
   		$(".zoom").remove();
   	})
});