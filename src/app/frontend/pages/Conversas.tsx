import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold">Conversas</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
              <ArrowRightToLine className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Transferir para Fila</span>
            </Button>
            <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
              <Tag className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Tags</span>
            </Button>
            <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
              <Kanban className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </header>

        <main className="grid place-items-center h-[60vh] border-2 border-dashed border-slate-800 rounded-3xl">
          <div className="text-center">
            <MessageSquare className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500">Selecione uma conversa para começar</p>
          </div>
        </main>
      </div>
    </div>
  );
}
