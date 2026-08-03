import { Button } from "@/app/frontend/components/ui/button";
import { ArrowRightToLine, Tag, Kanban, MessageSquare } from "lucide-react";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/10">
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Conversas</h1>
              <p className="text-slate-400 text-sm">Gerencie suas interações e atendimentos</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
             <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
               <ArrowRightToLine className="w-4 h-4 mr-2 text-purple-400" />
               Transferir para Fila
             </Button>
             <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
               <Tag className="w-4 h-4 mr-2 text-pink-400" />
               Tags
             </Button>
             <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
               <Kanban className="w-4 h-4 mr-2 text-blue-400" />
               Visualizar Kanban
             </Button>
          </div>
        </header>

        {/* Placeholder for Conversation List */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
            <MessageSquare className="w-8 h-8 text-slate-600" />
          </div>
          <h3 className="text-lg font-semibold">Nenhuma conversa selecionada</h3>
          <p className="text-slate-500 max-w-sm mx-auto mt-2">
            Selecione uma conversa para começar o atendimento.
          </p>
        </div>
      </div>
    </div>
  );
}
