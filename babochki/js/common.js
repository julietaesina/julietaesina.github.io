$(document).ready(function(){
	$(".main_menu_button").click(function(){
		$('nav').slideToggle("slow");
	});


	var owl=$(".slider_klients");
	owl.owlCarousel({
		items:4,//количество изображений или блоков
		responsive:true,
		margin:30,
		itemsDesktop:[1200,3],
		itemsDesktopSmall:[992,3],
		itemsTablet:[768,1],
		itemsMobile:[340,1],
		navigation: true,
		navigationText : false
	});



/*
	$(".next_button").click(function(){
		owl.trigger(".owl.next")
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev")
	});
*/


	var owl=$(".slider_video");
	owl.owlCarousel({
		items:3,//количество изображений или блоков
		responsive:true,
		margin:30,
		itemsDesktop:[1200,3],
		itemsDesktopSmall:[992,2],
		itemsTablet:[768,1],
		itemsMobile:[340,1],
		navigation: true,
		navigationText : false
		
	});

	$(".sliders_videos .next_button").click(function(){
		owl.trigger("owl.next")
	});
	$(".sliders_videos .prev_button").click(function(){
		owl.trigger("owl.prev")
	});


var owl=$(".sliders_otziv");
	owl.owlCarousel({
		items:1,//количество изображений или блоков
		responsive:true,
		itemsDesktop:[1200,1],
		itemsDesktopSmall:[992,1],
		itemsTablet:[768,1],
		itemsMobile:[340,1],
		navigation: true,
		navigationText : false
	});

	$(".slider_otziv .next_button").click(function(){
		owl.trigger("owl.next")
	});
	$(".slider_otziv .prev_button").click(function(){
		owl.trigger("owl.prev")
	});



    //Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
            "zoomSpeedIn": 500,
            "zoomSpeedOut": 500
	});


	$(".contacts_header  .tab").click(function(){
		$(".contacts_header  .tab").removeClass("active_tab").eq($(this).index()).addClass("active_tab");
		$(".contacts_header  .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active_tab");



	$(".contacts_footer  .tab").click(function(){
		$(".contacts_footer .tab").removeClass("active_tab").eq($(this).index()).addClass("active_tab");
		$(".contacts_footer  .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active_tab");



	//validation form

	


	
       /* 
        $("#but_buter").click(function(){

        	var name=$("#name").val();
	        var phone=$("#phone").val();
            var message=$("#message").val();
            var fail="";

             if(name.lenght < 3) fail=" Введите имя не меньше трех символов";
             else if(message.lenght < 1) fail=" Заполните поле";

             if(fail!=""){
             	$('#messageShow').html (fail + "<div class='clear'><br></div>");
             	$('#messageShow').show();

             	return false;
             
             }
             	
            });*/
   $('[name=phone]').mask("+38(999) 999-99-99");     
$('.forms_buterfly').validate({
		rules:{
			name:{
				required: true,
				minlength: 3
			},
			phone:{
				required: true
			},
			message:{
				required: true,
			}
			
		},
		messages:{
			name:{
				required: 'Введите ваше имя',
				minlength: 'Минимальная длина 3 символа'
			},
			phone:{
				required: 'Некорректный номер'
			},
			message:{
				required: 'Заполните поле',
			}
		},
		submitHandler: function(){
			/*var dataFrom = $('#forma').serialize(); // собирает данные формы в формате имя=значение&имя=значение

			$('body').append('<img src="source/fancybox_loading@2x.gif" class="loader">');

			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: dataFrom,
				success: function(data){
					// при успешной отправке
					// data - данные, получаемые с сервера ( в echo)
					//alert(data);
					$.fancybox( '<h2>'+data+'</h2>' );
				},
				complete: function(){
					// при завершении отправки (успешной или нет)
					$('.loader').remove();
				}
			});*/
			return false;
		}

	})

	

});
