import React from "react";
import { NavLink } from "react-router-dom";
import { MdCloudUpload, MdCloudDownload } from "react-icons/md";

const Main = () => {
  return (
    <div className="main-page">
      <NavLink to="/upload">
        <MdCloudUpload />
        Upload Files
      </NavLink>
      <NavLink to="/download">
        <MdCloudDownload />
        Download Files
      </NavLink>
    </div>
  );
};

export default Main;
