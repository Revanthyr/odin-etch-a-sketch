let gridSize = 16*16;
let div = "";
const body = document.querySelector("body");
const container = document.querySelector(".container");
for (let i = gridSize;i>0;--i){
     div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
    
}

let allDivs = document.querySelectorAll(".square");
// allDivs.forEach(callback(value,index,array));
  
  allDivs.forEach(item => item.addEventListener("mouseover",function(e){
    item.classList.add("targeted");

  }));

   

console.log(allDivs);
