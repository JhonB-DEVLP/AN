import { 
  MessageSquareOff, 
  Clock, 
  UserMinus, 
  Users, 
  type LucideIcon 
} from "lucide-react"

// --- Interfaces ---
interface ProblemItem {
  icon: LucideIcon
  title: string
  description: string
}

// --- Dados ---
const problems: ProblemItem[] = [
  {
    icon: MessageSquareOff,
    title: "Mensagens perdidas no WhatsApp",
    description: "Pacientes entram em contato, mas nunca recebem resposta. Mensagens se acumulam, oportunidades desaparecem."
  },
  {
    icon: Clock,
    title: "Tempo de resposta lento",
    description: "Quando sua equipe responde, o paciente já agendou em outro lugar."
  },
  {
    icon: UserMinus,
    title: "Pacientes perdidos fora do horário",
    description: "50% das consultas acontecem fora do horário comercial. Isso é metade da sua receita indo embora."
  },
  {
    icon: Users,
    title: "Equipe de recepção sobrecarregada",
    description: "Sua equipe passa horas respondendo as mesmas perguntas em vez de cuidar dos pacientes."
  }
]

// --- Sub-componente (Card) ---
const ProblemCard = ({ problem }: { problem: ProblemItem }) => (
  <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-red-500/30 transition-all group">
    {/* Mantive o vermelho aqui para sinalizar "Problema" */}
    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
      <problem.icon className="w-6 h-6 text-red-400" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
  </div>
)

// --- Componente Principal ---
export function ProblemSection() {
  return (
    <section id="problema" className="py-16 lg:py-24 px-4 bg-[#141c1f]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 lg:mb-16">
          
          {/* Badge com o design solicitado (Ciano) */}
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/20 inline-block mb-4">
            O PROBLEMA
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Sua clínica está perdendo pacientes todos os dias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O WhatsApp sobrecarregado está custando consultas, receita e a confiança dos pacientes. Você pode mudar isso hoje.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <ProblemCard key={problem.title} problem={problem} />
          ))}
        </div>

      </div>
    </section>
  )
}