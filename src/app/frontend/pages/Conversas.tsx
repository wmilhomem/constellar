import { Button } from "@/app/frontend/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/frontend/components/ui/card";
import { ArrowRightToLine, Tag, Kanban, MessageSquare } from "lucide-react";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/10">
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Conversas</h1>
              <p className="text-slate-400 text-sm">Gerencie suas interações e atendimentos</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
             <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
               <ArrowRightToLine className="w-4 h-4 mr-2 text-purple-400" />
               Transferir para Fila
             </Button>
             <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
               <Tag className="w-4 h-4 mr-2 text-pink-400" />
               Tags
             </Button>
             <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
               <Kanban className="w-4 h-4 mr-2 text-blue-400" />
               Visualizar Kanban
             </Button>
             <Button className="bg-purple-600 hover:bg-purple-500 ml-2">
               Nova Conversa
             </Button>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Fila de Atendimento Summary */}
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <ArrowRightToLine className="h-4 w-4 text-purple-400" />
                Fila de Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 Ativos</div>
            </CardContent>
          </Card>

          {/* Tags Summary */}
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <Tag className="h-4 w-4 text-pink-400" />
                Tags Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] border border-purple-500/30">Urgente</span>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] border border-blue-500/30">Suporte</span>
              </div>
            </CardContent>
          </Card>

          {/* Kanban Summary */}
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                <Kanban className="h-4 w-4 text-blue-400" />
                Status Kanban
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-300">8 Em Progresso</div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Conversas (Placeholder) */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
            <MessageSquare className="w-8 h-8 text-slate-600" />
          </div>
          <h3 className="text-lg font-semibold">Nenhuma conversa selecionada</h3>
          <p className="text-slate-500 max-w-sm mx-auto mt-2">
            Selecione um contato na barra lateral ou inicie uma nova conversa para começar o atendimento.
          </p>
        </div>
      </div>
    </div>
  );
}
