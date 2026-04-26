import {
  MessageSquare,
  ArrowRightToLine,
  Tag,
  Kanban,
  Search,
  Filter,
  MoreVertical,
  Plus
} from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-xl font-semibold">Conversas</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              Transferir para Fila
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 gap-2">
              <Tag className="w-4 h-4" />
              Tags
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 gap-2">
              <Kanban className="w-4 h-4" />
              Visualizar Kanban
            </Button>
            <div className="h-6 w-px bg-slate-800 mx-2" />
            <Button size="sm" className="bg-purple-600 hover:bg-purple-500 gap-2">
              <Plus className="w-4 h-4" />
              Nova Conversa
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Content Placeholder */}
        <div className="grid grid-cols-12 gap-6">
          {/* Chat List Sidebar */}
          <div className="col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
            <div className="p-4 border-b border-slate-800 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar conversas..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <Button variant="outline" size="icon" className="border-slate-800">
                <Filter className="w-4 h-4 text-slate-400" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${i === 1 ? 'bg-purple-500/10 border border-purple-500/20' : 'hover:bg-slate-800/50'}`}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-medium">
                    U{i}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm truncate">Usuário {i}</h3>
                      <span className="text-[10px] text-slate-500">12:3{i}</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">Olá, gostaria de saber mais sobre...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Chat Area */}
          <div className="col-span-8 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col h-[calc(100vh-12rem)]">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-medium">
                  U1
                </div>
                <div>
                  <h3 className="font-medium">Usuário 1</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="border-slate-800">
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </Button>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-slate-800/50 rounded-full text-[10px] text-slate-400 uppercase tracking-widest">Hoje</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs">U1</div>
                  <div className="bg-slate-800 px-4 py-2 rounded-2xl rounded-tl-none text-sm">
                    Olá! Como posso iniciar meu diagnóstico sistêmico?
                  </div>
                </div>

                <div className="flex items-start gap-3 max-w-[80%] self-end flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs">C</div>
                  <div className="bg-purple-600 px-4 py-2 rounded-2xl rounded-tr-none text-sm">
                    Olá! É um prazer ajudar. Você pode clicar no botão "Iniciar Diagnóstico" na página inicial ou eu posso te enviar o link por aqui.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 flex items-end gap-2">
                <textarea
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm resize-none py-2 px-2 min-h-[44px]"
                  rows={1}
                />
                <Button size="sm" className="bg-purple-600 hover:bg-purple-500 px-4">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
