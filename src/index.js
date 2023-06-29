import './less/index.less'

//   * [X] `mouseover`
//   * [X] `mouseleave`
//   * [X] `click`
//   * [x] `keydown`
//   * [x] `load`
//   * [x] `dblclick`
//   * [ ] `wheel` -
//   * [ ] `focus` -
//   * [ ] `resize`
//   * [ ] `scroll` - 
//   * [ ] `select`
//   * [ ] `drag / drop`
// Your code goes here!

// 1 LOAD ---
// window.addEventListener('load', () => {
//     alert('Keep your hands AND feet inside the bus at all times!')
// })

// 2 CLICK ---
const btnList = document.querySelectorAll(".btn");
btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.textContent = "Welcome Aboard!";
  });
});


// 3 DBLCLICK
document.body.addEventListener('dblclick', evt => {
    evt.target.classList.toggle('mirror')
})

// 4 KEY DOWN
window.addEventListener("keydown", (evt) => {
    if (evt.key == "b") {
        document.body.innerHTML = "<h1>WELCOME TO THE BUS ZONE</h1>";
        document.body.style.backgroundColor = "gold";
        document.body.style.color = "white";
        document.body.style.fontSize = "24px";
        document.body.style.textAlign = "center"
        document.body.style.marginTop = '100px'  
    }
});

// 5,6 MOUSEOVER / MOUSELEAVE
const busImage = document.querySelector('img[alt="bus in the sand"]');
busImage.addEventListener('mouseover', evt => {
    console.log("WELCOME ABOARD")
})
busImage.addEventListener('mouseleave', evt => {
    console.log('NO WAIT COME BACK')
})

// 7 RESIZE
window.addEventListener("resize", () => {
  console.log("Window resized!");
  console.log("New window width:", window.innerWidth);
  console.log("New window height:", window.innerHeight);
});

