"use client"

import { useState, useEffect  } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

// --- Configuração ---
const WHATSAPP_NUMBER = "5581999112895"
const WHATSAPP_MESSAGE =
  "Olá Jhon, tudo bem? Gostaria de agendar uma reunião para conhecer a Nextech."
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

// Links (Hardcoded em PT por enquanto, já que não temos o dicionário i18n ainda)
const NAV_ITEMS = [
  { id: "problema", label: "Problema" },
  { id: "solucao", label: "Solução" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "para-quem", label: "Para quem" },
]

// Constantes de Scroll (Iguais ao seu código)
const SCROLL_THRESHOLD = 50
const SCROLL_OFFSET = 80

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // --- Efeito de Scroll (Sua lógica otimizada) ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: `-${SCROLL_OFFSET}px 0px 0px 0px`, threshold: 0.3 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - SCROLL_OFFSET,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#101719]/90 backdrop-blur-md shadow-lg shadow-[#00f6ff]/5 py-3 border-b border-[#00f6ff]/10" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} 
          className="cursor-pointer flex items-center gap-2 group"
        >
          <Image 
            src="/Logo.png" 
            alt="Nextech Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
            width={40} 
            height={40} 
          />
          <span className="font-bold text-2xl text-foreground">
            Nextech
          </span>
        </a>

        {/* 2. NAVEGAÇÃO DESKTOP (Centralizada) */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium cursor-pointer transition-colors hover:text-[#00f6ff] ${
                activeSection === item.id 
                  ? "text-[#00f6ff]" 
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 3. AÇÕES (Direita) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Aqui entrariam ThemeToggle e LanguageSwitcher se tivéssemos a config */}
          {/* Por enquanto, mantive o botão de ação principal */}
          
          <Button
            size="lg"
            className="bg-linear-to-r from-[#00f6ff] to-[#00d1b6] text-[#101719] font-semibold border-0 hover:opacity-90 shadow-lg shadow-[#00f6ff]/25 cursor-pointer"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agende uma reunião
            </a>
          </Button>
        </div>

        {/* 4. MENU MOBILE TOGGLE */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Se quiser adicionar os toggles no mobile, coloque aqui */}
          
          <button 
            className="text-foreground hover:text-[#00f6ff] p-1 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE DROPDOWN --- */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#101719]/95 backdrop-blur-xl border-b border-[#00f6ff]/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-125 py-6 shadow-2xl" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col items-center space-y-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-medium transition-colors cursor-pointer ${
                activeSection === item.id ? "text-[#00f6ff]" : "text-muted-foreground hover:text-[#00f6ff]"
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 w-full max-w-xs">
            <Button
              size="lg"
              className="w-full bg-linear-to-r from-[#00f6ff] to-[#00d1b6] text-[#101719] font-semibold border-0"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Agende uma reunião
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}