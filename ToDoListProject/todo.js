//check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("selected");
   });

// click on X to delete Todo
   $("ul").on("click", "span", function(event){
       $(this).parent().fadeOut(500, function(){
           $(this).remove();
       });
       event.stopPropagation();
   });

//create new Todo using the input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }

});

$(".fa-angle-down").click(function(){
    $("input[type='text']").fadeToggle();
});