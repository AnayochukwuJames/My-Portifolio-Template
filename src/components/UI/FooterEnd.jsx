import React from "react";

const FooterEnd = () => {
  const style = {
    background: "#165b04", // Replace with your desired background style
    color: "#fff", // Change text color as needed
    padding: "20px", // Add padding for spacing
  };

  return (
    <div className="footer-end" style={style}>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ibrahim Openiyi. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterEnd;
