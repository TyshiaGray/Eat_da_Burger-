// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".devoured").click(function(){
   const id = $(this).val()
   console.log (id)
   $.ajax("/api/burgers/" + id,{
    //  ajax jquery method allows request to server
     type:"PUT",
    
   })
   .then(function(){
     location.reload()
   })
  })
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
      
        location.reload();
      }
    );
  });
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };
  })
});
