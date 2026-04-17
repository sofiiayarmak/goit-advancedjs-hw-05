import { concatenate } from "./concatenation";
const result = concatenate("Hello, ", "TypeScript!");
console.log(result);
const root = document.getElementById("root");
if (root) {
  root.textContent = result;
}
