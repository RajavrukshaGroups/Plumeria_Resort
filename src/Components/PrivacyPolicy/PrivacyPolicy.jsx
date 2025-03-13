import "./privacypolicy.css";
import PrivacyPolicyImg from "../../assets/plumeriaresortimages/privacy_policy.webp";

const PrivacyPolicy = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[460px] relative">
        <img
          className="w-full h-full object-cover"
          src={PrivacyPolicyImg}
          alt="Privacy Policy"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            PRIVACY POLICY
          </h1>
        </div>
      </div>
      <div className="p-6 md:p-12 text-gray-700">
        <p>
          We at Plumeria Resort value the privacy of our guests and are
          committed to protecting your personal information. Protecting your
          privacy is very important to us. We have developed this Privacy Policy
          to protect your personal information and keep it confidential. This
          Privacy Policy explains how we collect, use, and protect the
          information you provide when visiting our website. By accessing our
          website or using our services, you agree to the practices described in
          this policy.
        </p>

        <h2 className="mt-6 text-2xl font-bold">1. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Personal Information:</strong> This includes your name,
            email address, phone number, billing address, location, payment
            details and any other information you provide to us directly.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> This includes data
            collected automatically through your use of our website, such as
            browser type, IP address, device information, and cookies.
          </li>
        </ul>

        <h2 className="mt-6 text-2xl font-bold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>To Process Reservations:</strong> Your personal information
            is used to complete reservations, process payments, and communicate
            with you regarding your stay at the resort.
          </li>
          <li>
            <strong>To Improve Our Website:</strong> We may use non-personal
            information to analyze trends and improve the functionality of our
            website.
          </li>
          <li>
            <strong>Marketing:</strong> With your consent, we may send
            promotional offers, news, and updates about the resort. You can opt
            out of these communications at any time.
          </li>
          <li>
            <strong>Customer Support:</strong> Your information helps us address
            your inquiries, concerns, or feedback about our services.
          </li>
        </ul>

        <h2 className="mt-6 text-2xl font-bold">
          3. How We Protect Your Information
        </h2>
        <p>
          We implement various security measures to safeguard your personal
          information, including encryption, firewalls, and secure servers.
          While we strive to protect your data, no method of transmission over
          the internet is entirely secure, so we cannot guarantee absolute
          security.
        </p>

        <h2 className="mt-6 text-2xl font-bold">4. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information with trusted
          third-party service providers who assist us in operating our website,
          processing payments, or providing services related to your stay (such
          as travel agencies or booking platforms). These third parties are
          obligated to protect your information and use it solely for the
          purposes of assisting us.
        </p>

        <h2 className="mt-6 text-2xl font-bold">
          5. Cookies and Tracking Technologies
        </h2>
        <p>
          Our website uses cookies and similar technologies to enhance user
          experience, analyze website usage, and serve personalized content. By
          using our website, you consent to the use of these technologies. You
          can disable cookies through your browser settings, but this may affect
          your experience on our site.
        </p>

        <h2 className="mt-6 text-2xl font-bold">6. Your Rights and Choices</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Access and Correction:</strong> You may request access to
            your personal data and ask for corrections if necessary.
          </li>
          <li>
            <strong>Opt-Out of Marketing Communications:</strong> You can
            unsubscribe from our promotional emails by clicking the
            "unsubscribe" link in the email.
          </li>
          <li>
            <strong>Data Deletion:</strong> You can request the deletion of your
            personal data, subject to certain legal obligations and
            restrictions.
          </li>
        </ul>

        <h2 className="mt-6 text-2xl font-bold">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites that are not
          operated by us. We are not responsible for the content or privacy
          practices of these external sites. Please review their privacy
          policies before providing any personal information.
        </p>

        <h2 className="mt-6 text-2xl font-bold">8. Children’s Privacy</h2>
        <p>
          Our website is not intended for children under the age of 18, and we
          do not knowingly collect personal information from children. For users
          below the age of 18, consent should be provided by the holder of
          parental responsibility of the child. The moment we become aware to
          have collected personal information from the young adjust below the
          age 18yrs. Without verification of parental consent, we will take
          steps to delete that personal information as soon as possible.
        </p>

        <h2 className="mt-6 text-2xl font-bold">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page. We encourage you to review this Privacy Policy
          periodically.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
