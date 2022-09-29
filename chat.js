var messages = [];

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


$("#roomD").html(`#${localStorage.getItem("roomN")}`);

var logout= function(){
    localStorage.removeItem("userN");
    localStorage.removeItem("roomN");
    location = "index.html"
}, send = function(e){
    e.preventDefault();
    var inp = $(this).find("[name=messagesI]");
    firebase.database().ref("/"+localStorage.getItem("roomN")).push({
        user: localStorage.getItem("userN"),
        text: inp.val(),
        likes: 1
    });
    messages.push({
        user: localStorage.getItem("userN"),
        text: inp.val()
    });
    inp.val("");
    console.log(messages);
    getData();
}, getData = function(){
    firebase.database().ref("/" + localStorage.getItem("roomN")).on('value', function (snapshot) {
        $("#messages").empty();
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "reason") {
                firebase_message_id = childKey;
                message_data = childData;

                //start code
                console.log(message_data)
                console.log(` Firebase Message Id: ${firebase_message_id}`);

                $("#messages").append(`<b>${message_data.user}</b> <br> <label class="text-secondary">${message_data.text}</label><hr>`);
                //end code
            }
        });
  });
}, like = function(config){
    console.log(config.data);
    console.log(config.id);
    console.log("liked");
}, my_likeClick = function(e) {
    var btn = $(e.currentTarget);
    console.log("clicked", btn);
    like({
        data: btn.attr("id"),
        id: btn.attr("class").split(" ")[4]
    });
}


$(".likeBtn").on("mouseup", my_likeClick);

$("form").on("submit", send);
getData();

