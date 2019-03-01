$(document).ready(function(){
  $(".navmenu_2 li a").click(function(){
      var value =$(this).attr("data-filter");
      if(value =="all")
      {
          $(".item").show("1000");
      }
      else{
          $(".item").not("."+value).hide("1000");
          $(".item").filter("."+value).show("1000");
      }
      //add active class
   
      $('.navmenu_2 li a.active').removeClass('active');
      $(this).addClass('active');
       
  })
});


$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop()>500){
          $('#topbtn').fadeIn();
      }
      else{
          $('#topbtn').fadeOut();
      }
  });
  $("#topbtn").click(function(){
      $('html,body').animate({scrollTop:0},1000)
  })
});













