import React from "react";

interface CornCounterProps {
  count: number;
}

export function CornCounter({ count }: CornCounterProps) {
  return (
    <div className="mt-4 text-lg font-semibold">
      You have bought <span className="text-yellow-500">{count}</span> corns.
    </div>
  );
}
