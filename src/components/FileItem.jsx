import React from "react";
import { AiFillFileText } from "react-icons/ai";
import {ImSpinner} from "react-icons/im";
import {FaTrashAlt} from 'react-icons/fa'

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <li className="file-item" key={file.name}>
        <AiFillFileText/>
        <p>{file.name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && (
            <ImSpinner
              className="fa-spin"
              onClick={() => deleteFile(file.name)}
            />
          )}
          {!file.isUploading && (
            <FaTrashAlt
              onClick={() => deleteFile(file.name)}
            />
          )}
        </div>
      </li>
    </>
  );
};

export default FileItem;
