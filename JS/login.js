document.getElementById("connect").addEventListener("click", login);
function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.trim() === "" || password.trim() === "") {
        alert("请输入账号和密码");
      } else {
        window.location.href = "../HW1/wireless/wireless.html?username="+encodeURIComponent(username);
      }

}