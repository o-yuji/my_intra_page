import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  let textToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
        localization={{
          locale: "ja",
        }}
        placeholder="ここに入力してください"
      />
      <div>
        <textarea cols="100" rows="5" disabled value={textToHtml}></textarea>
      </div>
      <div dangerouslySetInnerHTML={{ __html: textToHtml }} />
    </div>
  );
};

export default TextEditor;
