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
    let button = document.getElementById('name-button');
    let divHide = document.getElementById('popover-div');
    let TopRight = getElementPosition("top-navigation");

    // default values
    divHide.style.display = 'block';
    divHide.style.right = TopRight.right + "px";

    button.onclick = function() {
        if (divHide.style.display !== 'block') {
            divHide.style.display = 'block';
            divHide.style.right = TopRight.right + "px";
        } else {
            divHide.style.display = 'none';
        }
    };

}
/* End of show/hide profile options on the top right corner */

/* Collapsable function for courses*/
let coll = document.getElementsByClassName("collapsible-courses");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
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



document.getElementById("here").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("here").innerHTML = "Salut Adina!";

}