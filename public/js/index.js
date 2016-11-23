console.log("opened javascript")
window.fbAsyncInit = function() {
    FB.init({
      appId      : '665972963572444',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
    
   FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    console.log(response.authResponse)
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
    console.log("not authenticated")
  } else {
    // the user isn't logged in to Facebook.
    console.log("not logged in")
  }
 });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

