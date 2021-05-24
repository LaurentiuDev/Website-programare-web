function showProfile() {
    let width = document.getElementById('top-navigation').clientWidth;
    document.getElementById("popover-div").style.display = "block";
    document.getElementById("popover-div").style.left = width - 204 + "px";

}