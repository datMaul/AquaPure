import "./Home.css";
import Waves from "./home_page_videos/Beach_Waves.mp4";
import SDGImage from "./home_page_images/SDG.png";
import SDG6Image from "./home_page_images/SDG6.png";
import SDG14Image from "./home_page_images/SDG14.png";

export default function Home() {
  return (
    <div className="MainPage">
      <div className="MainPage-Container">
        <div className="Back_Video">
          <video className="Home_BG_Vid" src={Waves} autoPlay loop muted />
          <div className="Text-Overlay-Container">
            <div className="Text-Overlay">
              {/* I don't know if this is aligned center or not */}
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
            <h3> AquaPure </h3>
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
            </p>
          </div>
          <br />
          <div className="SDG-Section">
            <h3> Sustainability Development Goal </h3>
            <p>
              The AquaPure wep application follows Goal 6 (Clean Water and
              Sanitation) of the Sustainable Development Goals and some aspects
              of Goal 14 (Life Below Water) to raise awareness for people so
              they understand and take action to clean their water in their
              local areas. For more information please continue to{" "}
              <a href="https://www.undp.org/sustainable-development-goals?utm_source=EN&utm_medium=GSR&utm_content=US_UNDP_PaidSearch_Brand_English&utm_campaign=CENTRAL&c_src=CENTRAL&c_src2=GSR&gclid=CjwKCAiA2rOeBhAsEiwA2Pl7Q2U3gztwB-keft7wLdh3EZ4aZ3PTcwV0dpD0-T3jFMYUW_r6mswekBoCqGYQAvD_BwE">
                United Nations Development Program - Sustainability Goals - Page
              </a>
              .
            </p>
            <br />
            <div className="SDGImages">
              <img id="SDG6Image" src={SDG6Image} />
              <img id="SDGImage" src={SDGImage} />
              <img id="SDG14Image" src={SDG14Image} />
            </div>
          </div>
          <br />
          <div className="DYK-Section">
            <h3> Did You Know </h3>
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
            </p>
          </div>
          <br />
          <div className="AboutUs-Section">
            <h3> About Us </h3>
            <p>
              The AquaPure web application is a group project for Group 16 in
              the second year of Computer Science at Brunel University London.
              The project is to create a web application called “AquaPure” which
              follows Goal 6 (Clean Water and Sanitation) of the Sustainable
              Development Goals and some aspects of Goal 14 (Life Below Water).
              Our main goal is to raise awareness for people so they understand
              and take action to clean their water in their local areas. This
              will hopefully hit our goal for clean water and making life below
              water more convenient.
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
