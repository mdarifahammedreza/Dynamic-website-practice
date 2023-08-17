// step-1
document.getElementById("submit-button").addEventListener("click", function () {
  const userMailBOx = document.getElementById("input-mail");
  const userMail = userMailBOx.value; //mail gotted
  const userPasswordBox = document.getElementById("input-password");
  const userPassword = userPasswordBox.value;
  if (userMail === "admin" && userPassword === "admin") {
    window.location.href = "main_page.html";
    console.log("Welcome");
  } else {
    alert("Username and pass : admin ");
    console.log("fuck you");
  }
});
