import React from 'react';
import { Link, Route } from 'react-router-dom';

const WaterAid = () => {
  return (
    <div>
        <h1> Water Aid </h1>
        <img className="charityimage1" src="image//wateraids-new-logo.png" />
        <p className="sides"> 
            Link to offical website: <Link to="/wateraid-official">Water Aid offical</Link>
        </p>
        <p className="sides">
            Since: 21 July 1981
        </p>
    </div>
  );
};

const WaterAidDetails = () => {
  return (
    <div> 
        <p>
            WaterAid is an international non-profit organization focused on providing access to clean water, safe sanitation, and promoting good hygiene practices. It was established in 1981 as a response to the UN International Drinking Water decade. WaterAid is comprised of members in several countries, including the UK, USA, Australia, Japan, Sweden, Canada, and India, and operates in 34 countries worldwide through its regional offices and country programs. The organization partners with local organizations to help communities establish sustainable water supplies and toilets close to home and promote safe hygiene practices.
            <br />
            WaterAid's activities aim to provide people with clean water, safe sanitation, and promote hygiene behavior change. It also works to influence government policies related to water and sanitation to ensure that they prioritize the interests of vulnerable populations. The organization supports public ownership and control of water supplies, but does not have a specific stance on public, community, or private participation in service provision.
            <br />
            In 2010, WaterAid became a federation, with members in several countries and regional offices and country programs in 27 countries in Latin America, Africa, and Asia. Over the years, WaterAid has grown significantly and its income has increased from £1 million per annum in 1987 to £113 million in 2018-19. The organization works in 34 countries in Africa, Asia, Central America, and the Pacific region.
        </p>
    </div>
  );
};

const WaterAidDonation = () => {
  return (
    <div>
        <button><Link to="/">Back</Link></button>
        <button><Link to="/donate">Donate</Link></button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Route exact path="/" component={WaterAid} />
      <Route path="/wateraid-official" component={WaterAidDetails} />
      <Route path="/donate" component={WaterAidDonation} />
    </div>
  );
};

export default App;
