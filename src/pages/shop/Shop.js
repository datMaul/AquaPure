import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div>    
      <div className="page">
        <h1>AquaPure Shop</h1>
        <nav>
          <ul className="item_list">
            <li className="item">
              <Link to="/item"><img alt="water" className="item_img" src={water}/></Link>
              <p className="item_text">AquaPure Sport Bottle Blue</p>
              <p className="item_text">19.99</p>
              <button id="bottle" className="item_quick_add" type="button">Quick Add</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}






