function signUpUser() {

    // TODO: Enter in your own API keys
    Parse.initialize("DoeBOWJ7OW0nl01SbjqXFCFIGl4xTpyTuJBNQntN", "cYIHatH2agwjSytDwYnP6NAWz3w026YLXXEIrq6G");
    var e = document.getElementById("ddlViewBy");
    var user = new Parse.User();
    var guru = e.options[e.selectedIndex].text;
    var username = $("#signup-username").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();
    var school = $("#signup-school").val();
    if (guru === "Guru") {
        user.set("Guru", true)
    }
    else {
        user.set("Guru", false)
    }
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    user.signUp(null, {
        success: function (user) {
            alert("You successfully signed up!");
            var currentUser = Parse.User.current();
            if (currentUser && guru === "Guru") {
                window.location = "http://www.google.com/"
            }
            else {
                window.location = "http://www.twitter.com/"
            }
        },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

function signInUser() {

    // TODO: Enter in your own API keys
    Parse.initialize("DoeBOWJ7OW0nl01SbjqXFCFIGl4xTpyTuJBNQntN", "cYIHatH2agwjSytDwYnP6NAWz3w026YLXXEIrq6G");

    var username = $("#signin-username").val();
    var password = $("#signin-password").val();
    Parse.User.logIn(username, password, {
        success: function (user) {
            alert("You successfully logged in!");
            var guru = user.get("Guru");
            console.log(guru);
            var currentUser = Parse.User.current();
            if (currentUser && guru === true) {
                window.location = "http://www.google.com/"
            }
            else {
                window.location = "http://www.twitter.com/"
            }
        },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}
