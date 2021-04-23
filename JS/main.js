let i = 0;
let txt = 'Developer'; 
let speed = 150;
function typingeffect() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typingeffect, speed);
  }
}