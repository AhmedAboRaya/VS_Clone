import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { contents } from './data/contents'

const Window = () => {

    const { openFile } = useSelector((state: RootState) => state.tabs);
    
    return (
        
      <SyntaxHighlighter
       language="javascript"
        style={atomOneDark}
        showLineNumbers={true}
        customStyle={{
            backgroundColor: "transparent",
            width: "100%",
            maxHeight: "100vh",
            overflowX: "auto",
            fontSize: "1rem",
        }}
        >
        {contents[openFile]}
      </SyntaxHighlighter>
    );
}

export default Window