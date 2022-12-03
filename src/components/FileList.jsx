import FileItem from "./FileItem";
import { db, storage } from "../firebase";
import { ref, deleteObject } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore/lite";
import { useState } from "react";

const FileList = ({ files, removeFile }) => {

  const deleteFileHandler = (filename) => {
    removeFile(filename);

    const fileRef = ref(storage, `${filename}`);
    deleteObject(fileRef)
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "uploads"), {
        files: files,
        password: 1234,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };
  return (
    <div className="file-list-container">
      <ul className="file-list">
        {files &&
          files.map((f) => (
            <FileItem key={f.name} file={f} deleteFile={deleteFileHandler} />
          ))}
      </ul>
      {files.length !== 0 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default FileList;
