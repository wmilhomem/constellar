import {
  MessageSquare,
  ArrowRightToLine,
  Tag,
  Kanban
} from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-xl font-bold text-white">Conversas</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <ArrowRightToLine className="w-4 h-4 mr-2" />
              Transferir para Fila
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Tag className="w-4 h-4 mr-2" />
              Tags
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Kanban className="w-4 h-4 mr-2" />
              Visualizar Kanban
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center mb-6 mx-auto">
            <MessageSquare className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Página de Conversas</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Utilize os botões acima para transferir para a fila, gerenciar tags ou visualizar o kanban.
          </p>
        </div>
      </main>
    </div>
  );
}
