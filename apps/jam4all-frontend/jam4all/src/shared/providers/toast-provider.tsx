"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: "10px",
          border: "1px solid #E5E7EB",
          fontSize: "13px",
        },
      }}
    />
  );
}
