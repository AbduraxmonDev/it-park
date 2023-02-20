let btn = document.querySelector("#burger");
let link = document.querySelectorAll("#link");
btn.addEventListener("click", function () {
  document.querySelector("header").classList.toggle("open");
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    document.querySelector("header").classList.remove("open");
  }
});
for (let item of link) {
  item.addEventListener("click", function () {
    document.querySelector("header").classList.remove("open");
  });
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let moreBtn = document.querySelector("#moreBtn");
moreBtn.addEventListener("click", function () {
  document.querySelector(".courses__types").classList.toggle("more");
});

let inputName = document.querySelector("#inputName");
let submitBtns = document.querySelectorAll("#submitBtn");
let errorName = document.querySelector("#errorName");
let errorNameNum = '1234567890!@#$%^&*()-_=+{}[]":;""?<,>./|';
let errorNametext = document.querySelector("#errorNametext");

for (const submitBtn of submitBtns) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputName.value === "") {
      inputName.style.borderColor = "red";
      setTimeout(function () {
        inputName.style.borderColor = "transparent";
      }, 3000);
      errorName.style.display = "block";
      setTimeout(function () {
        errorName.style.display = "none";
      }, 3000);
    } else if (errorNameNum.includes(inputName.value)) {
      inputName.style.borderColor = "red";
      setTimeout(function () {
        inputName.style.borderColor = "transparent";
      }, 3000);
      errorNametext.style.display = "block";
      setTimeout(function () {
        errorNametext.style.display = "none";
      }, 3000);
    } else {
      inputName.style.borderColor = "transparent";
    }
  });
}

let inputTel = document.querySelector("#inputTel");
let errorTelNum = document.querySelector("#errortelnum");
let errorTel = document.querySelector("#errorTel");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputTel.value === "") {
    inputTel.style.borderColor = "red";

    setTimeout(function () {
      inputTel.style.borderColor = "transparent";
    }, 3000);

    errorTel.style.display = "block";

    setTimeout(function () {
      errorTel.style.display = "none";
    }, 3000);
  } else if (inputTel.value == "s") {
    errorTelNum.style.display = "block";

    setTimeout(function () {
      errorTelNum.style.display = "none";
    }, 3000);

    inputTel.style.borderColor = "red";

    setTimeout(function () {
      inputTel.style.borderColor = "transparent";
    }, 3000);
  } else {
    inputTel.value = "";
    inputTel.style.borderColor = "transparent";
  }
});

// let checkInput = document.querySelector("#checkInput");
// let checkError = document.querySelector("#checkError");
// let checkBtn = document.querySelector("#checkSubmit");

// checkBtn.addEventListener("click", function (j) {
//   j.preventDefault();
//   if (checkInput.value === "") {
//     checkError.style.display = "block";
//     setTimeout(function () {
//       checkError.style.display = "none";
//     }, 3000);
//     checkInput.style.borderColor = "red";
//     setTimeout(function () {
//       checkInput.style.borderColor = "transparent";
//     }, 3000);
//   } else {
//     alert("hi");
//   }
// });
