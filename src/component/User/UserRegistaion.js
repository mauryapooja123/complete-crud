import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Registaion from "../Pages/registaion";

function UserRegitstion() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/posts", user);
    setUser(user);
    navigate("/home");
    console.log(user, "ppppppppppppp");
  };
  return (
    <>
      <Registaion
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </>
  );
}

export default UserRegitstion;
