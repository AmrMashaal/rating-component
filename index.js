window.localStorage.clear()

let lis = document.querySelectorAll("li");
let submit = document.querySelector(".submit");
let first = document.querySelector(".holder");
let second = document.querySelector(".parent");
let h4 = document.querySelector(".parent h4");
let h5 = document.querySelector(".holder h5");
let flag = false;

lis.forEach(function (i) {
  i.onclick = function () {
    flag = true;
    lis.forEach(function (ele) {
      ele.classList.remove("orange");
    });
    this.classList.add("orange");
    window.localStorage.setItem("value", this.innerHTML);
  };
});

submit.onclick = function () {
  if (flag === true) {
    first.style.display = "none";
    second.style.display = "block";
    h4.innerHTML = `You selected ${window.localStorage.getItem(
      "value"
    )} out of 5`;
    h5.style.display = "none";
  } else {
    h5.style.display = "block";
  }
};
