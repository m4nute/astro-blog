import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const projects = [
  {
    name: "Realtime Chat App",
    description: "A mini Whatsapp Clone that contains private chat rooms and realtime chat messages",
    repo: "https://github.com/m4nute/next-supa-chat",
    live: "https://m4nute-chat.vercel.app/auth",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "PedaStore",
    description: "Ecommerce website with up to 100 products, a shopping cart and a simulated checkout process",
    repo: "https://github.com/m4nute/next-ecommerce",
    live: "https://pedastore.vercel.app",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "CSV Chatbot Training API",
    description: "REST API for training chatbots with CSV files and also querying them through a Vector DB",
    repo: "https://github.com/m4nute/chatbots-csv-training-chromadb-openai",
    tech: ["Python", "FastAPI", "ChromaDB", "OpenAI API"],
  },
]

export default projects
