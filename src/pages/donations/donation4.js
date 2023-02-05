import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function donation4() {
const RSPD = () => (
    <div>
        <h1> RSPD </h1>
        <img className="charityimage1" src="image//RSPD.jpg" alt="RSPD" />
        <p className="sides">
            Link to official website:
            <Link to="https://www.rspb.org.uk/join-and-donate/join-us-today/?sourcecode=MRLITH0082&utm_source=google&utm_medium=ppcad&utm_content=membership_various&utm_campaign=membership2122&channel=paidsearch&gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RnI6VkeFL_5vHm8iA1XOmq9YkfI8UNoVQ7rAZ-DkF_sO7qtGF6DgloaArcIEALw_wcB&gclsrc=aw.ds">
                RSPD official website
            </Link>
        </p>
        <p className="sides">
            Since: 1889
        </p>
        <p>
            The Royal Society for the Protection of Birds (RSPB) is a leading charitable organization with a rich history dating back to 1889. The organization is registered in England and Wales and in Scotland, and its mission is to promote conservation and protection of birds and the wider environment. To achieve this goal, the RSPB engages in various activities such as public awareness campaigns, petitions, and the operation of nature reserves throughout the United Kingdom.
            <br />
            As one of the largest wildlife conservation organizations in the world, the RSPB boasts a large revenue of £157 million, 2,200 employees, 10,500 volunteers and over 1.1 million members, including 195,000 youth members. The organization has a strong presence in the United Kingdom with many local groups and maintains 222 nature reserves. Women have played a significant role in the RSPB's history, serving as founders, chief officers, and presidents for over 85 years.
            <br />
            The RSPB's work extends beyond just conservation and protection of birds, it also collaborates with the government and the civil service to advise government policies on environmentalism and conservation. The organization is a significant player in determining the official conservation status list for all birds found in the UK.
            <br />
            Today, the RSPB continues to play a critical role in promoting and protecting the environment, and its tireless efforts have earned it recognition as a leading voice in conservation and environmentalism. With a rich history, dedicated staff and volunteers, and a commitment to preserving the natural world, the RSPB is a true champion of birds and the environment.
        </p>
        <Link to="/">
            <button>Back</button>
        </Link>
        <Link to="/DonationForm3">
            <button>Donate</button>
        </Link>
    </div>
);
}

/*const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={RSPD} />
            <Route exact path="/donationForm3" component={donationForm3} />
        </Switch>
    </div>
);

export default App;*/
