import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function donation1() {
    <div>
        <h1> Water Aid </h1>
        <img className="charityimage1" src="image//wateraids-new-logo.png" alt="Water Aid Logo" />
        <p className="sides">
            Link to official website:
            <Link to="https://www.wateraid.org/uk/donate/donate-to-wateraid-today?id=RA/TPP/01A&utm_source=google&utm_medium=cpc&gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RlwS0wT1goVk7KtXFaVy51dN83l8xcRATx0mEF5lAP1XGHqb98mi28aAttQEALw_wcB&gclsrc=aw.ds">
                Water Aid official
            </Link>
        </p>
        <p className="sides">
            Since: 21 July 1981
        </p>
        <p>
            WaterAid is an international non-profit organization focused on providing access to clean water, safe sanitation, and promoting good hygiene practices. It was established in 1981 as a response to the UN International Drinking Water decade. WaterAid is comprised of members in several countries, including the UK, USA, Australia, Japan, Sweden, Canada, and India, and operates in 34 countries worldwide through its regional offices and country programs. The organization partners with local organizations to help communities establish sustainable water supplies and toilets close to home and promote safe hygiene practices.
            <br />
            WaterAid's activities aim to provide people with clean water, safe sanitation, and promote hygiene behavior change. It also works to influence government policies related to water and sanitation to ensure that they prioritize the interests of vulnerable populations. The organization supports public ownership and control of water supplies, but does not have a specific stance on public, community, or private participation in service provision.
            <br />
            In 2010, WaterAid became a federation, with members in several countries and regional offices and country programs in 27 countries in Latin America, Africa, and Asia. Over the years, WaterAid has grown significantly and its income has increased from £1 million per annum in 1987 to £113 million in 2018-19. The organization works in 34 countries in Africa, Asia, Central America, and the Pacific region.
        </p>
        <Link to="/">
            <button>Back</button>
        </Link>
        <Link to="/DonationForm">
            <button>Donate</button>
        </Link>
    </div>
}

/*export default function don() => (
    <div>
        <Switch>
            <Route exact path="/" component={WaterAid} />
            <Route exact path="/donationForm" component={donationForm} />
        </Switch>
    </div>
);*/
