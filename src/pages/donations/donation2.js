import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function donation2() {
const WWF = () => (
    <div>
        <h1> WWF </h1>
        <img className="charityimage1" src="image/WWF.jpg" alt="WWF" />
        <p className="sides">
            Link to official website:
            <Link to="https://support.wwf.org.uk/adopt-an-animal?utm_source=Google-Pure-Brand&utm_medium=PaidSearch-Brand&pc=AVN014001&ds_rl=1263317&ds_rl=1263317&gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RkFtiei2grP6FPVt7cQU_FYMOaZH_NF9SdNhxboPJ6GU3lmY6r80ScaAgv1EALw_wcB&gclsrc=aw.ds">
                WWF official website
            </Link>
        </p>
        <p className="sides">
            Since: 21 July 1981
        </p>
        <p>
            The organization's focus has broadened over the years, and today the WWF is dedicated to a wide range of environmental issues, including wildlife protection, forest conservation, climate change, and the reduction of human impact on the natural world. The organization has over five million supporters worldwide and has invested over $1 billion in conservation initiatives since 1995. In addition to its environmental work, the WWF also operates programs aimed at educating the public about the importance of conservation and sustainability, as well as working with corporations and governments to promote environmentally-friendly policies.
            <br />
            The WWF is recognized as one of the world's leading environmental organizations and is a member of the Foundations Platform F20, an international network of foundations and philanthropic organizations. Despite its success, the WWF has faced criticism for its alleged corporate ties and for supporting eco-guards who hounded African forest dwellers in the proposed Messok Dja national park in the Republic of the Congo. Nevertheless, the WWF remains steadfast in its commitment to promoting a sustainable future and building a world in which humans live in harmony with nature.
        </p>
        <Link to="/">
            <button>Back</button>
        </Link>
        <Link to="/DonationForm1">
            <button>Donate</button>
        </Link>
    </div>
);
}

/*const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={WWF} />
            <Route exact path="/donationForm1" component={donationForm1} />
        </Switch>
    </div>
);

export default App;*/
