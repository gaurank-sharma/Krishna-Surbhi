import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [donateModal, setDonateModal] = useState({ open: false, tier: null });

  const openDonate = (tier = null) => setDonateModal({ open: true, tier });
  const closeDonate = () => setDonateModal({ open: false, tier: null });

  return (
    <ModalContext.Provider value={{ donateModal, openDonate, closeDonate }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
