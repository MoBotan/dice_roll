const cube = document.getElementById("cube");
const button = document.querySelector("button");
let coordinates = { x: 0, y: 0, z: 0 };
const numbers = [
  [90, 0], //  1
  [-90, 0], // 2
  [0, 270], // 3
  [0, 90], //  4
  [0, 180], // 5
  [0, 0], //   6
];

button.onclick = () => {
  const randomNumber = Math.floor(Math.random() * 6); // number between 0-6
  roll(numbers[randomNumber]);
};

function roll([x, y]) {
  cube.animate(
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
