import WaterAidImage from "./image/WaterAid.png";
import Charity_WaterImage from "./image/Charity_Water.jpeg";
import Water_orgImage from "./image/Water_org1.jpg";
import TheWaterProjectImage from "./image/TheWaterProject.png";
import TheGlobalWaterChallengeImage from "./image/TheGlobalWaterChallenge.png";
import React from "react";
import "./Donations.css";

export default function Donations() {
  return (
    <div className="Donations">
      <div className="Donations-Container">
        <div className="Donations-Info-Container">
          <h1>Donations</h1>
          <br />
          <h2>Sustainable Water Is Very Essential</h2>
          <p>
            Sustainable water management involves using water resources in a way
            that meets the needs of the present without compromising the ability
            of future generations to meet their own needs. This means using
            water efficiently and effectively, protecting and preserving water
            quality, and ensuring that water resources are managed in a way that
            is environmentally, socially, and economically sustainable. There
            are several key elements to sustainable water management:
            <br />
            1: Water efficiency: This involves using water in the most efficient
            way possible, through measures such as water conservation, drip
            irrigation, and the use of low-flow toilets and appliances.
            <br />
            2: Water conservation: This involves protecting and preserving water
            resources through measures such as protecting wetlands, preserving
            natural water storage systems, and reducing water pollution.
          </p>
        </div>
        <br />
        <div className="Charities-Container">
          <h2>Charities To Donate</h2>
          <br />
          <h3>Water Aid</h3>
          <div className="WaterAid-Container">
            <div className="WaterAid-Info">
              <img id="WaterAidImage" src={WaterAidImage} />
              <p id="WaterAid">
                WaterAid is a non-profit that works to provide access to clean
                water, toilets, and hygiene to communities in need globally.
                Since 1981, the organization has directly impacted 28 million
                people with clean water, 28 million with toilets, and 26 million
                with good hygiene practices. WaterAid aims to make these
                essential services a normal part of life for everyone within a
                generation, with support from its partners and supporters. The
                organization's success is largely dependent on support from its
                partners and supporters.
              </p>
            </div>
            <div className="WaterAid-Buttons">
              <center>
                <a
                  href="https://www.wateraid.org/uk/donate/donate-2"
                  target="_blank"
                >
                  <button id="Donate-Button">Donate</button>
                </a>
                <a href="https://www.wateraid.org/uk" target="_blank">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>Charity: Water</h3>
          <div className="Charity_Water-Container">
            <div className="Charity_Water-Info">
              <img id="Charity_WaterImage" src={Charity_WaterImage} />
              <p id="Charity_Water">
                Charity: Water was founded in 2006 and is based in New York
                City. They have funded more than 60,000 water projects in 29
                countries, providing access to clean water for over 12 million
                people. They work with local partners to ensure that the water
                projects are sustainable and meet the specific needs of the
                communities they serve. charity: water is known for their
                innovative fundraising campaigns and commitment to transparency,
                ensuring that 100% of public donations go directly to funding
                water projects.
              </p>
            </div>
            <div className="Charity_Water-Buttons">
              <center>
                <a
                  href="https://www.charitywater.org/uk/donate"
                  target="_blank"
                >
                  <button id="Donate-Button">Donate</button>
                </a>
                <a href="https://www.charitywater.org/uk" target="_blank">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>Water.org</h3>
          <div className="Water_org-Container">
            <div className="Water_org-Info">
              <img id="Water_orgImage" src={Water_orgImage} />
              <p id="Water_org">
                Water.org was co-founded by Matt Damon and Gary White in 2009
                and is based in Kansas City, Missouri. They work in 13
                countries, primarily in Asia, Africa, and Latin America, to
                provide access to safe water and sanitation. Water.org uses a
                microfinance model to help people access affordable loans for
                water and sanitation solutions, such as toilets or water
                connections. To date, Water.org has empowered more than 40
                million people with access to safe water and sanitation.
              </p>
            </div>
            <div className="Water_org-Buttons">
              <center>
                <a href="https://water.org/donate" target="_blank">
                  <button id="Donate-Button">Donate</button>
                </a>
                <a href="https://water.org" target="_blank">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>The Water Project</h3>
          <div className="TheWaterProject-Container">
            <div className="TheWaterProject-Info">
              <img id="TheWaterProjectImage" src={TheWaterProjectImage} />
              <p id="TheWaterProject">
                The Water Project was founded in 2006 and is based in Concord,
                New Hampshire. They work in five African countries - Kenya,
                Uganda, Sierra Leone, Ghana, and Mali - to provide access to
                clean water and improve sanitation and hygiene. The Water
                Project partners with local communities to identify their water
                needs and implement sustainable solutions, such as well
                drilling, rainwater harvesting, and latrine construction. They
                also provide education and training to promote good hygiene
                practices.
              </p>
            </div>
            <div className="TheWaterProject-Buttons">
              <center>
                <a
                  href="https://thewaterproject.org/?form=give-clean-water"
                  target="_blank"
                >
                  <button id="Donate-Button">Donate</button>
                </a>
                <a href="https://thewaterproject.org" target="_blank">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>The Global Water Challenge</h3>
          <div className="TheGlobalWaterChallenge-Container">
            <div className="TheGlobalWaterChallenge-Info">
              <img
                id="TheGlobalWaterChallengeImage"
                src={TheGlobalWaterChallengeImage}
              />
              <p id="TheGlobalWaterChallenge">
                The Global Water Challenge was launched in 2006 and is based in
                Washington, D.C. It brings together leading companies, NGOs, and
                government agencies to address global water challenges through
                collaborative partnerships. The Global Water Challenge focuses
                on three main areas: access to safe drinking water, sanitation
                and hygiene, and integrated water resource management. They
                support innovative projects, advocate for policy change, and
                promote awareness and action on water issues. Some of their
                partners include Coca-Cola, the World Bank, and the UN
                Foundation.
              </p>
            </div>
            <div className="TheGlobalWaterChallenge-Buttons">
              <center>
                <a
                  href="https://globalwaterchallenge.networkforgood.com/projects/116182-women-for-water-time-to-give-campaign"
                  target="_blank"
                >
                  <button id="Donate-Button">Donate</button>
                </a>
                <a href="https://globalwaterchallenge.org/" target="_blank">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
        </div>
        <br /> <br />
      </div>
    </div>
  );
}
