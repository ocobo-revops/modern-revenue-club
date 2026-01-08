import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const EVENT_CONTEXT = `
Tu es le Concierge IA utile pour l'événement "Modern Revenue Club - Revenue Forward 2026".
Ton objectif est d'aider les participants avec des informations sur l'événement.

Voici les détails officiels de l'événement que tu dois strictement respecter :
- Nom de l'événement : Modern Revenue Club - Revenue Forward 2026
- Organisateurs : Ocobo et Qobra. (Note : L'identité visuelle principale est celle d'Ocobo).
- Date : 12 février 2026.
- Heure : Début à 19h00 (7:00 PM).
- Lieu : "La Cristallerie", Paris.
- Contexte adresse : 6 Rue de la Cristallerie, 92310 Sèvres (Près de Paris, Pont de Sèvres).
- Format : Cocktail dînatoire comprenant 3 Masterclasses.
- Objectif : Réunir les entreprises leaders de la French Tech pour discuter des tendances à venir sur le revenu.
- Public : C-levels, VP Sales, Revenue Operations et Tech Leaders.

Ton : Professionnel, accueillant, sophistiqué et concis.
Langue : Tu dois TOUJOURS répondre en FRANÇAIS.
Si on te demande comment s'inscrire, encourage-les à utiliser le formulaire sur la page.
Si on te pose une question qui n'est pas dans cette liste (comme des places de parking spécifiques ou des noms d'intervenants exacts non fournis), dis poliment que tu n'as pas ce détail précis pour le moment mais recommande de vérifier l'invitation officielle ou de contacter Ocobo directement.
`;

let aiClient: GoogleGenAI | null = null;

export const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateEventAnswer = async (userQuestion: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: EVENT_CONTEXT,
      }
    });

    return response.text || "Je vous prie de m'excuser, je ne peux pas générer de réponse pour le moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "J'ai actuellement du mal à me connecter à la base de données de l'événement. Veuillez réessayer plus tard.";
  }
};