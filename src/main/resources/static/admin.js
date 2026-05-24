window.onload = function () {

  let role = localStorage.getItem("role");

  // protect page
  if (role !== "ADMIN") {
    alert("Access denied");
    window.location.href = "index.html";
    return;
  }

  let username = localStorage.getItem("username");
  document.getElementById("adminName").innerText = username;

  //loadStudents();
};


//  fetch count from backend
function loadCount() {

  fetch("/lunchCount")
    .then(res => res.text())
    .then(data => {
      document.getElementById("count").innerText = data;
    });
}


function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}


function loadStudents() {

  fetch("/allLunch")
    .then(res => res.json())
    .then(data => {

      let table = document
        .getElementById("lunchTable")
        .getElementsByTagName("tbody")[0];

      table.innerHTML = "";

      data.forEach(item => {

        let row = table.insertRow();

        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = item.room;
        row.insertCell(2).innerText = item.college;

        // TAKEN BUTTON
        let takenCell = row.insertCell(3);

        let takenBtn = document.createElement("button");
        takenBtn.innerText = "Taken";
        takenBtn.classList.add("action-btn");

        // if already taken
        if (item.taken) {
          takenBtn.classList.add("green");
        }

        takenBtn.onclick = function () {

          fetch("/markTaken/" + item.id, {
            method: "POST"
          })
          .then(res => res.text())
          .then(data => {

            takenBtn.classList.add("green");

          });

        };

        takenCell.appendChild(takenBtn);

        // RETURNED BUTTON
        let returnCell = row.insertCell(4);

        let returnBtn = document.createElement("button");
        returnBtn.innerText = "Returned";
        returnBtn.classList.add("action-btn");

        // if already returned
        if (item.returned) {
          returnBtn.classList.add("green");
        }

        returnBtn.onclick = function () {

          fetch("/markReturned/" + item.id, {
            method: "POST"
          })
          .then(res => res.text())
          .then(data => {

            returnBtn.classList.add("green");

          });

        };

        returnCell.appendChild(returnBtn);

      });

    });
}


function addStudent() {

  let username = document.getElementById("newUsername").value;
  let password = document.getElementById("newPassword").value;
  let college = document.getElementById("newCollege").value;

  if (!username.includes("@")) {
    alert("Username must be like ankit@101");
    return;
  }

  fetch("/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password,
      college: college
    })
  })
  .then(res => res.text())
  .then(data => {

    alert(data);

    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("newCollege").value = "";
  });
}