var app_firebase={};

(function()
{
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2XO27-8qqwnRojCfM1M8N2ZegjZfvyxw",
    authDomain: "hip4homes-26c5d.firebaseapp.com",
    databaseURL: "https://hip4homes-26c5d.firebaseio.com",
    projectId: "hip4homes-26c5d",
    storageBucket: "hip4homes-26c5d.appspot.com",
    messagingSenderId: "371397259516"
  };
  firebase.initializeApp(config);
  app_firebase=firebase;
})()
