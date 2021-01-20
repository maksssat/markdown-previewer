import "./App.css";
import React from "react";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorCode: "",
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    this.setState({ editorCode: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Editor onChange={this.handleEditorChange} />
        <Preview code={this.state.editorCode} />
      </div>
    );
  }
}

export default App;
