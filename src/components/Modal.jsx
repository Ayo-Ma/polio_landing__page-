import { useState } from "react";
import { useModal } from "../context/ModalContext"; // Import context
import "../css/modal.css";
import toast, { Toaster } from "react-hot-toast"; // Import toast library

const Modal = () => {
  const { isModalOpen, closeModal } = useModal(); 
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 


  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(""); 
    toast.success("Form submitted successfully! Redirecting..."); 
    setIsLoading(true); 

    setTimeout(() => {
      window.location.href = "https://landing.com/";
    }, 1000);
  };

  if (!isModalOpen) return null; 

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Redirecting...</p>
        </div>
      )}

      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeModal} disabled={isLoading}>
            &times;
          </button>
          <h2>Get Started Now</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="modal-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            {error && <p className="error-text">{error}</p>} {/* Show error if invalid */}
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : "Start for free"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
