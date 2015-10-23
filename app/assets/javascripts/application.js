// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require jquery_ujs

//= reuqire slick.min
//= require_tree .

 $(document).ready(function () {

    $('.slides').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:"<img src='/assets/arrowleftimage.png' style='height:40px;position:absolute;margin-left:-18px;margin-top:8px;'>",
      nextArrow:"<img src='/assets/arrowrightimage.png' style='height:40px;position:absolute;margin-left:280px;margin-top:-50px;'>",
      mobileFirst: true,
      variableWidth: false,
      focusOnSelect: true
    });


  $('.close-modal').on('click', function() {
    $('#largeSlide').modal('hide');
    $('#largeSlide2').modal('hide');
  });


    $('.plana-main').on('click', function() {
      //window.open($(this)[0].currentSrc, '', 'width=640,height=480');
      $('#largeSlide').modal('show');
    });

    

    $('.planb-main').on('click', function() {
      //window.open($(this)[0].currentSrc, '', 'width=640,height=480');
      $('#largeSlide2').modal('show');
    });
      

    $('.plana').on('click', function() {
    	console.log($(this));
    	var currentSlide = $('.slides').slick('slickCurrentSlide');
    	curr = currentSlide+1;
    	console.log(curr);
    	$('.plana-main')[0].src = '/assets/floorplanaimage'+curr+'.png';
    	console.log($('.plana-main')[0].src);
    });	

    $('.planb').on('click', function() {
      console.log($(this));
      var currentSlide = $('.slides.planb').slick('slickCurrentSlide');
      curr = currentSlide+1;
      console.log(curr);
      $('.planb-main')[0].src = '/assets/floorplanbimage'+curr+'.png';
      console.log($('.planb-main')[0].src);
    }); 



    $('.email-button').on('click', function() {
      $.ajax({
        url: '/api/email',
        type: 'get',
        dataType: 'json',
        data: {code: $('#email-main').val()},
        beforeSend: function() {
          // Loading  
        },
        success: function(data) {
          
        },
        error: function(data) {
          
        }
      });


      
    });











 });
			