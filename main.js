// Colors variables
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// Function
const changeColor = (e) => {
  //   console.log(e.keyCode, e.which);

  //   if (e.keyCode === 38) {
  //     red += 5;
  //     green += 5;
  //     blue += 5;
  //   } else if (e.keyCode === 40) {
  //     red -= 5;
  //     green -= 5;
  //     blue -= 5;
  //   }

  switch (e.keyCode) {
    case 38:
      red += 5;
      green += 5;
      blue += 5;
      break;
    case 40:
      red -= 5;
      green -= 5;
      blue -= 5;
      break;
    default:
      console.log(`wrong key`);
  }

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

// Listener
window.addEventListener(`keydown`, changeColor);
