import "./Shop_Style.css";
import water from "./shop_assets/water_bottle.PNG";
export default function Shop() {
  

  


  return (
    <div>
      <div className="item_list">
        <nav>
          <ul>
            <li>
              <a href=".\item_pages\item_frame.js"><img alt="water" className="item_img" src={water}></img></a>
              <p className="item_info">AquaPure Sport Bottle Blue</p>
              <button id="bottle" className="item_quick_add" type="button">Quick Add</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}






