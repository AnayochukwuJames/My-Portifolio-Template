import React from "react";

const FooterEnd = () => {
  const style = {
    background: "#7f158a", // Replace with your desired background style
    color: "#fff", // Change text color as needed
    padding: "20px", // Add padding for spacing
  };

  return (
    <div className="footer-end" style={style}>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Daniel Oluwatomiwo. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterEnd;
