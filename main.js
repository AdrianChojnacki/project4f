// Colors variables
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// Function
const changeColor = (e) => {
  //   console.log(e.keyCode, e.which);

  //   if (e.keyCode === 38) {
  //     red < 255 ? (red += 5) : red;
  //     green < 255 ? (green += 5) : green;
  //     blue < 255 ? (blue += 5) : blue;
  //   } else if (e.keyCode === 40) {
  //     red > 0 ? (red -= 5) : red;
  //     green > 0 ? (green -= 5) : green;
  //     blue > 0 ? (blue -= 5) : blue;
  //   } else {
  //     console.log(`wrong key`);
  //   }

  // 81, 87 - 65, 83 - 90, 88
  switch (e.keyCode) {
    case 38:
      red < 255 ? (red += 5) : red;
      green < 255 ? (green += 5) : green;
      blue < 255 ? (blue += 5) : blue;
      break;
    case 40:
      red > 0 ? (red -= 5) : red;
      green > 0 ? (green -= 5) : green;
      blue > 0 ? (blue -= 5) : blue;
      break;
    case 81:
      red > 0 ? (red -= 5) : red;
      break;
    case 87:
      red < 255 ? (red += 5) : red;
      break;
    case 65:
      green > 0 ? (green -= 5) : green;
      break;
    case 83:
      green < 255 ? (green += 5) : green;
      break;
    case 90:
      blue > 0 ? (blue -= 5) : blue;
      break;
    case 88:
      blue < 255 ? (blue += 5) : blue;
      break;
    default:
      console.log(`wrong key`);
  }

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

// Listener
window.addEventListener(`keydown`, changeColor);
