import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const AquaPure = () => {
    return (
        <div>
            <h3 className="seconddescription">Sustainable water is very esssential</h3>
            <div className="p3">
                <p className="seconddescription pageWidth">
                    Sustainable water management involves using water resources in a way
                    that meets the needs of the present without compromising the ability of
                    future generations to meet their own needs. This means using water
                    efficiently and effectively, protecting and preserving water quality,
                    and ensuring that water resources are managed in a way that is
                    environmentally, socially, and economically sustainable. There are
                    several key elements to sustainable water management:
                    <br />
                    1: Water efficiency:
                    This involves using water in the most efficient way
                    possible, through measures such as water conservation, drip irrigation,
                    and the use of low-flow toilets and appliances.
                    <br />
                    2: Water conservation:
                    This involves protecting and preserving water resources through measures
                    such as protecting wetlands, preserving natural water storage systems,
                    and reducing water pollution.
                </p>
            </div>

            <div className="center">
                <h2>Charities</h2>

                <div className="scrollable-table">
                    <table className="table1">
                        <tr>
                            <td>
                                <p className="p1">Water Aid</p>
                                <img
                                    className="charityimage1"
                                    src="image//wateraids-new-logo.png"
                                />
                                <p>
                                    WaterAid is a non-profit that works to provide access to clean water, toilets, and hygiene to communities in need globally. Since 1981, the organization has directly impacted 28 million people with clean water, 28 million with toilets, and 26 million with good hygiene practices. WaterAid aims to make these essential services a normal part of life for everyone within a generation, with support from its partners and supporters. The organization's success is largely dependent on support from its partners and supporters.
                                </p>

                                <Link to="/donationForm">
                                    <button>Donate</button>
                                </Link>

                                <Link to="/donation1">
                                    <button>Details</button>
                                </Link>
                            </td>
                        </tr>
                    </table>

                    <table className="table2">
                        <tr>
                            <td>
                                <p className="p1">WWF</p>
                                <img className="charityimage1" src="image//WWF.jpg" />
                                <p>
                                    WWF UK's animal adoption program aims to protect wildlife by restoring their habitats. Your adoption will make a positive impact on the world and the wildlife that depends on these habitats. There are various animal options available for both kids and adults, including penguins, orangutans, turtles, and rhinos, making it a perfect gift for animal lovers. Your adoption helps bring the world back to life and supports WWF UK's conservation efforts.
                                </p>

                                <Link to="/donationForm1">
                                    <button>Donate</button>
                                </Link>

                                <Link to="/donation2">
                                    <button>Details</button>
                                </Link>
                            </td>
                        </tr>
                    </table>

                    <table className="table3">
                        <tr>
                            <td>
                                <p className="p1">Soil Association</p>
                                <img className="charityimage1" src="image//SoilAssociation.jpg" />
                                <p>
                                The Soil Association is a British charity founded in 1946 with the mission of promoting organic farming and certification of organic foods. The founders, Lady Eve Balfour, Friend Sykes, and George Scott Williamson, were inspired by the Haughley Experiment which compared organic and chemical-based farming methods and showed the benefits of organic farming. The association was also established due to concerns over the use of herbicides in intensive agriculture.
                                <br/>
                                The Soil Association was one of the five organizations that formed the International Federation of Organic Agriculture Movements in 1972 to advocate for organic farming on a global scale. The association has grown from a few hundred members in its early years to over 4,000 members today. The organization has shifted towards the left of the political spectrum after the death of British Union of Fascists member Jorian Jenks, who was one of its founders.
                                <br/>
                                The current CEO of the Soil Association is Helen Browning, and Monty Don was the president from 2008 to 2016. The association also has several honorary vice-presidents including Jonathan Dimbleby, George McRobie, and Charlotte Mitchell. The Prince of Wales is a royal patron of the organization.
                                <br/>
                                The association's activities include campaigning against intensive farming, promoting local purchasing, and educating the public on nutrition. Lady Balfour believed that the future of mankind and human health was dependent on the treatment of soil, and she established the Soil Association to generate scientific data to support this belief.
                                <br/>     
                                In conclusion, the Soil Association is a crucial player in promoting and advocating for organic farming and certification of organic foods in the UK and around the world. Its efforts over the years have contributed to the growth of the organic food and farming movement and continue to promote sustainable agriculture for a better future.
                                </p>

                                <Link to="/donationForm2">
                                    <button>Donate</button>
                                </Link>

                                <Link to="/donation3">
                                    <button>Details</button>
                                </Link>
                            </td>
                        </tr>
                    </table>

                    <table className="table4">
                        <tr>
                            <td>
                                <p className="p1">RSPD</p>
                                <img className="charityimage1" src="image//RSPD.jpg" />
                                <p>
                                    The Royal Society for the Protection of Birds (RSPB) is a UK charity that works to conserve birds and their habitats. It has a large presence with £157 million in revenue, 2,200 employees, 10,500 volunteers, and 1.1 million members, making it one of the largest wildlife conservation organizations globally. Women have held leadership positions in the RSPB for over 85 years, serving as founders, presidents, and chief officers.
                                </p>

                                <Link to="/donationForm3">
                                    <button>Donate</button>
                                </Link>

                                <Link to="/donation4">
                                    <button>Details</button>
                                </Link>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    );
}


