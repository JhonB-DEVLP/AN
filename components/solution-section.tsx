import { 
  Zap, 
  GitBranch, 
  CalendarCheck, 
  UserCheck, 
  ArrowRightLeft, 
  Database, 
  type LucideIcon 
} from "lucide-react"

// --- Interfaces ---
interface SolutionItem {
  icon: LucideIcon
  title: string
  description: string
}

// --- Dados ---
const solutions: SolutionItem[] = [
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Responda cada mensagem em menos de 3 segundos, 24 horas por dia, 7 dias por semana."
  },
  {
    icon: GitBranch,
    title: "Fluxos de Conversa Inteligentes",
    description: "Guie pacientes por diálogos inteligentes que parecem um humano se comunicando."
  },
  {
    icon: CalendarCheck,
    title: "Agendamento de Consultas",
    description: "Agende, confirme e lembre automaticamente os pacientes de suas consultas."
  },
  {
    icon: UserCheck,
    title: "Qualificação de Pacientes",
    description: "Colete informações importantes antecipadamente para sua equipe focar no que importa."
  },
  {
    icon: ArrowRightLeft,
    title: "Transferência Perfeita para Humanos",
    description: "Casos complexos são transferidos para sua equipe com todo o contexto da conversa."
  },
  {
    icon: Database,
    title: "Integração com Sistemas",
    description: "Sincronize agendamentos e dados de pacientes automaticamente com seu CRM ou software médico."
  }
]

// --- Sub-componente (Card) ---
const SolutionCard = ({ solution }: { solution: SolutionItem }) => (
  <div className="bg-card rounded-2xl p-6 border border-border hover:border-[#00f6ff]/30 hover:shadow-lg hover:shadow-[#00f6ff]/5 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#00f6ff]/20 to-[#00d1b6]/20 flex items-center justify-center mb-4 group-hover:from-[#00f6ff]/30 group-hover:to-[#00d1b6]/30 transition-colors">
      <solution.icon className="w-6 h-6 text-[#00f6ff]" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
  </div>
)

// --- Componente Principal ---
export function SolutionSection() {
  return (
    <section id="solucao" className="py-16 lg:py-24 px-4 bg-[#101719]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 lg:mb-16">
          
          {/* 👇 SEU NOVO DESIGN APLICADO AQUI 👇 */}
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/20 inline-block mb-4">
            A SOLUÇÃO
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Assistentes de IA que vendem e tornam <br></br>pacientes recorrentes.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme a comunicação e a forma de vender da sua clínica com automação inteligente que somente a Nextech pode proporcionar.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>

      </div>
    </section>
  )
}