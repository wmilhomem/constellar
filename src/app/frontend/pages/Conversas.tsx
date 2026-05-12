import {
  MessageSquare,
  ArrowRightToLine,
  Tag,
  Kanban
} from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <MessageSquare className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Conversas</h1>
            <p className="text-slate-400">Gerencie suas interações sistêmicas</p>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Transferir para Fila */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRightToLine className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fila de Atendimento</h3>
            <p className="text-slate-400 text-sm mb-6">
              Mova conversas ativas para a fila de espera ou transfira para outro moderador.
            </p>
            <Button className="w-full bg-slate-800 hover:bg-purple-600 text-white border-none">
              <ArrowRightToLine className="w-4 h-4 mr-2" />
              Transferir para Fila
            </Button>
          </div>

          {/* Tags */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Tag className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tags e Categorias</h3>
            <p className="text-slate-400 text-sm mb-6">
              Organize seus atendimentos por temas, urgência ou padrões sistêmicos identificados.
            </p>
            <Button className="w-full bg-slate-800 hover:bg-purple-600 text-white border-none">
              <Tag className="w-4 h-4 mr-2" />
              Tags
            </Button>
          </div>

          {/* Kanban */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Kanban className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fluxo de Trabalho</h3>
            <p className="text-slate-400 text-sm mb-6">
              Visualize o progresso de todos os casos em um quadro Kanban intuitivo.
            </p>
            <Button className="w-full bg-slate-800 hover:bg-purple-600 text-white border-none">
              <Kanban className="w-4 h-4 mr-2" />
              Visualizar Kanban
            </Button>
          </div>
        </div>

        {/* Placeholder for Content */}
        <div className="mt-12 p-12 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-500">
          <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
          <p>Selecione uma opção acima para gerenciar suas conversas</p>
        </div>
      </div>
    </div>
  );
}
