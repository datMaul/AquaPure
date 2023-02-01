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
// import ForgotPassword from "./pages/accounts/forgotpassword/ForgotPassword";
// import ResetPassword from "./pages/accounts/forgotpassword/ResetPassword";
import AccountsSettings from "./pages/accounts/accountPageSections/AccountsSettings";
import PasswordSettings from "./pages/accounts/accountPageSections/PasswordSettings";
import PurchaseHistory from "./pages/accounts/accountPageSections/PurchaseHistory";
import LoyaltyPoints from "./pages/accounts/accountPageSections/LoyaltyPoints";
import Testkitlog from "./pages/admin/TestKit_Admin/Testkitlog";
import Overwritetestkitlog from "./pages/admin/TestKit_Admin/Overwritetestkitlog";
import Signupadminlog from "./pages/admin/User_Admin/Signupadminlog";
import Overwritesignupadminlog from "./pages/admin/User_Admin/Overwritesignuplog";
import AdminPage from "./pages/admin/AdminPage";
import TermsAndContitions from "./pages/accounts/signup/TextFiles/TermsAndConditions";
import PrivacyPolicy from "./pages/accounts/signup/TextFiles/PrivacyPolicy";
import TestkitEntry from "./pages/accounts/accountPageSections/TestkitEntry";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const location = useLocation();

  const [accountType, setAccountType] = useState(null);

  useEffect(() => {
    setAccountType(localStorage.getItem("accountType"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [location.pathname]);

  useEffect(() => {
    setScrollPos(window.pageYOffset);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsAndConditions" element={<TermsAndContitions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

          <Route path="/donations" element={<Donations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/game" element={<Game />} />
          <Route path="/map" element={<Map />} />
          <Route path="/testkit" element={<Testkit />} />

          <Route path="/accounts/login" element={<SignIn />} />
          <Route path="/accounts/signup" element={<SignUp />} />

          <Route path="/accounts" element={<AccountsSettings />} />
          <Route
            path="/accounts/passwordSettings"
            element={<PasswordSettings />}
          />
          <Route path="/accounts/testkitEntry" element={<TestkitEntry />} />
          <Route
            path="/accounts/purchaseHistory"
            element={<PurchaseHistory />}
          />
          <Route path="/accounts/loyaltyPoints" element={<LoyaltyPoints />} />
          <Route path="/phasetest" element={<Phasetest />} />

          {accountType === "Admin" && (
            <Route path="/admin" element={<AdminPage />} />
          )}
          {accountType === "Admin" && (
            <Route path="/admin/signuplog" element={<Signupadminlog />} />
          )}
          {accountType === "Admin" && (
            <Route
              path="admin/signuplog/overwrite/:user_ID"
              element={<Overwritesignupadminlog />}
            />
          )}
          {accountType === "Admin" && (
            <Route path="/admin/testkitlog" element={<Testkitlog />} />
          )}
          {accountType === "Admin" && (
            <Route
              exact
              path="/admin/testkitlog/overwrite/:test_Kit_ID"
              element={<Overwritetestkitlog />}
            />
          )}

          {/* <Route path="/accounts/password/reset" element={<ForgotPassword />} />
          <Route
            path="/accounts/password/reset/confirm"
            element={<ResetPassword />}
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
