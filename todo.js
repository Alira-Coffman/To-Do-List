//Task Completed! CLICK ME
$("ul").on("click", "li", function(){
  $(this).toggleClass('done');
});
//Delete a task, cause you do not wish to see it anymore
$('ul').on("click", "span", function(){
  $(this).parent().remove();//remove the ENTIRE li
  event.stopPropagation();//THis is here to stop other events from firing on accident
})
//Adding to do's
$("input[type='text']").keypress(function(event){
  //needs to fire only on enter key
  if(event.which === 13)//check for enter key
  {
    //get value in input for new todo text
    var todoText = $(this).val();
    //clear input and add span
    $(this).val("");
    //Create new li, and add to ul with append
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+ todoText +"</li>");
  }
})
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
