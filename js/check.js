let checkInput = document.querySelector("#checkInput");
let checkError = document.querySelector("#checkError");
let checkBtn = document.querySelector("#checkSubmit");

checkBtn.addEventListener("click", function (j) {
  j.preventDefault();
  if (checkInput.value === "") {
    checkError.style.display = "block";
    setTimeout(function () {
      checkError.style.display = "none";
    }, 3000);
    checkInput.style.borderColor = "red";
    setTimeout(function () {
      checkInput.style.borderColor = "transparent";
    }, 3000);
  } else {
    alert("hi");
  }
});
