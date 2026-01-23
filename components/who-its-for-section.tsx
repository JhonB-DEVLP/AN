"use client";

import { 
  Stethoscope, 
  Smile, 
  Sparkles, 
  Activity, 
  Brain, 
  Microscope,
  Leaf,
  type LucideIcon 
} from "lucide-react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// --- Interfaces ---
interface ClinicType {
  icon: LucideIcon
  title: string
  description: string
}

// --- Dados ---
const clinicTypes: ClinicType[] = [
  {
    icon: Stethoscope,
    title: "Clínicas Médicas e Especialidades",
    description: "Cardiologia, ginecologia, pediatria, ortopedia, oftalmologia e clínica geral."
  },
  {
    icon: Smile,
    title: "Clínicas Odontológicas",
    description: "Dentistas, ortodontistas, implantodontistas e cirurgiões buco-maxilo."
  },
  {
    icon: Sparkles,
    title: "Estética e Dermatologia",
    description: "Harmonização facial, estética avançada, dermatologia e cirurgia plástica."
  },
  {
    icon: Microscope,
    title: "Laboratórios e Exames",
    description: "Análises clínicas, diagnóstico por imagem e centros de exames."
  },
  {
    icon: Leaf,
    title: "Nutrição e Emagrecimento",
    description: "Clínicas de emagrecimento, nutricionistas e acompanhamento metabólico."
  },
  {
    icon: Activity,
    title: "Fisioterapia e Reabilitação",
    description: "Traumato-ortopedia, fisioterapia esportiva, pilates clínico e recuperação."
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Psicologia, psiquiatria e centros de terapia e bem-estar emocional."
  }
]

const carouselItems = [...clinicTypes, ...clinicTypes];

// --- Sub-componente (Card) ---
const ClinicCard = ({ clinic }: { clinic: ClinicType }) => (
  <div className="
    bg-card rounded-2xl p-6 border border-border 
    hover:border-[#00f6ff]/30 hover:shadow-lg hover:shadow-[#00f6ff]/5 
    transition-all text-center group 
    w-full flex flex-col items-center justify-center select-none
    h-80 /* 👈 AQUI: Defini uma altura fixa (320px). Pode usar h-72, h-64, etc. */
  ">
    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#00f6ff]/15 to-[#00d1b6]/15 flex items-center justify-center mx-auto mb-4 group-hover:from-[#00f6ff]/25 group-hover:to-[#00d1b6]/25 transition-colors shrink-0">
      <clinic.icon className="w-7 h-7 text-[#00f6ff]" />
    </div>
    <h3 className="font-semibold text-foreground mb-2">{clinic.title}</h3>
    <p className="
      text-sm text-muted-foreground leading-relaxed px-2
      line-clamp-3 /* 👈 Proteção: Limita a 3 linhas e põe '...' se passar disso */
    ">
      {clinic.description}
    </p>
  </div>
)

// --- Componente Principal ---
export function WhoItsForSection() {
  return (
    <section id="para-quem" className="py-16 lg:py-24 px-4 bg-[#141c1f] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/20 inline-block mb-4">
            PARA QUEM
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Desenvolvido para profissionais de saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos todas as especialidades, adaptando a IA para a linguagem e necessidades de cada área.
          </p>
        </div>

        {/* Área do Carrossel */}
        <div className="cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            className="w-full py-4 [&>.swiper-wrapper]:ease-linear"
          >
            {carouselItems.map((clinic, index) => (
              // Removi o 'h-auto' e 'flex' daqui pois o Card agora tem tamanho próprio
              <SwiperSlide key={index}>
                <ClinicCard clinic={clinic} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  )
}