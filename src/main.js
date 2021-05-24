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
    var TopRight = getElementPosition("top-navigation");

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

document.getElementById("here").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("here").innerHTML = "Salut Adina!";

}