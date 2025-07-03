import React from "react";

interface AlertMessageProps {
  message: string;
  type: "error" | "success";
}

export function AlertMessage({ message, type }: AlertMessageProps) {
  const colorClass = type === "error" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800";

  return (
    <div
      role="alert"
      className={`p-3 rounded-md my-2 ${colorClass}`}
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
