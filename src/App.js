import "./App.css";
import Header from "./Components/Header";
import NoteState from "./Context/Notes/NoteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Header />
      </NoteState>
    </div>
  );
}

export default App;
