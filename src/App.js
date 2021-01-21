import "./App.css";
import React from "react";
import Editor from "./editor/editor";
import Preview from "./preview/preview";
import marked from "marked";

const initText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`;
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: initText,
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(e) {
    const value = e.target.value;
    this.setState({ editorText: value });
  }

  render() {
    const markdown = marked(this.state.editorText);
    return (
      <div className="App">
        <Editor
          value={this.state.editorText}
          onChange={this.handleEditorChange}
        />
        <Preview>
          {<div dangerouslySetInnerHTML={{ __html: markdown }} />}
        </Preview>
      </div>
    );
  }
}

export default App;
