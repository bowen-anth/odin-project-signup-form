var check = function () {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm-password").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "matching";
    document.getElementById("password").classList = "confirmed-password";
    document.getElementById("confirm-password").classList =
      "confirmed-password";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "not matching";
    document.getElementById("password").classList = "unconfirmed-password";
    document.getElementById("confirm-password").classList =
      "unconfirmed-password";
  }
};
