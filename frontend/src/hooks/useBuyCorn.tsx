import { useState } from "react";
import { buyCorn } from "../services/api";

export function useBuyCorn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [cornCount, setCornCount] = useState(0);

  async function handleBuy(clientId: string) {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const result = await buyCorn(clientId);

    if (result.error) {
      setError(result.error);
    } else if (result.message) {
      setSuccessMessage(result.message);
      setCornCount((count) => count + 1);
    }

    setLoading(false);
  }

  return { loading, error, successMessage, cornCount, handleBuy };
}
