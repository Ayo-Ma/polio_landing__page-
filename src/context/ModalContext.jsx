import { createContext, useContext, useState } from "react";

// Create the Modal Context
const ModalContext = createContext();

// Modal Provider Component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => useContext(ModalContext);
