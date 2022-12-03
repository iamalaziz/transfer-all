import React from "react";
import "../stylesheet/_filesList.scss";
import { FaTrashAlt, FaTelegramPlane } from "react-icons/fa";

const FilesList = ({ files }) => {
  return (
    <div className="files-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>File</th>
            <th>Storage</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {files &&
            files.map((file, index) => {
              let size = (file.size / 1000000).toFixed(2);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{file.name}</td>
                  <td>{size} MB</td>
                  <td>
                    <FaTrashAlt />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button>
        <FaTelegramPlane />
        SEND
      </button>
    </div>
  );
};

export default FilesList;
