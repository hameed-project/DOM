// getElementsByTagName
document.getElementsByTagName("li");
HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByTagName("li")[2].style.color="red";
"red"
document.getElementsByTagName("li")[2].innerHTML="red";
"red"

// getElementsByClassName
document.getElementsByClassName("btn")[0].style.color="green";
"green"

// getElementById
document.getElementById("title").innerHTML = "World";
"World"

// querySelector

document.querySelector("h1");
<h1 id=​"title">​World​</h1>​

document.querySelector("#title");
<h1 id=​"title">​World​</h1>​

document.querySelector(".btn");
<button class=​"btn" style=​":​active color:​red;​">​Click Me​</button>​

document.querySelector("a");

document.querySelector("li a");

document.querySelector("li.list");

document.querySelector("#lists li");

document.querySelectorAll("#lists li");

document.querySelector(".list a").style.color = "red";
"red"

document.querySelector(".list").style.color = "red";
"red"

document.querySelector("li").style.color = "red";
"red"

document.querySelector("li").style.color = "red";
"red"