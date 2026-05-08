import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold">Conversas</h1>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              <span>Transferir para Fila</span>
            </Button>
            <Button variant="outline" className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all gap-2">
              <Tag className="w-4 h-4" />
              <span>Tags</span>
            </Button>
            <Button variant="outline" className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all gap-2">
              <Kanban className="w-4 h-4" />
              <span>Visualizar Kanban</span>
            </Button>
          </div>
        </header>

        <main className="grid place-items-center h-64 border-2 border-dashed border-slate-800 rounded-3xl">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-500">
              <MessageSquare className="w-12 h-12" />
            </div>
            <p className="text-slate-400 text-lg">Selecione uma conversa para começar</p>
          </div>
        </main>
      </div>
    </div>
  );
}
