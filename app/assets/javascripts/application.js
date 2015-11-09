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


var currentSlide = 1;
var currentSlideB = 1;
var currentSlide3 = 1;
var currentSlide4 = 1;
var currentSlide5 = 1;
var currentSlide6 = 1;


 $(document).ready(function () {

    $('.slidesA').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:"<img src='/assets/arrowleftimage.png' style='height:40px;position:absolute;margin-left:-18px;margin-top:8px;'>",
      nextArrow:"<img class='next-arrow' src='/assets/arrowrightimage.png' style='height:40px;position:absolute;margin-left:300px;margin-top:-50px;'>",
      mobileFirst: true
      //variableWidth: false
      //focusOnSelect: true
    });

    $('.slidesB').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:"<img src='/assets/arrowleftimage.png' style='height:40px;position:absolute;margin-left:-18px;margin-top:8px;'>",
      nextArrow:"<img class='next-arrow' src='/assets/arrowrightimage.png' style='height:40px;position:absolute;margin-left:300px;margin-top:-50px;'>",
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
      $('.wplana-main').attr('src','/assets/Plan1_Claire/'+currentSlide+'.jpg');
      setTimeout(function(){
        $('.slides1').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:50px;position:absolute;margin-left:-16px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:50px;position:absolute;margin-left:380px;margin-top:-49px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
          //initialSlide: parseInt(currentSlide)
          //focusOnSelect: true
        });  
      },200);      
    });


    $('.lnk2').on('click', function() {
      $('#largeSlide2').modal('show');
      $('.cplanb-main').attr('src','/assets/Plan2_Inverness/Plan2_'+currentSlideB+'.jpg');
      setTimeout(function(){
        $('.slides2').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:50px;position:absolute;margin-left:-16px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:50px;position:absolute;margin-left:380px;margin-top:-49px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
         // initialSlide: parseInt(currentSlide)
          //focusOnSelect: true
        });
      },200);
    });


    $('.lnk3').on('click', function() {
      $('#largeSlide3').modal('show');
      $('.cplan3-main').attr('src','/assets/Plan3_Lyndhurst/Plan3_'+currentSlide3+'.jpg');
      setTimeout(function(){
        $('.slides3').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:50px;position:absolute;margin-left:-16px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:50px;position:absolute;margin-left:380px;margin-top:-49px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
         // initialSlide: parseInt(currentSlide)
          //focusOnSelect: true
        });
      },200);
    });


    $('.lnk4').on('click', function() {
      $('#largeSlide4').modal('show');
      $('.cplan4-main').attr('src','/assets/Plan4_Charlotte/Plan4_'+currentSlide4+'.jpg');
      setTimeout(function(){
        $('.slides4').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:50px;position:absolute;margin-left:-16px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:50px;position:absolute;margin-left:380px;margin-top:-49px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
         // initialSlide: parseInt(currentSlide)
          //focusOnSelect: true
        });
      },200);
    });

    $('.lnk5').on('click', function() {
      $('#largeSlide5').modal('show');
      $('.cplan5-main').attr('src','/assets/Plan5_Aberdeen/Plan5_'+currentSlide5+'.jpg');
      setTimeout(function(){
        $('.slides5').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:50px;position:absolute;margin-left:-16px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:50px;position:absolute;margin-left:380px;margin-top:-49px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
         // initialSlide: parseInt(currentSlide)
          //focusOnSelect: true
        });
      },200);
    });


    $('.lnk6').on('click', function() {
      $('#largeSlide6').modal('show');
      $('.cplan6-main').attr('src','/assets/Plan6_Abigail/Plan6_'+currentSlide6+'.jpg');
      setTimeout(function(){
        $('.slides6').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow:"<img src='/assets/arrowleftimage.png' style='height:50px;position:absolute;margin-left:-16px;margin-top:0px;background-color:#000;opacity:.5'>",
          nextArrow:"<img src='/assets/arrowrightimage.png' style='height:50px;position:absolute;margin-left:380px;margin-top:-49px;background-color:#000;opacity:.5'>",
          mobileFirst: true,
          variableWidth: false
         // initialSlide: parseInt(currentSlide)
          //focusOnSelect: true
        });
      },200);
    });



    $('.plana-main').on('click', function() {
      
      $('.lnk1').trigger("click");
      //$('.slides').resize();
    });

    

    $('.planb-main').on('click', function() {
      //window.open($(this)[0].currentSrc, '', 'width=640,height=480');
      // $('#largeSlide2').modal('show');
      // $('.slides').resize();
      //currentSlide = $('.slidesB').slick('slickCurrentSlide');
      $('.lnk2').trigger("click");
    });
      


    $('.plan3-main').on('click', function() {
      $('.lnk3').trigger("click");
    });

    $('.plan4-main').on('click', function() {
      $('.lnk4').trigger("click");
    });
    $('.plan5-main').on('click', function() {
      $('.lnk5').trigger("click");
    });

    $('.plan6-main').on('click', function() {
      $('.lnk6').trigger("click");
    });


    $('.lil-plana').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      currentSlide = rt;
      // console.log(rt);
      if(rt!="") {
        $('.plana-main')[0].src = '/assets/Plan1_Claire/'+rt+'.jpg';  
      }
      
    });


    $('.lil-plan5').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      currentSlideB = rt;
      $('.plan5-main')[0].src = '/assets/Plan5_Aberdeen/Plan5_'+rt+'.jpg';
    });

    $('.lil-plan4').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      currentSlideB = rt;
      $('.plan4-main')[0].src = '/assets/Plan4_Charlotte/Plan4_'+rt+'.jpg';
    });

    $('.lil-plan3').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      currentSlideB = rt;
      $('.plan3-main')[0].src = '/assets/Plan3_Lyndhurst/Plan3_'+rt+'.jpg';
    });


    $('.lil-plan6').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      currentSlideB = rt;
      $('.plan6-main')[0].src = '/assets/Plan6_Abigail/Plan6_'+rt+'.jpg';
    });

    $('.lil-planb').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      currentSlideB = rt;
      $('.planb-main')[0].src = '/assets/Plan1_Claire/'+rt+'.jpg';
    });

    $('.wlil-plana').on('click', function() {
      // console.log($(this));
      var rt = $(this).attr("id").replace(/\D/g,'');
      $('.wplana-main')[0].src = '/assets/Plan1_Claire/'+rt+'.jpg';
    });

    $('.clil-planb').on('click', function() {
      
      var rt = $(this).attr("id").replace(/\D/g,'');
      console.log(rt);
      $('.cplanb-main')[0].src = '/assets/Plan2_Inverness/Plan2_'+rt+'.jpg';
    });


    $('.clil-plan3').on('click', function() {
      
      var rt = $(this).attr("id").replace(/\D/g,'');
      console.log(rt);
      $('.cplan3-main')[0].src = '/assets/Plan3_Lyndhurst/Plan3_'+rt+'.jpg';
    });

    $('.clil-plan4').on('click', function() {
      
      var rt = $(this).attr("id").replace(/\D/g,'');
      console.log(rt);
      $('.cplan4-main')[0].src = '/assets/Plan4_Charlotte/Plan4_'+rt+'.jpg';
    });

    $('.clil-plan5').on('click', function() {
      
      var rt = $(this).attr("id").replace(/\D/g,'');
      console.log(rt);
      $('.cplan5-main')[0].src = '/assets/Plan5_Aberdeen/Plan5_'+rt+'.jpg';
    });


    $('.clil-plan6').on('click', function() {
      
      var rt = $(this).attr("id").replace(/\D/g,'');
      console.log(rt);
      $('.cplan6-main')[0].src = '/assets/Plan6_Abigail/Plan6_'+rt+'.jpg';
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
			