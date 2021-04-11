
/**************************************** dont write outside*************************************/
var myNav =document.querySelector("#header nav");
var AllItems= document.querySelectorAll(".why-choose-nav li");
var circle=document.querySelectorAll(".dot1-af");
var pre = document.querySelector("#pre")
var next = document.querySelector("#next");
var item1=document.querySelector(".item-hide  ")
var item2=document.querySelector(".show-item ")
var options=document.querySelectorAll(".option")
window.onscroll = function () { 
  
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");  
  }
};
var divList = document.querySelectorAll("#divList .why-choose-info")
function displayDiv(){
  for (var i = 0; i < divList.length; i++){
  divList[i].style.display="none";
  }
}
function active(){
for (var i = 0; i < AllItems.length; i++) {
  AllItems[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  })
}
}
AllItems.forEach(function (item) {
  item.onclick = function () {
    active()
    displayDiv()
  var myHref = item.childNodes[1].getAttribute("href");
  document.querySelector(myHref).style.display = "block";
  };
});

pre.addEventListener('click',displayItempre);
function displayItempre(){
  // displayDivitem()
  item1.style.display="block";
  item2.style.display="none";
  
}
next.addEventListener('click',displayItemnext);
function displayItemnext(){
  // displayDivitem()
  // item2.style.display="block";
  item1.style.display="none";
}
$(function () {
  $(window).scroll(function() {
      if ($(this).scrollTop() - 200 > 0) {
          $('#to-top').stop().slideDown('fast'); // show the button
      } else {
          $('#to-top').stop().slideUp('fast'); // hide the button
      }
  });
});

$(function () {
  // previous detection logic

  $("#to-top").on("click", function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1000);
  });
});
