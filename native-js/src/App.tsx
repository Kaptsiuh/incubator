import { splitIntoWords } from "./01-hello-test/01";
// import "./App.css";

const sentense = "Hello World";
const result = splitIntoWords(sentense);
console.log(result[0] === "hello");
console.log(result[1] === "my");
console.log(result[2] === "friends");

function App() {
  return <div></div>;
}

export default App;
