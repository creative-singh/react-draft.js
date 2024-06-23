import "./App.css";
import Button from "./Components/Button";
import CustEditor from "./Components/CustEditor";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div style={{ width: "80%", textAlign: "right" }}>
          <Button />
        </div>

        <CustEditor />
      </header>
    </div>
  );
}

export default App;
