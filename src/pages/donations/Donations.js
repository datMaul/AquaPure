import React from "react";
import WaterAidImage from "./image/WaterAid.png";
import WWFImage from "./image/WWF.jpg";
import SoilAssociationImage from "./image/SoilAssociation.jpg";
import RSPDImage from "./image/RSPD.jpg";
import "./Donations.css";
import { Link } from "react-router-dom";

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
                <Link to="/donations/DonationForm">
                <button id="Donate-Button">Donate</button>
                </Link>
                <a href="https://www.wateraid.org/uk/donate/donate-to-wateraid-today?id=RA/TPP/01A&utm_source=google&utm_medium=cpc&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdrGIsqHhGw5M2WuWn3x92zIJm2Of15CXN5kQD78GgrzpZ6w2pN2MN4aAvciEALw_wcB&gclsrc=aw.ds">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>WWF</h3>
          <div className="WWF-Container">
            <div className="WWF-Info">
              <img id="WWFImage" src={WWFImage} />
              <p>
                WWF UK's animal adoption program aims to protect wildlife by
                restoring their habitats. Your adoption will make a positive
                impact on the world and the wildlife that depends on these
                habitats. There are various animal options available for both
                kids and adults, including penguins, orangutans, turtles, and
                rhinos, making it a perfect gift for animal lovers. Your
                adoption helps bring the world back to life and supports WWF
                UK's conservation efforts.
              </p>
            </div>
            <div className="WWF-Buttons">
              <center>
                <button id="Donate-Button">Donate</button>
                <a href="https://support.wwf.org.uk/adopt-an-animal?utm_source=Google-Pure-Brand&utm_medium=PaidSearch-Brand&pc=AVN014001&ds_rl=1263317&ds_rl=1263317&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdq_P7T83pFMhQBnzYrbkAsdZZ1T8c_3KCBGPeG_HWJkpvRZrW1m_0EaAjGCEALw_wcB&gclsrc=aw.ds">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>Soil Association</h3>
          <div className="SoilAssociation-Container">
            <div className="WWF-Info">
              <img id="SoilAssociationImage" src={SoilAssociationImage} />
              <p>
                The Soil Association is a British charity founded in 1946 with
                the mission of promoting organic farming and certification of
                organic foods. The founders, Lady Eve Balfour, Friend Sykes, and
                George Scott Williamson, were inspired by the Haughley
                Experiment which compared organic and chemical-based farming
                methods and showed the benefits of organic farming. The
                association was also established due to concerns over the use of
                herbicides in intensive agriculture.
                <br />
              </p>
            </div>
            <div className="WaterAid-Buttons">
              <center>
                <button id="Donate-Button">Donate</button>
                <a href="https://www.soilassociation.org/">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>RSPB</h3>
          <div className="RSPD-Container">
            <div className="WWF-Info">
              <img id="RSPDImage" src={RSPDImage} />
              <p>
                The Royal Society for the Protection of Birds (RSPB) is a UK
                charity that works to conserve birds and their habitats. It has
                a large presence with £157 million in revenue, 2,200 employees,
                10,500 volunteers, and 1.1 million members, making it one of the
                largest wildlife conservation organizations globally. Women have
                held leadership positions in the RSPB for over 85 years, serving
                as founders, presidents, and chief officers.
              </p>
            </div>
            <div className="WaterAid-Buttons">
              <center>
                <button id="Donate-Button">Donate</button>
                <a href="https://www.rspb.org.uk/join-and-donate/join-us-today/?sourcecode=MRLITH0082&utm_source=google&utm_medium=ppcad&utm_content=membership_various&utm_campaign=membership2122&channel=paidsearch&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdpd9HmzbnfJ7wMr26gRsQBjmIS9dE0MlXmQu-KKOjc1wsftkF2XStEaAt6TEALw_wcB&gclsrc=aw.ds">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
        </div>
        <br /> <br />
      </div>
    </div>
  );
}
