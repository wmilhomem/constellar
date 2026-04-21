import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-3 mb-8">
          <MessageSquare className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold">Conversas</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button
            variant="outline"
            className="flex items-center gap-2 justify-start h-16 border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200"
          >
            <ArrowRightToLine className="w-5 h-5 text-purple-400" />
            <span>Transferir para Fila</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 justify-start h-16 border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200"
          >
            <Tag className="w-5 h-5 text-purple-400" />
            <span>Tags</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 justify-start h-16 border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200"
          >
            <Kanban className="w-5 h-5 text-purple-400" />
            <span>Visualizar Kanban</span>
          </Button>
        </div>

        <main className="mt-12">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-12 text-center">
            <MessageSquare className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-400">
              Nenhuma conversa selecionada
            </h2>
            <p className="text-slate-500 mt-2">
              Selecione uma conversa para começar ou gerencie sua fila.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
