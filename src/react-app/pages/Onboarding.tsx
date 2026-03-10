import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/react-app/components/ui/button";
import {
  Heart,
  Sparkles,
  Moon,
  TreePine,
  ArrowRight,
  ArrowLeft,
  Shield,
} from "lucide-react";

type OnboardingStep = {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const steps: OnboardingStep[] = [
    {
      id: 0,
      icon: <Moon className="w-12 h-12 text-purple-400" />,
      title: "Bem-vindo à sua jornada",
      subtitle: "Um momento de encontro consigo mesmo",
      content: <WelcomeStep />,
    },
    {
      id: 1,
      icon: <Heart className="w-12 h-12 text-pink-400" />,
      title: "O que te traz aqui hoje?",
      subtitle: "Não existe resposta errada — apenas sua verdade",
      content: (
        <IntentionStep
          selected={answers.intention}
          onSelect={(value) => setAnswers({ ...answers, intention: value })}
        />
      ),
    },
    {
      id: 2,
      icon: <TreePine className="w-12 h-12 text-emerald-400" />,
      title: "Como você se sente agora?",
      subtitle: "Honre o que está presente neste momento",
      content: (
        <EmotionalStateStep
          selected={answers.emotionalState}
          onSelect={(value) =>
            setAnswers({ ...answers, emotionalState: value })
          }
        />
      ),
    },
    {
      id: 3,
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Criando um espaço seguro",
      subtitle: "Sua jornada está protegida",
      content: <SafeSpaceStep />,
    },
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const canProceed =
    currentStep === 0 ||
    currentStep === 3 ||
    (currentStep === 1 && answers.intention) ||
    (currentStep === 2 && answers.emotionalState);

  const handleNext = () => {
    if (isLastStep) {
      // Store answers in sessionStorage for the diagnostic
      sessionStorage.setItem("onboardingAnswers", JSON.stringify(answers));
      navigate("/diagnostico");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 px-6 pt-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">
              Passo {currentStep + 1} de {steps.length}
            </span>
            <span className="text-sm text-purple-400">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {/* Step Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              {currentStepData.icon}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {currentStepData.title}
            </h1>
            <p className="text-lg text-slate-400">{currentStepData.subtitle}</p>
          </div>

          {/* Step Content */}
          <div className="mb-10">{currentStepData.content}</div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {currentStep > 0 ? (
              <Button
                variant="ghost"
                onClick={handleBack}
                className="text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
            ) : (
              <div />
            )}

            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLastStep ? "Iniciar Diagnóstico" : "Continuar"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WelcomeStep() {
  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Você está prestes a iniciar uma jornada de autoconhecimento profundo.
          Através da <span className="text-purple-400">Constelação Familiar Sistêmica</span>,
          vamos explorar padrões que podem estar influenciando sua vida de formas
          que você ainda não percebeu.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Bert Hellinger descobriu que famílias seguem{" "}
          <span className="text-purple-400">ordens invisíveis</span>. Quando
          essas ordens são perturbadas — por exclusões, segredos ou destinos
          difíceis — criamos emaranhamentos que atravessam gerações.
        </p>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Sparkles className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
          <p className="text-purple-200">
            <strong>Reserve 15 minutos</strong> de privacidade. Encontre um
            lugar tranquilo onde você possa estar presente consigo mesmo.
          </p>
        </div>
      </div>
    </div>
  );
}

function IntentionStep({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const intentions = [
    {
      id: "relationships",
      emoji: "💔",
      title: "Relacionamentos",
      description: "Padrões que se repetem, dificuldade de conexão, términos",
    },
    {
      id: "prosperity",
      emoji: "🔒",
      title: "Prosperidade",
      description: "Bloqueios financeiros, autossabotagem, sensação de não merecer",
    },
    {
      id: "family",
      emoji: "👨‍👩‍👧",
      title: "Conflitos Familiares",
      description: "Rupturas, afastamentos, ressentimentos antigos",
    },
    {
      id: "purpose",
      emoji: "🌀",
      title: "Propósito e Direção",
      description: "Sensação de estar perdido, indecisão crônica, falta de clareza",
    },
    {
      id: "health",
      emoji: "💫",
      title: "Saúde e Vitalidade",
      description: "Sintomas recorrentes, peso emocional, esgotamento",
    },
    {
      id: "curiosity",
      emoji: "🔮",
      title: "Autoconhecimento",
      description: "Curiosidade sobre sua história familiar e seus padrões",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {intentions.map((intention) => (
        <button
          key={intention.id}
          onClick={() => onSelect(intention.id)}
          className={`p-6 rounded-xl text-left transition-all ${
            selected === intention.id
              ? "bg-purple-600/20 border-2 border-purple-500"
              : "bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30"
          }`}
        >
          <span className="text-3xl mb-3 block">{intention.emoji}</span>
          <h3 className="text-lg font-semibold text-white mb-1">
            {intention.title}
          </h3>
          <p className="text-sm text-slate-400">{intention.description}</p>
        </button>
      ))}
    </div>
  );
}

function EmotionalStateStep({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect: (value: string) => void;
}) {
  const states = [
    { id: "anxious", emoji: "😰", label: "Ansioso(a)" },
    { id: "sad", emoji: "😢", label: "Triste" },
    { id: "confused", emoji: "😵‍💫", label: "Confuso(a)" },
    { id: "hopeful", emoji: "🌱", label: "Esperançoso(a)" },
    { id: "curious", emoji: "🤔", label: "Curioso(a)" },
    { id: "tired", emoji: "😔", label: "Cansado(a)" },
    { id: "angry", emoji: "😤", label: "Com raiva" },
    { id: "neutral", emoji: "😐", label: "Neutro(a)" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {states.map((state) => (
          <button
            key={state.id}
            onClick={() => onSelect(state.id)}
            className={`p-6 rounded-xl text-center transition-all ${
              selected === state.id
                ? "bg-purple-600/20 border-2 border-purple-500 scale-105"
                : "bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30"
            }`}
          >
            <span className="text-4xl mb-2 block">{state.emoji}</span>
            <span className="text-sm text-slate-300">{state.label}</span>
          </button>
        ))}
      </div>
      <p className="text-center text-slate-500 text-sm">
        Não existe emoção errada. Tudo que você sente tem um lugar.
      </p>
    </div>
  );
}

function SafeSpaceStep() {
  const principles = [
    {
      icon: "🔐",
      title: "Confidencialidade Total",
      description: "Suas respostas são privadas e protegidas. Ninguém além de você terá acesso.",
    },
    {
      icon: "🕊️",
      title: "Sem Julgamento",
      description: "Não existe família perfeita. Toda história merece ser honrada.",
    },
    {
      icon: "⏸️",
      title: "Seu Ritmo",
      description: "Você pode pausar a qualquer momento. Esta é sua jornada.",
    },
    {
      icon: "💜",
      title: "Intenção de Cura",
      description: "Cada pergunta foi criada com amor e respeito ao seu processo.",
    },
  ];

  return (
    <div className="space-y-4">
      {principles.map((principle, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/50 border border-slate-700/50"
        >
          <span className="text-2xl">{principle.icon}</span>
          <div>
            <h3 className="font-semibold text-white mb-1">{principle.title}</h3>
            <p className="text-sm text-slate-400">{principle.description}</p>
          </div>
        </div>
      ))}

      <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 text-center">
        <p className="text-purple-200 italic text-lg">
          "Quando olhamos para o que foi excluído com amor, ele encontra seu lugar.
          E nós encontramos paz."
        </p>
        <p className="text-slate-400 text-sm mt-2">— Bert Hellinger</p>
      </div>
    </div>
  );
}
