import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/react-app/components/ui/button";
import {
  Heart,
  Sparkles,
  Users,
  TreePine,
  ArrowRight,
  Check,
  Star,
  Clock,
  Shield,
  ChevronDown,
  Play,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-white">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-900/10 to-transparent rounded-full" />
      </div>

      {/* Constellation Pattern */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Constelação Familiar Sistêmica Digital</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="block text-white/90">Desbloqueie os</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Padrões Familiares
          </span>
          <span className="block text-white/90">Que Te Limitam</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Descubra o que sua família não te contou. Em{" "}
          <span className="text-purple-400 font-semibold">15 minutos</span>,
          identifique padrões ocultos, liberte-se de emaranhamentos e encontre a
          paz que você procura.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/onboarding">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Iniciar Diagnóstico Gratuito
            </Button>
          </Link>
          <a href="#como-funciona">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8 py-6 text-lg rounded-full"
            >
              Como Funciona
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span>+2.847 vidas transformadas</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span>Sessão de 15 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            <span>100% confidencial</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-500" />
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: "💔",
      title: "Relacionamentos que se repetem",
      description:
        "Você atrai sempre o mesmo tipo de pessoa? Os mesmos conflitos surgem em diferentes relacionamentos?",
    },
    {
      icon: "🔒",
      title: "Bloqueios inexplicáveis",
      description:
        "Algo te impede de prosperar, mas você não consegue identificar o quê. Sabotagem inconsciente.",
    },
    {
      icon: "😶",
      title: "Segredos familiares",
      description:
        "Histórias não contadas, exclusões, mortes precoces, abortos — ecos que atravessam gerações.",
    },
    {
      icon: "⚡",
      title: "Emoções que não são suas",
      description:
        "Tristeza, raiva ou medo que parecem vir do nada. Você carrega fardos de outros.",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-slate-300">Você sente que algo</span>
            <br />
            <span className="text-purple-400">te segura no mesmo lugar?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A maioria dos bloqueios que enfrentamos não começa em nós. Eles vêm
            de antes — de nossa família, de nossos ancestrais.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Statement */}
        <div className="mt-16 text-center">
          <p className="text-2xl text-slate-300 font-light italic">
            "Bert Hellinger descobriu que{" "}
            <span className="text-purple-400 font-normal">
              sistemas familiares
            </span>{" "}
            seguem leis invisíveis. Quando violadas, criamos{" "}
            <span className="text-purple-400 font-normal">emaranhamentos</span>{" "}
            que passam de geração em geração."
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Sistêmico",
      description:
        "Responda perguntas sobre sua história familiar. O sistema identifica padrões e dinâmicas ocultas.",
      duration: "3 min",
      icon: TreePine,
    },
    {
      number: "02",
      title: "Mapeamento Familiar",
      description:
        "Visualize sua constelação. Veja as posições de cada membro e os campos de influência.",
      duration: "2 min",
      icon: Users,
    },
    {
      number: "03",
      title: "Sessão Guiada",
      description:
        "Frases de cura, reposicionamentos simbólicos e rituais de honra aos ancestrais.",
      duration: "8 min",
      icon: Heart,
    },
    {
      number: "04",
      title: "Insights Revelados",
      description:
        "Receba seu relatório personalizado com descobertas e orientações para integração.",
      duration: "2 min",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            O Processo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Como Funciona a Constelação Digital
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Uma jornada de autoconhecimento guiada, baseada nos princípios de
            Bert Hellinger, adaptada para o digital.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-900/80 backdrop-blur rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-purple-500/20">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-purple-500/10">
                      <step.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Time */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">
              Tempo total:{" "}
              <span className="font-semibold text-white">~15 minutos</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: "Clareza sobre padrões repetitivos",
      description:
        "Entenda por que certas situações se repetem na sua vida e nos seus relacionamentos.",
    },
    {
      title: "Liberação de cargas ancestrais",
      description:
        "Devolva simbolicamente aos seus ancestrais o que pertence a eles.",
    },
    {
      title: "Paz interior profunda",
      description:
        "Encontre seu lugar no sistema familiar e sinta a leveza de pertencer.",
    },
    {
      title: "Reconciliação interna",
      description:
        "Cure feridas antigas e restaure vínculos — mesmo com quem já partiu.",
    },
    {
      title: "Direção para decisões",
      description:
        "Tome decisões alinhadas com sua verdade, não com lealdades invisíveis.",
    },
    {
      title: "Transformação de crenças",
      description:
        "Ressignifique histórias limitantes que você absorveu da família.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Transformação
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            O Que Você Vai Descobrir
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10 shrink-0">
                  <Check className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mariana S.",
      location: "São Paulo, SP",
      text: "Eu chorei durante toda a sessão. Finalmente entendi por que sempre atraio relacionamentos onde me sinto invisível. Minha avó foi excluída da família... eu estava repetindo a história dela.",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "Ricardo L.",
      location: "Belo Horizonte, MG",
      text: "Cético no início, mas os insights foram cirúrgicos. Descobri um tio que ninguém me contou que existiu. Minha mãe confirmou tudo depois. Impressionante.",
      rating: 5,
      avatar: "RL",
    },
    {
      name: "Carla M.",
      location: "Rio de Janeiro, RJ",
      text: "Depois de anos em terapia, foi a primeira vez que senti uma mudança real. Como se um peso saísse dos meus ombros. Recomendo demais.",
      rating: 5,
      avatar: "CM",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-slate-400">
            Veja o que pessoas como você descobriram
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            A Experiência
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            O Que Esperar da Sessão
          </h2>
        </div>

        {/* Experience Description */}
        <div className="space-y-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              🌙 Uma Jornada Interior Guiada
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Você será conduzido por uma experiência meditativa onde visualizará
              sua família. Perguntas cuidadosas revelarão dinâmicas ocultas.
              Frases de cura serão oferecidas para você repetir internamente,
              criando movimentos de reconciliação no seu campo sistêmico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">
                ✨ Você vai precisar de:
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  15 minutos de privacidade
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Um ambiente tranquilo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Mente aberta
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Disposição para sentir
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">
                🔮 Você vai receber:
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Mapa da sua constelação
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Padrões identificados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Frases de cura personalizadas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  Relatório em PDF
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Investimento
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Comece Sua Jornada Hoje
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Diagnóstico
              </h3>
              <p className="text-slate-400 text-sm">
                Descubra seus padrões sistêmicos
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">Grátis</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-purple-400" />
                Questionário sistêmico completo
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-purple-400" />
                Identificação de 3 padrões
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-purple-400" />
                Prévia do mapa familiar
              </li>
            </ul>

            <Link to="/onboarding">
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 py-6 rounded-xl"
              >
                Começar Diagnóstico
              </Button>
            </Link>
          </div>

          {/* Premium Tier */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
              Mais Popular
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Sessão Completa
              </h3>
              <p className="text-purple-300 text-sm">
                Transformação profunda guiada
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">R$ 47</span>
              <span className="text-slate-400 ml-2">única vez</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-purple-400" />
                Tudo do Diagnóstico +
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-purple-400" />
                Sessão guiada completa (15 min)
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-purple-400" />
                Mapa familiar interativo
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-purple-400" />
                Frases de cura personalizadas
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-purple-400" />
                Relatório PDF completo
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Check className="w-5 h-5 text-purple-400" />
                Acesso por 30 dias
              </li>
            </ul>

            <Link to="/onboarding">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-6 rounded-xl shadow-lg shadow-purple-500/25">
                Iniciar Sessão Completa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            {/* Guarantee */}
            <p className="text-center text-sm text-slate-400 mt-4">
              🛡️ Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "A constelação digital funciona mesmo?",
      answer:
        "Sim. O campo sistêmico não conhece fronteiras físicas. Estudos mostram que visualizações guiadas e rituais simbólicos ativam as mesmas áreas cerebrais de experiências presenciais. O essencial da constelação é o movimento interno — e isso acontece em você, não no espaço ao redor.",
    },
    {
      question: "Preciso saber sobre minha família?",
      answer:
        "Não completamente. Muitas vezes, os padrões mais importantes vêm de histórias que você não conhece conscientemente. O sistema trabalha com o que você sabe e revela pistas sobre o que precisa ser investigado.",
    },
    {
      question: "É substituição de terapia?",
      answer:
        "Não. ConstelAção é uma ferramenta complementar de autoconhecimento. Se você está em acompanhamento terapêutico, nossos insights podem enriquecer seu processo. Para questões clínicas, sempre busque profissionais de saúde mental.",
    },
    {
      question: "Quanto tempo leva para sentir resultados?",
      answer:
        "Muitas pessoas relatam mudanças imediatas de perspectiva e alívio emocional. Integrações mais profundas podem se manifestar ao longo de dias ou semanas. A constelação planta sementes — algumas florescem rápido, outras precisam de tempo.",
    },
    {
      question: "Posso fazer mais de uma sessão?",
      answer:
        "Sim! Cada sessão pode focar em um tema diferente: relacionamentos, prosperidade, saúde, propósito. Recomendamos um intervalo de pelo menos 2 semanas entre sessões para permitir a integração.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Dúvidas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-700/50 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-800/50 hover:bg-slate-800/70 transition-colors"
              >
                <span className="text-white font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-slate-900/50">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Glow */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Chegou a Hora de Olhar
              <br />
              <span className="text-purple-400">Para Onde Ninguém Olhou</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Seus ancestrais carregaram histórias que você ainda sente.
              Hoje, você pode honrar o passado e libertar o futuro.
            </p>

            <Link to="/onboarding">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-7 text-xl rounded-full shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-105"
              >
                <Play className="w-6 h-6 mr-3" />
                Iniciar Minha Jornada
              </Button>
            </Link>

            <p className="mt-6 text-slate-500 text-sm">
              Diagnóstico gratuito • Sem cartão de crédito • Resultados em 15 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">ConstelAção</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © 2025 ConstelAção. Inspirado em Bert Hellinger.
          </p>
        </div>
      </div>
    </footer>
  );
}
