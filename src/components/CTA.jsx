import "../css/CTA.css";
import SectionHeading from "./SectionHeading";
import { useModal } from "../context/ModalContext";
const CTA = () => {

  const { openModal } = useModal();
  return (
    <div className="cta-section wrapper">
      <div className="cta-heading-and-description">
        <SectionHeading
          smallText=""
          heading="Start your 30-day free trial"
          bodyText="Join over 1500+ companies today and start growing your business"
        />
      </div>

      <div className="button">
        <a href="https://landing.com" className="btn btn-secondary">
          Learn More
        </a>
        <a href="#" onClick={openModal} className="btn btn-primary">
          Start for free
        </a>
      </div>
    </div>
  );
};

export default CTA;
