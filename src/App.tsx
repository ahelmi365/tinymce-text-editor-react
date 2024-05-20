import { useState } from "react";
import "./App.css";
import TinyTextEditor from "./components/TinyTextEditor/TinyTextEditor";
import PreviewHTMLEditorText from "./components/previewHTMLEditorText/PreviewHTMLEditorText";

function App() {
  const [editorState, setEditorState] = useState("");

  return (
    <div className="main">
      <section className="text-editor-container">
        <TinyTextEditor
          setEditorState={setEditorState}
          defaultEditorValue={editorState}
          heightInPX={200}
          placeholder={"Write somtheing here..."}
        />
      </section>

      <section className="preview-text-editor-container card">
        <PreviewHTMLEditorText value={editorState} />
      </section>
    </div>
  );
}

export default App;
