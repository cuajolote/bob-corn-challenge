export async function buyCorn(clientId: string): Promise<{ message?: string; error?: string }> {
  try {
    const res = await fetch("http://localhost:3001/buy-corn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId }),
    });

    if (res.status === 200) {
      const data = await res.json();
      return { message: data.message };
    } else {
      const errorData = await res.json();
      return { error: errorData.error || "Error desconocido" };
    }
  } catch (error) {
    return { error: "Error de conexión" };
  }
}
