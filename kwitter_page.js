const firebaseConfig = {
    apiKey: "AIzaSyCOcM2VE5Lz-jSjBJP_JYj0wl8A0iHzfwA",
    authDomain: "fx-witter.firebaseapp.com",
    projectId: "fx-witter",
    storageBucket: "fx-witter.appspot.com",
    messagingSenderId: "854073374464",
    appId: "1:854073374464:web:c558f7d59a41280ebfe5e5"
  };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    });
    document.getElementById("msg").value = "";
}