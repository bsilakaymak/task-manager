import Navbar from "./components/Global/Navbar";
import Routes from "./components/Routes";
import { AppState } from "./context";

function App() {
  return (
    <div className="App">
      <AppState>
        <Routes>
          <Navbar />
        </Routes>
      </AppState>
    </div>
  );
}

export default App;
