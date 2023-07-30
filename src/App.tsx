import "./App.css";
import LandingPage from "./Components/LandingPage";
import NoteState from "./Context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <LandingPage />
      </NoteState>
    </>
  );
}

export default App;
