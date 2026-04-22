import { MessageSquare, ArrowRightToLine, Tag, Kanban, ArrowLeft } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";
import { Link } from "react-router";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-800/50 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-slate-400" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Conversas</h1>
                <p className="text-slate-400">Gerenciamento de atendimentos e interações</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={ArrowRightToLine}
            title="Fila"
            description="Transferir conversas para a fila de espera ou outros atendentes."
            buttonText="Transferir para Fila"
          />
          <Card
            icon={Tag}
            title="Tags"
            description="Organize suas conversas com etiquetas personalizadas."
            buttonText="Gerenciar Tags"
          />
          <Card
            icon={Kanban}
            title="Kanban"
            description="Visualize seus atendimentos em colunas por estágio."
            buttonText="Visualizar Kanban"
          />
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm text-center">
          <MessageSquare className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-300 mb-2">Nenhuma conversa selecionada</h2>
          <p className="text-slate-500 max-w-sm mx-auto">
            Selecione uma conversa na lista ou utilize as ferramentas acima para organizar seus atendimentos.
          </p>
        </div>
      </div>
    </div>
  );
}

import { LucideIcon } from "lucide-react";

function Card({ icon: Icon, title, description, buttonText }: {
  icon: LucideIcon,
  title: string,
  description: string,
  buttonText: string
}) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 hover:border-purple-500/30 transition-all flex flex-col h-full">
      <div className="p-3 w-fit rounded-xl bg-purple-500/10 mb-4">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow">{description}</p>
      <Button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700">
        {buttonText}
      </Button>
    </div>
  );
}
