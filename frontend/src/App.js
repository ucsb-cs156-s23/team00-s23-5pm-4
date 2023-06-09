import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import CupertinoPage from "main/pages/CupertinoPage";
import SanFranciscoPage from "main/pages/SanFranciscoPage";
import ZzyzxPage from "main/pages/ZzyzxPage";
import SantaCruzPage from "main/pages/SantaCruzPage";
import SanDiegoPage from "main/pages/SanDiegoPage";
import NewYorkPage from "main/pages/NewYorkPage";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter basename="/team00-s23-5pm-4">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/Cupertino" element={<CupertinoPage />} />
        <Route exact path="/towns/SanFrancisco" element={<SanFranciscoPage />} />
        <Route exact path="/towns/Zzyzx" element={<ZzyzxPage />} />
        <Route exact path="/towns/SantaCruz" element={<SantaCruzPage />} />
        <Route exact path="/towns/SanDiego" element={<SanDiegoPage />} />
        <Route exact path="towns/NewYork" element={<NewYorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
