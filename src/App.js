import "./assets/sass/main.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import LivePage from "./screens/LivePage";
import CreatePage from "./screens/CreatePage";
import ArtGallery from "./screens/ArtGallery";
import TattooGallery from "./screens/TattooGallery";
import WoodGallery from "./screens/WoodGallery";

function App() {
  return (
 <Router>

      <div className="App">
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/art" element={<ArtGallery />} />
        <Route path="/tattoo" element={<TattooGallery />} />
        <Route path="/wood" element={<WoodGallery />} />
      </Routes>
      </div>
 </Router>
        
  );
}

export default App;
