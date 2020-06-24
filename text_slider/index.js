let rotates = document.getElementsByClassName("rotate-parent");
let parents = document.getElementsByClassName("rotate-site");


let activeIndexes = {};
function rotateText(i) {
  let prevIndex = activeIndexes[i];
  if (activeIndexes[i] >= rotates[i].children.length - 1) {
    activeIndexes[i] = 0;
  }
  else {
    activeIndexes[i]++;
  }
  let nextIndex = activeIndexes[i] + 1;
  if (nextIndex > rotates[i].children.length - 1) {
    nextIndex = 0;
  }
  rotates[i].children[activeIndexes[i]].style.whiteSpace = "nowrap";
  if (rotates[i].children[activeIndexes[i]].scrollWidth > parents[i].clientWidth) {
    rotates[i].children[activeIndexes[i]].style.whiteSpace = "normal";
    rotates[i].style.width = rotates[i].children[activeIndexes[i]].scrollWidth + "px";
    rotates[i].style.height = rotates[i].children[activeIndexes[i]].scrollHeight + "px"
  }
  else {
    rotates[i].children[activeIndexes[i]].style.whiteSpace = "nowrap";
    rotates[i].style.height = rotates[i].children[activeIndexes[i]].scrollHeight + "px";
    rotates[i].style.width = rotates[i].children[activeIndexes[i]].scrollWidth + "px";
  }
  rotates[i].children[activeIndexes[i]].className = "active-rot";
  rotates[i].children[prevIndex].className = "last-rot";
  rotates[i].children[nextIndex].className = "next-rot";
}

for (let i = 0; i < rotates.length; i++) {
  activeIndexes[i] = 0;
  rotates[i].style.width = 0 + "px";
  let parent = rotates[i];
  parent.children[0].className = "active-rot"
  parent.children[1].className = "next-rot"
  rotates[i].style.width = parents[i].clientWidth + "px";
  rotates[i].children[activeIndexes[i]].style.whiteSpace = "nowrap";
  if (rotates[i].children[0].scrollWidth > parents[i].clientWidth) {
    rotates[i].children[activeIndexes[i]].style.whiteSpace = "normal";
    rotates[i].style.width = parents[i].clientWidth + "px";
    rotates[i].style.height = rotates[i].children[0].scrollHeight + "px";
  }
  else {
    rotates[i].children[activeIndexes[i]].style.whiteSpace = "nowrap";
    rotates[i].style.height = rotates[i].children[0].scrollHeight + "px";
    rotates[i].style.width = rotates[i].children[0].scrollWidth + "px";
  }
  for (let b = 2; b < parent.children.length; b++) {
    parent.children[b].className = "last-rot"
  }
  let timer = setInterval(function () { rotateText(i) }, 2000)
}