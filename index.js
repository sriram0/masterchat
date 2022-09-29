var firebaseConfig = {
    apiKey: "AIzaSyAKhjZWF2hB_wPEx1YUPe9d2Y3K4qW55Hc",
    authDomain: "pchat-8374e.firebaseapp.com",
    databaseURL: "https://pchat-8374e-default-rtdb.firebaseio.com",
    projectId: "pchat-8374e",
    storageBucket: "pchat-8374e.appspot.com",
    messagingSenderId: "943432871201",
    appId: "1:943432871201:web:4c41860d77700075eda260"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var pass;
var people=["Sriram10", "Jaswin07", "Jishnu10", "Sai09"]
var login = function(){
    inp=$("#userI").val();
    z=true
    for(var x=0;x<people.length;x++){
        if(inp===people[x]){
            z=false;
            i= inp.slice(0, inp.length-2);
            localStorage.setItem("userN", i);
            location = "chat.html";   
        }
    }
    if(z){
        alert("Incorrect Username")
    }
}