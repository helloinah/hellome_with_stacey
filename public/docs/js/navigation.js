// JavaScript Document
$(document).ready(function(){	
	var t = $('#text_button').attr('checked');
	var i = $('#image_button').attr('checked');
	var t_box = $('#entry_container');
	var i_box = $('#draggable_container');
	var s_button = $('#sort_button');
	
	 $('#text_button').change(function () {
		 t_box.css('visibility', 'visible');
		 i_box.css('visibility', 'hidden');
		 s_button.css('visibility', 'hidden');
		 t = true;
		 i = false;
        });
	$('#image_button').change(function () {
		  t_box.css('visibility', 'hidden');
		 i_box.css('visibility', 'visible');
		  s_button.css('visibility', 'visible');
			i = true;
			t = false;
        });
	$('#image_button_a').click(function(){
			$('#image_button').trigger('change');
		});
	$('#text_button_a').click(function(){
		$(this).attr("href", "./");
	  	$('#text_button').trigger('change');
	 
		});
	

});

