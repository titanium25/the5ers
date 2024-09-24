import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import router from "./router";

function App() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
