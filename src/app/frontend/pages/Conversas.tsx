import { MessageSquare, ArrowRightToLine, Tag, Kanban, ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/app/frontend/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/frontend/components/ui/card";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold">Conversas</h1>
            </div>
          </div>
        </header>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Transferir para Fila */}
          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <div className="p-3 w-fit rounded-xl bg-blue-500/10 mb-4">
                <ArrowRightToLine className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-white">Transferir para Fila</CardTitle>
              <CardDescription className="text-slate-400">
                Encaminhe esta conversa para a fila de atendimento especializada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                Transferir Agora
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <div className="p-3 w-fit rounded-xl bg-purple-500/10 mb-4">
                <Tag className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-white">Tags</CardTitle>
              <CardDescription className="text-slate-400">
                Gerencie as etiquetas desta conversa para melhor organização.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white">
                Gerenciar Tags
              </Button>
            </CardContent>
          </Card>

          {/* Kanban */}
          <Card className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <div className="p-3 w-fit rounded-xl bg-emerald-500/10 mb-4">
                <Kanban className="w-6 h-6 text-emerald-400" />
              </div>
              <CardTitle className="text-white">Visualizar Kanban</CardTitle>
              <CardDescription className="text-slate-400">
                Veja o status de todas as conversas em um quadro visual.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
                Abrir Kanban
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder for Content */}
        <div className="mt-12 p-12 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-center">
          <MessageSquare className="w-16 h-16 text-slate-700 mb-4" />
          <h2 className="text-xl font-semibold text-slate-500">Selecione uma conversa para começar</h2>
          <p className="text-slate-600 max-w-sm mt-2">
            Suas conversas ativas e o histórico de atendimentos aparecerão aqui.
          </p>
        </div>
      </div>
    </div>
  );
}
