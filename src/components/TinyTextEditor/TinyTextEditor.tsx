import { Dispatch, SetStateAction } from "react";

import BundledEditor from "./BundledEditor";
import useTinyTextEditor from "./useTinyTextEditor";
interface Props {
  setEditorState: Dispatch<SetStateAction<string>>;
  defaultEditorValue: string;
  heightInPX?: number;
  imageMaxSizeInMB?: number;
  placeholder?: string;
}
const TinyTextEditor = ({
  setEditorState,
  defaultEditorValue,
  heightInPX,
  imageMaxSizeInMB = 1,
}: Props) => {
  const { editorRef, filePickerHandler } = useTinyTextEditor(imageMaxSizeInMB);

  return (
    <>
      <BundledEditor
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={defaultEditorValue}
        image_title={true}
        init={{
          statusbar: false,
          placeholder: "Write something here...",
          file_picker_callback: (callback, value, meta) => {
            const editorContent = editorRef.current.getContent();
            filePickerHandler(callback, value, meta, editorContent);
          },
          height: heightInPX,
          width: "100%",
          menubar: false,
          plugins: ["image", "lists", "table", "autoresize"],
          toolbar:
            "undo redo |" +
            "bold italic underline |" +
            "alignleft aligncenter alignright |" +
            "image table | " +
            "bullist numlist |" +
            "removeformat ",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={setEditorState}
      />
      <input
        id="tinyMCEImage"
        type="file"
        name="tinyMCEImage"
        style={{ display: "none" }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
};
export default TinyTextEditor;