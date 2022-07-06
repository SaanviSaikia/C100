// Your web app's Firebase configuration

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = 
{
    apiKey: "AIzaSyAIULRR0DkXpc2gKYIijov0hNp37qhHglQ",
    authDomain: "lets-chat-app-5a773.firebaseapp.com",
    projectId: "lets-chat-app-5a773",
    storageBucket: "lets-chat-app-5a773.appspot.com",
    messagingSenderId: "53051640484",
    appId: "1:53051640484:web:d7da75d79feb7e391eb431"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
  
}



