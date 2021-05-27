import "./App.css";
import InTextLink from "./components/InTextLink/IntextLink";
import Wysiwyg from "./components/Wysiwyg/Wysiwyg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sandbox</h1>
        <div style={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
          <InTextLink />
          <Wysiwyg />
        </div>
      </header>
    </div>
  );
}

export default App;
