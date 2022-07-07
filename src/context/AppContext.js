// npm packages
import React, { createContext, useState, useEffect } from "react";

// helpers
import { formatDate } from "../helpers/dateHelper";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [log, setLog] = useState([]);

  const fetchRandomProfile = async () => {
    try {
      await fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
          const { email, dob, name, picture, phone, id } = data.results[0];
          const profileData = {
            avatarURL: picture.large,
            dob: formatDate(dob.date),
            email,
            fullName: `${name.first} ${name.last}`,
            id: id.value,
            phone,
            thumbnailURL: picture.thumbnail
          };

          setProfile(profileData);
        });
    } catch (err) {
      alert("Error");
    }
  };

  const pushToLog = profile => setLog([...log, profile]);

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
        pushToLog,
        fetchRandomProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
