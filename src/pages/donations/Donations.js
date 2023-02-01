import './style.css';
import React from 'react';

export default function Donation() {
  return (
    <><div>
      <h3 className="seconddescription">Sustainable water is very essential</h3>
      <p className="seconddescription pageWidth">
        Sustainable water management involves using water resources in a way
        that meets the needs of the present without compromising the ability of
        future generations to meet their own needs. This means using water
        efficiently and effectively, protecting and preserving water quality,
        and ensuring that water resources are managed in a way that is
        environmentally, socially, and economically sustainable. There are
        several key elements to sustainable water management: 1.Water
        efficiency: This involves using water in the most efficient way
        possible, through measures such as water conservation, drip irrigation,
        and the use of low-flow toilets and appliances. 2: Water conservation:
        This involves protecting and preserving water resources through measures
        such as protecting wetlands, preserving natural water storage systems,
        and reducing water pollution.
      </p>
    </div><div class="centered">
        <div class="scrollable-table">

          <table border="1">
            <tr>
              <td colspan="2" height="45" class="header2">Charities</td>
            </tr>
            <tr>
              <td>
                We Water Aid

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button onclick="window.open('form.html')">Donate</button><button
                  id="detail-button"
                  onclick="document.getElementById('info').style.display = 'block'"
                >
                  Details
                </button>

                <div
                  id="info"
                  style="display: none; position: absolute; left: 0; top: 0"
                >
                  <p>
                    We Water Aid is a very useful and helpful charity. Please
                    help!
                  </p>
                  <button
                    onclick="document.getElementById('info').style.display = 'none'"
                  >
                    Back
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                The Climate Coalition

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                WWF

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                UK Youth Climate Coalition

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Soil Association

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                The Wildlife Trusts

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                Fareshare

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                RSPB

                <p>Inforamation about charity</p>
              </td>
              <td>
                <button>Donate</button><button onclick="window.open('https://www.google.com/')">
                  Details
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div></>
  );
}

