import React from "react";

interface BuyCornButtonProps {
  onBuy: () => void;
  disabled: boolean;
  loading: boolean;
}

export function BuyCornButton({
  onBuy,
  disabled,
  loading,
}: BuyCornButtonProps) {
  return (
    <button
      onClick={onBuy}
      disabled={disabled}
      aria-busy={loading}
      className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition"
      type="button"
      aria-live="polite"
      aria-label="Buy corn button"
    >
      {loading ? "Buying..." : "Buy Corn 🌽"}
    </button>
  );
}
