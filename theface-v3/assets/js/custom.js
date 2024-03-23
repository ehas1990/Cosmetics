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
  var contact=$("#contact").val();
  var user=$("#user").val()
  if (user === '') {
    alert('Please enter a username.');
    return false;
}
if (contact === '') {
    alert('Please enter a contact number.');
    return false;
}
if (email === '') {
    alert('Please enter an email address.');
 
}
if (newPassword === '') {
    alert('Please enter a password.');

}
if (confirmNewPassword === '') {
    alert('Please confirm your password.');
 
}
if (newPassword!== confirmNewPassword) {
    alert('Passwords do not match.');
    
}

// If all validations pass, the form will submit
alert("sucess");
});
});
