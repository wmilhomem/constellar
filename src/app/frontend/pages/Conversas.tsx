import { Button } from "@/app/frontend/components/ui/button";
import {
  MessageSquare,
  ArrowRightToLine,
  Tag,
  Kanban,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-slate-400" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold">Conversas</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              Transferir para Fila
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 gap-2">
              <Tag className="w-4 h-4" />
              Tags
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 gap-2">
              <Kanban className="w-4 h-4" />
              Visualizar Kanban
            </Button>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <div className="md:col-span-1 rounded-2xl bg-slate-900/50 border border-slate-800 p-4">
            <h2 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Lista de Conversas</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <div className="h-4 w-3/4 bg-slate-700 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-slate-800 rounded" />
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-500">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>Selecione uma conversa para começar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
