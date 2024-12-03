$("li").click(function(){
    alert("You clicked me")
});

$("#btn").click(function(){
    $('p').text("This text has changed")
});

$("#div").click(function(){
    $(this).addClass("class")

}).find('span').attr("title","AAAAAAAA")