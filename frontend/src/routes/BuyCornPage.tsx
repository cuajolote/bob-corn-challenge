import { BuyCornButton } from "../components/BuyCornButton";
import { CornCounter } from "../components/CornCounter";
import { AlertMessage } from "../components/AlertMessage";
import { useBuyCorn } from "../hooks/useBuyCorn";
import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";

export function BuyCornPage() {
  const [clientId, setClientId] = useState("");
  const { loading, error, successMessage, cornCount, handleBuy } = useBuyCorn();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Bob's Corn Store</h1>

        <div className="flex flex-col items-center gap-2">
          <label htmlFor="clientId" className="text-sm font-medium">
            Client ID:
          </label>
          <input
            id="clientId"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your client ID"
          />
        </div>

        <BuyCornButton
          onBuy={() => handleBuy(clientId)}
          disabled={loading}
          loading={loading}
        />

        {error && <AlertMessage message={error} type="error" />}
        {successMessage && (
          <AlertMessage message={successMessage} type="success" />
        )}

        <CornCounter count={cornCount} />
      </div>
    </>
  );
}
