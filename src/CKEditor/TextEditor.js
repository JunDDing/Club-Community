import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./css/TextEditor.css";

const editorConfiguration = {
  language: "ko",
  placeholder: "내용을 입력하세요.",
};

function TextEditor() {
  const [editorData, setEditorData] = useState("");

  return (
    <div className="TextEditor">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        config={editorConfiguration}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
    </div>
  );
}

export default TextEditor;
