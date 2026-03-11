import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/frontend/components/ui/button";
import {
  Heart,
  Sparkles,
  TreePine,
  Download,
  ArrowRight,
  Star,
  CheckCircle,
  AlertTriangle,
  Info,
  RefreshCw,
} from "lucide-react";

type DiagnosticoResults = {
  totalWeight: number;
  severity: "low" | "medium" | "high";
  patterns: string[];
  insights: string[];
  intention: string;
  emotionalState: string;
};

export default function Resultado() {
  const navigate = useNavigate();
  const [results, setResults] = useState<DiagnosticoResults | null>(null);

  useEffect(() => {
    const storedResults = sessionStorage.getItem("diagnosticoResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <RefreshCw className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <p className="text-slate-400">Carregando seus resultados...</p>
        </div>
      </div>
    );
  }

  const severityConfig = {
    low: {
      label: "Leve",
      color: "emerald",
      icon: CheckCircle,
      description: "Seu sistema familiar apresenta dinâmicas relativamente equilibradas.",
    },
    medium: {
      label: "Moderado",
      color: "amber",
      icon: Info,
      description: "Existem alguns emaranhamentos que merecem atenção e integração.",
    },
    high: {
      label: "Significativo",
      color: "rose",
      icon: AlertTriangle,
      description: "Padrões importantes foram identificados. A cura é possível e necessária.",
    },
  };

  const config = severityConfig[results.severity];
  const SeverityIcon = config.icon;

  const intentionLabels: Record<string, string> = {
    relationships: "Relacionamentos",
    prosperity: "Prosperidade",
    family: "Conflitos Familiares",
    purpose: "Propósito e Direção",
    health: "Saúde e Vitalidade",
    curiosity: "Autoconhecimento",
  };

  const recommendations = getRecommendations(results);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Seu Relatório de Constelação
          </h1>
          <p className="text-slate-400 text-lg">
            Tema explorado: <span className="text-purple-400">{intentionLabels[results.intention]}</span>
          </p>
        </div>

        {/* Severity Card */}
        <div className={`p-8 rounded-2xl bg-gradient-to-br from-${config.color}-900/20 to-slate-900/50 border border-${config.color}-500/30 mb-8`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-${config.color}-500/20`}>
              <SeverityIcon className={`w-8 h-8 text-${config.color}-400`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold text-white">
                  Nível de Emaranhamento
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm bg-${config.color}-500/20 text-${config.color}-400 border border-${config.color}-500/30`}>
                  {config.label}
                </span>
              </div>
              <p className="text-slate-400">{config.description}</p>
            </div>
          </div>
        </div>

        {/* Patterns Identified */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <TreePine className="w-5 h-5 text-purple-400" />
            Padrões Identificados
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {results.patterns.length > 0 ? (
              results.patterns.map((pattern, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <span className="text-purple-400 text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-slate-300">{pattern}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p className="text-slate-400">
                  Nenhum padrão crítico identificado. Seu sistema parece relativamente equilibrado.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            Insights Principais
          </h2>
          <div className="space-y-4">
            {results.insights.length > 0 ? (
              results.insights.map((insight, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50"
                >
                  <p className="text-slate-300 leading-relaxed">{insight}</p>
                </div>
              ))
            ) : (
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <p className="text-slate-300">
                  Continue explorando sua história familiar. Cada sessão revela novas camadas.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-400" />
            Recomendações para Integração
          </h2>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
            <ul className="space-y-4">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-purple-400 text-xs">✓</span>
                  </div>
                  <p className="text-slate-300">{rec}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Healing Phrases Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Frases de Cura Para Praticar
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {getHealingPhrasesSummary(results.intention).map((phrase, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50"
              >
                <p className="text-slate-300 italic text-center">"{phrase}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Continue Sua Jornada de Cura
          </h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Esta sessão plantou sementes importantes. Para aprofundar o processo,
            explore outras áreas do seu sistema familiar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/onboarding")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full"
            >
              Nova Sessão
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 py-6 rounded-full"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            💜 Este relatório é pessoal e confidencial. As constelações são uma ferramenta
            de autoconhecimento e não substituem acompanhamento terapêutico profissional.
          </p>
        </div>
      </div>
    </div>
  );
}

function getRecommendations(results: DiagnosticoResults): string[] {
  const base = [
    "Nas próximas 24-48 horas, beba bastante água e descanse. Seu sistema está processando.",
    "Evite tomar decisões importantes hoje. Deixe os insights sedimentarem.",
  ];

  const intentionRecs: Record<string, string[]> = {
    relationships: [
      "Pratique a frase: 'Eu honro o que foi. Agora estou livre para o novo.'",
      "Observe padrões nos seus relacionamentos sem julgamento. Apenas perceba.",
    ],
    prosperity: [
      "Escreva uma carta de gratidão aos seus ancestrais pelo que eles construíram.",
      "Permita-se receber algo pequeno hoje — um elogio, um presente, uma gentileza.",
    ],
    family: [
      "Se for seguro, olhe fotos antigas da família. Observe quem está e quem não está.",
      "Considere incluir membros 'excluídos' em suas orações ou pensamentos.",
    ],
    purpose: [
      "Pergunte-se: 'O que EU quero?' — separando seus desejos das expectativas familiares.",
      "Dê um pequeno passo na direção do que seu coração pede. Qualquer passo conta.",
    ],
    health: [
      "Cuide do seu corpo hoje com carinho extra. Ele carrega sua história.",
      "Considere terapias corporais que ajudem a liberar tensões ancestrais.",
    ],
  };

  const specific = intentionRecs[results.intention] || [];
  return [...base, ...specific];
}

function getHealingPhrasesSummary(intention: string): string[] {
  const phrases: Record<string, string[]> = {
    relationships: [
      "Eu mereço amor e estou aberto(a) para recebê-lo.",
      "Honro quem veio antes. Agora sigo meu próprio caminho.",
    ],
    prosperity: [
      "Eu me permito ter mais do que meus pais tiveram.",
      "O que é meu vem até mim com facilidade.",
    ],
    family: [
      "Todos pertencem. Eu dou a cada um seu lugar.",
      "O que aconteceu entre vocês é de vocês. Eu sou apenas o filho(a).",
    ],
    purpose: [
      "Eu tenho permissão para viver minha própria vida.",
      "Meu caminho honra meus ancestrais ao ser autêntico.",
    ],
    health: [
      "Minha vida é minha. Meu corpo é meu.",
      "Eu escolho a vida e a saúde.",
    ],
    curiosity: [
      "Eu pertenço a esta família.",
      "Olho para meus pais com amor e gratidão.",
    ],
  };

  return phrases[intention] || phrases.curiosity;
}
