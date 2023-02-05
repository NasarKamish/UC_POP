// background click

let popup = document.querySelector(`.popup`);

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    console.log("HI");
  }
});

// change style

let styles = ["def", "shade"];

function change(type) {
  styles.forEach((s) => {
    popup.classList.remove(s);
  });
  popup.classList.add(type);
}
