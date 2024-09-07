let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

function hideContact1() {
  const contact1 = document.getElementById("contact1");
  if (window.innerWidth > 900) {
    contact1.style.display = "none";
  } else {
    contact1.style.display = "block";
  }
}
window.addEventListener("resize", hideContact1);
window.addEventListener("load", hideContact1);

function hideContact2() {
  const contact2 = document.getElementById("contact2");
  if (window.innerWidth < 900) {
    contact2.style.display = "none";
  } else {
    contact2.style.display = "block";
  }
}
window.addEventListener("resize", hideContact2);
window.addEventListener("load", hideContact2);
