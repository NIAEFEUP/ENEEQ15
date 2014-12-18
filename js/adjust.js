function $login_bar()
{
  var div=$("#sway iframe");
  div.height(div.width()*0.4);
}

$(document).ready(function(){
  $login_bar();

  $('#navmenu').affix({
    offset: {
      top: $('header').height()
    }
  });
});
