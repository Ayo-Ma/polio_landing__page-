import HeroImage from '../Assets/Screenshots/Dashboard (Desktop).png'
import { useModal } from '../context/ModalContext';
import '../css/hero.css'
const Hero = () => {

   const { openModal } = useModal();
  return (
    <section className="hero wrapper">
      <div className="hero-text-and-btn">
        <div className="heading-and-description">
          <h1>Manage your customers using AI</h1>
          <p>
            Powerful, flexible and data-driven, Polio makes it easy to build the
            exact CRM your business needs
          </p>
          
        </div>
        <div className="hero-btn">
            <a href="https://landing.com"  className="btn btn-secondary">Learn More</a>
            <a href="#" onClick={openModal} className="btn btn-primary">Start for free</a>
          </div>
      </div>
        
        <div className="inner-wrapper">
            <div className="hero-banner">
            <img src={HeroImage} alt=""/>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
