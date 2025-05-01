import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import 'antd/dist/reset.css'; 
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
