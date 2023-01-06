import "./Shop_Style.css"
export default function Shop() {
  

  return (
    <div>
      <div id="overlay">
        <div id="checkout">
          <button className="checkout_exit" onClick={cart_hide()}>X</button>
        </div>
      </div>



      <div className="item_list">
        <nav>
          <ul>
            <li>
              <a href=".\item_pages\item_frame.js"><img className="item_img" src="D:\AquaPure\src\pages\shop\shop_assets\water_bottle.PNG"></img></a>
              <p className="item_info">AquaPure Sport Bottle Blue</p>
              <button id="bottle" className="item_quick_add" type="button" onClick={add_cart()}>Quick Add</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

