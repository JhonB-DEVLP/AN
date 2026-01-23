"use client"

import { useState, useEffect } from "react"
import { CheckCheck, Bot } from "lucide-react"

// --- Interfaces ---
type MessageType = "patient" | "assistant"

interface MessageItem {
  type: MessageType
  text: string
  time: string
}

// --- Dados ---
const messages: MessageItem[] = [
  {
    type: "patient",
    text: "Olá, gostaria de agendar uma limpeza dental",
    time: "10:32"
  },
  {
    type: "assistant",
    text: "Olá! Bem-vindo à Clínica Odonto Sorriso. Terei prazer em ajudá-lo a agendar uma limpeza dental. Poderia me informar seu nome, por favor?",
    time: "10:32"
  },
  {
    type: "patient",
    text: "Claro, sou Maria Santos",
    time: "10:33"
  },
  {
    type: "assistant",
    text: "Obrigado, Maria! Temos disponibilidade esta semana:\n\n- Terça-feira às 14:00\n- Quarta-feira às 10:00\n- Sexta-feira às 16:30\n\nQual horário funciona melhor para você?",
    time: "10:33"
  },
  {
    type: "patient",
    text: "Quarta-feira às 10h seria perfeito",
    time: "10:34"
  },
  {
    type: "assistant",
    text: "Excelente escolha, Maria! Agendei sua limpeza dental para quarta-feira, 24 de janeiro, às 10:00 com o Dr. Rodriguez.\n\nPor favor, chegue 10 minutos antes com seu documento. Enviaremos um lembrete no dia anterior.\n\nPosso ajudar em mais alguma coisa?",
    time: "10:34"
  }
]

// --- Sub-componentes ---

const ChatHeader = () => (
  <div className="bg-linear-to-r from-[#00f6ff] via-[#00d1b6] to-[#00f6ff] px-4 py-3 flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#101719]/20 flex items-center justify-center">
      <Bot className="w-6 h-6 text-[#101719]" />
    </div>
    <div>
      <div className="font-semibold text-[#101719]">Clínica Odonto Sorriso</div>
      <div className="text-xs text-[#101719]/70">Assistente IA</div>
    </div>
  </div>
)

const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-[#1a2125] border border-border rounded-2xl px-4 py-3">
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-[#00f6ff]/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-[#00f6ff]/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-[#00f6ff]/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  </div>
)

const MessageBubble = ({ message }: { message: MessageItem }) => {
  const isPatient = message.type === "patient"
  
  return (
    <div className={`flex ${isPatient ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isPatient
            ? "bg-linear-to-r from-[#00f6ff] to-[#00d1b6] text-[#101719]"
            : "bg-[#1a2125] text-foreground border border-border"
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className={`text-xs ${isPatient ? "text-[#101719]/70" : "text-muted-foreground"}`}>
            {message.time}
          </span>
          {isPatient && (
            <CheckCheck className="w-4 h-4 text-[#101719]/70" />
          )}
        </div>
      </div>
    </div>
  )
}

// --- Componente Principal ---

export function ConversationExample() {
  const [visibleMessages, setVisibleMessages] = useState(0)

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages])

  return (
    // 👇 ID ADICIONADO AQUI
    <section id="veja-em-acao" className="py-16 lg:py-24 px-4 bg-[#101719]">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-12 lg:mb-16">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/20 inline-block mb-4">
            VEJA EM AÇÃO
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Um exemplo real de conversa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nosso assistente IA lida com um agendamento típico com clareza, empatia e profissionalismo.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-2xl shadow-[#00f6ff]/5 max-w-lg mx-auto">
          <ChatHeader />

          <div className="p-4 space-y-3 min-h-100 bg-[#101719]">
            {messages.slice(0, visibleMessages).map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}
            
            {visibleMessages < messages.length && (
              <TypingIndicator />
            )}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Esta conversa foi conduzida inteiramente por IA, sem intervenção humana.
        </p>
      </div>
    </section>
  )
}