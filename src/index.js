import './less/index.less'

//   * [ ] `mouseover`
//   * [x] `keydown`
//   * [ ] `wheel`
//   * [x] `load`
//   * [ ] `focus`
//   * [ ] `resize`
//   * [ ] `scroll`
//   * [ ] `select`
//   * [ ] `dblclick`
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
    event.target.textContent.toggle = "Welcome Aboard!";
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
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.body.style.fontSize = "24px";
        document.body.style.textAlign = "center"
        document.body.style.marginTop = '100px'  
    }
});

// 5 MOUSEOVER / MOUSELEAVE