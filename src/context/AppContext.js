import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [log, setLog] = useState([]);

  const fetchRandomProfile = async () => {
    try {
      await fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
          setProfile(data.results[0]);
        });
    } catch (err) {
      alert("Error");
    }
  };

  useEffect(() => {
    fetchRandomProfile();
  }, []);

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,
        log,
        setLog,
        fetchRandomProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
