$("#logout").click(function(){
  var milkcocoa = new MilkCocoa("blueib3a6u4k.mlkcca.com");
  milkcocoa.logout();

  window.location.href = "https://prpr-man.auth0.com/v2/logout?returnTo=http://localhost:8080/LPM/index.html";
});
