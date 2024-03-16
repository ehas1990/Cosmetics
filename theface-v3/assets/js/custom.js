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
});
