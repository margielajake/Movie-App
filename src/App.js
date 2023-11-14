import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Description from "./Components/Description";
//import EffectHook from './Components/effectHook';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:title" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
