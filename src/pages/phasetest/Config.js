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
              "You can find all the varieties of Test Kits that AquaPure provides on the Test Kit Tab on the navigation-bar.",
            id: 1,
          },
          {
            question: "How to use the Test Kit?",
            answer:
              "Each Test Kit has different application procedures, and their direction of use can be found on the box and in the included instruction manual",
            id: 2,
          },
          {
            question: "Is it necessary to send back the result of the test to the AquaPure?",
            answer:
            "Well... it is not necessary to send the result back. However, it would be appreciated for your contribution towards updating the map.",
            id:3,
          },
          {
            question: "How many time can a Test Kit and the Unique Code along with it be used?",
            answer: "A single Test Kit can only be used once for water quality testing. And, the Unique Code corresponding to that Test Kit is also one time use only.",
            id:4,
          },
          {
            question:"How long does it take to obtain the results?",
            answer:"The final results vary for all Test Kits due to subjected difference in their purposes and procedures. However, all the Test Kits sold at AquaPure should not take more than 2 hours from the time of commencing the test to provide you the results if followed the manual correctly.",
            id:5,
          },
          {
            question:"Sent incorrect parametric values or the Unique Code is shown used?",
            answer:"In the event of such actions, it is highly recommended that you seek assistance from one of the AquaPure Admins who can provide further guidance to resolve the dispute.",
            id:6,
          },
          {
            question:"Where do the Test Kits go after you click `Add to Cart`?",
            answer:"After clicking `Add to Cart` a popup appeared on your screen stating that the Test Kit was added to your cart, you can simply click `View Cart` or click on the ship present on the Navigation Bar and click on `Test Kit`. If your cart is empty, you can add Test Kit via click `Go to Test Kit Page` but just be careful of the shark!",
            id:7,
          }
        ],
      },
    },
    {
      widgetName: "MapInfo",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Want to know water quality in your area?",
            answer: "Now you can! AquaPure has an interactive Map integrated which can provide brief information regarding the water quality of specific locations.",
            id: 1,
          },
          {
            question:"How often are the results imprecise or missing on the Map",
            answer:"With the limited amount to data in possession of AquaPure at the moment, there can be possibilities of Map not having data for the water quality of certain geolocation. AquaPure is currently trying its' best on densely populating the Map with water quality data and we highly appreciate your patience and would like to apologize for the inconvenience caused due to it.",
            id:2,
          },
          {
            question:"Which parametric values of water are shown on the Map?",
            answer:"There are total of 17 unique parametric values of water that the Map is able to provide the visual analysis of. The names of these parametric values are Drinking Quality, pH, Total Alkalinity, Total Hardness, Free Chlorine, Total Chlorine, Iron, Copper, Lead, Nitrate, Nitrite, MPS, Fluoride, Cyanuric Acid, Ammonia Chloride, Bromine, Carbonate. You can toggle between different parametric values with the help of the filter provided on the Map.",
            id:3,
          },
          {
            question: "Want to update the Map with your test kit results?",
            answer: "Yes, you can! All AquaPure test kits come with a unique code which can be used to update the map.",
            id: 7,
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
              "If you want to buy the products, you are required to be registered and have an account with AquaPure.",
            id: 1,
          },
          {
            question: "What is the estimated time of delivery?",
            answer: "Thought it is subjected to your shipping address, AquaPure tries its' best to have your products dispatched within 2-3 business days and once confirmed dispatch, the tracking details are emailed to your registered email address.",
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

