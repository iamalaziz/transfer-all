import React from "react";

const Modal = () => {
  return (
    <div className="overlay">
      <h1>Password</h1>
      <label htmlFor="password">
        Enter 4 digit password. You will use this password to download your
        files from another device
      </label>
      <input type="password" id="password" />
    </div>
  );
};

export default Modal;
