import { Link } from "react-router-dom";

export default function TermsAndContitions() {
  return (
    <div className="TermsAndConditions-Page">
      <Link to="/accounts/signup">
        <button className="backButton"> Back </button>
      </Link>
      <br /> <br />
      <div className="TermsAndConditions-Content">
        <h1>AquaPure Terms and Conditions</h1>
        <p>
          Introduction: These terms and conditions govern your use of the
          AquaPure website, any products or services offered by AquaPure and any
          water test results submitted through the website. By using the
          website, purchasing products or services from AquaPure or submitting
          water test results, you agree to be bound by these terms and
          conditions. Product and Service Description: AquaPure offers a variety
          of water testing kits and other related products and services. We make
          every effort to ensure that our products and services are described as
          accurately as possible on our website, but we do not guarantee that
          the descriptions are error-free. We also provide an interactive map
          that allows registered users to view and submit water test results in
          their area. The interactive map feature allows users to navigate
          through the map, zoom in or out, search for a location, view their
          current GPS location, select different map filters, and view different
          water pollutant readings at different points of the map. The map
          filters include various parameters such as pH level, total hardness,
          free chlorine, iron, copper, lead, nitrate, nitrite, MPS, total
          chlorine, fluoride, cyanuric acid, ammonia chloride, bromine, total
          alkalinity, and carbonate. Ordering and Payment: When you place an
          order for a product or service from AquaPure, you agree to pay the
          price for the product or service as indicated on the website. We
          accept various forms of payment, including credit card and PayPal. We
          also provide a donation feature that allows registered users to make
          donations to support our mission. Shipping and Delivery: AquaPure will
          make every effort to ship your order as soon as possible, but we do
          not guarantee delivery dates. Shipping and handling fees will be added
          to the cost of your order. Returns and Refunds: If you are not
          satisfied with your AquaPure product, you may return it within 30 days
          of the purchase date for a full refund. If the product is defective,
          we will either repair or replace it at no additional cost. Warranty:
          AquaPure products come with a limited warranty, which is outlined in
          the product's user manual. Limitation of Liability: AquaPure will not
          be liable for any damages resulting from the use of our products or
          services, including but not limited to indirect, incidental, or
          consequential damages. Governing Law and Jurisdiction: These terms and
          conditions are governed by and construed in accordance with the laws
          of the United States, and any disputes arising out of or relating to
          these terms and conditions will be subject to the exclusive
          jurisdiction of the courts of the United States. Changes to Terms and
          Conditions: AquaPure reserves the right to make changes to these terms
          and conditions at any time, and your continued use of the website or
          purchase of products or services from AquaPure after such changes have
          been made constitutes your acceptance of the new terms and conditions.
          Entire Agreement: These terms and conditions constitute the entire
          agreement between you and AquaPure regarding your use of the website,
          purchase of products and services from AquaPure and submission of
          water test results. Water Test Results: By submitting your water test
          results to AquaPure, you grant us permission to use your data in an
          anonymous format for research and analysis purposes, and to share it
          with relevant authorities for the purpose of monitoring water quality
          in your area. You also acknowledge that the test results are your own
          and that you have conducted them in accordance with the instructions
          provided with the test kit. Additionally, an algorithm is used to
          check the results for quality and reliability, and during the
          submission of the water test results, an algorithm is used to check
          the results for quality and ensure that no irregular or unrealistic
          data is entered into the database. If the results seem too irregular,
          a message will be shown to the user about their abnormal results, what
          they could indicate, and what steps they should take next. If the
          results are deemed too irregular or unrealistic by the admin, they
          have the ability to modify or remove the data point from the database.
          Additionally, registered users have the option to post their results
          on the interactive map, however, they can choose to keep their results
          private.
        </p>
      </div>
    </div>
  );
}
