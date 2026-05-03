import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <MessageSquare className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold">Conversas</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-4 h-40 border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-purple-500/50 transition-all"
          >
            <ArrowRightToLine className="w-8 h-8 text-purple-400" />
            <span className="text-lg text-slate-300">Transferir para Fila</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-4 h-40 border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-purple-500/50 transition-all"
          >
            <Tag className="w-8 h-8 text-purple-400" />
            <span className="text-lg text-slate-300">Tags</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-4 h-40 border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-purple-500/50 transition-all"
          >
            <Kanban className="w-8 h-8 text-purple-400" />
            <span className="text-lg text-slate-300">Visualizar Kanban</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
