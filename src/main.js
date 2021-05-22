// document.getElementById("here").addEventListener("click", myFunction);
// function myFunction() {
//     document.getElementById("here").innerHTML = "Salut Adina!";

//   }

const loginButton = document.getElementById("login-button");

if (loginButton) {
  loginButton.addEventListener("click", function () {
    const username = document.getElementById("usrname").value;
    const password = document.getElementById("usrpass").value;
    conectare(username, password);
    window.sessionStorage.setItem("username", username);
  });
}

function conectare(username, password) {
  if (username == "andrei") {
    if (password == "1234") {
      window.open("contact.html");
    }
  } else {
    alert("Username sau parola gresita!");
  }
}

initUsername();

function initUsername() {
  const username = window.sessionStorage.getItem("username");

  if (username) {
    const usernameText = document.getElementById("username-text");
    
    if(usernameText) {
      document.getElementById("username-text").innerHTML = username;
    }
  }
}
