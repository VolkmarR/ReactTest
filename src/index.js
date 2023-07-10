import React from "react";
import Test from "./test";
import { createRoot } from "react-dom/client";

function App() {
  return <Test />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
