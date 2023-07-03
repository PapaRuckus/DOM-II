import './less/index.less'

// Your code goes here!

// 1 LOAD 
window.addEventListener('load', () => {
    alert(`Keep your hands AND feet inside the bus at all times!
        Also try and find the secret key!`)
})

// 2 CLICK 
const btnList = document.querySelectorAll(".btn");
btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.textContent === "Sign Me Up!") {
      event.target.textContent = "Welcome Aboard!";
    } else {
      event.target.textContent = "Sign Me Up!";
    }
  });
});

// 3 DBLCLICK
document.body.addEventListener('dblclick', evt => {
    evt.target.classList.toggle('mirror')
})

// 4 KEY DOWN
window.addEventListener("keydown", (evt) => {
  if (evt.key == "b") {
    document.body.classList.toggle("bus-zone");
  }
});

// 5,6 MOUSEOVER / MOUSELEAVE
const blob = document.querySelector('h2')
const busImage = document.querySelector("header.intro img");

// busImage.onmouseover = function (evt) {
//   blob.textContent = "Travel in Style!";
// };
// busImage.onmouseleave = function (evt) {
//   blob.textContent = "See the World!";
// };


// 7 RESIZE
window.addEventListener("resize", () => {
  console.log("Window resized!");
  console.log("New window width:", window.innerWidth);
  console.log("New window height:", window.innerHeight);
});

// 8 WHEEL
const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("wheel", (event) => {
    const zoomFactor = event.deltaY > 0 ? .9 : 2;
    image.style.transform = `scale(${zoomFactor})`;
    event.preventDefault();
  });
});

// 9 COPY
const heading = document.querySelector('h1')
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        });
});

// 10 CONTEXTMENU
const elements = document.querySelectorAll(".container");

elements.forEach((element) => {
  element.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const currentColor = event.target.style.backgroundColor;
    if (currentColor === "salmon") {
      event.target.style.backgroundColor = "";
    } else {
      event.target.style.backgroundColor = "salmon"; 
    }
  });
});
