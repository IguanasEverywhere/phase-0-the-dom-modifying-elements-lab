// Write your code here!
const mainElement = document.querySelector("#main");
mainElement.remove();

let newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = 'Scott is the champion';