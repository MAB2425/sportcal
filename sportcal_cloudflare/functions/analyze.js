export async function onRequestPost(context) {
  try {
    const { image, mediaType } = await context.request.json();
    const apiKey = context.env.GEMINI_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Clé API non configurée' }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
      });
    }

    const prompt = `Tu analyses une capture d'écran d'une application sportive (XPS Network, Rétroaction, ou NBHPA) appartenant à un joueur de hockey, soccer et deck hockey au Québec.
Extrait TOUS les événements visibles. Retourne un JSON array uniquement, sans markdown ni backticks.
Chaque objet doit avoir: title, sport (Hockey/Soccer/Deck Hockey/Tournoi/Autre), date (YYYY-MM-DD), time (HH:MM), opponent, location, league, eventType (Match/Entraînement/Tournoi/Pratique), note (laisser vide).
IMPORTANT: Toutes les dates doivent être en 2026. Si l'année n'est pas visible, utilise 2026.
Réponds UNIQUEMENT avec le JSON array, rien d'autre.`;

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [
            { inline_data: { mime_type: mediaType, data: image } },
            { text: prompt }
          ]}]
        })
      }
    );

    const data = await resp.json();
    return new Response(JSON.stringify(data), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
