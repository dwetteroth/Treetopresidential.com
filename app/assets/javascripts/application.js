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
      slidesToScroll: 3,
      prevArrow:"<img src='/assets/arrowleftimage.png' style='height:40px;position:absolute;margin-left:-18px;margin-top:8px;'>",
      nextArrow:"<img src='/assets/arrowrightimage.png' style='height:40px;position:absolute;margin-left:280px;margin-top:-50px;'>",
      mobileFirst: true
      //variableWidth: false
      //focusOnSelect: true
    });


  $('.close-modal').on('click', function() {
    $('#largeSlide').modal('hide');
    $('#largeSlide2').modal('hide');
  });


    $('.lnk1').on('click', function() {
      $('#largeSlide').modal('show');
      setTimeout(function(){
        $('.slides1').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:82px;position:absolute;margin-left:-24px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:80px;position:absolute;margin-left:380px;margin-top:-81px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
          //focusOnSelect: true
        });  
      },200);      
    });


    $('.lnk2').on('click', function() {
      $('#largeSlide2').modal('show');
      setTimeout(function(){
        $('.slides2').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:82px;position:absolute;margin-left:-24px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:80px;position:absolute;margin-left:380px;margin-top:-81px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
          //focusOnSelect: true
        });
      },200);
    });



    $('.plana-main').on('click', function() {
      //window.open($(this)[0].currentSrc, '', 'width=640,height=480');
      //$('#largeSlide').modal('show');
      $('.lnk1').trigger("click");
      //$('.slides').resize();
    });

    

    $('.planb-main').on('click', function() {
      //window.open($(this)[0].currentSrc, '', 'width=640,height=480');
      // $('#largeSlide2').modal('show');
      // $('.slides').resize();
      $('.lnk2').trigger("click");
    });
      
    $('.lil-plana').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      // console.log(rt);
      if(rt!="") {
        $('.plana-main')[0].src = '/assets/floorplanaimage'+rt+'.png';  
      }
      
    });

    $('.lil-planb').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      $('.planb-main')[0].src = '/assets/floorplanbimage'+rt+'.png';
    });

    $('.wlil-plana').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      $('.wplana-main')[0].src = '/assets/floorplanabigimage'+rt+'.png';
    });

    $('.clil-planb').on('click', function() {
      
      var rt = $(this).attr("id").replace(/\D/g,'');
      $('.cplanb-main')[0].src = '/assets/floorplanbbigimage'+rt+'.png';
    });



    // $('.plana').on('click', function() {
    	

    // 	// var currentSlide = $('.slides').slick('slickCurrentSlide');
    // 	// curr = currentSlide+1;
    // 	// console.log(curr);
    // 	// $('.plana-main')[0].src = '/assets/floorplanaimage'+curr+'.png';
    // 	// console.log($('.plana-main')[0].src);
    // });	

    // $('.planb').on('click', function() {
    //   console.log($(this));
    //   var currentSlide = $('.slides.planb').slick('slickCurrentSlide');
    //   curr = currentSlide+1;
    //   console.log(curr);
    //   $('.planb-main')[0].src = '/assets/floorplanbimage'+curr+'.png';
    //   console.log($('.planb-main')[0].src);
    // }); 



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
          $('#email-main').val('');
        },
        error: function(data) {
          $('#email-main').val('');
        }
      });


      
    });











 });
			