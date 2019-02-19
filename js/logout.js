function logout()
{
   
    firebase.auth().signOut().then(function() {
      localStorage.clear(); 
      window.location="login.html";
      }).catch(function(error) {
        // An error happened.
      });
}
