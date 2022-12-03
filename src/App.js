import Upload from "./pages/Upload";
import { useState } from "react";
import Download from "./pages/Download";

function App() {
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  return (
    <div className="App">
      <h1>Transfer All</h1>
      <Upload files={files} setFiles={setFiles} urls={urls} setUrls={setUrls} />
      <p className="or">OR</p>
      <Download
        files={files}
        setFiles={setFiles}
        urls={urls}
        setUrls={setUrls}
      />
    </div>
  );
}

export default App;
