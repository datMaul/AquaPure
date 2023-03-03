
import React, {useState} from "react";
import { Link } from "react-router-dom";
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
 
  greet = () => {
    const message = this.createChatBotMessage("Hello There!!");
    this.addMessageToState(message);
  };

  limitKnowledge = () => {
    const message = this.createChatBotMessage(
      "Sorry, My responses are limited. lets try that again!"
    );
    this.addMessageToState(message);
  };

  // Test Kit Caller
  WaterTestKits = () => {
    const message = this.createChatBotMessage(
      "Want to learn more about your pH level in your area? That's Fantastic New! Here are few card that can help you.",
      {
        widget: "Water Test Kit",
      }
    );
    this.addMessageToState(message);
  };

  //Map Caller
  MapInfo = () => {
    const message = this.createChatBotMessage(
      "Want to learn more about our Map? That's fantastic news! Here are few cards that can help you learn more.",
      {
        widget: "MapInfo",
      }
    );
    this.addMessageToState(message);
  };

  ShopKit=()=>{
    const message=this.createChatBotMessage("The items sold in the Shop Page are different to that of items sold in the Test Kit Page.");
    this.addMessageToState(message);
  }
  Orderin=()=>{
    const message=this.createChatBotMessage("If you have plcaed order for Test Kits and Shop Items at the same time, they will still be posted into different packages.")
    this.addMessageToState(message);
  }
  Loyalin=()=>{
    const message=this.createChatBotMessage("The point are calculated based on the scores that you received via playing the Quiz game. The point can later be redeemed when you are placing an order for Shop items.")
    this.addMessageToState(message);
  }
  ShopInfo = () => {
    const message = this.createChatBotMessage(
      "Want to support the good cause? YOU CAN! By purchasing merchandises from our Shop!",
      {
        widget: "ShopInfo",
      }
    );
    this.addMessageToState(message);
  };
  //Map details Update
  MapRestUp = () => {
    const message = this.createChatBotMessage("We try our best to have the test result to be updated as soon as possible. However, the result provided may take anywhere from 24 hours to 72 hours to be populated on the Map.");
    this.addMessageToState(message);
  }
  
  lovedefinition = () => {
    const message = this.createChatBotMessage("Baby Dont' Hurt Me!");
    this.addMessageToState(message);
  }
 
  Teamembers = () => {
    const message = this.createChatBotMessage("The developers of the AquaPaure are the members of Group 16.")
    this.addMessageToState(message);
  }

  Responsive=()=>{
    const restext = [
      "https://media.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif",
      "https://media.tenor.com/d56JI__UyJcAAAAd/invade-raid.gif"
    ];
    const domIndex = Math.floor(Math.random() * restext.length);
    const romUrl = restext[domIndex];

    const message = this.createChatBotMessage(
      <>
        <div>
          Gottcha!!!
        </div>
        <img src={romUrl} alt="Amres" style={{ width: '100%' }} />
      </>
      );
    this.addMessageToState(message);
  }

  Resres = () => {
    const imageUrls = [
      "https://media.tenor.com/YDTJiK9uaOgAAAAC/anime-blush-animw-maid.gif",
      "https://media.tenor.com/tObyeShZlK8AAAAC/cat.gif",
      "https://media.tenor.com/7JTQjJOqlfQAAAAC/cats-cat-animation.gif",
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randUrl = imageUrls[randomIndex];

    const message = this.createChatBotMessage(
      <>
        <div>
          Meow Meow!
        </div>
        <img src={randUrl} alt="Resres" style={{ width: '100%' }} />
      </>
    );
    this.addMessageToState(message);
  }
  
  
  //Donations Caller
  Donations = () => {
    const message = this.createChatBotMessage(
      "It is really nice thought to consider to Donate to improve the water quality.",
      {
        widget: "Donations",
      }
    );
    this.addMessageToState(message);
  };
  Omega = () => {
    const imageUrls = [
      "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png",
      "https://steamuserimages-a.akamaihd.net/ugc/1457428835169688208/94EC70428216D6F31046DE7C28A80370AA3AE914/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      "https://openseauserdata.com/files/77793737dc12e9a654b855b53750e9d0.jpg",
      "https://i.pinimg.com/736x/6a/fe/73/6afe7397f60e14cd6100cd9c67a69eeb.jpg",
      "https://plantbasednews.org/app/uploads/2021/07/plant-based-news-is-coke-vegan.jpg",
      "https://w.wallhaven.cc/full/z8/wallhaven-z8pk8w.jpg",
      "https://64.media.tumblr.com/7e2e62d13759cc3a13e8a9f42d447f77/8000fd484dcf9a49-6c/s1280x1920/6244ffdac82e0cc54ef7ded1af087f988f757d57.jpg",
      "https://preview.redd.it/qy5v1hk43th91.png?auto=webp&s=4d7692f2076ccde4d497f377c542661a5e2fdfab",
      "https://rare-gallery.com/thumbs/1194199-anime-anime-girls-digital-art-artwork-portrait-display.png",
      "https://i.pinimg.com/originals/07/66/86/076686c3bc1ba596c8418cd1742c5b71.jpg",

    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randUrl = imageUrls[randomIndex];

    const message = this.createChatBotMessage(
      <>
        <div>
          Indeed it is!
        </div>
        <img src={randUrl} alt="Resres" style={{ width: '100%' }} />
      </>
    );
    this.addMessageToState(message);
  }
  //About Us Caller
  AboutUs = () => {
    const message = this.createChatBotMessage("You can find us at Wilfred Brown Building, WLFB 209, Brunel University, Kingston Lane, Uxbridge UB8 3PH");
    this.addMessageToState(message);
  };
  //Contact Admin Caller
  Admin_Contact = () => {
    const imageUrls = [
      "https://clubpenguinmemories.com/files/2012/03/cartsurfer.gif",
      "https://clubpenguinmemories.com/files/2012/03/pizza.gif",
      "https://clubpenguinmemories.com/files/2012/03/shoveling.gif",
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomUrl = imageUrls[randomIndex];

    const message = this.createChatBotMessage(
      <>
        <div>
          Connecting to the Admin Team!
        </div>
        <img src={randomUrl} alt="Admin" style={{ width: '100%' }} />
      </>
    );
    this.addMessageToState(message);
  }  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
//ShopInfo
