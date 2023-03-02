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
import PasswordSettings from "./pages/accounts/accountPageSections/PasswordSettings";
import PurchaseHistory from "./pages/accounts/accountPageSections/purchasehistory/PurchaseHistory";
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
import Cart from "./pages/accounts/cart/MainCartPage";
import Account from "./pages/accounts/accountPageSections/Accounts";
import PurchaseHistoryTestkit from "./pages/accounts/accountPageSections/purchasehistory/testkitpurchasehistory/PurchaseHistoryTestkit";

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
          <Route path="/donations" element={<Donations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/game" element={<Game />} />
          <Route path="/accounts/login" element={<SignIn />} />
          <Route path="/map" element={<Map />} />
          <Route path="/testkit" element={<Testkit />} />
          <Route path="/accounts/signup" element={<SignUp />} />
          <Route path="/accounts" element={<Account />} />
          <Route
            path="/accounts/passwordSettings"
            element={<PasswordSettings />}
          />
          <Route
            path="/accounts/purchaseHistory"
            element={<PurchaseHistory />}
          />
          <Route path="/accounts/loyaltyPoints" element={<LoyaltyPoints />} />
          <Route path="/phasetest" element={<Phasetest />} />
          {accountType === "Admin" ? (
            <Route path="/admin/testkitlog" element={<Testkitlog />} />
          ) : null}
          {accountType === "Admin" ? (
            <Route
              exact
              path="/admin/testkitlog/overwrite/:test_Kit_ID"
              element={<Overwritetestkitlog />}
            />
          ) : null}
          <Route path="/testkitpurchase" element={<PurchaseHistoryTestkit />} />

          {accountType === "Admin" ? (
            <Route path="/admin" element={<AdminPage />} />
          ) : null}
          {accountType === "Admin" ? (
            <Route
              path="admin/signuplog/overwrite/:user_ID"
              element={<Overwritesignupadminlog />}
            />
          ) : null}
          {accountType === "Admin" ? (
            <Route path="/admin/signuplog" element={<Signupadminlog />} />
          ) : null}

          <Route path="/cart" element={<Cart />} />
          <Route path="/termsAndConditions" element={<TermsAndContitions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/accounts/testkitEntry" element={<TestkitEntry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
