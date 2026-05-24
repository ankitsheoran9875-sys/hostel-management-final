function validateForm() {

  let name = document.getElementById("name").value;
  let room = document.getElementById("room").value;
  let phone = document.getElementById("phone").value;
  let college = document.getElementById("college").value;

  // Empty check
  if (name === "" || room === "" || phone === "" || college === "") {
    alert("All fields are required");
    return false;
  }

  if (room.length !== 3 || isNaN(room)) {
    alert("Enter valid room number");
    return false;
  }

  // Phone validation
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Enter valid 10-digit phone number");
    return false;
  }

  let student = {
    name: name,
    room: room,
    phone: phone,
    college: college
  };

  fetch("/addStudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
   },
    body: JSON.stringify(student)
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
    loadStudents();   
  });

  return false;
} 



window.onload = function() {

  let username = localStorage.getItem("username");

  if (username) {

    document.getElementById("userDisplay").innerText = username;

    //  split username
    let parts = username.split("@");

    let name = parts[0];
    let room = parts[1];

    //  auto-fill fields
    document.getElementById("name").value = name;
    document.getElementById("room").value = room;
  }
};

function logout() {
  localStorage.removeItem("username");
  window.location.href = "index.html";
}