import "./item_frame_style.css";
import water from "./shop_assets/water_bottle.PNG";
import { Link } from "react-router-dom";
export default function shope_item() {
    return(
      <div>
        <div className="page_item">

          
          <div className="back">
            <Link to="/shop"className="back_button">{"<"}</Link>
          </div>
          <center>
            
            <img alt="water" className="item_page_img" src={water}/>
          </center>
          
          <div>
            <h1 className="title item_page_text">AquaPure Sport Bottle</h1>
            <h2 className="price item_page_text">£19.99</h2>
            <h3 className="desc item_page_text">COLOUR:</h3>
            <button className="add item_page_text" type="button">Add to Cart</button>
          </div>

        </div>
      </div>
    );
  }
  