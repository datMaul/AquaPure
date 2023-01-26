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
      backgroundColor: "#006bb5",
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
      widgetName: "Admin",
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
            question: "How do I use the Test Kit?",
            answer:
              "Each Test Kit has different application procedures, and their direction of use can be found on the box and in the included instruction manual",
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
            question: "Want to know pH in your area?",
            answer: "LOL.",
            id: 1,
          },
          {
            question: "Can I update the Map with my test kit results?",
            answer: "Yes, you can! All AquaPure test kits come with a unique code which can be used to update the map.",
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
              "If you want to buy the products, you are require to be registered and have an account with AquaPure.",
            id: 1,
          },
          {
            question: "What is the estimated time of delivery?",
            answer: "Thought it is subjected to your shipping address, AquaPure tries its' best to have your productes dispached within 2-3 business days and once confirmed dispach, the tracking details are emailed to your registed email address.",
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
