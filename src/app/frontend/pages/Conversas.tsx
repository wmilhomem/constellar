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
          <div>
            <h1 className="text-3xl font-bold">Conversas</h1>
            <p className="text-slate-400">Gerencie seus atendimentos e interações</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="mb-4 p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <ArrowRightToLine className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fila de Espera</h3>
            <p className="text-sm text-slate-400 mb-6">Transfira conversas para a fila de atendimento.</p>
            <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">
              Transferir para Fila
            </Button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="mb-4 p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <Tag className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <p className="text-sm text-slate-400 mb-6">Organize seus contatos com etiquetas personalizadas.</p>
            <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">
              Gerenciar Tags
            </Button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="mb-4 p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
              <Kanban className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Kanban</h3>
            <p className="text-sm text-slate-400 mb-6">Visualize o fluxo de conversas em colunas.</p>
            <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">
              Visualizar Kanban
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
            <MessageSquare className="w-8 h-8 text-slate-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Nenhuma conversa ativa</h2>
          <p className="text-slate-500 max-w-sm mx-auto">
            Quando você iniciar um atendimento, ele aparecerá aqui para ser gerenciado.
          </p>
        </div>
      </div>
    </div>
  );
}
