// Event Delegation

const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "Java") {
      e.target.style.backgroundColor = "aqua";
    } else {
      e.target.style.backgroundColor = "blue";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "DotNet";
  list.appendChild(newElement);
}

// Event Propagation

