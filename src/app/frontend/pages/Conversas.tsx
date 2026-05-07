import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold">Conversas</h1>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              Transferir para Fila
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Tags
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Kanban className="w-4 h-4" />
              Visualizar Kanban
            </Button>
          </div>
        </header>

        <main className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center">
          <p className="text-slate-400">Selecione uma conversa para começar.</p>
        </main>
      </div>
    </div>
  );
}
