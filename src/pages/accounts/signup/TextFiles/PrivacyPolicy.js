import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function TermsAndContitions() {
  return (
    <div className="PrivacyPolicy-Page">
      <Link to="/accounts/signup">
        <button id="backButton"> Back </button>
      </Link>
      <div className="PrivacyPolicy-Content">
        <h1>AquaPure Privacy Policy</h1>
        <p>
          <b>Introduction:</b> AquaPure is committed to protecting the privacy
          of our users. This Privacy Policy explains how we collect, use, and
          disclose personal information when you use our website, purchase
          products or services from us, or submit water test results through our
          website. By using our website or purchasing products or services from
          us, you agree to the terms of this Privacy Policy.
        </p>
        <p>
          <b>Information We Collect:</b> We collect personal information from
          you when you register for an account, place an order, make a donation,
          submit water test results, or use certain features of our website. The
          personal information we collect may include your name, email address,
          phone number, date of birth, address, and payment information. We also
          collect information about your use of our website and products,
          including your water test results, location data, and map data.
        </p>
        <p>
          <b>Use of Information:</b> We use the personal information we collect
          for the following purposes:
        </p>
        <p>
          <b>1)</b> To provide and improve our products and services.
        </p>
        <p>
          <b>2)</b> To process your orders and handle your payments.
        </p>
        <p>
          <b>3)</b> To communicate with you about your account, orders, and
          other transactions.
        </p>
        <p>
          <b>4)</b> To provide you with customer service and support.
        </p>
        <p>
          <b>5)</b> To analyze and improve our website and services.
        </p>
        <p>
          <b>6)</b> To monitor water quality in your area by sharing your
          anonymous water test results with relevant authorities.
        </p>
        <p>
          <b>Disclosure of Information:</b> We may disclose your personal
          information to third parties for the following purposes:
        </p>
        <p>
          <b>1)</b> To process your payments and handle your orders.
        </p>
        <p>
          <b>2)</b> To comply with legal requirements and respond to legal
          process, such as a subpoena or court order.
        </p>
        <p>
          <b>3)</b> To enforce our terms of service and protect the rights and
          safety of AquaPure and our users.
        </p>
        <p>
          <b>4)</b> To provide anonymous water test results to relevant
          authorities for the purpose of monitoring water quality in your area.
        </p>
        <p>
          <b>Data Security:</b> We take reasonable steps to protect the personal
          information we collect from loss, misuse, and unauthorized access,
          disclosure, alteration, and destruction. However, no method of
          transmission over the internet, or method of electronic storage, is
          100% secure, and we cannot guarantee the security of your personal
          information.
        </p>
        <p>
          <b>Third-Party Services:</b> Our website may contain links to
          third-party websites, services, and applications. We are not
          responsible for the privacy practices of these third parties and we
          encourage you to read the privacy policies of any third-party website,
          service, or application that you visit or use.
        </p>
        <p>
          <b>Cookies and Tracking Technologies:</b> We may use cookies and other
          tracking technologies to collect information about your use of our
          website. Cookies are small data files that are stored on your device
          when you visit our website. We use cookies to improve your experience
          on our website and to understand how our website is being used. You
          can control the use of cookies on our website by adjusting your
          browser settings.
        </p>
        <p>
          <b>Your Rights:</b> You have the right to access, correct, or delete
          your personal information at any time. You also have the right to
          opt-out of receiving marketing communications from us. If you wish to
          exercise any of these rights, please contact us at the email or
          mailing address provided in the contact section of the website.
        </p>
        <p>
          <b>Children's Privacy:</b> Our website is not intended for children
          under the age of 13. We do not knowingly collect personal information
          from children under the age of 13. If we become aware that we have
          collected personal information from a child under the age of 13, we
          will take steps to delete such information and will comply with all
          legal requirements related to children's privacy. We also encourage
          parents and guardians to monitor their children's online activities
          and to contact us if they have any concerns or questions about our
          website and its use by children under 13.
        </p>
        <p>
          <b>Changes to this Privacy Policy:</b> We may update this Privacy
          Policy from time to time to reflect changes in our practices or to
          comply with legal requirements. We will notify you of any material
          changes to this Privacy Policy by posting the updated policy on our
          website and updating the effective date. We encourage you to review
          this Privacy Policy periodically to stay informed about our
          collection, use, and disclosure of your personal information.
        </p>
        <p>
          <b>Contact Us:</b> If you have any questions or concerns about this
          Privacy Policy or our collection, use, and disclosure of your personal
          information, please contact us at:{" "}
          <a href="mailto:aquapure.customerservice@gmail.com">
            aquapure.customerservice@gmail.com
          </a>
          .
        </p>
        <p>
          Thank you for choosing AquaPure. We are committed to protecting your
          privacy and providing you with high-quality products and services.
          Effective Date: 01.01.2023
        </p>
      </div>
    </div>
  );
}
