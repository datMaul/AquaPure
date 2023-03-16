import "./home.css";
import Waves from "./home_page_videos/Beach_Waves.mp4";
import SDGImage from "./home_page_images/SDG.png";
import SDG6Image from "./home_page_images/SDG6.png";
import SDG14Image from "./home_page_images/SDG14.png";
import DYKImage1 from "./home_page_images/DYK1.jpg";
import DYKImage2 from "./home_page_images/DYK2.jpg";
import DYKImage3 from "./home_page_images/DYK3.jpeg";
import MapImage from "./home_page_images/map.png";
import QuizImage from "./home_page_images/AquaPure_Game.png";
import Chatbot from "../phasetest/Phasetest";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const wrapperRef = useRef(null);

  function toggleAquabotVisibility() {
    setIsChatbotVisible(!isChatbotVisible);
  }

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsChatbotVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    const storedUserID = localStorage.getItem("user_ID");
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);
  const Gamecheck = () => {
    if (!userID) {
      return (window.location.href = "/accounts/login");
    }
    return (window.location.href = "/game");
  };
  return (
    <div className="MainPage">
      <div className="MainPage-Container">
        <div className="Back_Video">
          <video className="Home_BG_Vid" src={Waves} autoPlay loop muted />
          <div className="Text-Overlay-Container">
            <div className="Text-Overlay">
              <h3>Welcome to</h3>
              <h1>AquaPure</h1>
              <br />
              <p>Transform Water Into Its' Purest Form Again...</p>
            </div>
          </div>
        </div>
        <div className="MainPage-Info">
          <div className="AquaPure-Section">
            <br />
            <h3>The Project</h3>
            <p>
              AquaPure is a university project dedicated to promoting water
              quality and environmental awareness. Our interactive map displays
              data on the quality of water sources throughout the UK, allowing
              you to explore the areas with the best and worst water quality.
              Our mission is to help people understand the importance of clean
              water and inspire action to protect our natural resources.
            </p>
            {/* <h3> AquaPure </h3>
            <p>
              The AquaPure web application offers a variety of features to help
              users stay informed and raise awareness for people so they
              understand and take action to clean their water in their local
              areas. The application is designed to raise awareness about the
              importance of clean water and encourages users to take action to
              support organizations working to improve water quality. One of the
              key features of the application is the interactive map. This map
              allows registered users to view water pollutant readings at
              different locations, search for a specific location, view their
              current GPS location, and select different map filters.
              Additionally, registered users can submit their own test kit
              results to update the interactive map. This feature allows users
              to stay informed about the water quality in their area and take
              action to improve it. Another important feature of the application
              is the shop. Users can purchase test kits and other merchandise
              from the shop. This feature allows users to actively participate
              in improving water quality by testing the water in their area and
              taking action based on the results. The Quiz/Game feature is also
              an interesting feature for the users, this feature allows
              registered users to earn points by answering questions about water
              quality and related topics. These points can then be used to make
              donations to organizations working to improve water quality. This
              feature not only helps users learn more about water quality but
              also encourages them to take action to improve it. The application
              also includes a digital assistance (AquaBot) which can be used to
              answer questions and provide relevant responses. This feature is
              particularly useful for users who may have questions about water
              quality or related topics. Overall, the AquaPure web application
              provides a variety of tools and features to help users stay
              informed and take action to improve water quality. It is designed
              to raise awareness about the importance of clean water and
              encourages users to take action to support organizations working
              to improve water quality.
            </p> */}
          </div>
          <br />
          <div className="Map-Section-Container Narrow-Content">
            <div className="Map-Section">
              <div className="Map-Image">
                <img id="MapImage" src={MapImage} />
              </div>
              <div className="Map-Info">
                <h3>Interactive Map</h3>
                <div className="Map-Content">
                  <p>
                    Our interactive map allows users to explore water quality
                    data collected from various sources and displayed in an
                    easy-to-understand format. By clicking on a specific
                    location on the map, users can access detailed information
                    about the water quality in that area. The map aggregates
                    data from various sources, including government agencies and
                    our own community, to provide a comprehensive view of water
                    quality across different regions. The data is updated
                    regularly, ensuring that users have access to the latest
                    information about the water quality in their area.
                  </p>
                  <br />
                  <ul className="Map-Buttons"></ul>
                  <Link to="/map">
                    <button id="Game_Play_Btn">View Map</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="Quiz-Section-Container Narrow-Content">
            <div className="Quiz-Section">
              <div className="Quiz-Image">
                <img id="MapImage" src={QuizImage} />
              </div>
              <div className="Quiz-Info">
                <h3>Aquapure Quiz</h3>
                <div className="Quiz-Content">
                  <p>
                    Aquapure has an exciting feature that challenges users to an
                    interactive quiz on sustainability goals 6 and 14. By
                    signing up, visitors can test their knowledge on important
                    environmental issues and become part of the movement towards
                    a more sustainable future. Head over to sign up and give the
                    quiz a try to gain a deeper understanding of the goals we
                    hold close to our hearts.
                  </p>
                  <br />
                  <button id="Game_Play_Btn" onClick={Gamecheck}>
                    Play Game
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="DYK-Section-Container">
            <div className="DYK-Section Narrow-Content">
              <h3>Did You Know</h3>
              <p className="DYK-Description">
                While the UK is known for its high-quality tap water, the state
                of our bodies of water remains a significant concern. In fact,
                there are several alarming facts regarding water quality in the
                UK that cannot be ignored.
              </p>
              <div className="DYK-Columns">
                <div className="DYK-Column">
                  <img className="DYK-Image" src={DYKImage1} />
                  <p>
                    Every year, companies in the UK are fined millions of pounds
                    for pollution incidents - In 2021, the courts fined water
                    companies a record of £102.49 million for pollution. In 2020
                    there were over 400,000 discharges of untreated sewage into
                    UK rivers and almost 5,500 discharges into UK coastal
                    bathing waters. A recent report by the Environment Agency
                    (EA) found that two thirds of the sector were rated no
                    better than requiring improvement (2 stars) or poor (1 star)
                    according to their EPA standards.
                  </p>
                </div>
                <div className="DYK-Column">
                  <img className="DYK-Image" src={DYKImage2} />
                  <p>
                    The UK ranks as one of the worst European countries for
                    coastal water quality, and only 14% of its rivers warrant
                    ‘good’ ecological status. Poor water quality damages natural
                    ocean ecosystems and habitats such as kelp beds and
                    seagrasses, reduces biodiversity and the ocean’s ability to
                    store carbon, and threatens human health.
                  </p>
                </div>
                <div className="DYK-Column">
                  <img className="DYK-Image" src={DYKImage3} />
                  <p>
                    Water pollution can lead to devestating consequences for
                    both wildlife and ecosystems. Not only can it diminish
                    biodiversity, but it can also have far-reaching effects on
                    food webs, natural cycles, and habitat quality. Moreover, it
                    can accelerate the spread of invasive species, increase
                    disease outbreaks, impair reproductive and growth rates, and
                    even threaten survival rates of a variety of species,
                    including fish, birds, mammals, amphibians, reptiles,
                    insects, and plants. An incident that highlights the dangers
                    of water pollution occurred in Essex in 2019, where a sewage
                    spill led to the death of 5,000 fish.
                  </p>
                </div>
              </div>
              {/* <h3> Did You Know </h3>
              <p>
                Every year, companies in the UK are fined millions of pounds for
                pollution incidents;
              </p>
              <p>
                - In 2021, the courts fined water companies £102.49 million for
                pollution.
              </p>
              <p>
                - Anglian Water was recently prosecuted by the Environment Agency
                following the deaths of more than 5,000 fish in Essex.
              </p>
              <p>
                - Southern Water sentenced to pay record £90 million in fines for
                widespread pollution after pleading guilty to 6,971 unpermitted
                sewage discharges.
              </p>
              <p>
                - According to the Environmental Performance Assessment (EPA)
                measures, two-thirds of the sector were rated no better than
                requiring improvement (2 stars) or poor (1 star) in 2021.
              </p> */}
            </div>
          </div>
          <br />
          <div className="SDG-Section-Container">
            <div className="SDG-Section Narrow-Content">
              {/* <h3> Sustainability Development Goal </h3> */}
              <div className="SDG-Columns">
                <div className="SDG-Column">
                  <img className="SDG-Image" id="SDGImage" src={SDGImage} />
                  <p>
                    AquaPure is a web-app that supports the Sustainable
                    Development Goals (SDGs), a set of 17 global goals adopted
                    by the United Nations to end poverty, protect the planet and
                    ensure peace and prosperity for all by 2030.
                  </p>
                </div>
                <div className="SDG-Column">
                  <img className="SDG-Image" id="SDG6Image" src={SDG6Image} />
                  <p>
                    AquaPure aligns with Goal 6 of the SDGs, which aims to
                    ensure availability and sustainable management of water and
                    sanitation for everyone. AquaPure provides information and
                    tools to monitor water quality, raise awareness about water
                    pollution and promote water conservation and efficiency.
                  </p>
                </div>
                <div className="SDG-Column">
                  <img className="SDG-Image" id="SDG14Image" src={SDG14Image} />
                  <p>
                    AquaPure also aligns with Goal 14 of the SDGs, which strives
                    to preserve and enhance the oceans, seas and marine
                    resources for sustainable development. AquaPure informs
                    users about water pollution and its impacts on marine life
                    and ecosystems and encourages them to take action to prevent
                    and reduce it.
                  </p>
                </div>
              </div>

              {/* <p>
                The AquaPure wep application follows Goal 6 (Clean Water and
                Sanitation) of the Sustainable Development Goals and some aspects
                of Goal 14 (Life Below Water) to raise awareness for people so
                they understand and take action to clean their water in their
                local areas. For more information please continue to{" "}
                <a href="https://www.undp.org/sustainable-development-goals?utm_source=EN&utm_medium=GSR&utm_content=US_UNDP_PaidSearch_Brand_English&utm_campaign=CENTRAL&c_src=CENTRAL&c_src2=GSR&gclid=CjwKCAiA2rOeBhAsEiwA2Pl7Q2U3gztwB-keft7wLdh3EZ4aZ3PTcwV0dpD0-T3jFMYUW_r6mswekBoCqGYQAvD_BwE">
                  United Nations Development Program - Sustainability Goals Page
                </a>
                .
              </p>
              <br />
              <div className="SDGImages">
                <img id="SDG6Image" src={SDG6Image} />
                <img id="SDGImage" src={SDGImage} />
                <img id="SDG14Image" src={SDG14Image} />
              </div> */}
            </div>
          </div>
          <br />
          <div className="AboutUs-Section-Container">
            <div className="AboutUs-Section Narrow-Content">
              <h3> About Us </h3>
              <p>
                The AquaPure web application is a group project for Group 16 in
                the second year of Computer Science at Brunel University London.
                The project is to create a web application called “AquaPure”
                which follows Goal 6 (Clean Water and Sanitation) of the
                Sustainable Development Goals and some aspects of Goal 14 (Life
                Below Water). Our main goal is to raise awareness for people so
                they understand and take action to clean their water in their
                local areas. This will hopefully hit our goal for clean water
                and making life below water more convenient.
              </p>
            </div>
          </div>
          <br />
          <div ref={wrapperRef}>
            {isChatbotVisible ? (
              <Chatbot />
            ) : showButton ? (
              <button
                className="AquaBot_button"
                onClick={toggleAquabotVisibility}
              />
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
