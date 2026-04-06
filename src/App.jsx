import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import AddNewUser from "./components/AddNewUser";
import LoginPage from "./components/LoginPage";
import image1 from "./assets/profil.jpeg";
import image2 from "./assets/dammie.jpeg";
import UserDashboard from "./components/UserDashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAdded, setUserAdded] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div>
      {!userAdded ? (
        <AddNewUser
          setUserAdded={setUserAdded}
          setUsers={setUsers}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : !isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <UserDashboard
          users={users}
          setUsers={setUsers}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};

export default App;
