import SectionHeading from "./SectionHeading";
import "../css/Testimonials.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Testimonials = () => {
  const [cardData, setCardData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("./testimonial.json");
        const resData = await data.json();
        setCardData(resData);
      } catch (e) {
        console.error("Error fetching testimonials", e);
      }
    };
    fetchData();
  }, []);

  const visibleData = showAll ? cardData : cardData.slice(0, 6);
  console.log(cardData);

  return (
    <div className="testimonial wrapper" id="testimonials">
      <div className="testimonial-heading">
        <SectionHeading
          smallText="Testimonials"
          heading="Loved by builders"
          bodyText="Engage with your customer  through the right channel at the right time"
        />
      </div>
      <div className="masonary-container wrapper">
        <AnimatePresence>
          {visibleData.map((item) => (
            <motion.div
              className="masonary-card"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="masonary-card-profile">
                <div className="profile-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="masonary-card-profile-text">
                  <h3>{item.name}</h3>
                  <p className="role">{item.role}</p>
                </div>
              </div>
              <p>{item.testimonial}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {cardData.length > 8 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ?  <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
