document.getElementById("name").addEventListener("blur", checkField);
document.getElementById("surname").addEventListener("blur", checkField);
document.getElementById("phone").addEventListener("blur", checkField);
document.getElementById("email").addEventListener("blur", checkField);
document.getElementsByClassName("gender")[0].addEventListener("click", checkField);
document.getElementsByClassName("gender")[1].addEventListener("click", checkField);
document.getElementsByClassName("gender")[0].addEventListener("click", radioDis);
document.getElementsByClassName("gender")[1].addEventListener("click", radioDis);
document.getElementById("date").addEventListener("change", checkField);
document.addEventListener("wheel", backColor);
document.getElementById("save").addEventListener("mouseover", btnOn);
document.getElementById("reset").addEventListener("mouseover", btnOn);
document.getElementById("save").addEventListener("mouseout", btnOff);
document.getElementById("reset").addEventListener("mouseout", btnOff);
document.getElementById("photo").addEventListener("dblclick", openPhoto);

var scale = 0;

function radioDis() {
  document.getElementsByClassName("gender")[0].disabled = true;
  document.getElementsByClassName("gender")[1].disabled = true;
}

function openPhoto(e) {
  var bck = document.createElement("div");
  bck.style.background = "rgba(0,0,0,.7)";
  bck.style.width = "100%";
  bck.style.height = "100%";
  bck.style.position = "absolute";
  bck.style.top = "0";
  bck.style.left = "0";
  bck.id = "bck";
  document.body.append(bck);
  var node = document.createElement("img");
  node.src = e.currentTarget.src;
  node.style.position = "absolute";
  node.style.left = "33%";
  node.style.width = "30%";
  node.style.padding = "2em";
  node.style.top = "4em";
  node.style.background = "#fff";
  node.style.border = "#999 solid 3px";
  node.style.borderRadius = "1em";
  node.id = "slide";
  document.body.append(node);
  document.getElementById("bck").addEventListener("click", closePhoto);
}

function closePhoto(e) {
  document.getElementById("bck").remove();
  document.getElementById("slide").remove();
}

function checkField(e) {
  if (e.currentTarget.value == "") {if (scale>0) scale--;}
  else{

    if (e.currentTarget.id=="name" || e.currentTarget.id=="surname") {
      var reName = /[A-Za-zА-Яа-яЁё]{3,}/;
      if (reName.test(e.currentTarget.value)==0) {
        alert("Поле должно содержать только буквы");
        return;
      }
    }

    if (e.currentTarget.id=="date") {
      if ( ((new Date().getTime() - new Date(e.currentTarget.value)) / (24 * 3600 * 365.25 * 1000)) < 18) {
        alert("Регистрация возможна только с 18 лет");
        return;
      }
    }

    if (e.currentTarget.id=="date") {
      if ( ((new Date().getTime() - new Date(e.currentTarget.value)) / (24 * 3600 * 365.25 * 1000)) < 18) {
        alert("Регистрация возможна только с 18 лет");
        return;
      }
    }

    if (e.currentTarget.id=="email") {
      let reEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/;
      if (reEmail.test(e.currentTarget.value)==0) {
        alert("Почта введена неверно");
        return;
      }
    }
    if (e.currentTarget.id=="phone") {
      var rePhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ ;
      if (rePhone.test(e.currentTarget.value)==0) {
        alert("Телефон введён неверно");
        return;
      }
    }

    addLine();
    e.currentTarget.disabled = true;
  }
}

function addLine() {
  document.getElementById("scale").children[scale].style.background = "#adfedd";
  if (scale<document.getElementById("scale").children.length-1) scale++;
  else document.getElementById("save").disabled = false;
}

function backColor(e) {
  var step = 5;
  var color = document.body.style.background;
  var tmp = +color.substring(color.length-4,color.length-1);
  if (e.deltaY > 0 && tmp < 255-step) tmp += step;
  if (e.deltaY < 0 && tmp > 10+step) tmp -= step;
  document.body.style.background = "rgb(" + tmp +","+ tmp +","+ tmp +")";
}

function btnOn(e) {
  e.currentTarget.style.background = "#adfedd";
}

function btnOff(e){
  e.currentTarget.style.background = "#eee";
}
