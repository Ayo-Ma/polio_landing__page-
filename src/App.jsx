import "./index.css";
import "./css/button.css";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import CTA from "./components/CTA";
import AccordionSection from "./components/AccordionSection";
import Testimonials from "./components/Testimonials";
import Features2 from "./components/Features2";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ModalContext";
import Modal from "./components/Modal";
const App = () => {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const AnimatedSection = ({ children }) => (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );

  return (
    <ModalProvider>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Nav />

        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <SocialProof />
        </AnimatedSection>

        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <CTA />
        </AnimatedSection>
        <AnimatedSection>
          <Features2 />
        </AnimatedSection>
        <AnimatedSection>
          <Integrations />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <AccordionSection />
        </AnimatedSection>
        <AnimatedSection>
          <CTA />
        </AnimatedSection>
      <Modal/>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </motion.div>
    </ModalProvider>
  );
};

export default App;
