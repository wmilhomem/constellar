import { MessageSquare, ArrowRightToLine, Tag, Kanban, Search, Filter } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Conversas</h1>
              <p className="text-slate-400 text-sm">Gerencie seus atendimentos e interações</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" className="border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 gap-2">
              <ArrowRightToLine className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Transferir para Fila</span>
            </Button>
            <Button variant="outline" className="border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 gap-2">
              <Tag className="w-4 h-4" />
              Tags
            </Button>
            <Button variant="outline" className="border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 gap-2">
              <Kanban className="w-4 h-4" />
              Visualizar Kanban
            </Button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar conversas..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
          <Button variant="outline" className="border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-500 text-white">
            Nova Conversa
          </Button>
        </div>

        {/* Content Area (Placeholder for List/Grid) */}
        <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-slate-600" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma conversa ativa</h2>
            <p className="text-slate-400">
              Inicie uma nova conversa ou utilize os botões acima para gerenciar sua fila.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
