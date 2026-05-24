window.onload = function () {

  let username = localStorage.getItem("username");

  //safety check (important)
  if (!username) {
    alert("Please login first");
    window.location.href = "index.html";
    return;
  }

  let parts = username.split("@");

  let name = document.getElementById("name");
  let room = document.getElementById("room");
  let college = document.getElementById("college");

  name.value = parts[0];
  room.value = parts[1];

  // CHECK from backend
  fetch("/checkLunch/" + username)
    .then(res => res.json())
    .then(isRegistered => {

      if (isRegistered) {

        applySuccessUI(name, room, college);
      }
    })
    .catch(err => console.log(err));


    fetch("/user?username=" + username)
    .then(res => res.json())
    .then(user => {

     college.value = user.college;

  });
};


// Separate function (clean code)
function applySuccessUI(name, room, college) {

  name.classList.add("success");
  room.classList.add("success");
  college.classList.add("success");

  document.getElementById("registerBtn").disabled = true;

  document.getElementById("lunchDetails").style.display = "block";

  document.getElementById("status").innerText = "YES";
  document.getElementById("date").innerText = new Date().toLocaleDateString();
  document.getElementById("dName").innerText = name.value;
  document.getElementById("dRoom").innerText = room.value;
}


//Register function
function registerLunch() {

  let username = localStorage.getItem("username");

  let name = document.getElementById("name");
  let room = document.getElementById("room");
  let college = document.getElementById("college");

  fetch("/registerLunch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      name: name.value,
      room: room.value,
      college: college.value
    })
  })
  .then(res => res.text())
  .then(data => {

    alert(data);

    if (data === "Lunch Registered Successfully") {

      applySuccessUI(name, room, college);

    } else if (data === "Already Registered Today") {

      // also show UI on duplicate (important fix)
      applySuccessUI(name, room, college);
    }

  })
  .catch(err => console.log(err));
}