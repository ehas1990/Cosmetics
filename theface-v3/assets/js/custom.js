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
  
});
