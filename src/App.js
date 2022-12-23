import Navbar from "./components/Navbar";
import Donations from "./pages/donations/Donations";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";
import Shop from "./pages/shop/Shop";
import SignIn from "./pages/signin/SignIn";
import Testkit from "./pages/testkit/Testkit";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/game" element={<Game />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/map" element={<Map />} />
          <Route path="/testkit" element={<Testkit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
