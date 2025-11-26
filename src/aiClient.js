export async function sendMessageToAI(messages) {
  const res = await fetch(
    "https://turqrxbfvamgfgpzhvvv.supabase.co/functions/v1/lighting-ai",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    }
  );

  const data = await res.json();

  return {
    aiMessage: data.message,
    bom: data.bom || null,
  };
}




