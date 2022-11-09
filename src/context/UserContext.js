import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  useEffect(() => {
    if (user) {
      setFavoriteProperties(user.user.homes.map((property) => property.id));
    }
  }, [user]);

  const updateFavoriteProperties = (propertyId) => {
    const newFavoriteProperties = favoriteProperties.includes(propertyId)
      ? favoriteProperties.filter((id) => id !== propertyId)
      : [...favoriteProperties, propertyId];

    setFavoriteProperties(newFavoriteProperties);

    fetch(`https://dinmaegler.herokuapp.com/users/${user.user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
      body: JSON.stringify({
        homes: newFavoriteProperties,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        setUser({
          ...user,
          user: {
            ...user.user,
            homes: data.homes,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isFavoriteProperty = (propertyId) => {
    return favoriteProperties.includes(propertyId);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateFavoriteProperties,
        isFavoriteProperty,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
