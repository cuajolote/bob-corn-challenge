import { useBuyCorn } from "./hooks/useBuyCorn";
import { BuyCornButton } from "./components/BuyCornButton";
import { CornCounter } from "./components/CornCounter";
import { AlertMessage } from "./components/AlertMessage";

export function App() {
  // for this example we have a mocked clientId, we could add  a login
  const clientId = "cliente-123";

  const { loading, error, successMessage, cornCount, handleBuy } = useBuyCorn();

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bob's Corn Store</h1>

      <BuyCornButton onBuy={() => handleBuy(clientId)} disabled={loading} loading={loading} />

      {error && <AlertMessage message={error} type="error" />}
      {successMessage && <AlertMessage message={successMessage} type="success" />}

      <CornCounter count={cornCount} />
    </main>
  );
}
