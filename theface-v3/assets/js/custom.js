$(document).ready(function(){
  $(".fa-lock").click(function(){
      $(".fa-lock").hide();
      $(".fa-unlock").show();
      
      $(".form-control[name='password']").attr("type","text");
  });

  $(".fa-unlock").click(function(){
      $(".fa-unlock").hide();
      $(".fa-lock").show();
      $(".form-control[name='password']").attr("type","password");
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
  var itemsPerPage = 5; // Define how many items you want to display per page
  var $items = $(".product"); // Select all elements with the item-width class
  
  var itemCount = $items.length; // Get the total number of items
  var totalPages = Math.ceil(itemCount / itemsPerPage); // Calculate the total number of pages

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
    var pageNumber = $(this).text(); // Get the clicked page number
    var startIndex = (pageNumber - 1) * itemsPerPage; // Calculate the start index of items to show
    var endIndex = startIndex + itemsPerPage; // Calculate the end index of items to show

    // Hide all items
    $items.hide();

    // Show items for the clicked page
    $items.slice(startIndex, endIndex).show();
  });
  
});
