// document.getElementById("here").addEventListener("click", myFunction);
// function myFunction() {
//     document.getElementById("here").innerHTML = "Salut Adina!";

//   }

const logi = document.getElementById("log");

logi.addEventListener("click", function () {
  const username = document.getElementById("usrname").value;
  const password = document.getElementById("usrpass").value;
  conectare(username, password);
  document.getElementById("user_contact").innerHTML = username;
  console.log(username);
});

function conectare(username, password) {
  if (username == "andrei") {
    if (password == "1234") {
      window.open("contact.html");
    }
  } else {
    alert("Username sau parola gresita!");
  }
}
