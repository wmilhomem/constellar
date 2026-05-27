import { Button } from "@/app/frontend/components/ui/button";
import {
  MessageSquare,
  Search,
  Filter,
  MoreVertical,
  ArrowRightToLine,
  Tag,
  Kanban,
} from "lucide-react";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Conversas
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
            >
              <ArrowRightToLine className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Transferir para Fila</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
            >
              <Tag className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Tags</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300"
            >
              <Kanban className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Chat List Sidebar */}
          <div className="lg:col-span-4 bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar conversas..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl cursor-pointer transition-colors ${
                    i === 1 ? "bg-purple-500/10 border border-purple-500/20" : "hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-slate-200">Cliente #{i}284</span>
                    <span className="text-xs text-slate-500">14:20</span>
                  </div>
                  <p className="text-sm text-slate-400 truncate">
                    Olá, gostaria de saber mais sobre a constelação...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-8 bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                  C1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200">Cliente #1284</h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-sm text-slate-200">
                    Olá! Vi seu site sobre constelação familiar e fiquei interessado. Como funciona o diagnóstico gratuito?
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-purple-600 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                  <p className="text-sm text-white">
                    Olá! Que bom que se interessou. O diagnóstico é um questionário de 3 minutos que ajuda a identificar padrões sistêmicos na sua família. Quer começar agora?
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500/50"
                />
                <Button className="bg-purple-600 hover:bg-purple-500 text-white rounded-xl px-6">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
