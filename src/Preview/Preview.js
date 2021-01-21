import "./preview.css";

function Preview(props) {
  return (
    <div id="preview">
      <h2>Preview</h2>
      <div id="markdown">{props.children}</div>
    </div>
  );
}

export default Preview;
