export default function Donation() {
  return (

 <div class="centered">
      <div class="scrollable-table">
        <table border="1">
          <tr>
            <td colspan="2" height="45" class="header2">Charities</td>
          </tr>
          <tr>
            <td>
              We Water Aid
              <img class="charityimage1" src="image//wateraids-new-logo.png" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button onclick="window.open('form.html')">Donate</button>
              <button
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
              <img class="charityimage1" src="" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              WWF
              <img class="charityimage1" src="image//WWF.jpg" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              UK Youth Climate Coalition
              <img class="charityimage1" src="image//theclimatecoalition.png" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Soil Association
              <img class="charityimage1" src="image//SoulAssociation.jpg" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              The Wildlife Trusts
              <img class="charityimage1" src="" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Fareshare
              <img class="charityimage1" src="" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              RSPB
              <img class="charityimage1" src="image//RSPD.jpg" />
              <p>Inforamation about charity</p>
            </td>
            <td>
              <button>Donate</button>
              <button onclick="window.open('https://www.google.com/')">
                Details
              </button>
            </td>
          </tr>
        </table>
      </div>
      </div>);
}
