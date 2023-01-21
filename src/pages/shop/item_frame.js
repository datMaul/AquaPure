import "./item_frame_style.css";
import water from "./shop_assets/water_bottle.PNG";
export default function shope_item() {
    return(
      <div>
        <div className="page">
          <center>
            <img alt="water" className="item_page_img" src={water}/>
          </center>
        
          <div>
            <h1>AquaPure Sport Bottle</h1>
            <h2>£19.99</h2>
            <h3>This bottle was made from china</h3>
          </div>
        </div>
      </div>
    );
  }
  