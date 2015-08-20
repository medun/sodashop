$(window).scroll(function(e){ 
  var offset = $('.detailheader').outerHeight() -20;
  console.log(offset);
  $nav = $('.detailtitle'); 
  $logo = $('.logo--sticky');

  if ($(this).scrollTop() > offset && $nav.css('position') != 'fixed'){ 
    $('.detailtitle').css({'position': 'fixed', 'top': '0px',"padding": '1rem 0 0 2rem'});
    if($( window ).width() > 760){
    	$logo.fadeIn();
      $('.detailtitle > h1').css({'font-size': '1.375rem', 'font-weight': '600'});
      $('.container').css({"padding-top": '90px'});
	}
  }
  if ($(this).scrollTop() < offset && $nav.css('position') == 'fixed'){
    $('.detailtitle').css({'position': 'static', 'top': '0px',"padding": '1rem 0 0 2rem'});

    $logo.hide();
    $('.detailtitle > h1').css({'font-size': '2.25rem', 'font-weight': 'normal'});
    $('.container').css({"padding-top": '0px'});
  } 
});