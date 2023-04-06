import { createContext, useState } from "react";

export const DonationContext = createContext();

export const DonationContextProvider = ({ children }) => {
  const [donaterName, setDonaterName] = useState("");

  return (
    <DonationContext.Provider value={[donaterName, setDonaterName]}>
      {children}
    </DonationContext.Provider>
  );
};
