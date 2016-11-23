console.log("opened javascript")
window.fbAsyncInit = function() {
    FB.init({
      appId      : '665972963572444',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();

    function myFacebookLogin() {
      FB.login(function(){
        FB.api('/me/feed', 'post', {
          message: 'oops',
          privacy: {
            value: "SELF"
          }
        });
      }, {scope: 'publish_actions'});
    }
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

