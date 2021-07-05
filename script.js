const container = document.querySelector("#container");
const dice = document.querySelectorAll(".die");
const rollBtn = document.querySelector("#roll");
const addBtn = document.querySelector("#add");
const template = document.querySelector("template");
let coordinates = { x: 0, y: 0, z: 0 };
const numbers = [
  [90, 0], //  1
  [-90, 0], // 2
  [0, 270], // 3
  [0, 90], //  4
  [0, 180], // 5
  [0, 0], //   6
];

// Roll all dice when 'roll' button is clicked
rollBtn.onclick = () => {
  dice.forEach((die) => {
    const [x, y] = numbers[randomNumber()];
    roll(die, x, y);
  });
};

// Add a new die when 'add' button is clicked
addBtn.onclick = () => {
  const die = template.content.cloneNode(true);
};

function roll(die, x, y) {
  die.animate(
    [
      { transform: "rotateX(0deg) rotateY(0deg)" },
      { transform: "rotateX(360deg) rotateY(360deg)" },
      { transform: `rotateX(${x}deg) rotateY(${y}deg)` }, // final face shown
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.5, 1, 1, 1)",
      fill: "forwards",
    }
  );
}

// Generate a random number between 0-5
function randomNumber() {
  return Math.floor(Math.random() * 6);
}
