$(document).ready(function () {
  $("form#new-form").submit(function (event) {
    event.preventDefault();
    var inputVariable = $("#new-input").val();
    console.log(inputVariable);
    $("#show-input").text(inputVariable);
  });
});
