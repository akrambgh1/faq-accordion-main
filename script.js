var btn1 = document.getElementById("btn1");

var open1 = document.getElementById("open1");

var para1 = document.getElementById("para1");
isclose1 = true;
btn1.addEventListener("click", function () {
  if (isclose1) {
    open1.style.display = "none";
    close1.style.display = "block";
    para1.style.display = "block";
    isclose1 = false;

    open2.style.display = "block";
    close2.style.display = "none";
    para2.style.display = "none";
    isclose2 = true;

    open3.style.display = "block";
    close3.style.display = "none";
    para3.style.display = "none";
    isclose3 = true;
    open4.style.display = "block";
    close4.style.display = "none";
    para4.style.display = "none";
    isclose4 = true;
  } else {
    open1.style.display = "block";
    close1.style.display = "none";
    para1.style.display = "none";
    isclose1 = true;
  }
});

var btn2 = document.getElementById("btn2");

var open2 = document.getElementById("open2");

var para2 = document.getElementById("para2");
isclose2 = true;
btn2.addEventListener("click", function () {
  if (isclose2) {
    open1.style.display = "block";
    close1.style.display = "none";
    para1.style.display = "none";
    isclose1 = true;
    open2.style.display = "none";
    close2.style.display = "block";
    para2.style.display = "block";
    isclose2 = false;

    open3.style.display = "block";
    close3.style.display = "none";
    para3.style.display = "none";
    isclose3 = true;
    open4.style.display = "block";
    close4.style.display = "none";
    para4.style.display = "none";
    isclose4 = true;
  } else {
    open2.style.display = "block";
    close2.style.display = "none";
    para2.style.display = "none";
    isclose2 = true;
  }
});

var btn3 = document.getElementById("btn3");

var open3 = document.getElementById("open3");

var para3 = document.getElementById("para3");
isclose3 = true;
btn3.addEventListener("click", function () {
  if (isclose3) {
    open3.style.display = "none";
    close3.style.display = "block";
    para3.style.display = "block";
    isclose3 = false;

    open1.style.display = "block";
    close1.style.display = "none";
    para1.style.display = "none";
    isclose1 = true;

    open2.style.display = "block";
    close2.style.display = "none";
    para2.style.display = "none";
    isclose2 = true;

    open4.style.display = "block";
    close4.style.display = "none";
    para4.style.display = "none";
    isclose4 = true;
  } else {
    open3.style.display = "block";
    close3.style.display = "none";
    para3.style.display = "none";
    isclose3 = true;
  }
});

var btn4 = document.getElementById("btn4");

var open4 = document.getElementById("open4");

var para4 = document.getElementById("para4");
isclose4 = true;
btn4.addEventListener("click", function () {
  if (isclose4) {
    open4.style.display = "none";
    close4.style.display = "block";
    para4.style.display = "block";
    isclose4 = false;

    open1.style.display = "block";
    close1.style.display = "none";
    para1.style.display = "none";
    isclose1 = true;

    open2.style.display = "block";
    close2.style.display = "none";
    para2.style.display = "none";
    isclose2 = true;

    open3.style.display = "block";
    close3.style.display = "none";
    para3.style.display = "none";
    isclose3 = true;
  } else {
    open4.style.display = "block";
    close4.style.display = "none";
    para4.style.display = "none";
    isclose4 = true;
  }
});
