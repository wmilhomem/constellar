import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold">Conversas</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" className="gap-2 border-slate-700 hover:bg-slate-800 text-slate-300">
              <ArrowRightToLine className="w-4 h-4" />
              <span className="hidden md:inline">Transferir para Fila</span>
            </Button>

            <Button variant="outline" className="gap-2 border-slate-700 hover:bg-slate-800 text-slate-300">
              <Tag className="w-4 h-4" />
              <span className="hidden md:inline">Tags</span>
            </Button>

            <Button variant="outline" className="gap-2 border-slate-700 hover:bg-slate-800 text-slate-300">
              <Kanban className="w-4 h-4" />
              <span className="hidden md:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-xl p-6 min-h-[400px]">
            <h2 className="text-lg font-semibold mb-4 text-slate-300">Lista de Conversas</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/30 transition-colors cursor-pointer">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Usuário {i}</span>
                    <span className="text-xs text-slate-500">12:3{i}</span>
                  </div>
                  <p className="text-sm text-slate-400 truncate">Olá, gostaria de saber mais sobre...</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col min-h-[600px]">
            <div className="flex-1 flex items-center justify-center text-slate-500">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>Selecione uma conversa para começar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
