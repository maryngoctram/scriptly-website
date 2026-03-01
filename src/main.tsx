import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// #region agent log
fetch('http://127.0.0.1:7242/ingest/8e0415ed-d1b2-4aed-b2a0-78cf86b3b718',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:7',message:'App initialization started',data:{url:window.location.href,rootExists:!!document.getElementById('root')},timestamp:Date.now(),runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/8e0415ed-d1b2-4aed-b2a0-78cf86b3b718',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:12',message:'Root element not found',data:{url:window.location.href},timestamp:Date.now(),runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    throw new Error("Root element not found");
  }
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/8e0415ed-d1b2-4aed-b2a0-78cf86b3b718',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:18',message:'Creating React root',data:{url:window.location.href},timestamp:Date.now(),runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  const root = createRoot(rootElement);
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/8e0415ed-d1b2-4aed-b2a0-78cf86b3b718',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:22',message:'Rendering App component',data:{url:window.location.href},timestamp:Date.now(),runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  root.render(<App />);
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/8e0415ed-d1b2-4aed-b2a0-78cf86b3b718',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:26',message:'App rendered successfully',data:{url:window.location.href},timestamp:Date.now(),runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
} catch (error) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/8e0415ed-d1b2-4aed-b2a0-78cf86b3b718',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:29',message:'App initialization error',data:{url:window.location.href,error:error instanceof Error ? error.message : String(error)},timestamp:Date.now(),runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  throw error;
}
