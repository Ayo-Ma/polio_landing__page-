import '../css/accordion.css'
import { useState } from 'react';
import {FaMinus , FaPlus} from 'react-icons/fa'
import PropTypes from "prop-types";
const Accordion = (props) => {

  const [toggleAccordion , setToggleAccordion] = useState(false);

  const handleAccordionOpen = () => {
    setToggleAccordion(prev => !prev);
    
  }


  return (
  
      <div  className={`accordion-container ${toggleAccordion ? "active" : ""}` } >
        <div onClick={handleAccordionOpen} className="accordion-header ">
          <div className="accordion-text">
            <h2>{props.AccordionQuestion}</h2>
          </div>
          <div className="accordion-icon" >{!toggleAccordion ? <FaPlus />: <FaMinus />}</div>
        </div>

        <div className="accordion-content">
          <p>
           {props.AccordionText}
          </p>
        </div>
      </div>
   
  );
};


Accordion.propTypes = {
  AccordionText: PropTypes.string,
  AccordionQuestion: PropTypes.string
};

export default Accordion;
