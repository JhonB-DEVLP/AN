"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

// --- Configuração ---
const WHATSAPP_NUMBER = "5511999999999"
const WHATSAPP_MESSAGE =
  "Olá, gostaria de agendar uma reunião para conhecer a Nextech."
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

// Lista de Links de Navegação
const NAV_ITEMS = [
  { label: "O Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Para Quem", href: "#para-quem" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Função para fechar o menu mobile ao clicar em um link
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2 group">
            <Image src="/Logo.png" alt="Nextech Logo" className="h-8 md:h-10 w-auto object-contain" width={36} height={36} />
            <span className="font-bold text-2xl text-foreground">
              Nextech
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="lg"
              className="bg-linear-to-r from-[#00f6ff] to-[#00d1b6] text-[#101719] font-semibold border-0 hover:opacity-90 shadow-lg shadow-[#00f6ff]/25 cursor-pointer"
              asChild
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma reunião
              </a>
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-[#00f6ff] transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border absolute left-0 right-0 shadow-2xl h-screen sm:h-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-base text-muted-foreground hover:text-[#00f6ff] transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Button
              className="mt-4 bg-linear-to-r from-[#00f6ff] to-[#00d1b6] text-[#101719] font-semibold border-0 hover:opacity-90"
              asChild
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma reunião
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
