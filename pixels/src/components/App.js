import { useState } from "react";
import "../styles/App.scss";
import Editor from "./Editor";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import UploadForm from './UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Editor />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;