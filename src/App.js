import "./App.css";
import beki from "./utilities/Default";
import {
  carModel as model,
  modelCode as code,
  carEngine as engine,
} from "./utilities/Named";

function App() {
  return (
    <div className="App">
      <p>Default export (car brand): {beki.brand}</p>
      <p>Named export (car description): {`${model}, ${code}, ${engine}`}</p>
    </div>
  );
}

export default App;
