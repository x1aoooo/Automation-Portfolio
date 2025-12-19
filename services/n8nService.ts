/**
 * Service to interact with n8n Webhooks.
 * In a real scenario, you might need to handle CORS on the n8n side
 * or use a proxy if direct browser-to-n8n calls are blocked.
 */

export const triggerWebhook = async (url: string, payload: Record<string, any> = {}): Promise<any> => {
  // Simulate network delay for UI demonstration if no URL is provided (or for testing)
  if (!url || url === 'demo') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Demo webhook triggered successfully!" });
      }, 1500);
    });
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: 'portfolio-website',
        timestamp: new Date().toISOString(),
        ...payload
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Attempt to parse JSON, fallback to text if n8n returns simple string
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("Webhook trigger failed:", error);
    throw error;
  }
};