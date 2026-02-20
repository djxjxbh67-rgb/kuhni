
import { GoogleGenAI } from "@google/genai";

export const getKitchenAdvice = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Ты — эксперт мебельной фабрики «КОНТРАКТ» (Санкт-Петербург). 
        Твоя задача — консультировать жителей СПб и области по вопросам заказа кухонь. 
        Подчеркивай, что у нас собственное производство, немецкая фурнитура и гарантия 10 лет. 
        Отвечай профессионально, используй термины: фасады МДФ, эмаль, пластик FENIX, столешницы из камня. 
        Всегда предлагай вызвать замерщика для точного расчета, так как это бесплатно в пределах ЛО.
        Не используй Markdown, только обычный текст.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Извините, возникла техническая заминка. Пожалуйста, оставьте ваш номер телефона в форме обратной связи, и наш ведущий дизайнер перезвонит вам!";
  }
};
