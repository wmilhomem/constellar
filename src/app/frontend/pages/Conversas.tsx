import { MessageSquare, ArrowRightToLine, Tag, Kanban } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-semibold">Conversas</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50"
            >
              <ArrowRightToLine className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Transferir para Fila</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50"
            >
              <Tag className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Tags</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50"
            >
              <Kanban className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="p-4 rounded-full bg-purple-500/10 mb-4">
            <MessageSquare className="w-12 h-12 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Selecione uma conversa</h2>
          <p className="text-slate-400 max-w-md">
            Escolha um atendimento na lista ao lado para visualizar o histórico de mensagens e interagir com o usuário.
          </p>
        </div>
      </main>
    </div>
  );
}
