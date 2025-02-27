import "../css/features-card.css";
import PropTypes from "prop-types";
const FeaturesCard = ({ data }) => {
  return (
    <div className="card">
      <div className="icon">{data.icon}</div>
      <div className="text-and-supporting-text">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
FeaturesCard.defaultProps = {
  data: {
    title: "Fast Performance",
    description: "Experience blazing fast speeds with our optimized solution.",
  },
};

FeaturesCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
  }),
};
export default FeaturesCard;
