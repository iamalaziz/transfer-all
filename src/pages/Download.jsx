import React from "react";
import "../stylesheet/_download.scss";

const Download = ({ files, urls, setFiles, setUrls }) => {
  return (
    <div className="download">
      <h2>Download</h2>
      <ul>
        {urls &&
          urls.map((url) => {
            return (
              <li>
                <a href={url}>document</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Download;
