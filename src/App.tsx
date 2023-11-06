import FlightInquiryPage from "./modules/FlightInquiryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightListPage from "./modules/FlightListPage";
import CabinPage from "./modules/Cabin Page";
import Gonna from "./modules/Gonna";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlightInquiryPage />} />
        <Route path="/flight-list" element={<FlightListPage />} />
        <Route path="/cabin-page" element={<CabinPage />} />
        <Route path="/cabin-page/sucess" element={<Gonna />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
