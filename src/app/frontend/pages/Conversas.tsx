import {
  MessageSquare,
  ArrowRightToLine,
  Tag,
  Kanban,
  Search,
  Filter,
  User,
  MoreVertical,
  Send
} from "lucide-react";
import { Button } from "@/app/frontend/components/ui/button";
import { Card, CardContent } from "@/app/frontend/components/ui/card";
import { Input } from "@/app/frontend/components/ui/input";

export default function Conversas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-xl font-semibold">Conversas</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 gap-2">
              <ArrowRightToLine className="w-4 h-4" />
              <span className="hidden sm:inline">Transferir para Fila</span>
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 gap-2">
              <Tag className="w-4 h-4" />
              <span className="hidden sm:inline">Tags</span>
            </Button>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 gap-2">
              <Kanban className="w-4 h-4" />
              <span className="hidden sm:inline">Visualizar Kanban</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full flex overflow-hidden">
        {/* Chat List Sidebar */}
        <aside className="w-full md:w-80 border-r border-slate-800 flex flex-col bg-slate-950/30">
          <div className="p-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                placeholder="Buscar conversas..."
                className="pl-9 bg-slate-900/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 uppercase tracking-wider">
              <span>Recentes</span>
              <Filter className="w-3 h-3 cursor-pointer hover:text-slate-300" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-slate-800/30 transition-colors ${i === 1 ? 'bg-purple-500/10 border-l-2 border-purple-500' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <User className="w-6 h-6 text-slate-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-slate-200 truncate">Usuário {i}</h3>
                    <span className="text-[10px] text-slate-500">12:3{i}</span>
                  </div>
                  <p className="text-sm text-slate-400 truncate">Última mensagem da conversa...</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Area */}
        <section className="hidden md:flex flex-1 flex-col bg-slate-950/20">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <User className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <h2 className="font-medium text-slate-200">Usuário 1</h2>
                <span className="text-xs text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Online
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200 hover:bg-slate-800">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200 hover:bg-slate-800">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex flex-col items-center">
              <span className="px-3 py-1 rounded-full bg-slate-800/50 text-[10px] text-slate-500 uppercase tracking-widest mb-4">
                Hoje
              </span>
            </div>

            <div className="flex justify-start">
              <Card className="max-w-[80%] bg-slate-800/50 border-slate-700 rounded-2xl rounded-tl-none">
                <CardContent className="p-3">
                  <p className="text-sm text-slate-300">Olá! Gostaria de saber mais sobre como funciona o diagnóstico sistêmico.</p>
                  <span className="text-[10px] text-slate-500 mt-1 block text-right">12:30</span>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Card className="max-w-[80%] bg-purple-600/20 border-purple-500/30 rounded-2xl rounded-tr-none">
                <CardContent className="p-3">
                  <p className="text-sm text-slate-200">Olá! Com certeza. O diagnóstico sistêmico é um conjunto de perguntas que ajudam a identificar padrões ocultos na sua árvore genealógica.</p>
                  <span className="text-[10px] text-purple-400/70 mt-1 block text-right">12:31</span>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-800 bg-slate-950/40">
            <div className="flex items-center gap-3">
              <Input
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-slate-900/50 border-slate-700 text-slate-300 placeholder:text-slate-500 focus-visible:ring-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-500 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
