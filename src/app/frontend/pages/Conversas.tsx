import { Button } from "@/app/frontend/components/ui/button";
import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold">Conversas</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300"
            >
              <ArrowRightToLine className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Transferir para Fila</span>
            </Button>

            <Button
              variant="outline"
              className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300"
            >
              <Tag className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Tags</span>
            </Button>

            <Button
              variant="outline"
              className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300"
            >
              <Kanban className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </header>

        <div className="grid gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="p-4 rounded-full bg-slate-800 mb-4">
              <MessageSquare className="w-8 h-8 text-slate-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Nenhuma conversa selecionada</h2>
            <p className="text-slate-500 max-w-sm">
              Selecione uma conversa na lista para começar a interagir ou gerenciar o atendimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
