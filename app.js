// ex 1
document.getElementsByTagName("body");
document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");
document.getElementById('first-paragraph').classList.remove('bg-lime', 'gray');
document.getElementById('first-paragraph').classList.add('aqua');

var silver = document.getElementsByClassName('bg-silver');
for (var i = 0; i < silver.length; i++) {
  silver[i].classList.add('bg-teal');
  silver[i].classList.remove('bg-silver');

}
let bq = document.getElementsByTagName('blockquote');
for (var i = 0; i < bq.length; i++) {
  bq[i].classList.add('bg-white');
}

// Ex 2
document.querySelector('#my-table').classList.add('bg-purple');

var paragraphs = document.querySelectorAll('.container p');
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('shadow');
}
// ex 3

let stijl = document.getElementsByTagName('pre');
for (var i = 0; i < stijl.length; i++) {
  stijl[i].style.color='yellow';
  stijl[i].style.backgroundColor='red';
  stijl[i].style.borderTop='3px solid red';
  stijl[i].style.borderBottom='3px solid red';
}

document.querySelector('h3').innerHTML="<em>Italic title ! yeah !</em>";
document.querySelector('h2').innerHTML = "<strong>HTML doesn't work !</strong>";

let LI = document.querySelector("ul").appendChild(document.createElement("LI"));
LI.innerHTML="My best friend is a <a href='http://www.google.com'>Google</a>";

document.querySelector("ul li a:link").style.color="blue";

//ex5
let OL = document.querySelector("ol");
let OLCh = OL.children;
iEnd = OLCh.length;
for (var i = 0; i < iEnd.length; i++) {
  OL.removeChild(OLCh[0]);
  }

  let array =["Silent Teacher", "Code Monkey", "CodeCombat"]
  for (var i = 0; i < array.length; i++) {
    let spaceless=array[i].replace(" ","");
    LI=document.querySelector("ul").appendChild(document.createElement("LI"));
    LI.innerHTML=("<a href='http://www."+ spaceless + ".com'>"+array[i]+"</a>");
  }
