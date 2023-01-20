import Navbar from "./components/Navbar";
import Donations from "./pages/donations/Donations";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Phasetest from "./pages/phasetest/Phasetest";
import Map from "./pages/map/Map";
import Shop from "./pages/shop/Shop";
import SignIn from "./pages/accounts/signin/SignIn";
import Testkit from "./pages/testkit/Testkit";
import SignUp from "./pages/accounts/signup/SignUp";
import ForgotPassword from "./pages/accounts/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/accounts/forgotpassword/ResetPassword";
import Accounts from "./pages/accounts/Accounts";
import Testkitlog from "./pages/testkit/testkit_log/Testkitlog";
import Overwritetestkitlog from "./pages/testkit/testkit_log/Overwritetestkitlog";
import SignUpAdminlog from "./pages/testkit/testkit_log/Testkitlog";
import OverwriteSignUpAdminlog from "./pages/testkit/testkit_log/Overwritetestkitlog";
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
          <Route path="/accounts/signup" element={<SignUp />} />
          <Route path="/accounts/password/reset" element={<ForgotPassword />} />
          <Route
            path="/accounts/password/reset/confirm"
            element={<ResetPassword />}
          />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/phasetest" element={<Phasetest />} />
          <Route path="/testkitlog" element={<Testkitlog />} />
          <Route exact path="/testkitlog/overwrite/:test_Kit_ID" element={<Overwritetestkitlog />} />
          <Route path="/SignUpAdminlog" element={<SignUpAdminlog />} />
          <Route exact path="/SignUpAdminlog/overwrite/:user_ID" element={<OverwriteSignUpAdminlog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
