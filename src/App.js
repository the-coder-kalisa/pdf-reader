import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

function App() {
  const pdf = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc:
          "/fafa.pdf",
      },
      pdf.current
    ).then((instance) => {
      instance.UI.setTheme("dark");
      instance.UI.disableElements(["downloadButton"]);
      
    });
  }, []);
  return <div ref={pdf} className="h-[100vh]"></div>;
}

export default App;
