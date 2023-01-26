import React from "react";
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")||lowercase.includes("hi")||lowercase.includes("greetings")||lowercase.includes("hiya")) {
      this.actionProvider.greet();
    } else if (
      lowercase.includes("testkit") ||
      lowercase.includes("test kit") ||
      lowercase.includes("kit") ||
      lowercase.includes("water kit") ||
      lowercase.includes("water testing kit")
    ) {
      this.actionProvider.WaterTestKits();
    }else if(lowercase.includes("admin")|| lowercase.includes("contact admin")||lowercase.includes("admin help")){
      this.actionProvider.Admin_Contacts();
    } else if (lowercase.includes("what is love?")||lowercase.includes("what is love")||lowercase.includes("what does love mean?")){
      this.actionProvider.lovedefinition();
    }else {
      this.actionProvider.limitKnowledge();
    }
  }
}

export default MessageParser;
