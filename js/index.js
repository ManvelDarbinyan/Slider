let images = ["image1.png", "image2.png", "image3.png", "image4.png"];

let container = document.getElementById("container");
container.style.background = `url(./images/${images[0]})`;

let arrows = document.querySelectorAll(".arrow");

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = images.length - 1;
      }
      container.style.background = `url(./images/${images[i]})`;
    } else if (e.target.id === "right") {
      i++;
      if (i >= images.length) {
        i = 0;
      }
      container.style.background = `url(./images/${images[i]})`;
    }
  });
});
