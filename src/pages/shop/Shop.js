import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div>    
      <div className="page">
        <h1 className="shop_title">AquaPure Shop</h1>
        <nav>
          <ul className="item_list">
            <li className="item">
              <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
              <p className="item_title">AquaPure Sport Bottle Blue</p>
              <p className="item_price">19.99</p>
              <button id="bottle" className="item_quick_add item_quick_add1" type="button">Quick Add</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}






