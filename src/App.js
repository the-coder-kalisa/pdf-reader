import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
function App() {
  const pdf = useRef(null);
  useEffect(() => {
    WebViewer({path: "lib", initialDoc: "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"}, pdf.current)
  }, []);
  return <div ref={pdf} className="h-[100vh]"></div>;
}

export default App;
