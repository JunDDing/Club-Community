import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./css/TextEditor.css";

const editorConfiguration = {
  language: "ko",
  placeholder: "내용을 입력하세요.",
};

function TextEditor({ onChange }) {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);

    // HTML을 텍스트로 변환하여 상위 컴포넌트로 전달
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const text = doc.body.textContent || "";
    onChange(text);
  };

  return (
    <div className="TextEditor">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        config={editorConfiguration}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default TextEditor;
