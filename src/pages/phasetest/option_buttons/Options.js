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
    { text: "Contact Admin", handler: props.actionProvider.Admin, id: 6 },
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
      {" "}
      <div className="options-container">{buttonsMarkup}</div>
      {/* <div className="options-container">{buttonsMarkup1}</div> */}
    </>
  );
};

export default Options;
/*
const options1 = [
  {
    text: "Water Test Kits",
    handler: props.actionProvider.handleJavascriptQuiz,
    url: "http://localhost:3010/map",
    id: 1,
  },
  { text: "Python", handler: () => {}, id: 2 },
  { text: "Golang", handler: () => {}, id: 3 },
];

const buttonsMarkup1 = options.map((options) => (
  <button key={options.id} onClick={options.handler} className="options-button">
    {options.text}
  </button>
));
const options1 = [
  {
    text: "Water Test Kits",
    handler: props.actionProvider.handleJavascriptQuiz,
    url: "http://localhost:3010/map",
    id: 1,
  },
  { text: "Python", handler: () => {}, id: 2 },
  { text: "Golang", handler: () => {}, id: 3 },
];

const buttonsMarkup1 = options.map((options) => (
  <button key={options.id} onClick={options.handler} className="options-button">
    {options.text}
  </button>
));
*/
