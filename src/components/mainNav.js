import React from 'react';

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img
      src="/img/IMG-20231119-WA0032.jpg"
      alt="..."
      style={{ width: 50, height: 50 }}
    />
    <a className="navbar-brand"  href="/">
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
          src="/img/WhatsApp Image 2023-11-19 at 22.18.35_1b06af44.jpg"
          alt="..."
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            boxShadow: "3px 3px 5px 1px rgba(56, 55, 55, 0.756)"
          }}
        />
        <h5 style={{ display: "inline-block" }}>
          Abanoub Saad
        </h5>
        <p style={{ textAlign: "center", marginTop: "-22px" }}>
          خادم
        </p>
      </div>
    </div>
  </div>
</nav>

    </>
  );
}

export default MainNav;
