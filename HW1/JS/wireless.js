window.onload = function() {
var params = new URLSearchParams(window.location.search);
var username = params.get("username");
document.getElementById("uname").textContent = username;
}

document.getElementById("logout").addEventListener("click", logout);
function logout(){
    console.log("logout function called");
    window.location.href = "../../wireless/login.html";
}