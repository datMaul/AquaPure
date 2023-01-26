import React from "react";
import "./Options.css";
const Options = (props) => {
  const options = [
    {
      text: "Water Test Kits",
      handler: props.actionProvider.WaterTestKits,
      id: 1,
    },
    { text: "Map", handler: props.actionProvider.MapInfo, id: 2 },
    { text: "Shop", handler: props.actionProvider.ShopInfo, id: 3 },
    { text: "Donations", handler: props.actionProvider.Donations, id: 4 },
    { text: "About Us", handler: props.actionProvider.AboutUs, id: 5 },
    { text: "Contact Admin", handler: props.actionProvider.Admin_Contact, id: 6 },
  ];

  const buttonsMarkup = options.map((options) => (
    <button
      key={options.id}
      onClick={options.handler}
      className="options-button"
    >
      {options.text}
    </button>
  ));

  return (
    <>
      <div className="options-container">{buttonsMarkup}</div>
    </>
  );
};

export default Options;
