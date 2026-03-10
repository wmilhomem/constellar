import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/frontend/components/ui/button";
import {
  Heart,
  Sparkles,
  TreePine,
  Users,
  ArrowRight,
  Pause,
  Play,
  Volume2,
  Moon,
  Sun,
  Star,
} from "lucide-react";

type SessionPhase = 
  | "intro"
  | "grounding"
  | "visualization"
  | "exploration"
  | "healing"
  | "integration"
  | "closing";

type DiagnosticoResults = {
  totalWeight: number;
  severity: "low" | "medium" | "high";
  patterns: string[];
  insights: string[];
  intention: string;
  emotionalState: string;
};

const phaseData: Record<SessionPhase, { title: string; duration: number }> = {
  intro: { title: "Abertura", duration: 60 },
  grounding: { title: "Ancoragem", duration: 90 },
  visualization: { title: "Visualização", duration: 120 },
  exploration: { title: "Exploração", duration: 180 },
  healing: { title: "Movimento de Cura", duration: 150 },
  integration: { title: "Integração", duration: 90 },
  closing: { title: "Fechamento", duration: 60 },
};

const phases: SessionPhase[] = [
  "intro",
  "grounding",
  "visualization",
  "exploration",
  "healing",
  "integration",
  "closing",
];

export default function Sessao() {
  const navigate = useNavigate();
  const [currentPhase, setCurrentPhase] = useState<SessionPhase>("intro");
  const [isPlaying, setIsPlaying] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [results, setResults] = useState<DiagnosticoResults | null>(null);
  const [phaseProgress, setPhaseProgress] = useState(0);

  useEffect(() => {
    const storedResults = sessionStorage.getItem("diagnosticoResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const duration = phaseData[currentPhase].duration;
    const interval = setInterval(() => {
      setPhaseProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 / duration);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentPhase, isPlaying]);

  const currentPhaseIndex = phases.indexOf(currentPhase);
  const totalProgress = ((currentPhaseIndex + phaseProgress / 100) / phases.length) * 100;

  const handleNextPhase = () => {
    const nextIndex = currentPhaseIndex + 1;
    if (nextIndex < phases.length) {
      setShowContent(false);
      setTimeout(() => {
        setCurrentPhase(phases[nextIndex]);
        setPhaseProgress(0);
        setShowContent(true);
      }, 500);
    } else {
      // Session complete
      navigate("/resultado");
    }
  };

  const renderPhaseContent = () => {
    switch (currentPhase) {
      case "intro":
        return <IntroPhase onNext={handleNextPhase} />;
      case "grounding":
        return <GroundingPhase onNext={handleNextPhase} />;
      case "visualization":
        return <VisualizationPhase onNext={handleNextPhase} />;
      case "exploration":
        return <ExplorationPhase onNext={handleNextPhase} results={results} />;
      case "healing":
        return <HealingPhase onNext={handleNextPhase} results={results} />;
      case "integration":
        return <IntegrationPhase onNext={handleNextPhase} />;
      case "closing":
        return <ClosingPhase onNext={handleNextPhase} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 text-white flex flex-col">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Top Bar */}
      <div className="relative z-10 px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-300">
                {phaseData[currentPhase].title}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-slate-300" />
                ) : (
                  <Play className="w-4 h-4 text-slate-300" />
                )}
              </button>
              <Volume2 className="w-4 h-4 text-slate-500" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-1000"
              style={{ width: `${totalProgress}%` }}
            />
          </div>

          {/* Phase Indicators */}
          <div className="flex justify-between mt-2">
            {phases.map((phase, index) => (
              <div
                key={phase}
                className={`w-2 h-2 rounded-full transition-all ${
                  index <= currentPhaseIndex
                    ? "bg-purple-400"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div
          className={`max-w-2xl w-full transition-all duration-500 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {renderPhaseContent()}
        </div>
      </div>
    </div>
  );
}

function IntroPhase({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
        <Sparkles className="w-12 h-12 text-purple-400" />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Sua Sessão Começa Agora
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed max-w-lg mx-auto">
          Encontre uma posição confortável. Feche os olhos se desejar.
          Permita-se estar presente neste momento.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 max-w-md mx-auto">
        <p className="text-slate-400 italic">
          "O que não é trazido à consciência chega como destino."
        </p>
        <p className="text-slate-500 text-sm mt-2">— Carl Jung</p>
      </div>

      <Button
        onClick={onNext}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-6 rounded-full text-lg"
      >
        Estou Pronto(a)
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}

function GroundingPhase({ onNext }: { onNext: () => void }) {
  const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [breathCount, setBreathCount] = useState(0);

  useEffect(() => {
    const sequence = ["inhale", "hold", "exhale"] as const;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % 3;
      setBreathPhase(sequence[currentIndex]);
      
      if (currentIndex === 0) {
        setBreathCount((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const breathText = {
    inhale: "Inspire profundamente...",
    hold: "Segure...",
    exhale: "Expire lentamente...",
  };

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Ancoragem
        </h2>
        <p className="text-slate-400">
          Vamos acalmar a mente e conectar com o corpo
        </p>
      </div>

      {/* Breathing Circle */}
      <div className="flex items-center justify-center py-8">
        <div
          className={`w-48 h-48 rounded-full border-4 border-purple-500/50 flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${
            breathPhase === "inhale"
              ? "scale-125 bg-purple-500/20"
              : breathPhase === "hold"
              ? "scale-125 bg-purple-500/30"
              : "scale-100 bg-purple-500/10"
          }`}
        >
          <span className="text-xl text-purple-300 font-medium">
            {breathText[breathPhase]}
          </span>
        </div>
      </div>

      <p className="text-slate-500">
        Respiração {breathCount + 1} de 3
      </p>

      {breathCount >= 2 && (
        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full animate-fade-in"
        >
          Continuar
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      )}
    </div>
  );
}

function VisualizationPhase({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);

  const visualizations = [
    {
      text: "Imagine que você está em um lugar seguro e acolhedor. Um lugar onde você pode ver claramente.",
      duration: 5000,
    },
    {
      text: "À sua frente, começa a se formar uma imagem. São membros da sua família — pais, avós, talvez outros que você nem conheceu.",
      duration: 6000,
    },
    {
      text: "Observe como eles estão posicionados. Quem está perto de quem? Alguém parece isolado? Alguém está de costas?",
      duration: 6000,
    },
    {
      text: "Não force nada. Apenas observe o que aparece naturalmente na sua mente.",
      duration: 5000,
    },
  ];

  useEffect(() => {
    if (step < visualizations.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, visualizations[step].duration);
      return () => clearTimeout(timer);
    }
  }, [step, visualizations.length]);

  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/30">
        <Users className="w-10 h-10 text-indigo-400" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Visualize Sua Família
        </h2>
      </div>

      {/* Visualization Text */}
      <div className="min-h-[120px] flex items-center justify-center">
        <p className="text-xl text-slate-300 leading-relaxed max-w-lg mx-auto animate-fade-in">
          {visualizations[step].text}
        </p>
      </div>

      {/* Family Constellation Visual */}
      <div className="relative w-64 h-64 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20" />
        
        {/* Family member representations */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500/50 border-2 border-blue-400" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-8 h-8 rounded-full bg-pink-500/50 border-2 border-pink-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500/50 border-2 border-purple-400 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-slate-500/30 border border-slate-500/50" />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-slate-500/30 border border-slate-500/50" />
      </div>

      {step === visualizations.length - 1 && (
        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full"
        >
          Continuar Exploração
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      )}
    </div>
  );
}

function ExplorationPhase({ onNext, results }: { onNext: () => void; results: DiagnosticoResults | null }) {
  const [currentInsight, setCurrentInsight] = useState(0);

  const baseInsights = [
    "Observe sua posição em relação aos seus pais. Você consegue olhar para eles? Eles conseguem olhar para você?",
    "Há alguém que parece carregar um peso maior? Alguém que parece não ter seu lugar?",
    "Perceba se há algum membro da família que você sente vontade de se aproximar... ou de se afastar.",
  ];

  const patternInsights = results?.patterns.map((pattern) => {
    const insights: Record<string, string> = {
      "Luto não processado na família": "Você percebe alguém em luto? Alguém que parece olhar para longe, para um lugar que ninguém mais vê?",
      "Filhos não nascidos excluídos": "Há espaços vazios na constelação? Lugares onde deveria haver alguém, mas não há?",
      "Exclusão de membro familiar": "Alguém está de costas para o grupo? Alguém que foi afastado, mesmo que não fisicamente?",
      "Padrão de relacionamentos interrompidos": "Como os casais estão posicionados? Há harmonia ou tensão entre as duplas?",
      "Identificação com ancestral": "Você se sente atraído por alguém em particular? Alguém cujo destino ressoa com o seu?",
    };
    return insights[pattern] || null;
  }).filter(Boolean) || [];

  const allInsights = [...baseInsights, ...patternInsights];

  useEffect(() => {
    if (currentInsight < allInsights.length - 1) {
      const timer = setTimeout(() => {
        setCurrentInsight(currentInsight + 1);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [currentInsight, allInsights.length]);

  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30">
        <TreePine className="w-10 h-10 text-emerald-400" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Exploração do Campo Sistêmico
        </h2>
        <p className="text-slate-400">
          Deixe as imagens e sensações virem até você
        </p>
      </div>

      {/* Insight Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 min-h-[160px] flex items-center justify-center">
        <p className="text-xl text-slate-200 leading-relaxed animate-fade-in" key={currentInsight}>
          {allInsights[currentInsight]}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2">
        {allInsights.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index <= currentInsight ? "bg-purple-400" : "bg-slate-700"
            }`}
          />
        ))}
      </div>

      {currentInsight === allInsights.length - 1 && (
        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full"
        >
          Movimento de Cura
          <Heart className="w-5 h-5 ml-2" />
        </Button>
      )}
    </div>
  );
}

function HealingPhase({ onNext, results }: { onNext: () => void; results: DiagnosticoResults | null }) {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const getHealingPhrases = () => {
    const basePhrases = [
      { speaker: "Você para seus pais", phrase: "Queridos pai e mãe, eu os vejo. Eu honro tudo o que vocês viveram." },
      { speaker: "Você para seus pais", phrase: "Eu recebo a vida que vocês me deram. É o suficiente." },
    ];

    const intentionPhrases: Record<string, { speaker: string; phrase: string }[]> = {
      relationships: [
        { speaker: "Você para ex-parceiros", phrase: "Eu honro o que tivemos. Agora estou livre para seguir." },
        { speaker: "Você para si mesmo", phrase: "Eu mereço amor. Eu me permito receber." },
      ],
      prosperity: [
        { speaker: "Você para seus ancestrais", phrase: "O que pertence a vocês fica com vocês. O que é meu, eu posso receber." },
        { speaker: "Você para si mesmo", phrase: "Eu me permito ter mais do que meus pais tiveram." },
      ],
      family: [
        { speaker: "Você para membros afastados", phrase: "Vocês pertencem a esta família. Eu dou a vocês um lugar no meu coração." },
        { speaker: "Você para seus pais", phrase: "O que aconteceu entre vocês é de vocês. Eu sou apenas o filho." },
      ],
      purpose: [
        { speaker: "Você para seus ancestrais", phrase: "Eu honro o caminho de vocês. Agora sigo o meu próprio." },
        { speaker: "Você para si mesmo", phrase: "Eu tenho permissão para viver minha própria vida." },
      ],
      health: [
        { speaker: "Você para quem carregou doenças", phrase: "Eu vejo seu sofrimento. Ele pertence a você." },
        { speaker: "Você para si mesmo", phrase: "Minha vida é minha. Meu corpo é meu." },
      ],
    };

    const intention = results?.intention || "curiosity";
    const specificPhrases = intentionPhrases[intention] || [];

    return [...basePhrases, ...specificPhrases, 
      { speaker: "Você para todo o sistema", phrase: "Eu pertenço a esta família. E agora olho para frente." }
    ];
  };

  const healingPhrases = getHealingPhrases();

  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-500/20 border border-pink-500/30">
        <Heart className="w-10 h-10 text-pink-400" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Frases de Cura
        </h2>
        <p className="text-slate-400">
          Repita internamente cada frase. Sinta o que elas movem em você.
        </p>
      </div>

      {/* Healing Phrase Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 space-y-4">
        <p className="text-sm text-purple-400 uppercase tracking-wider">
          {healingPhrases[currentPhrase].speaker}
        </p>
        <p className="text-2xl text-white leading-relaxed italic font-light">
          "{healingPhrases[currentPhrase].phrase}"
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => currentPhrase > 0 && setCurrentPhrase(currentPhrase - 1)}
          disabled={currentPhrase === 0}
          className="border-slate-700 text-slate-300 disabled:opacity-30"
        >
          Anterior
        </Button>
        
        <div className="flex gap-1">
          {healingPhrases.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPhrase ? "bg-purple-400 w-4" : "bg-slate-700"
              }`}
            />
          ))}
        </div>

        {currentPhrase < healingPhrases.length - 1 ? (
          <Button
            onClick={() => setCurrentPhrase(currentPhrase + 1)}
            className="bg-slate-800 hover:bg-slate-700 text-white"
          >
            Próxima
          </Button>
        ) : (
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
          >
            Integrar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

function IntegrationPhase({ onNext }: { onNext: () => void }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/30">
        <Sun className="w-10 h-10 text-amber-400" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Momento de Integração
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed max-w-lg mx-auto">
          Permita que tudo o que foi movido encontre seu lugar dentro de você.
          Não precisa entender — apenas sentir.
        </p>
      </div>

      {/* Timer Circle */}
      <div className="flex items-center justify-center py-4">
        <div className="w-32 h-32 rounded-full border-4 border-amber-500/30 flex items-center justify-center bg-amber-500/10">
          <span className="text-3xl text-amber-400 font-light">{timer}s</span>
        </div>
      </div>

      <p className="text-slate-500 text-sm">
        Respire profundamente. Sinta seus pés no chão.
      </p>

      {timer === 0 && (
        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full animate-fade-in"
        >
          Finalizar Sessão
          <Star className="w-5 h-5 ml-2" />
        </Button>
      )}
    </div>
  );
}

function ClosingPhase({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30">
        <Sparkles className="w-12 h-12 text-purple-400" />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Sua Sessão Foi Concluída
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed max-w-lg mx-auto">
          Você deu um passo importante na direção da cura.
          As sementes foram plantadas — algumas florescerão em dias,
          outras em semanas.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 max-w-md mx-auto">
        <p className="text-slate-400">
          💡 <span className="text-slate-300">Dica:</span> Beba água, descanse,
          e evite decisões importantes nas próximas horas. Seu sistema está
          processando.
        </p>
      </div>

      <Button
        onClick={onNext}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-6 rounded-full text-lg"
      >
        Ver Meu Relatório
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
