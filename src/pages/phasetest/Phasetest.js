import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";
import Config from "./Config";
import "./Phasetest.css";
import ActionProvider from "./ActionProvider";


export default function Phasetest() {
  return (
    <div>
      <div className="chatbot_div">
        <Chatbot
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

