import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function donation3() {
const SoilAssociation = () => (
    <div>
        <h1> Soil Association </h1>
        <img className="charityimage1" src="image/SoilAssociation.jpg" alt="SoilAssociation" />
        <p className="sides">
            Link to official website:
            <Link to="https://www.soilassociation.org">
                Soil Association official website
            </Link>
        </p>
        <p className="sides">
            Since: 1946
        </p>
        <p>
            The organization's focus has broadened over the years, and today the WWF is dedicated to a wide range of environmental issues, including wildlife protection, forest conservation, climate change, and the reduction of human impact on the natural world. The organization has over five million supporters worldwide and has invested over $1 billion in conservation initiatives since 1995. In addition to its environmental work, the WWF also operates programs aimed at educating the public about the importance of conservation and sustainability, as well as working with corporations and governments to promote environmentally-friendly policies.
            <br />
            The WWF is recognized as one of the world's leading environmental organizations and is a member of the Foundations Platform F20, an international network of foundations and philanthropic organizations. Despite its success, the WWF has faced criticism for its alleged corporate ties and for supporting eco-guards who hounded African forest dwellers in the proposed Messok Dja national park in the Republic of the Congo. Nevertheless, the WWF remains steadfast in its commitment to promoting a sustainable future and building a world in which humans live in harmony with nature.
        </p>
        <Link to="/">
            <button>Back</button>
        </Link>
        <Link to="/DonationForm2">
            <button>Donate</button>
        </Link>
    </div>
);
}

/*const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={SoilAssociation} />
            <Route exact path="/donationForm2" component={donationForm2} />
        </Switch>
    </div>
);

export default App;*/
