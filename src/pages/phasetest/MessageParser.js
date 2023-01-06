import React from "react";
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    } else if (
      lowercase.includes("testkit") ||
      lowercase.includes("test kit") ||
      lowercase.includes("kit") ||
      lowercase.includes("water kit") ||
      lowercase.includes("water testing kit")
    ) {
      this.actionProvider.WaterTestKits();
    } else {
      this.actionProvider.limitKnowledge();
    }
  }
}

export default MessageParser;
