
function toggleImage(){
    let image = document.getElementById("image");
    let button = document.getElementById("toggleButton");

    if (image.style.visibility === "hidden") {
    image.style.visibility="visible"
      button.innerText = "Hide";

    } else {
     image.style.visibility="hidden"
      button.innerText = "Show";
    }
}

// ------------ for styling ---------------------
// let bcont = document.getElementsByTagName("div")
// console.log(bcont);
// let button=document.getElementById("toggleButton");
// bcont[0].className="bcont"
// button.className="button"
// console.log(button.innerText);

// size.style.cssText=` height:150px `;