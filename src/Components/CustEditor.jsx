import { Editor, EditorState, RichUtils } from "draft-js";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const CustEditor = () => {
  const editor = useRef(null);

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  const focusEditor = () => {
    editor.current.focus();
  };

  useEffect(() => {
    focusEditor();
  }, []);

  const handleEditState = (editState) => {
    setEditorState(editState);
  };

  const changeHandler = (state) => {
    setEditorState(state);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(
      editorState,
      command
    );
    if (newState) {
      changeHandler(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <div
      className="m-2 p-2 border border-primary rounded"
      style={{ minHeight: "200px", width: "80%" }}>
      <Editor
        editorState={editorState}
        onChange={(editState) => handleEditState(editState)}
        ref={editor}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default CustEditor;
