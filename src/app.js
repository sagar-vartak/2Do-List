var elements = [];
window.onload = function () {
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  display();
};
function addElement() {
  if (
    document.querySelector(".addTxt").value.trim() != "" &&
    document.querySelector(".addTxt").value != "<"
  ) {
    elements.push(document.querySelector(".addTxt").value.trim());
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
    document.querySelector(".addTxt").value = "";
  }
}
function display() {
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='element'><br>" +
      elements[i] +
      "<button class='edits' id='rmvbtn' onclick='edit(" +
      i +
      ")'><i class='fa fa-pencil' aria-hidden='true'></i></button>" +
      "<button class='tick' id='rmvBTN' onclick='strike(" +
      i +
      ")'><i class='fa fa-check fa-2x' aria-hidden='true'></i></button><button class='dustbin' onclick='del(" +
      i +
      ")'><i class='fa fa-trash-o fa-2x' aria-hidden='true'></i></button></div></center><br>";
}
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}
//editelement
function edit(index) {
  if (
    elements[index].includes("<strike>") &&
    elements[index].includes("</strike>")
  ) {
    elements[index] = elements[index].replace("<strike>", "");
    elements[index] = elements[index].replace("</strike>", "");
  }
  document.querySelector(".addTxt").value = elements[index];
  del(index);
  /* elements[index] = document.querySelector(".addTxt").value; */
}
function strike(index) {
  if (
    elements[index].includes("<strike>") &&
    elements[index].includes("</strike>")
  ) {
    elements[index] = elements[index].replace("<strike>", "");
    elements[index] = elements[index].replace("</strike>", "");
  } else {
    elements[index] = "<strike>" + elements[index] + "</strike>";
    /* let bttn = getElementById("rmvbtn");
    bttn.style.display = "none"; */
  }
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}

function myFunction(x) {
  var element = document.body;
  element.classList.toggle("light-header-footer");
  x.classList.toggle("fa-moon-o");
}

function myRemove() {
  var element = document.getElementById("rmvbtn");
  element.classList.toggle("invisible");
}
