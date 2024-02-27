let sizebutton = document.body.querySelector(".sizeButton");
let list = document.body.querySelector("ol");
let fontbutton = document.body.querySelector(".fontButton");

let fontsize = [20, 24, 28, 32, 16];
let index = 0;
sizebutton.onclick = () => {
  let newsize = fontsize[index];
  list.style.fontSize = newsize + "px";

  index = (index + 1) % fontsize.length; 
};

let fontFamily = ["Roboto", "Mansalva", "Grenze", "Turret Road", "Courier New"];
fontbutton.onclick = () => {
  let newFont = fontFamily[index];
  list.style.fontFamily = newFont;
  
  index = (index + 1) % fontFamily.length;
};
