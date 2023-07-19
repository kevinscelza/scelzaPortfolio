import "./assets/sass/main.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import LivePage from "./screens/LivePage";

function App() {
  return (
 <Router>

      <div className="App">
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/live" element={<LivePage />} />
      </Routes>
      </div>
 </Router>
        
  );
}

export default App;
