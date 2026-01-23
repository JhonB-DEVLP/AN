import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-[#101719]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-5">
              <Image src="/Logo.png" alt="Nextech Logo" className="h-8 md:h-10 w-auto object-contain" width={36} height={36} />
              <span className="font-bold text-2xl text-foreground">
                Nextech
              </span>
            </a>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Agência de automações com IA, especialista em clínicas e consultórios médicos. Transformamos seu atendimento com tecnologia de ponta e revolucionando sua forma de vender.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Links Rapidos</h4>
          <ul className="space-y-2">
            <li><a href="#problema" className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors">O Problema</a></li>
            <li><a href="#solucao" className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors">Solucao</a></li>
            <li><a href="#como-funciona" className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors">Como Funciona</a></li>
            <li><a href="#para-quem" className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors">Para Quem</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contato</h4>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">nextech.reunioes@gmail.com</li>
            <li className="text-sm text-muted-foreground">+55 (81) 99911-2895</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} nextech. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors">Politica de Privacidade</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-[#00f6ff] transition-colors">Termos de Servico</a>
        </div>
      </div>
    </div>
    </footer >
  )
}
