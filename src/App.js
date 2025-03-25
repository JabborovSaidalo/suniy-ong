ai-catalog/
├── src/
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // To'g'ri import

const categories = ["Chatbotlar", "Rasm yaratish", "Ovoz AI", "Kod yozish", "Video tahrirlash"];
const aiTools = [
  { name: "ChatGPT", category: "Chatbotlar", link: "https://chat.openai.com/" },
  { name: "Claude AI", category: "Chatbotlar", link: "https://claude.ai/" },
  { name: "Bard AI", category: "Chatbotlar", link: "https://bard.google.com/" },
  { name: "Perplexity AI", category: "Chatbotlar", link: "https://www.perplexity.ai/" },
  { name: "YouChat", category: "Chatbotlar", link: "https://you.com/" },
  { name: "Midjourney", category: "Rasm yaratish", link: "https://www.midjourney.com/" },
  { name: "DALL·E", category: "Rasm yaratish", link: "https://openai.com/dall-e" },
  { name: "Stable Diffusion", category: "Rasm yaratish", link: "https://stablediffusionweb.com/" },
  { name: "Deep Dream", category: "Rasm yaratish", link: "https://deepdreamgenerator.com/" },
  { name: "Runway ML", category: "Rasm yaratish", link: "https://runwayml.com/" },
  { name: "ElevenLabs", category: "Ovoz AI", link: "https://elevenlabs.io/" },
  { name: "Deepgram", category: "Ovoz AI", link: "https://deepgram.com/" },
  { name: "Resemble AI", category: "Ovoz AI", link: "https://www.resemble.ai/" },
  { name: "Lovo AI", category: "Ovoz AI", link: "https://www.lovo.ai/" },
  { name: "VoiceMod", category: "Ovoz AI", link: "https://www.voicemod.net/" },
  { name: "GitHub Copilot", category: "Kod yozish", link: "https://github.com/features/copilot" },
  { name: "Codex", category: "Kod yozish", link: "https://openai.com/research/codex" },
  { name: "Tabnine", category: "Kod yozish", link: "https://www.tabnine.com/" },
  { name: "CodeT5", category: "Kod yozish", link: "https://huggingface.co/Salesforce/codet5" },
  { name: "PolyCoder", category: "Kod yozish", link: "https://example.com/polycoder" },
  { name: "Runway", category: "Video tahrirlash", link: "https://runwayml.com/" },
  { name: "Pika Labs", category: "Video tahrirlash", link: "https://pika.art/" },
  { name: "Synthesia", category: "Video tahrirlash", link: "https://www.synthesia.io/" },
  { name: "DeepBrain AI", category: "Video tahrirlash", link: "https://www.deepbrain.io/" },
  { name: "FlexClip", category: "Video tahrirlash", link: "https://www.flexclip.com/" }
];

const news = [
  "ChatGPT 5 yaqin orada chiqishi mumkin!",
  "Midjourney yangi modelini taqdim etdi.",
  "OpenAI va Google yangi AI tizimlarini ishlab chiqmoqda.",
  "DeepMind yangi AI yutuqlari bilan hayratlantirmoqda.",
  "Stable Diffusion orqali realistik rasmlar yaratish yanada osonlashdi.",
  "Pika Labs yangi video tahrirlash vositasini chiqardi.",
  "Synthesia AI video yaratish texnologiyasini yaxshiladi.",
  "DeepBrain AI realistik klonlash texnologiyasini e'lon qildi.",
  "Runway yangi AI vositalarini taqdim etdi.",
  "FlexClip orqali AI yordamida tezkor video yaratish endi osonroq!"
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showNews, setShowNews] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAiTools = aiTools.filter((tool) => tool.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-center">Sun'iy intellekt katalogi</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-gray-700 text-white rounded-lg">{darkMode ? "Tong rejimi" : "Tungi rejim"}</button>
      </div>
      <div className="flex justify-center mb-4">
        <input type="text" placeholder="Qidirish..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 border rounded-lg w-1/2 text-black" />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"><AiOutlineSearch /></button>
      </div>
      <button onClick={() => setSelectedCategory(null)} className="px-4 py-2 bg-gray-700 text-white rounded-lg mb-4">Menu</button>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-white text-gray-700 border"}`}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filteredAiTools.filter((tool) => tool.category === selectedCategory).map((tool, index) => (
            <a key={index} href={tool.link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold" style={{ color: darkMode ? "#00ffcc" : "#0044cc" }}>{tool.name}</h2>
            </a>
          ))}
        </div>
      )}
      <button onClick={() => setShowNews(!showNews)} className="px-4 py-2 bg-gray-700 text-white rounded-lg mb-4">Yangiliklar</button>
      {showNews && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold text-center mb-4">Yangiliklar</h2>
          <ul className="list-disc pl-6">
            {news.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      )}
      <footer className="text-center mt-6 text-gray-600">Jabborov Saida'lo tomonidan tayyorlandi</footer>
    </div>
  );
}

├── public/
│   └── index.html
├── package.json
└── README.md
