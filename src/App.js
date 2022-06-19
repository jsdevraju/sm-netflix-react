import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import NewMovie from "./page/newMovie/NewMovie";
import Series from "./page/series/Series";
import Cartoons from "./page/cartoons/Cartoons";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <div className="container mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewMovie />} />
            <Route path="/series" element={<Series />} />
            <Route path="/cartoons" element={<Cartoons />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
