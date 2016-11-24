console.log("opened javascript")
window.fbAsyncInit = function() {
    FB.init({
      appId      : '665972963572444',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
};
  function myFacebookLogin() {
    FB.login(function(){
      FB.api('/me/feed', 'post', {
      //   message: 'oops',
      //   privacy: {
      //     value: "SELF"
      //   }
       });
    }, {scope: 'publish_actions'});
  }

  function checkLogin() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log("Logged in")
      }
      else {
        myFacebookLogin();
      }
    });
  }

  function getFriends() {
    checkLogin()
    FB.api('/me/friends', function(response) {
        if (response && ! response.error) {
          console.log(response); 
        }
        else {
          console.log(response.error)
        }
    })
  }

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
