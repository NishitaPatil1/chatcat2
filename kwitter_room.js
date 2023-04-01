var firebaseConfig = {
      apiKey: "AIzaSyAdOX-biyQoWdtVxg_VgC6Rd7LY1EEKPe8",
      authDomain: "kwitter-project-1e462.firebaseapp.com",
      databaseURL: "https://kwitter-project-1e462-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-1e462",
      storageBucket: "kwitter-project-1e462.appspot.com",
      messagingSenderId: "251763997291",
      appId: "1:251763997291:web:8707afed7f4b7dc7e5cf2e"
    };
  
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name="+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }