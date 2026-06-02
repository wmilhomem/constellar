import { MessageSquare, ArrowRightToLine, Tag, Kanban, Search, MoreVertical } from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";
import { Input } from "@/app/frontend/components/ui/input";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-purple-400" />
            <h1 className="text-xl font-semibold">Conversas</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              <span>Transferir para Fila</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <ArrowRightToLine className="w-4 h-4" />
            </Button>

            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <Tag className="w-4 h-4" />
              <span>Tags</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Tag className="w-4 h-4" />
            </Button>

            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <Kanban className="w-4 h-4" />
              <span>Visualizar Kanban</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Kanban className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6 h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          {/* Chat List */}
          <div className="lg:col-span-4 bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden flex flex-col h-[400px] lg:h-full">
            <div className="p-4 border-b border-slate-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  placeholder="Buscar conversas..."
                  className="pl-10 bg-slate-950/50 border-slate-700 focus:ring-purple-500/50"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="p-4 border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer transition-colors flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-semibold text-sm shrink-0">
                    U{i}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium truncate text-slate-200">Usuário de Teste {i}</h3>
                      <span className="text-xs text-slate-500">12:3{i}</span>
                    </div>
                    <p className="text-sm text-slate-400 truncate">Olá, gostaria de saber mais sobre a constelação sistêmica...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-8 bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden flex flex-col h-[500px] lg:h-full">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-semibold">
                  UT
                </div>
                <div>
                  <h2 className="font-semibold text-slate-100">Usuário de Teste</h2>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5 text-slate-400" />
              </Button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
              <div className="self-start max-w-[80%] bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm text-slate-200">
                Olá! Gostaria de entender como funciona a sessão de constelação digital.
              </div>
              <div className="self-end max-w-[80%] bg-purple-600 rounded-2xl rounded-tr-none p-4 text-sm text-white">
                Com certeza! A sessão dura cerca de 15 minutos e é totalmente guiada pelo nosso sistema.
              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950/30">
              <div className="flex gap-2">
                <Input
                  placeholder="Digite sua mensagem..."
                  className="bg-slate-950/50 border-slate-700"
                />
                <Button className="bg-purple-600 hover:bg-purple-500 text-white">
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
