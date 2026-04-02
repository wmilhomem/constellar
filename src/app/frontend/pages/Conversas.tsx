import { MessageSquare, ArrowRightToLine, Tag, Kanban, Search, MoreVertical, Send } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";
import { Input } from "@/app/frontend/components/ui/input";

export default function Conversas() {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      {/* Sidebar - Conversation List */}
      <div className="w-80 border-r border-slate-800 flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-bold">Conversas</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" title="Tags">
              <Tag className="w-5 h-5 text-slate-400" />
            </Button>
            <Button variant="ghost" size="icon" title="Kanban">
              <Kanban className="w-5 h-5 text-slate-400" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
              className="bg-slate-900 border-slate-800 pl-10"
              placeholder="Buscar conversas..."
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Mock Conversation List */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border-b border-slate-900 hover:bg-slate-900/50 cursor-pointer transition-colors">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-200">Usuário {i}</span>
                <span className="text-xs text-slate-500">14:20</span>
              </div>
              <p className="text-sm text-slate-400 truncate">Olá, gostaria de saber mais sobre a constelação...</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
              U1
            </div>
            <div>
              <h2 className="font-semibold text-slate-100">Usuário 1</h2>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 flex items-center gap-2" title="Transferir para Fila">
              <ArrowRightToLine className="w-4 h-4" />
              Transferir para Fila
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5 text-slate-400" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          <div className="self-start max-w-[70%] bg-slate-800 p-3 rounded-2xl rounded-tl-none">
            <p className="text-sm">Olá! Como posso te ajudar hoje?</p>
          </div>
          <div className="self-end max-w-[70%] bg-purple-600 p-3 rounded-2xl rounded-tr-none">
            <p className="text-sm text-white">Gostaria de entender melhor como funciona o diagnóstico sistêmico.</p>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex gap-2">
            <Input
              className="bg-slate-900 border-slate-800"
              placeholder="Digite sua mensagem..."
            />
            <Button className="bg-purple-600 hover:bg-purple-500">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
