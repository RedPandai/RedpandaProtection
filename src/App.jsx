import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Donation from "./components/pages/Donation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import GetInvolvedPage from "./components/pages/GetInvolvedPage";
import Homepage from "./components/pages/Homepage";
import DonationDetail from "./components/Donations/DonationDetail";
import { Events } from "./components/pages/Events";
import { About } from "./components/pages/About";
import { Success } from "./components/pages/Success";
import { Researchpage } from "./components/pages/Researchpage";
import Education from "./components/pages/Education";
import { Learning } from "./components/pages/Learning";

function App() {
  const [panda, setPanda] = useState("");
  const handlePanda = (pandaName) => {
    setPanda(pandaName);
  };
  return (
    <div className="flex flex-col h-screen bg-Hero bg-cover md:bg-top bg-center w-full">
      <Navbar />
      <main className="flex-1 flex pt-32">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/getinvolved" element={<GetInvolvedPage />}></Route>
          <Route path="/getinvolved/events" element={<Events />}></Route>
          <Route path="/research" element={<Researchpage />}></Route>
          <Route path="/research/education" element={<Education />}></Route>
          <Route path="/learning" element={<Learning />}></Route>
          <Route path="/contact" element={<About />}></Route>
          <Route path="/donation" element={<Donation />}></Route>
          <Route
            path="/donation/:id"
            element={<DonationDetail handlePanda={handlePanda} />}
          ></Route>
          <Route
            path="/donation/:id/success"
            element={<Success panda={panda} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
