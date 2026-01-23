"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import CountUp from "react-countup"

// --- Configuração do WhatsApp ---
const WHATSAPP_NUMBER = "5511999999999" 
const WHATSAPP_MESSAGE = "Gostaria de realizar um diagnóstico"
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// --- Types & Interfaces ---
interface MetricItem {
  value: number       // O número matemático para animar
  label: string       // O texto descritivo
  prefix?: string     // Texto antes do número (ex: "<")
  suffix?: string     // Texto depois do número (ex: "/7", "%", "s")
  decimals?: number   // Casas decimais (ex: 1 para 99.9)
}

// --- CONFIGURAÇÃO DOS CONTADORES ---
const METRICS: MetricItem[] = [
  { 
    value: 24, 
    suffix: "/7", 
    label: "Sempre Disponível" 
    // Efeito: Conta de 0 a 24 e mantém o /7 fixo (0/7 -> 10/7 -> 24/7)
  }, 
  { 
    value: 5, 
    prefix: "<", 
    suffix: "s", 
    label: "Tempo de Resposta" 
    // Efeito: <0s -> <1s -> <3s
  },
  { 
    value: 99.9, 
    decimals: 1, 
    suffix: "%", 
    label: "Dúvidas Resolvidas" 
    // Efeito: 0.0% -> 50.5% -> 99.9%
  },
  { 
    value: 45, 
    suffix: "%", 
    label: "Mais Agendamentos" 
    // Efeito: 0% -> 20% -> 45%
  },
]

// Sintaxe Tailwind v4
const GRADIENT_TEXT_CLASS = "bg-linear-to-r from-[#00f6ff] via-[#00d1b6] to-[#00f6ff] bg-clip-text text-transparent"
const PRIMARY_GRADIENT_BG = "bg-linear-to-r from-[#00f6ff] to-[#00d1b6]"

// --- Sub-components ---

const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0 bg-linear-to-b from-[#101719] via-[#101719] to-[#141c1f]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-radial from-[#00f6ff]/10 via-transparent to-transparent blur-3xl" />
    <div className="absolute bottom-0 right-0 w-100 h-100 bg-radial from-[#00d1b6]/10 via-transparent to-transparent blur-3xl" />
  </>
)

const Badge = () => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f6ff]/10 text-[#00f6ff] text-sm font-medium mb-6 border border-[#00f6ff]/20">
    <Sparkles className="w-4 h-4" />
    Assistentes de IA para clínicas e consultórios
  </div>
)

const MetricCard = ({ metric }: { metric: MetricItem }) => (
  <div className="text-center">
    <div className={`text-3xl lg:text-4xl font-bold ${GRADIENT_TEXT_CLASS}`}>
      <CountUp
        end={metric.value}
        duration={4}       // Duração de 2.5 segundos
        prefix={metric.prefix}
        suffix={metric.suffix}
        decimals={metric.decimals || 0}
        separator=","        // Separador de milhar se necessário
        enableScrollSpy={true} // Inicia apenas quando visível
        scrollSpyOnce={true}   // Executa apenas uma vez
      />
    </div>
    <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
  </div>
)

// --- Main Component ---

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 overflow-hidden">
      <BackgroundEffects />
      
      <div className="container relative mx-auto max-w-5xl text-center">
        <Badge />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance">
          Implementamos assistentes IA que automatizam conversas no WhatsApp e{" "}
          <span className={GRADIENT_TEXT_CLASS}>vendem 24 horas por dia.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          Respostas 24/7, agendamento automático, leads qualificados, follow-up, transferência perfeita para humanos 
          e uma melhor experiência para o paciente. Tudo pelo WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className={`text-base px-8 py-6 gap-2 group ${PRIMARY_GRADIENT_BG} text-[#101719] font-semibold border-0 hover:opacity-90 shadow-lg shadow-[#00f6ff]/25 cursor-pointer`}
          >
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp"
            >
              Quero meu Assistente IA
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-base px-8 py-6 gap-2 cursor-pointer border-[#ffffff] text-foreground hover:bg-[#ffffff]"
          >
            <a href="#veja-em-acao">
              <Play className="w-4 h-4" />
              Veja Como Funciona
            </a>
          </Button>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {METRICS.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  )
}