import "./Editor.css";

function Editor(props) {
  return <textarea id="editor" onChange={props.onChange}></textarea>;
}

export default Editor;
