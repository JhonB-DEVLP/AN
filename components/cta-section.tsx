import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

// --- Configuração do WhatsApp ---
const WHATSAPP_NUMBER = "5581999112895"
const WHATSAPP_MESSAGE = "Olá Jhon, tudo bem? Gostaria de realizar um diagnóstico"

// Link formatado
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-24 px-4 overflow-hidden">
      {/* Background gradient (Tailwind v4 syntax) */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00f6ff] via-[#00d1b6] to-[#00f6ff]" />

      <div className="container relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101719] mb-6 text-balance">
          Vamos criar o assistente de whatsapp da sua clínica hoje mesmo!
        </h2>

        <p className="text-lg text-[#101719]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Todos ficam satisfeitos conosco. Você será o nosso próximo case de sucesso da Nextech. Sem pressão de vendas. Vamos te apresentar na prática como a IA pode transformar
          a comunicação com seus pacientes e recuperar suas consultas perdidas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          {/* Botão 1: Apenas visual (sem link por enquanto) */}
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 py-6 gap-2 group bg-[#101719] text-[#ffffff] hover:bg-[#101719] font-semibold shadow-lg cursor-default"
          >
            <Calendar className="w-5 h-5" />
            Agende um diagnóstico grátis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Botão 2: WhatsApp (Com link funcional) */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 gap-2 bg-[#ffffff] text-[#000000] hover:bg-[#ffffff]/90 font-semibold shadow-lg cursor-pointer border-0"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Fale conosco no whatsapp
            </a>
          </Button>

        </div>

        {/* Badges de rodapé */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#101719]/70 text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#101719]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Consulta grátis de 30 min
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#101719]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Proposta de solução personalizada
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#101719]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sem compromisso
          </div>
        </div>
      </div>
    </section>
  )
}