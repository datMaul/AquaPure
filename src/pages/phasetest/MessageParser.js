
import React from "react";
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("greetings") || lowercase.includes("hiya")) {
      this.actionProvider.greet();
    } else if (
      lowercase.includes("testkit") ||
      lowercase.includes("water kit") ||
      lowercase.includes("water testing kit")
    ) {
      this.actionProvider.WaterTestKits();
    }else if(lowercase.includes("original taste")){
      this.actionProvider.Omega()
    } else if (lowercase.includes("admin") || lowercase.includes("contact admin") || lowercase.includes("admin help")) {
      this.actionProvider.Admin_Contact();
    }else if (lowercase.includes("who created Aquapure")||lowercase.includes("who are the developers of aquapure")||lowercase.includes("who are responsible for the creation of aquapure")||lowercase.includes("which group created aquaPure")){
      this.actionProvider.Teamembers();
    }else if (lowercase.includes("are the shop item and test kit item same")||lowercase.includes("are the test kit items and the shop items same")){
      this.actionProvider.ShopKit();
    }else if (lowercase.includes("when will my reslut will be seen on the map")||lowercase.includes("how long does it take to see my results on the map")){
      this.actionProvider.MapRestUp();
    }else if (lowercase.includes("how will my packages arrive if i order test kit and shop item at the same time")||lowercase.includes("how will my packages arrive if I order shop item and test kit at the same time")||lowercase.includes("i have odered products from test kit and shop item at the same time, how will they arrive")||lowercase.includes("i have odered products from shop item and test kit at the same time, how will they arrive")){
      this.actionProvider.Orderin();
    }else if (lowercase.includes("meow meow")){
      this.actionProvider.Resres();
    }else if(lowercase.includes("girl")||lowercase.includes("cat girl")||lowercase.includes("onichan")||lowercase.includes("oni chan")||lowercase.includes("neko")||lowercase.includes("neko girl")||lowercase.includes("onee san")||lowercase.includes("oneesan")||lowercase.includes("anime girl")||lowercase.includes("anime")){
      this.actionProvider.Responsive();
    }else if(lowercase.includes("how are the points redeemed") ||lowercase.includes("what is the use of the points") || lowercase.includes("what am i suppose to do with the points")||lowercase.includes("what do I get from playing game")){
      this.actionProvider.Loyalin();
    }else if (lowercase.includes("where are you located")||lowercase.includes("Where can I find you")||lowercase.includes("where is aquapure located")){
      this.actionProvider.AboutUs();
    }else if (lowercase.includes("what is love") || lowercase.includes("what does love mean")) {
      this.actionProvider.lovedefinition();
    }else {
      this.actionProvider.limitKnowledge();
    }
  }
}

export default MessageParser;
