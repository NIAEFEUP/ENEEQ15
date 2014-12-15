function $login_bar()
{
  var div = $('#sway');
  var width = div.width()*0.4;

  div.css({'height':width+'px'});
}

$(document).ready(function(){
  $login_bar();
});
