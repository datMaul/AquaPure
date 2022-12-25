import Navbar from "./components/Navbar";
import Donations from "./pages/donations/Donations";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";
import Shop from "./pages/shop/Shop";
import SignIn from "./pages/accounts/signin/SignIn";
import Testkit from "./pages/testkit/Testkit";
<<<<<<< HEAD
import SignUp from "./pages/accounts/signup/SignUp";
import ForgotPassword from "./pages/accounts/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/accounts/forgotpassword/ResetPassword";
import Accounts from "./pages/accounts/Accounts";
=======
>>>>>>> parent of 267dd81 (Sign In - Sign Up - Forgot Password)
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
          <Route path="/accounts/login" element={<SignIn />} />
          <Route path="/map" element={<Map />} />
          <Route path="/testkit" element={<Testkit />} />
<<<<<<< HEAD
          <Route path="/accounts/signup" element={<SignUp />} />
          <Route path="/accounts/password/reset" element={<ForgotPassword />} />
          <Route path="/accounts/password/reset/confirm" element={<ResetPassword />} />
          <Route path="/accounts" element={<Accounts />} />
=======
>>>>>>> parent of 267dd81 (Sign In - Sign Up - Forgot Password)
        </Routes>
      </div>
    </>
  );
}

export default App;
