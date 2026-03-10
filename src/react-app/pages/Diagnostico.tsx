import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/react-app/components/ui/button";
import { Progress } from "@/react-app/components/ui/progress";
import {
  ArrowRight,
  ArrowLeft,
  TreePine,
  AlertCircle,
} from "lucide-react";

type Question = {
  id: string;
  category: string;
  question: string;
  type: "single" | "multiple" | "scale" | "text";
  options?: { id: string; label: string; weight?: number }[];
  hint?: string;
};

const questions: Question[] = [
  // Estrutura Familiar
  {
    id: "family_structure",
    category: "Estrutura Familiar",
    question: "Como você descreveria a estrutura da sua família de origem?",
    type: "single",
    options: [
      { id: "nuclear", label: "Pais casados, família unida" },
      { id: "divorced", label: "Pais separados/divorciados", weight: 1 },
      { id: "single_parent", label: "Criado por um dos pais", weight: 1 },
      { id: "extended", label: "Criado por avós ou outros parentes", weight: 2 },
      { id: "complex", label: "Família reconstituída (padrasto/madrasta)", weight: 1 },
    ],
  },
  {
    id: "siblings",
    category: "Estrutura Familiar",
    question: "Qual é sua posição entre os irmãos?",
    type: "single",
    options: [
      { id: "only", label: "Filho(a) único(a)" },
      { id: "first", label: "Primogênito(a)", weight: 1 },
      { id: "middle", label: "Do meio" },
      { id: "last", label: "Caçula" },
      { id: "twin", label: "Gêmeo(a)", weight: 1 },
    ],
  },
  {
    id: "losses",
    category: "Perdas e Exclusões",
    question: "Houve perdas significativas na sua família? (Selecione todas que se aplicam)",
    type: "multiple",
    options: [
      { id: "death_parent", label: "Morte de pai ou mãe", weight: 3 },
      { id: "death_sibling", label: "Morte de irmão(ã)", weight: 3 },
      { id: "death_child", label: "Morte de filho(a) na família", weight: 3 },
      { id: "miscarriage", label: "Abortos espontâneos ou provocados", weight: 2 },
      { id: "stillbirth", label: "Bebê natimorto", weight: 3 },
      { id: "early_death", label: "Mortes precoces (antes dos 30)", weight: 2 },
      { id: "suicide", label: "Suicídio na família", weight: 3 },
      { id: "none", label: "Nenhuma que eu saiba" },
    ],
    hint: "Perdas não processadas frequentemente criam emaranhamentos através das gerações.",
  },
  {
    id: "exclusions",
    category: "Perdas e Exclusões",
    question: "Existe alguém que foi 'excluído' ou sobre quem não se fala?",
    type: "multiple",
    options: [
      { id: "black_sheep", label: "A 'ovelha negra' da família", weight: 2 },
      { id: "ex_partner", label: "Ex-parceiro(a) de um dos pais", weight: 2 },
      { id: "given_away", label: "Filho(a) dado para adoção", weight: 3 },
      { id: "estranged", label: "Parente com quem ninguém fala", weight: 2 },
      { id: "criminal", label: "Alguém que cometeu crimes", weight: 2 },
      { id: "mentally_ill", label: "Alguém com doença mental escondida", weight: 2 },
      { id: "unknown", label: "Histórias que ninguém conta", weight: 1 },
      { id: "none", label: "Não que eu saiba" },
    ],
  },
  {
    id: "secrets",
    category: "Segredos",
    question: "Você tem a sensação de que existem segredos na sua família?",
    type: "scale",
    hint: "Segredos não precisam ser conhecidos para serem sentidos.",
  },
  {
    id: "parent_relationship",
    category: "Dinâmicas",
    question: "Como você descreveria sua relação com sua mãe?",
    type: "single",
    options: [
      { id: "close", label: "Próxima e amorosa" },
      { id: "distant", label: "Distante ou fria", weight: 2 },
      { id: "conflictual", label: "Conflituosa", weight: 2 },
      { id: "enmeshed", label: "Muito intensa/emaranhada", weight: 2 },
      { id: "absent", label: "Ausente", weight: 3 },
      { id: "deceased", label: "Falecida", weight: 1 },
    ],
  },
  {
    id: "father_relationship",
    category: "Dinâmicas",
    question: "Como você descreveria sua relação com seu pai?",
    type: "single",
    options: [
      { id: "close", label: "Próxima e amorosa" },
      { id: "distant", label: "Distante ou fria", weight: 2 },
      { id: "conflictual", label: "Conflituosa", weight: 2 },
      { id: "enmeshed", label: "Muito intensa/emaranhada", weight: 2 },
      { id: "absent", label: "Ausente", weight: 3 },
      { id: "unknown", label: "Nunca conheci", weight: 3 },
      { id: "deceased", label: "Falecido", weight: 1 },
    ],
  },
  {
    id: "patterns",
    category: "Padrões Percebidos",
    question: "Quais padrões você percebe se repetindo na sua vida? (Selecione todos)",
    type: "multiple",
    options: [
      { id: "relationship_fail", label: "Relacionamentos que não dão certo", weight: 2 },
      { id: "financial_blocks", label: "Dificuldades financeiras recorrentes", weight: 2 },
      { id: "health_issues", label: "Problemas de saúde similares a parentes", weight: 2 },
      { id: "self_sabotage", label: "Autossabotagem", weight: 2 },
      { id: "guilt", label: "Culpa inexplicável", weight: 2 },
      { id: "unworthiness", label: "Sensação de não merecer", weight: 2 },
      { id: "loneliness", label: "Solidão mesmo acompanhado(a)", weight: 2 },
      { id: "anger", label: "Raiva que não sabe de onde vem", weight: 2 },
    ],
  },
  {
    id: "identification",
    category: "Identificações",
    question: "Você sente que 'carrega' a dor de alguém da família?",
    type: "single",
    options: [
      { id: "yes_strongly", label: "Sim, claramente", weight: 3 },
      { id: "yes_somewhat", label: "Talvez, às vezes sinto isso", weight: 2 },
      { id: "not_sure", label: "Não tenho certeza", weight: 1 },
      { id: "no", label: "Não" },
    ],
    hint: "Às vezes carregamos emoções que não são nossas — elas pertencem a outro membro do sistema.",
  },
  {
    id: "belonging",
    category: "Pertencimento",
    question: "Você se sente verdadeiramente parte da sua família?",
    type: "scale",
    hint: "O pertencimento é uma necessidade profunda. Sua ausência pode criar buscas inconscientes.",
  },
];

export default function Diagnostico() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[] | number>>({});
  const [scaleValue, setScaleValue] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    // Reset scale value when question changes
    if (question.type === "scale") {
      setScaleValue((answers[question.id] as number) || 5);
    }
  }, [currentQuestion, question.id, question.type, answers]);

  const handleAnswer = (value: string | string[] | number) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleMultipleSelect = (optionId: string) => {
    const current = (answers[question.id] as string[]) || [];
    
    // Handle "none" option
    if (optionId === "none") {
      handleAnswer(["none"]);
      return;
    }
    
    // Remove "none" if selecting other options
    const withoutNone = current.filter(id => id !== "none");
    
    if (withoutNone.includes(optionId)) {
      handleAnswer(withoutNone.filter((id) => id !== optionId));
    } else {
      handleAnswer([...withoutNone, optionId]);
    }
  };

  const canProceed = () => {
    const answer = answers[question.id];
    if (question.type === "scale") return true;
    if (question.type === "multiple") return Array.isArray(answer) && answer.length > 0;
    return !!answer;
  };

  const handleNext = () => {
    if (question.type === "scale") {
      handleAnswer(scaleValue);
    }

    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      // Calculate results and navigate
      const results = calculateResults(answers);
      sessionStorage.setItem("diagnosticoResults", JSON.stringify(results));
      sessionStorage.setItem("diagnosticoAnswers", JSON.stringify(answers));
      navigate("/sessao");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-6 pb-4">
        <div className="max-w-2xl mx-auto">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
              <TreePine className="w-4 h-4" />
              <span>{question.category}</span>
            </div>
            <span className="text-sm text-slate-400">
              {currentQuestion + 1} de {questions.length}
            </span>
          </div>

          {/* Progress */}
          <Progress value={progress} className="h-1.5 bg-slate-800" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div
          className={`max-w-2xl w-full transition-all duration-300 ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Question */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {question.question}
            </h2>
            {question.hint && (
              <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {question.hint}
              </p>
            )}
          </div>

          {/* Answer Options */}
          <div className="mb-10">
            {question.type === "single" && (
              <SingleChoiceOptions
                options={question.options!}
                selected={answers[question.id] as string}
                onSelect={handleAnswer}
              />
            )}

            {question.type === "multiple" && (
              <MultipleChoiceOptions
                options={question.options!}
                selected={(answers[question.id] as string[]) || []}
                onSelect={handleMultipleSelect}
              />
            )}

            {question.type === "scale" && (
              <ScaleInput
                value={scaleValue}
                onChange={setScaleValue}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {currentQuestion > 0 ? (
              <Button
                variant="ghost"
                onClick={handleBack}
                className="text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Anterior
              </Button>
            ) : (
              <div />
            )}

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 rounded-full disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Próxima"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleChoiceOptions({
  options,
  selected,
  onSelect,
}: {
  options: { id: string; label: string }[];
  selected?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`w-full p-5 rounded-xl text-left transition-all ${
            selected === option.id
              ? "bg-purple-600/20 border-2 border-purple-500"
              : "bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30"
          }`}
        >
          <span className="text-white">{option.label}</span>
        </button>
      ))}
    </div>
  );
}

function MultipleChoiceOptions({
  options,
  selected,
  onSelect,
}: {
  options: { id: string; label: string }[];
  selected: string[];
  onSelect: (optionId: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`w-full p-5 rounded-xl text-left transition-all flex items-center gap-4 ${
            selected.includes(option.id)
              ? "bg-purple-600/20 border-2 border-purple-500"
              : "bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
              selected.includes(option.id)
                ? "bg-purple-500 border-purple-500"
                : "border-slate-600"
            }`}
          >
            {selected.includes(option.id) && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-white">{option.label}</span>
        </button>
      ))}
      <p className="text-center text-slate-500 text-sm mt-2">
        Selecione todas as opções que se aplicam
      </p>
    </div>
  );
}

function ScaleInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const labels = [
    "Não, de forma alguma",
    "",
    "",
    "",
    "Neutro",
    "",
    "",
    "",
    "",
    "Sim, fortemente",
  ];

  return (
    <div className="space-y-8">
      <div className="relative pt-8 pb-4 px-4">
        {/* Scale Track */}
        <div className="relative h-3 bg-slate-800 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all"
            style={{ width: `${((value - 1) / 9) * 100}%` }}
          />
        </div>

        {/* Scale Points */}
        <div className="flex justify-between mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => onChange(num)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                value === num
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-110"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-sm text-slate-400">
        <span>{labels[0]}</span>
        <span>{labels[4]}</span>
        <span>{labels[9]}</span>
      </div>
    </div>
  );
}

function calculateResults(answers: Record<string, string | string[] | number>) {
  // Calculate systemic weight
  let totalWeight = 0;
  const patterns: string[] = [];
  const insights: string[] = [];

  // Analyze losses
  const losses = answers.losses as string[] || [];
  if (losses.includes("death_parent") || losses.includes("death_sibling")) {
    patterns.push("Luto não processado na família");
    insights.push("Existe uma perda significativa que pode estar criando um campo de tristeza no sistema familiar.");
  }
  if (losses.includes("miscarriage") || losses.includes("stillbirth")) {
    patterns.push("Filhos não nascidos excluídos");
    insights.push("Irmãos que não nasceram frequentemente são excluídos da memória familiar, mas permanecem no campo sistêmico.");
  }
  if (losses.includes("suicide")) {
    patterns.push("Destino trágico na linhagem");
    insights.push("Quando há suicídio na família, membros posteriores podem sentir uma atração inconsciente por destinos similares.");
  }

  // Analyze exclusions
  const exclusions = answers.exclusions as string[] || [];
  if (exclusions.includes("black_sheep") || exclusions.includes("estranged")) {
    patterns.push("Exclusão de membro familiar");
    insights.push("Quando alguém é excluído do sistema, gerações posteriores podem repetir o destino dessa pessoa ou tentar representá-la.");
  }
  if (exclusions.includes("given_away")) {
    patterns.push("Separação de origem");
    insights.push("Filhos dados para adoção criam uma ferida no sistema que ecoa através das gerações.");
  }

  // Analyze patterns
  const perceivedPatterns = answers.patterns as string[] || [];
  if (perceivedPatterns.includes("relationship_fail")) {
    patterns.push("Padrão de relacionamentos interrompidos");
    insights.push("Dificuldades em relacionamentos podem refletir lealdades invisíveis a destinos de ancestrais.");
  }
  if (perceivedPatterns.includes("financial_blocks")) {
    patterns.push("Bloqueio de prosperidade");
    insights.push("Crenças familiares sobre dinheiro e sucesso podem estar limitando seu fluxo de abundância.");
  }
  if (perceivedPatterns.includes("self_sabotage") || perceivedPatterns.includes("unworthiness")) {
    patterns.push("Crença de não merecimento");
    insights.push("A sensação de não merecer pode vir de uma identificação com alguém que foi julgado ou excluído.");
  }

  // Analyze identification
  if (answers.identification === "yes_strongly" || answers.identification === "yes_somewhat") {
    patterns.push("Identificação com ancestral");
    insights.push("Você pode estar carregando emoções ou destinos que não são seus — eles pertencem a outro membro do sistema.");
  }

  // Analyze belonging
  const belonging = answers.belonging as number || 5;
  if (belonging < 5) {
    patterns.push("Dificuldade de pertencimento");
    insights.push("A sensação de não pertencer pode indicar que você inconscientemente tenta representar alguém que foi excluído.");
  }

  // Calculate overall weight
  Object.entries(answers).forEach(([key, value]) => {
    const q = questions.find(q => q.id === key);
    if (q?.options) {
      if (Array.isArray(value)) {
        value.forEach(v => {
          const opt = q.options?.find(o => o.id === v);
          totalWeight += opt?.weight || 0;
        });
      } else {
        const opt = q.options?.find(o => o.id === value);
        totalWeight += opt?.weight || 0;
      }
    }
  });

  // Determine severity level
  let severity: "low" | "medium" | "high" = "low";
  if (totalWeight > 15) severity = "high";
  else if (totalWeight > 8) severity = "medium";

  return {
    totalWeight,
    severity,
    patterns: patterns.slice(0, 4), // Max 4 patterns
    insights: insights.slice(0, 3), // Max 3 insights
    intention: answers.intention || "curiosity",
    emotionalState: answers.emotionalState || "neutral",
  };
}
