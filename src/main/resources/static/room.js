function validateRoomForm() {

  let room = document.getElementById("room").value;

  if (room.length !== 3 || isNaN(room)) {
    alert("Enter valid room number");
    return false;
  }
  
  alert("Form submitted successfully");
  return true;
}