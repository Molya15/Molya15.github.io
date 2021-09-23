var tags = ["name", "surname", "phone", "email", "date"];
var isPhotoChanged = false;

window.onload = function(){
  document.getElementsByClassName('gender')[0].checked = false;
  document.getElementsByClassName('gender')[1].checked = false;

  loadInfo();
}

function loadInfo() {
  for(let i = 0; i<tags.length; i++) loadItem(tags[i]);
  gender = localStorage.getItem("gender");
  if (gender != null) document.getElementsByClassName("gender")[gender].checked = true;
  if (gender == 1) document.getElementById("photo").src = "female.jpg";
  let photo = localStorage.getItem("photo");
  changePhoto(null,photo);
}

function loadItem(item) {
  var temp = localStorage.getItem(item);
  document.getElementById(item).value = item != null? temp : "";
}

document.getElementById("save").onclick = function() {
  saveInfo();
  gender = document.getElementsByClassName("gender");
  gender = gender[0].checked == true ? 0 : 1;
  localStorage.setItem("gender", gender);
}

function saveInfo() {
  for(let i = 0; i<tags.length; i++) saveItem(tags[i]);
  let photo = document.getElementById("photo").src;
  localStorage.setItem("photo", photo);
}

function saveItem(item) {
  var temp = document.getElementById(item).value;
  if (temp != null) localStorage.setItem(item, temp);
}

document.getElementById("btnphoto").onclick = function(){
  var photo = document.getElementById("inphoto").files[0];
  changePhoto(null, photo.name);
  if (document.getElementById("photo").src != "male.jpg" && document.getElementById("photo").src != "female.jpg") isPhotoChanged = true;
  else isPhotoChanged = false;
}

document.getElementsByClassName("gender")[0].onclick = function(){
  if (!isPhotoChanged) changePhoto(this, "male.jpg");
}

document.getElementsByClassName("gender")[1].onclick = function(){
  if (!isPhotoChanged) changePhoto(this, "female.jpg");
}

function changePhoto(choice, url) {
  var src = document.getElementById("photo").src;
  if ((choice == null || choice.checked == true) && url!= null && src != url) {
    document.getElementById("photo").src = url;
    isPhotoChanged = true;
  }
}

document.getElementById("reset").onclick = function(){
  loadInfo();
  var sc = document.getElementById("scale").children;
  for (let i =0; i<sc.length; i++) sc[i].style.background = "#fff";
  var f = document.getElementsByTagName('input');
  for (let i = 0; i<f.length; i++) f[i].disabled = false;
  scale = 0;
}
