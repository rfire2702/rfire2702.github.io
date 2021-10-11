function ShowAndHide(dev) 
{
  var x = document.getElementsByTagName("section");
  var y = document.getElementsByClassName("navbar")[0].childNodes;
  for (let j = 1; j < y.length; j+=2) {
    console.log(y[j].childNodes[0].innerHTML.toLowerCase());
    if (y[j].childNodes[0].innerHTML.toLowerCase() === dev)
      y[j].className = "header_active";
    else
      y[j].className = "header";
  }
  console.log("yes");
  for (let i = 0; i < x.length; i++) 
  {
    if(x[i].id == dev)
    {
      x[i].style.display = 'block';
    }
    else
    {
      x[i].style.display = 'none';
    }
  }
}
  
  function move(){
    var f = document.querySelector('.navbar');
    var b = document.querySelector('.burger');
    f.classList.toggle("navbar-active");
    b.classList.toggle("toggle");
  }
  
  function updateclock(){
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var ho = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";
  
    if(ho == 0){
      hou = 12;
    }
  
    if(ho > 12){
      ho = ho - 12;
      pe = "PM";
    }
  
  function changenumber(variable){
    var myNumber = variable;
    var formattedNumber = ("0" + myNumber).slice(-2);
    return formattedNumber
  }
  
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var week = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thurs' , 'Fri' , 'Sat' , 'Sun'];
    var ids = ["day", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname] , months[mo] , changenumber(dnum) , yr , changenumber(ho) , changenumber(min) , changenumber(sec) , pe];
    for(var i = 0 ; i < ids.length ; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
  
  function initclock(){
    updateclock();
    window.setInterval("updateclock()" , 1);
  }

 /* var coll = document.getElementsByClassName("collapsible");
  var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}*/

function collapsiblebar(dev)
{
  var coll = document.getElementById(dev);
  coll.classList.toggle("active");
  var dev2 = dev + "para";
  if(document.getElementById(dev2).style.display === "block")
  {
    document.getElementById(dev2).style.display = "none";
    coll.setAttribute("data-button-icon", "+");
  }
  else
  {
    document.getElementById(dev2).style.display = "block";
    coll.setAttribute("data-button-icon", "-");
  }
 }