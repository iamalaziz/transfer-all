import { useState } from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  return (
    <div>
      <div className="title">Upload file</div>
      <FileUpload
        files={files}
        setFiles={setFiles}
        removeFile={removeFile}
        setUrls={setUrls}
        urls={urls}
      />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
};

export default Upload;
