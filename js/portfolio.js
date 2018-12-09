

var config = {
    apiKey: "AIzaSyB9HkbhGjc_PvxMR87hi3G1ttTjCpFaWpg",
    authDomain: "portfolio-70131.firebaseapp.com",
    databaseURL: "https://portfolio-70131.firebaseio.com",
    projectId: "portfolio-70131",
    storageBucket: "portfolio-70131.appspot.com",
    messagingSenderId: "543105879391"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var email = "";
var message = "";
var adddata = "";


$(".submit").on("click", function (e) {
    e.preventDefault();

    name = $("#name").val().trim();
    email = $("#email").val().trim();
    message = $("#message").val().trim();

    if (name == "" || email == "" || message == "") {
        alert("Enter Data");
    } else if (name != "" || email != "" || message != "") {
        alert("Data Send Successfully");
        database.ref().push({
            Name: name,
            Email: email,
            Message: message
        });
    }
    window.location.reload();
    $("#name").empty();
    $("#email").empty();
    $("#message").empty();
});

// database.ref().on("child_added", function (snapshot) {
//     var sp = snapshot.val();

//     console.log(sp.Name);
//     console.log(sp.Email);
//     console.log(sp.Message);

// });
