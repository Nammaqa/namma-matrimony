import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { setBaseUrl } from "@workspace/api-client-react";

// Set the backend URL from the Vercel environment variable
setBaseUrl(import.meta.env.VITE_API_URL);

createRoot(document.getElementById("root")!).render(<App />);

// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);
