const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

var count = 0;

increase.addEventListener("click", function() {
  count++;
  counter.textContent = count.toString();
});

decrease.addEventListener("click", function() {
  count--;
  counter.textContent = count.toString();
});

reset.addEventListener("click", function() {
  count = 0;
  counter.textContent = count.toString();
});