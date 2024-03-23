$(document).ready(function(){
  $("#lock").click(function(){
      $("#lock").hide();
      $("#unlock").show();
      
      $("#password").attr("type","text");
  });

  $("#unlock").click(function(){
      $("#unlock").hide();
      $("#lock").show();
      $("#password").attr("type","password");
  });
  $("#con_lock").click(function(){
    $("#con_lock").hide();
    $("#con_unlock").show();
    
    $("#connew_password").attr("type","text");
});

$("#con_unlock").click(function(){
    $("#con_unlock").hide();
    $("#con_lock").show();
    $("#connew_password").attr("type","password");
});
  $(".qtybtn").click(function() {
    var $row = $(this).closest("tr"); 
    var proprice = parseFloat($row.find(".pro-price span").text().replace("$", ""));
    var proqty = parseFloat($row.find(".pro-quantity input").val());
    var prosubtotal = proprice * proqty;
    $row.find(".pro-subtotal span").html("$" + prosubtotal.toFixed(2)); 
});
$(".fa-trash-o").click(function(){
  $(this).closest("tr").hide();
});
$(".fa-trash").click(function(){
  $(this).closest("li").hide();
});
  // pagination col
  var itemsPerPage = 5; 
  var $items = $(".product"); 
  
  var itemCount = $items.length; 
  var totalPages = Math.ceil(itemCount / itemsPerPage); 

  // Hide all items initially
  $items.hide();

  // Show the first page of items
  $items.slice(0, itemsPerPage).show();

  // Generate pagination buttons
  for (var i = 1; i <= totalPages; i++) {
    $('<button class="pagination-button">' + i + "</button>").appendTo(
      "#pagination-numbers"
    );
  }

  // Handle pagination button click
  $(".pagination-button").on("click", function () {
    var pageNumber = $(this).text(); 
    var startIndex = (pageNumber - 1) * itemsPerPage; 
    var endIndex = startIndex + itemsPerPage;

    // Hide all items
    $items.hide();

    // Show items for the clicked page
    $items.slice(startIndex, endIndex).show();
  });
  $('#passwordForm').click(function(event) {
    var newPassword = $('#password').val();
    var confirmNewPassword = $('#connew_password').val();

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match");
        event.preventDefault();
    
    }else{
      alert("sucess");
    }
});
$('#create_account').click(function(event) {
  var newPassword = $('#password').val();
  var confirmNewPassword = $('#connew_password').val();
  var email =$("#email").val();
  var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var contact=$("#contact").val();
  var phone_pattern = /^\d{10}$/;
  var user=$("#user").val()

  if (user === '') {
  
    $(".textuser").html("Please enter a username")
    $(".textuser").css("color", "red");
}else{
 $(".textuser").text(user);
    $(".textuser").css("color", "green");
}

if (contact === '') {
    
    $(".textcontact").html("Please enter a contact number");
    $(".textcontact").css("color", "red");
}else if (!phone_pattern.test(contact)) {
 
  $(".textcontact").html("Please enter a 10-digit phone number");
  $(".textcontact").css("color", "red");
}else
{
  $(".textcontact").text(contact);
  $(".textcontact").css("color", "green");
}

if (email === '') {
   
    $(".textemail").html("Please enter an email address");
    $(".textemail").css("color", "red");
 
}else if (!email_pattern.test(email)) {
 
  $(".textemail").html("Please enter a valid email address");
  $(".textemail").css("color", "red");
}else{
  $(".textemail").text(email);
  $(".textemail").css("color", "green");
}

if (newPassword === '') {

    $(".textpassword").html("Please enter a password")
    $(".textpassword").css("color", "red");
}else if (newPassword .length < 6) {

  $(".textpassword").html("Password should be at least 6 characters long")
  $(".textpassword").css("color", "red");
}else{
  $(".textpassword").text(newPassword);
  $(".textpassword").css("color", "green");
}

if (confirmNewPassword === '') {
  
    $(".textconpassword").html("Please confirm your password")
    $(".textconpassword").css("color", "red");
}else if (confirmNewPassword.length < 6) {
  $(".textconpassword").html("Password should be at least 6 characters long");
  $(".textconpassword").css("color", "red");
}else{
  $(".textconpassword").text(confirmNewPassword);
  $(".textconpassword").css("color", "green");
}
if (newPassword!== confirmNewPassword) {
   
    $(".textpassword").html("Passwords do not match")
    $(".textpassword").css("color", "red");
}else{
  $(".textconpassword").text(input[Password]);
  $(".textconpassword").css("color", "green");
  $(".textpassword").text(input[Password]);
  $(".textpassword").css("color", "green");
}

// If all validations pass, the form will submit
alert("sucess");
});
});
