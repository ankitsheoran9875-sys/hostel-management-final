function loginUser() {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(user => {

    if (user) {

      localStorage.setItem("username", user.username);
      localStorage.setItem("role", user.role);

      if (user.role === "ADMIN") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "dashboard.html";
      }

    } else {
      alert("Invalid credentials");
    }

  })
  .catch(err => {
    console.log(err);
    alert("Invalid credentials");
  });

  return false;
}