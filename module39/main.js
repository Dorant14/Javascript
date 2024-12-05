$("#btnShow").click(function(){
    $('#div').show(9001);
});

$("#btnHide").click(function(){
    $('#div').hide(9001);
});

$("#div2").click(function(){
    $(this).animate({
      left: '250px',
      opacity: '0.5',
      height: '+=150px',
      width: '+=150px'
    });
  }); 