import "./editor.css";

function Editor(props) {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        id="editor"
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}

export default Editor;
