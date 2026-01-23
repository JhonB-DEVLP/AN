// --- Interfaces ---
interface StepItem {
  number: string
  title: string
  description: string
}

// --- Dados (Com acentuação corrigida) ---
const steps: StepItem[] = [
  {
    number: "01",
    title: "Diagnóstico da Clínica",
    description: "Analisamos seu fluxo atual de comunicação com pacientes, pontos de dor e objetivos para criar a solução perfeita."
  },
  {
    number: "02",
    title: "Mapeamento de Conversas",
    description: "Mapeamos cada cenário de interação com pacientes, desde o agendamento até o acompanhamento pós-consulta."
  },
  {
    number: "03",
    title: "Treinamento do Assistente IA",
    description: "Seu assistente aprende a voz da sua clínica, serviços, protocolos e como lidar com situações complexas."
  },
  {
    number: "04",
    title: "Implantação e Otimização",
    description: "Lançamos seu assistente e melhoramos continuamente com base em dados reais de conversas e feedback."
  }
]

// --- Sub-componente (Card) ---
const StepCard = ({ step, index, isLast }: { step: StepItem; index: number; isLast: boolean }) => (
  <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-[#00f6ff]/30 transition-colors group">
    {/* Número com gradiente (bg-linear-to-r atualizado) */}
    <div className="text-5xl font-bold bg-linear-to-r from-[#00f6ff]/30 to-[#00d1b6]/30 bg-clip-text text-transparent mb-4">
      {step.number}
    </div>
    
    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
    
    {/* Linha conectora entre os passos (Apenas desktop) */}
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-[#00f6ff]/20 to-[#00d1b6]/20" />
    )}
  </div>
)

// --- Componente Principal ---
export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 px-4 bg-[#141c1f]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge Padronizada */}
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/20 inline-block mb-4">
            NOSSO MÉTODO
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Como construímos seu assistente IA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo de 4 etapas comprovado, desenvolvido especificamente para clínicas de saúde.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard 
              key={step.number} 
              step={step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}