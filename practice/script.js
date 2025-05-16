// Create a new div element
const newDiv = document.createElement("div");

// Add some text to the div
newDiv.innerHTML = `<h1 id="hed">hii mr saffu</h1> <button id="but">ClickMe</button>
`;

newDiv.classList = 'div'

// newDiv.classList="demo"
console.log(newDiv);

document.body.appendChild(newDiv);

let but=document.getElementById('but')
console.log(but);

but.addEventListener('click', ()=>{
    newDiv.style.backgroundColor="red"
})