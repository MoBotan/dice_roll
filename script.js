const container = document.querySelector("#container");
const rollBtn = document.querySelector("#roll");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const template = document.querySelector("template");
const total = document.querySelector("#total");
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
// Calculate sum of all dice rolls and display
rollBtn.onclick = () => {
  const dice = document.querySelectorAll(".die");
  let sumAllDie = 0;

  dice.forEach((die) => {
    const randomNumber = Math.floor(Math.random() * 6); // number between 0-5
    const [x, y] = numbers[randomNumber];
    roll(die, x, y);
    sumAllDie += randomNumber + 1;
  });

  total.textContent = sumAllDie;
};

// Add a new die when 'add' button is clicked
addBtn.onclick = () => {
  const die = template.content.cloneNode(true);
  container.append(die);
};

// Remove last die when 'remove' button clicked
removeBtn.onclick = () => {
  const die = container.querySelector(".die");
  if (die) {
    container.removeChild(die);
  }
};

// Animate a from 0deg to 360deg to the final die face
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
