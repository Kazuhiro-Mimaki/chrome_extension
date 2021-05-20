const saveLead = () => {
  alert("Button clicked!");
};

let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
  alert("Button clicked from addEventListener");
});
