const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colour = document.querySelector(".color");

btn.addEventListener('click', function() {
    // get random number from hex
    const randomHex = createHex();
    console.log(randomHex);
    document.body.style.backgroundColor = randomHex;
    btn.style.backgroundColor = randomHex;
    colour.textContent = randomHex;
});

function createHex() {
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    hexNumber += hex[createRandomNumber()];
  };
  return hexNumber;
};

function createRandomNumber() {
  return Math.floor(Math.random() * hex.length);
};