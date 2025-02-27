import SectionHeading from "./SectionHeading";
import bigImage from "../Assets/Screenshots/Dashboard-Desktop.png";
import smallImage from "../Assets/Screenshots/Dashboard-Mobile.png";
import "../css/features2.css";
const Features2 = () => {
  return (
    <section className="feature2 wrapper" id="features">
      <SectionHeading
        smallText="Features"
        heading="The CRM that's truly your own"
        bodyText="Engage with your customer through the right channel at the right time"
      />
      <div className="features2-container">
        <div className="features2-container-row">
          <div className="feature2-big-card">
            <div className="feature2-card-text">
              <h2>Hyper-manage operations with rich analytics</h2>
              <p>
                Derive actionable insights, create custom reports and
                dashboards, and measure operations in real time to drive growth
                in a sustainable manner
              </p>
            </div>
            <div className="feature2-big-card-content">
              <img src={bigImage} alt="" />
            </div>
          </div>

          <div className="feature2-small-card">
            <div className="feature2-card-text">
              <h2>Customize , upscale, and deploy with ease</h2>
              <p>
                Derive actionable insights, create custom reports and
                dashboards.
              </p>
            </div>
            <div className="feature2-small-card-content">
              <img src={smallImage} alt="" />
            </div>
          </div>
        </div>
        <div className="features2-container-row">
          <div className="feature2-small-card">
            <div className="feature2-card-text">
              <h2>Customize , upscale, and deploy with ease</h2>
              <p>
                Derive actionable insights, create custom reports and
                dashboards.
              </p>
            </div>
            <div className="feature2-small-card-content">
              <img src={smallImage} alt="" />
            </div>
          </div>
          <div className="feature2-big-card">
            <div className="feature2-card-text">
              <h2>Hyper-manage operations with rich analytics</h2>
              <p>
                Derive actionable insights, create custom reports and
                dashboards, and measure operations in real time to drive growth
                in a sustainable manner
              </p>
            </div>
            <div className="feature2-big-card-content">
              <img src={bigImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
