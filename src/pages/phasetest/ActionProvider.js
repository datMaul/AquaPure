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
      "Want to learn more about Map? That's Fantastic New! Here are few card that can help you.",
      {
        widget: "MapInfo",
      }
    );
    this.addMessageToState(message);
  };

  //Shop Caller
  ShopInfo = () => {
    const message = this.createChatBotMessage(
      "Want to support the good cause? YOU CAN! By purchasing merchandices from our Shop!",
      {
        widget: "ShopInfo",
      }
    );
    this.addMessageToState(message);
  };

  //Donations Caller
  Donations = () => {
    const message = this.createChatBotMessage(
      "It is really nice thought to concider to Donate to improve the water quality.",
      {
        widget: "Donations",
      }
    );
    this.addMessageToState(message);
  };
  //About Us Caller
  AboutUs = () => {
    const message = this.createChatBotMessage(
      "You can find us at WLFB 202 at Brunel University!", {
      widget: "AboutUs",
    });
    this.addMessageToState(message);
  };
  //Contact Admin Caller
  ContactAdmin = () => {
    const message = this.createChatBotMessage(
      "Want to support the good cause? YOU CAN! By purchasing merchandices from our Shop!",
      {
        widget: "ShopInfo",
      }
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
//ShopInfo
