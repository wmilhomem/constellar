import { Button } from "@/app/frontend/components/ui/button";
import {
  ArrowRightToLine,
  Tag,
  Kanban,
  MessageSquare,
  Search,
  Plus
} from "lucide-react";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-semibold">Conversas</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              <span className="hidden sm:inline">Transferir para Fila</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Tag className="w-4 h-4" />
              <span className="hidden sm:inline">Tags</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Kanban className="w-4 h-4" />
              <span className="hidden sm:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar/List Area */}
          <div className="w-full md:w-80 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar conversas..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium">Usuário {i}</span>
                    <span className="text-xs text-slate-500">12:3{i}</span>
                  </div>
                  <p className="text-sm text-slate-400 truncate">Olá, gostaria de saber mais sobre a constelação...</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area Empty State */}
          <div className="flex-1 min-h-[500px] rounded-2xl bg-slate-900/30 border border-slate-800 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-xl font-medium mb-2">Selecione uma conversa</h2>
            <p className="text-slate-400 max-w-xs">
              Escolha uma conversa na lista ao lado para começar a interagir ou inicie um novo atendimento.
            </p>
            <Button className="mt-6 gap-2 bg-purple-600 hover:bg-purple-500 text-white">
              <Plus className="w-4 h-4" />
              Novo Atendimento
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
