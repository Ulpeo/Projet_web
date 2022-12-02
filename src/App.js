import Home from "./Home";
import Settings from "./Settings";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
   
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/settings" element={<Settings />}/>
      </Routes>
    
  );
}

export default App;