// document.getElementById("here").addEventListener("click", myFunction);
// function myFunction() {
//     document.getElementById("here").innerHTML = "Salut Adina!";

//   }

const loginButton = document.getElementById("login-button");
const caretButton = document.getElementById("caret-text");
const logoutButton = document.getElementById("button-logout");

if (loginButton) {
  loginButton.addEventListener("click", function () {
    const username = document.getElementById("usrname").value;
    const password = document.getElementById("user-password").value;
    conectare(username, password);
    window.sessionStorage.setItem("username", username);
  });
}

function conectare(username, password) {
  if (username == "marian") {
    if (password == "1234") {
      console.log("1234");
      window.open("contact.html");
      console.log("2345");
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
    const usernamePopover = document.getElementById("username-popover");
    if (usernameText) {
      document.getElementById("username-text").innerHTML = username;
      document.getElementById("username-popover").innerHTML = username;
    }
  }
}

if (logoutButton) {
  logoutButton.addEventListener("click", function () {
    function logOut() {
      window.open("login.html", "_self");
    }
    logOut();
  });
}

/* Show/hide profile options on the top right corner */
function getElementPosition(id) {
  var ele = document.getElementById(id);
  var right = 0;
  while (ele.tagName != "BODY") {
    right += ele.offsetLeft;
    ele = ele.offsetParent;
  }
  return { right: right };
}

function showProfileOptions() {
  let button = document.getElementById("name-button");
  let divHide = document.getElementById("popover-div");
  let TopRight = getElementPosition("top-navigation");

  // default values
  divHide.style.display = "block";
  divHide.style.right = TopRight.right + "px";

  button.onclick = function () {
    if (divHide.style.display !== "block") {
      divHide.style.display = "block";
      divHide.style.right = TopRight.right + "px";
    } else {
      divHide.style.display = "none";
    }
  };
}
/* End of show/hide profile options on the top right corner */

/* Collapsable function for courses*/
let coll = document.getElementsByClassName("collapsible-courses");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
/* end of Collapsable function for courses*/


