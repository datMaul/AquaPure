import React, { useState, useEffect } from "react";
import axios from "axios";
import WaterAidImage from "./image/WaterAid.png";
import WWFImage from "./image/drop_bucket.jpg";
import SoilAssociationImage from "./image/blood_water.jpg";
import RSPDImage from "./image/water_org.jpg";
import "./Donations.css";
import "./donationCount.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Donations() {
  const [token, setToken] = useState("");

  const handleClick = (charityName) => {
    // Generate unique token
    const token = uuidv4();

    // Send POST request to backend with custom name and ID
    axios.post("http://localhost:8080/donations/DonationForm", {
        charity: charityName,
        token: token
      })
      .then(response => {
        console.log(response); //formerly just response
        setToken(response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // For the count
  const [count, setCount] = useState(Math.floor(Math.random() * 99));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 100));
    }, Math.floor(Math.random() * 37000 + 3000));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Donations">
      <div className="Donations-Container">
        <div className="Donations-Info-Container">
          <div>
            <div className="banner">
            </div>
          </div>
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
              <Link to="/donations/DonationForm"><button id="Donate-Button" onClick={() => handleClick('Water Aid')}>Donate</button>
                {token && <p>Your ID is: {token}</p>}
              </Link>
                <a href="https://www.wateraid.org/uk/donate/donate-to-wateraid-today?id=RA/TPP/01A&utm_source=google&utm_medium=cpc&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdrGIsqHhGw5M2WuWn3x92zIJm2Of15CXN5kQD78GgrzpZ6w2pN2MN4aAvciEALw_wcB&gclsrc=aw.ds">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>Drop in the bucket</h3>
          <div className="drop_in_the_bucket-Container">
            <div className="WWF-Info">
              <img id="drop_in_the_bucketImage" src={WWFImage} />
              <p>
              Drop in the Bucket is a non-profit organization that builds wells 
              and sanitation systems at schools in sub-Saharan Africa. Their 
              mission is to enable youth to fully harness the life-changing 
              power of an education, while their goal is to improve child 
              health, increase school enrollment rates, and promote gender 
              equality in schools and communities. The organization was formed 
              by a group of friends from Los Angeles who were inspired to make 
              a difference after learning about the impact of contaminated water 
              on children's health and education in Uganda.
              </p>
            </div>
            <div className="WWF-Buttons">
              <center>
                <Link to="/donations/DonationForm"><button id="Donate-Button" onClick={() => handleClick('Drop in the Bucket')}>Donate</button></Link>
                <a href="https://dropinthebucket.org/">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>Blood: Water</h3>
          <div className="bloodWater-Container">
            <div className="WWF-Info">
              <img id="bloodWaterImage" src={SoilAssociationImage} />
              <p>
              The success of a partnership is measured based on the partner's
              expanded capacity and reach over an eight-year period. Successful 
              partners demonstrate viable programs, adequate resources, credible 
              systems, a clear vision and mission, and buy-in from stakeholders. 
              They also have strong recruiting, hiring, performance management, and 
              compensation practices, and create and leverage existing networks of 
              collaboration.
                <br />
              </p>
            </div>
            <div className="WaterAid-Buttons">
              <center>
                <Link to="/donations/DonationForm"><button id="Donate-Button" onClick={() => handleClick('Blood Water')}>Donate</button></Link>
                <a href="https://bloodwater.org/">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
          <br /> <br />
          <h3>Water.org</h3>
          <div className="waterOrg-Container">
            <div className="WWF-Info">
              <img id="waterOrgImage" src={RSPDImage} />
              <p>
              Water.org is a non-profit organization that provides safe water 
              and sanitation to people around the world through affordable 
              financing, such as small loans. They aim to empower individuals 
              and communities in need, particularly women and children, by giving 
              them access to life-changing resources that can unlock educational and 
              economic opportunities, and improve health. With over 30 years of experience, 
              Water.org has already helped over 52 million people in 17 countries, and 
              continues to expand its work and reach more people in need.
              </p>
            </div>
            <div className="WaterAid-Buttons">
              <center>
                <Link to="/donations/DonationForm"><button id="Donate-Button" onClick={() => handleClick('Water.org')}>Donate</button></Link>
                <a href="https://water.org/">
                  <button id="MoreInfo-Button">More Info</button>
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="image-container">
      <div className="image-slider">
        <div className="image-slider-track">
          <div className="slide">
            <img src="./images/water_aid.jpg" alt="Water Aid" />
          </div>
          <div className="slide">
            <img src="./images/water_aid(donation1).jpg" alt="Water Aid Donation 1" />
          </div>
          <div className="slide">
            <img src="./images/water_org(helpme).jpg" alt="Water Org Help Me" />
          </div>
          <div className="slide">
            <img src="./images/water_org(pic1).jpg" alt="Water Org Pic 1" />
          </div>
          <div className="slide">
            <img src="./images/drop_in_the_bucket.jpg" alt="Drop In The Bucket" />
          </div>
          <div className="slide">
            <img src="./images/dropinthebucket(donation1).jpg" alt="Drop In The Bucket Donation 1" />
          </div>
          <div className="slide">
            <img src="./images/blood_water(donation).jpg" alt="Blood Water Donation" />
          </div>
          <div className="slide">
            <img src="./images/blood_water(donation1).jpg" alt="Blood Water Donation 1" />
          </div>
          <div className="slide">
            <img src="./images/water_aid.jpg" alt="Water Aid" />
          </div>
          <div className="slide">
            <img src="./images/water_aid(donation1).jpg" alt="Water Aid Donation 1" />
          </div>
          <div className="slide">
            <img src="./images/water_org(helpme).jpg" alt="Water Org Help Me" />
          </div>
          <div className="slide">
            <img src="./images/water_org(pic1).jpg" alt="Water Org Pic 1" />
          </div>
        </div>
      </div>
      <div>
      <div className="DonationCount">
      <h1>Donation Count: {count.toString().padStart(5, "0")}</h1>
      </div>
      </div>
      <div className="footer-container">
        <div className="footer">
          <div>
           <p> All right reserve. 2022 AquaPure</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="mailto:aquapure.customerservice@gmail.com">Contact use
                </a>
              </li>
              <li>
                <a>|</a>
              </li>
              <li>
                <a href="/termAndConditions">Terms & Conditions</a>
              </li>
              <li>
                <a>|</a>
              </li>
              <li>
                <a herf="/privacyPolicy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
