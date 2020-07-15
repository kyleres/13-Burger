$(function() {
  
  $(".eat").on("click", function (e) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true },
    })
    .then(function() {
      location.reload();
    });
  });

  $(".new-burger").on("submit", function (e) {
    e.preventDefault();
    let newBurger = {
      burger_name: $("#burger-name").val(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    })
    .then(function() {
      location.reload();
    });
  });
  
});