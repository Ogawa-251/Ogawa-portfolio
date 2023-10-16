
//  ハンバーガーメニュー

$(function() {
  $('#toggle').on('click', function() {
    $('body').toggleClass('is-open');
    $('#main').toggleClass('overlay');
  });
  $(document).on('click','.overlay', function() {
    $('body').removeClass('is-open');
    $('#main').removeClass('overlay');
  });
});



// SVGアニメーション
// $(function(){
//   $('.svglogo').on('click', function(){
//     $('svg', $(this)).addClass('active');
//     $('p', $(this)).remove();
//   });
// });

$(document).ready(function() {
  // ページが読み込まれたときに起動するように処理
  $('.svglogo svg').addClass('active');
  $('.svglogo p').remove();
});


// テキストアニメーション
$(function(){
	$('.repeat').click(function(){
    	var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
        	$(indicator).parent().addClass(classes);
        }, 20);
    });
});


