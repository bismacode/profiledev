
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `Anda adalah asisten AI dari seorang Senior Developer Fullstack dengan keahlian:
1. React Native (iOS & Android, TestFlight, App Store/Play Store).
2. Laravel + Livewire + Filament (Dashboard Admin, Sistem Order).
3. WordPress Custom Plugin (Elementor, WooCommerce, Payment).
4. Integrasi: Firebase, Maps, Payment Gateway, OTP.

Tugas Anda:
- Membantu calon klien menganalisis ide aplikasi mereka.
- Memberikan rekomendasi tech stack berdasarkan keahlian developer ini.
- Menjelaskan bagaimana developer ini bisa membantu (dari analisis ke publikasi).
- Selalu gunakan bahasa Indonesia yang profesional namun ramah.
- Jangan memberikan harga, arahkan untuk 'Hubungi Developer' jika ditanya biaya.
- Jaga jawaban tetap ringkas dan fokus pada solusi teknis.`;

export const getAIResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey:'AIzaSyBdhdklDbH3Y_1Upv3X1Cog9kqKNFjdNXo' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, saya sedang mengalami kendala teknis. Silakan langsung hubungi developer kami.";
  }
};
