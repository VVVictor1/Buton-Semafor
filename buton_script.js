
let buton = document.getElementById("btnn");
let colors = ["btn-danger","btn-warning","btn-success"];

let index = 0;

  function changeColor() {
    buton.classList.remove(colors[index]);
    index = (index + 1) % colors.length;
    buton.classList.add(colors[index]);
    
  }
 
setInterval(changeColor,10000);