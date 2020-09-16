$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };
    console.log(newBurger);
  });
});

$.ajax("/api/burgers", {
  type: "POST",
  data: newBurger,
}).then(function () {
  console.log("created new burger");
  // Reload the page to get the updated list
  location.redirect();
});
