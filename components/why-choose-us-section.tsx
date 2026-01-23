import { 
  Heart, 
  Bot, 
  Shield, 
  MessageCircle, 
  Target, 
  type LucideIcon 
} from "lucide-react"

// --- Interfaces ---
interface ReasonItem {
  icon: LucideIcon
  title: string
  description: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

// --- Dados (Esquerda) ---
const reasons: ReasonItem[] = [
  {
    icon: Heart,
    title: "Foco em saúde",
    description: "Desenvolvemos assistentes de IA exclusivamente para clínicas, não chatbots genéricos adaptados para saúde."
  },
  {
    icon: Bot,
    title: "Sem bots genéricos",
    description: "Cada assistente é treinado sob medida para os serviços e tom da sua clínica."
  },
  {
    icon: Shield,
    title: "Design com privacidade",
    description: "Desenvolvido com confidencialidade do paciente e proteção de dados como princípios fundamentais."
  },
  {
    icon: MessageCircle,
    title: "Conversas humanizadas",
    description: "Diálogo natural que os pacientes realmente gostam, não scripts robóticos."
  },
  {
    icon: Target,
    title: "Feito para conversão",
    description: "Projetado para agendar consultas, não apenas responder perguntas."
  }
]

// --- Dados (Direita - Timeline) ---
const processSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Entendemos Sua Clínica",
    description: "Aprendemos seus serviços, protocolos e voz da marca antes de escrever uma linha de código."
  },
  {
    number: "2",
    title: "Desenhamos Fluxos Personalizados",
    description: "Cada caminho de conversa é mapeado para a jornada e objetivos específicos do seu paciente."
  },
  {
    number: "3",
    title: "Otimizamos Continuamente",
    description: "Monitoramos, analisamos e melhoramos seu assistente com base em dados reais de desempenho."
  }
]

// --- Sub-componentes ---

const ReasonRow = ({ reason }: { reason: ReasonItem }) => (
  // Adicionado text-left para manter a legibilidade interna do item, mesmo se o pai for center
  <div className="flex gap-4 text-left">
    {/* Ícone com gradiente v4 */}
    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#00f6ff]/15 to-[#00d1b6]/15 flex items-center justify-center shrink-0">
      <reason.icon className="w-5 h-5 text-[#00f6ff]" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground">{reason.title}</h3>
      <p className="text-sm text-muted-foreground">{reason.description}</p>
    </div>
  </div>
)

const TimelineStep = ({ step, isLast }: { step: ProcessStep; isLast: boolean }) => (
  <>
    <div className="flex items-start gap-4 text-left">
      {/* Bolinha do Número */}
      <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#00f6ff] to-[#00d1b6] flex items-center justify-center shrink-0 shadow-lg shadow-[#00f6ff]/25">
        <span className="text-xl font-bold text-[#101719]">{step.number}</span>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </div>
    </div>
    
    {/* Linha conectora (não aparece no último item) */}
    {!isLast && (
      <div className="w-0.5 h-8 bg-linear-to-b from-[#00f6ff] to-[#00d1b6] ml-6 my-1" />
    )}
  </>
)

// --- Componente Principal ---
export function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#101719]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Textos e Lista */}
          {/* ADICIONADO: text-center (mobile) lg:text-left (desktop) */}
          <div className="text-center lg:text-left">
            
            {/* Badge Padronizada */}
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/20 inline-block mb-4">
              POR QUE NOS ESCOLHER
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Nem todos os assistentes IA são iguais
            </h2>
            
            {/* ADICIONADO: mx-auto lg:mx-0 para centralizar o bloco de texto no mobile */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Não vendemos bots genéricos. Não vendemos serviços. Nós vendemos soluções. Construímos assistentes inteligentes que entregam resultados reais para clínicas, 
              respeitam a privacidade do paciente e são projetados do zero para converter todos os seus leads em agendamentos e vendas.
            </p>
            
            {/* ADICIONADO: mx-auto lg:mx-0 e max-w para a lista não ficar muito larga no mobile */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0 lg:max-w-none">
              {reasons.map((reason) => (
                <ReasonRow key={reason.title} reason={reason} />
              ))}
            </div>
          </div>

          {/* Lado Direito: Timeline Card */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex flex-col">
              {processSteps.map((step, index) => (
                <TimelineStep 
                  key={step.number} 
                  step={step} 
                  isLast={index === processSteps.length - 1} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}