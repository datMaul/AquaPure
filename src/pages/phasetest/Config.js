import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar.js";
import Options from "./option_buttons/Options";
import Quiz from "./quiz/Quiz";
const config = {
  botName: "AquaBot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0db4ad",
    },
  },
  // Messages
  initialMessages: [
    createChatBotMessage(`Hi! How can I be at your service today?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "AboutUs",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Water Test Kit",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Want to buy Water Test Kits?",
            answer:
              "You can find all the varities of Test Kits that AquaPure provides on the Test Kit Tab on the navigationbar.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "MapInfo",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Want to pH in your Area?",
            answer: "LOL.",
            id: 1,
          },
          {
            question: "Want to Add your results?",
            answer: "Nice",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "ShopInfo",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "How can I buy the available products?",
            answer:
              "If you want to buy the products, you will require to be registered and have an account within the AquaPure.",
            id: 1,
          },
          {
            question: "Want to Add your results?",
            answer: "Nice",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;

// https://codesandbox.io/s/fredrikosebergchatbot-tutorial-dt6l7?file=/src/chatbot/config.js
// MapInfo
///ShopInfo
