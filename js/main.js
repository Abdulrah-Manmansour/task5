//show box color by click
var icon=document.querySelector(".setting");
var colorBOX=document.querySelector(".colorbox");
icon.addEventListener("click",function(){
colorBOX.classList.toggle("open");
});



///change navbar backgorund on scroll
//selcet nav element
window.addEventListener("scroll",function(){
    var nav=document.getElementById("navbar");
   var listlinks1=document.getElementById("listlinks1");
   if(window.scrollY > 0){
       nav.classList.add("changecolor");
       listlinks1.classList.add("changecolor");
   }
   else{
    nav.classList.remove("changecolor");
    listlinks1.classList.remove("changecolor");
   }
});

//change color when click 

var listcolor=document.querySelectorAll(" .listli");
listcolor.forEach(function(lis){
    
lis.addEventListener("click",function(e){
  document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
});
});
//show navbar 
var links=document.querySelector(".links");
var icon2=document.getElementById("bar");
icon2.addEventListener("click",function(){
links.classList.toggle("show");
});

///======start valitation form===== 
var names=document.getElementById("name"),
pasword=document.getElementById("passowrd"),
email=document.getElementById("email")
message=document.getElementById("textarea")
butoons=document.getElementById("butoonform");

butoons.addEventListener("click",function(e){
e.preventDefault();
if(names.value==''){
  names.classList.add("error");
}
else{
    names.classList.remove("error");
}
if(pasword.value==''){
    pasword.classList.add("error");
  }
  else{
      pasword.classList.remove("error");
  }
  if(email.value==''){
    email.classList.add("error");
  }
  else{
      email.classList.remove("error");
  }
  if(message.value==''){
    message.classList.add("error");
  }
  else{
      message.classList.remove("error");
  }
});