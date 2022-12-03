import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../stylesheet/_upload.scss";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import FilesList from "../components/FilesList";

const Upload = ({files, setFiles, urls, setUrls}) => {
  
  const upload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileRef = ref(storage, `${file.name}`);
    uploadBytes(fileRef, file)
      .then(() => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        console.error(err);
      });

    getDownloadURL(ref(storage, file.name)).then((url) => {
      setUrls([...urls, url]);
    });
  };
  return (
    <div className="upload">
      <h2>Upload</h2>
      <div className="input-field">
        <input type="file" onChange={(e) => upload(e)} />
        <div className="overlay">
          <button>
            <span>
              <AiOutlinePlus />
            </span>
            Upload
          </button>
          <div>
            <p>Supported files</p>
            <p>PDF, JPG, PNG</p>
          </div>
        </div>
      </div>

      {files && <FilesList files={files} />}
    </div>
  );
};

export default Upload;
