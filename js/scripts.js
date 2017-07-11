$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.container').offset().top - ($(window).height() / 1.2)) {

  $('.container figure').each(function(i){

    setTimeout(function(){
      $('.container figure').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });

};
});
 function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
