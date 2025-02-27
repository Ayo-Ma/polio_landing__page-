import FeaturesCard from "./FeaturesCard";
import SectionHeading from "./SectionHeading";
import "../css/Features.css";
import {
  FaRocket,
  FaShieldAlt,
  FaPlug,
  FaUsers,
  FaHeadset,
  FaCogs,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Fast Performance",
    description: "Experience blazing fast speeds with our optimized solution.",
    icon: <FaRocket />, // Using React Icons
  },
  {
    id: 2,
    title: "Secure Platform",
    description: "We ensure top-notch security for your data and transactions.",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: "Easy Integration",
    description: "Integrate with multiple platforms effortlessly.",
    icon: <FaPlug />,
  },
  {
    id: 4,
    title: "User-Friendly",
    description: "Our intuitive interface makes navigation seamless.",
    icon: <FaUsers />,
  },
  {
    id: 5,
    title: "24/7 Support",
    description: "Get round-the-clock assistance from our dedicated team.",
    icon: <FaHeadset />,
  },
  {
    id: 6,
    title: "Customizable",
    description: "Tailor the platform to suit your unique needs.",
    icon: <FaCogs />,
  },
];

const Features = () => {
  return (
    <div className="features wrapper">
      <SectionHeading
        smallText="Features"
        heading="The CRM that's truly your own"
        bodyText="Engage with your customer through the right channel at the right time"
      />
      <section className="feature">
        <div className="row">
          {features.slice(0, 3).map((feature) => (
            <FeaturesCard key={feature.id} data={feature} />
          ))}
        </div>
        <div className="row">
          {features.slice(3, 6).map((feature) => (
            <FeaturesCard key={feature.id} data={feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
