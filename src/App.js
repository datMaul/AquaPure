import Navbar from "./components/Navbar";
import Donations from "./pages/donations/Donations";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Phasetest from "./pages/phasetest/Phasetest";
import Map from "./pages/map/Map";
import SignIn from "./pages/accounts/signin/SignIn";
import Testkit from "./pages/testkit/Testkit";
import SignUp from "./pages/accounts/signup/SignUp";
import ForgotPassword from "./pages/accounts/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/accounts/forgotpassword/ResetPassword";
import Accounts from "./pages/accounts/Accounts";
import Item_page from "./pages/shop/item_pages/item_frame";
import Shop from "./pages/shop/Shop";
import Shop_cart from "./pages/shop/shop_cart"
import CheckOut from "./pages/shop/checkout"
import Water_Bottle_page from "./pages/shop/item_pages/water_bottle"
import Tote_bag_page from "./pages/shop/item_pages/tote_bag"
import Bamboo_notebook from "./pages/shop/item_pages/Bamboo_notebook"
import Sticker from "./pages/shop/item_pages/sticker"
import Travel_cup from "./pages/shop/item_pages/travel_cup"
import Shop_purchase from "./pages/shop/purchase_history"


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
          <Route path="/item" element={<Item_page />} />
          <Route path="/shop_cart" element={<Shop_cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/water_bottle" element={<Water_Bottle_page/>}/>
          <Route path="/tote_bag" element={<Tote_bag_page/>}/>
          <Route path="/bamboo" element={<Bamboo_notebook/>}/>
          <Route path="/sticker" element={<Sticker/>}/>
          <Route path="/travel_cup" element={<Travel_cup/>}/>
          <Route path="/shop_purchase" element={<Shop_purchase/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
