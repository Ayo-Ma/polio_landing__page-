import SectionHeading from "./SectionHeading";
import Logo from "../Assets/Logos/Polio/Logo.svg"
import Marquee from "react-fast-marquee";
import integrationImage1 from '../Assets/Logos/Integrations/dropbox.svg';
import integrationImage2 from '../Assets/Logos/Integrations/figma.svg';
import integrationImage3 from '../Assets/Logos/Integrations/google_drive.svg';
import integrationImage4 from '../Assets/Logos/Integrations/intercom.svg';
import integrationImage5 from '../Assets/Logos/Integrations/mailchimp.svg';
import integrationImage6 from '../Assets/Logos/Integrations/notion.svg';
import integrationImage7 from '../Assets/Logos/Integrations/slack.svg';
import integrationImage8 from '../Assets/Logos/Integrations/stripe.svg';
import integrationImage9 from '../Assets/Logos/Integrations/zapier.svg';
import integrationImage10 from '../Assets/Logos/Integrations/zendesk.svg';
import '../css/intergations.css';
const Integrations = () => {
  return (
    <section className="integration wrapper" id="integrations">
    <SectionHeading
      smallText="Integrations"
      heading="Integrate Polio with over 500 apps"
      bodyText="Polio CRM works seamlessly with your favorite apps. Use over 500 tools and apps with just one click."
    />
    <div className="integrations-section">
      <div className="logo-custom">
        <img src={Logo} alt="Main Logo" />
      </div>
      <Marquee speed={50} pauseOnHover={true} gradient={true}>
        {[integrationImage1, integrationImage2, integrationImage3, integrationImage4,
          integrationImage5, integrationImage6, integrationImage7, integrationImage8,
          integrationImage9, integrationImage10
        ].map((image, index) => (
          <img key={index} className="inteLogo" src={image} alt={`Integration ${index + 1}`} style={{ marginRight: "50px" }} />
        ))}
      </Marquee>
    </div>
  </section>
  );
};

export default Integrations;
