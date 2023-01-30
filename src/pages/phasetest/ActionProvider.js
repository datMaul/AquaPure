
import React from "react";
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

  //Shop Caller
  ShopInfo = () => {
    const message = this.createChatBotMessage(
      "Want to support the good cause? YOU CAN! By purchasing merchandises from our Shop!",
      {
        widget: "ShopInfo",
      }
    );
    this.addMessageToState(message);
  };

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
  //About Us Caller
  AboutUs = () => {
    const messages = [this.createChatBotMessage("You can find us at Wilfred Brown Building, WLFB 209, Brunel University, Kingston Lane, Uxbridge UB8 3PH"), this.createChatBotMessage(<img src="https://clubpenguinmemories.com/files/2012/03/pizza.gif" alt="Anime" style={{ width: '100%' }} />)];
    messages.forEach(message => this.addMessageToState(message));
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
        <img src={randomUrl} alt="Anime" style={{ width: '100%' }} />
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
