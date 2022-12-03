import Upload from "./pages/Upload";
import Download from "./pages/Download";
import Main from "./pages/Main";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
