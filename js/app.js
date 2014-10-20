$(document).ready(function(){

  var r_navi_open = false;
  $(".video_opener").click(function(e){
    e.preventDefault();
    open_sm();
  });
  $(".closebtn_slider").click(function(){
    $("#slider_modal").trigger('close');
  });
  $("#navi_btn").click(function(e){
    
    if (!r_navi_open)
    {
      $("#navi_list").slideDown(200, function(){
        r_navi_open = true;
      });
    }
    else
    {
      $("#navi_list").slideUp(200, function(){
        r_navi_open = false;
      });
    }

  });
  //$('.bxslider').bxSlider({
  //  controls:false,
  //  pager:true,
  //  buildPager: function(slideIndex){
  //    return "";
  //  },
  //  onSlideBefore: function($slideElement, oldIndex, newIndex){
  //    console.log(oldIndex);
  //    if (oldIndex == 0)
  //    {
  //      $("#screens").fadeOut(200);
  //    }
  //    if (newIndex == 0)
  //    {
  //       $("#screens").fadeIn(200);
  //    }
  //   },
  //  
  //});

 
 // aaa 
 $status = $(".status");
 var options = {
     autoPlayDelay: 4000,
     pauseOnHover: false,
     hidePreloaderDelay: 500,
     nextButton: false,
     prevButton: false,
     pauseButton: false,
     preloader: true,
     hidePreloaderUsingCSS: false,                   
     animateStartingFrameIn: true,    
     navigationSkipThreshold: 750,
     customKeyEvents: {
         80: "pause"
     }
 };

 //var sequence = $("#sequence").sequence(options).data("sequence");

 //sequence.afterNextFrameAnimatesIn = function() {
 //    if(sequence.settings.autoPlay && !sequence.hardPaused && !sequence.isPaused) {
 //        $status.addClass("active").css("opacity", 1);
 //    }
 //    $(".prev, .next").css("cursor", "pointer").animate({"opacity": 1}, 500);
 //};
 //sequence.beforeCurrentFrameAnimatesOut = function() {
 //    if(sequence.settings.autoPlay && !sequence.hardPaused) {
 //        $status.css({"opacity": 0}, 500).removeClass("active");
 //    }
 //    $(".prev, .next").css("cursor", "auto").animate({"opacity": .7}, 500);
 //};
 //sequence.paused = function() {
 //    $status.css({"opacity": 0}).removeClass("active").addClass("paused");
 //};
 //sequence.unpaused = function() {
 //    if(!sequence.hardPaused) {
 //        $status.removeClass("paused").addClass("active").css("opacity", 1)
 //    }               
 //};
 
 //
 
 

  //
  $("ul#presses li a").click(function(e){
    
    $("#modals").html("");
    var param = $(this).attr("href");
    
    console.log(param);
    load_presskit(param);
    e.preventDefault();
  });
  
  

                    	  
});

function load_presskit(param)
{
  $.ajax({
    url: param,
    context: document.body,
  }).done(function(data) {
     var content = $(data).find("#modal_presskit");
     var slug = content.data("slug");
     $("#modals").append(content);
     $('#modal_presskit').lightbox_me({centered: true});
     hash.add({presskit:slug});
  });
}

function get_presskit()
{
  var param = hash.get('presskit');
  if (param != "" || param != undefined)
  {
    load_presskit(param);
  }
  else
  {
    
  }
  
}

function close_video(){
  $('#slider_modal').trigger('close');
  $("#slider_modal").each(function(){
    $(this).remove();
  });
}

function open_video(ff) {
  var template = '<div id="slider_modal" class="modal_misc" style="display:none;"><a onclick="javascript:close_video();" class="close_btn closebtn_slider"></a><div class="clear"></div><div class="video_content"></div></div>';
  var iframe = '<iframe width="560" height="315" src="http://www.youtube.com/embed/'+ff+'" frameborder="0" allowfullscreen></iframe>';
  

  
  $("#modal_sources").append(template);
  $("#slider_modal").find(".video_content").append(iframe);
  $('#slider_modal').lightbox_me({centered: true});
}


function open_sm()
{
  
  $('#slider_modal').lightbox_me({centered: true});
}

function close_modal()
{
  $('#modal_presskit').trigger('close');
  $("#modal_presskit").each(function(){
    $(this).remove();
  });
  hash.clear();
}


function validate_email(email)
{
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(email) == false) {
    return false;
  }else{
    return true;
  }
}

function go_to_url(url)
{
  window.location = url;
}