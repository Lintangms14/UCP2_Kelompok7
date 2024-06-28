document.querySelector(".submit").addEventListener("click", function () {
  event.preventDefault();

  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    Swal.fire({
      title: "Error!",
      text: "Please fill out all fields",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Pesan Terkirim",
      html: `Name: ${nama}<br>Email: ${email}<br>Pesan: ${pesan}`,
      icon: "success",
    });
  }
});
