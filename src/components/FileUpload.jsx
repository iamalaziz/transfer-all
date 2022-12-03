import { AiOutlinePlus } from "react-icons/ai";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FileUpload = ({ files, setFiles, removeFile, urls, setUrls }) => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    const fileRef = ref(storage, `${file.name}`);
    uploadBytes(fileRef, file)
      .then(() => {
        console.log("Uploaded a file");
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        console.error(err);
        removeFile(file.name);
      });

    setUrls([...urls, getDownloadURL(fileRef)]);
    console.log(urls);
  };

  return (
    <div>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <AiOutlinePlus />
            </i>
            Upload
          </button>
        </div>

        <p className="main">Supported files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </div>
  );
};

export default FileUpload;
