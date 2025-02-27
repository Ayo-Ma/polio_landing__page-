import "../css/features-card.css";
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

export default FeaturesCard;
