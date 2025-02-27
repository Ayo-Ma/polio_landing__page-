import PropTypes from "prop-types";

import "../css/section-heading.css";
const SectionHeading = (props) => {
  return (
    <div className="section-heading">
      <p>{props.smallText}</p>
      <div className="text-and-description">
        <h2>{props.heading} </h2>
        <p>{props.bodyText}</p>
      </div>
    </div>
  );
};

SectionHeading.propTypes = {
  smallText: PropTypes.string,
  heading: PropTypes.string,
  bodyText: PropTypes.string,
};

export default SectionHeading;
