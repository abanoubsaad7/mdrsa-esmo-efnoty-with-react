import React, { useState, useEffect } from "react";
import axios from "axios";

const MainNav = () => {
  const [userData, setUserData] = useState({});
  
  // get user info when the component
  // is first mounted in the DOM.
  useEffect(() => {
    // Retrieve token from local storage (assuming you stored it there after login)
    const token = localStorage.getItem('token');
    
    console.log('token in mainNav file :>> ', token);
    // Include token in the request headers
    axios.get("http://localhost:2015/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log("response :>> ", response.data);
      setUserData(response.data.userData); // Assuming userData is the correct property name
    })
    .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img
            src="/img/IMG-20231119-WA0032.jpg"
            alt="..."
            style={{ width: 50, height: 50 }}
          />
          <a className="navbar-brand" href="/">
            مدرسة اسمو افنوتي
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="userName">
              <img
                src={userData.imgURL}
                alt="..."
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  boxShadow: "3px 3px 5px 1px rgba(56, 55, 55, 0.756)",
                }}
              />
              <h5 style={{ display: "inline-block" }}>{userData.username}</h5>
              <p style={{ textAlign: "center", marginTop: "-22px" }}>
                {userData.role}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
