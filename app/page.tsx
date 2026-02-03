"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import heroImg from "./heroimagen.png";

export default function Home() {
  const [selectedDuration, setSelectedDuration] = useState<"15min" | "30min">("30min");
  const [menuOpen, setMenuOpen] = useState(false);
  const [waName, setWaName] = useState("");
  const [waPhone, setWaPhone] = useState("");
  const [waEmail, setWaEmail] = useState("");
  const [waDate, setWaDate] = useState("");
  const [waTopic, setWaTopic] = useState("");
  const [waMessage, setWaMessage] = useState("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      text: "Encontrar a la Dra. Barcia fue un antes y un después en mi vida. Su calidez y profesionalismo me ayudaron a entender mis emociones y a construir una mejor versión de mí misma.",
      initials: "MR",
      name: "María R.",
      since: "Paciente desde 2022",
    },
    {
      text: "Las sesiones online fueron perfectas para mi ritmo de vida. Me sentí escuchado y comprendido desde el primer momento. Muy recomendable.",
      initials: "CL",
      name: "Carlos L.",
      since: "Paciente desde 2023",
    },
    {
      text: "Después de años buscando ayuda profesional, por fin encontré un espacio donde me siento segura. La Dra. Barcia tiene un don para escuchar sin juzgar.",
      initials: "LP",
      name: "Laura P.",
      since: "Paciente desde 2021",
    },
    {
      text: "Gracias a la terapia pude superar mi ansiedad y recuperar el control de mi vida. Cada sesión fue un paso hacia adelante. Eternamente agradecido.",
      initials: "JM",
      name: "Jorge M.",
      since: "Paciente desde 2023",
    },
    {
      text: "Mi relación de pareja estaba en un punto crítico. Con el acompañamiento de la Dra. Barcia aprendimos a comunicarnos de verdad. Hoy somos más fuertes.",
      initials: "AV",
      name: "Andrea V.",
      since: "Paciente desde 2024",
    },
    {
      text: "Nunca pensé que hablar con alguien pudiera cambiar tanto mi perspectiva. Me ayudó a entender mis patrones y a soltar lo que no me pertenecía.",
      initials: "DF",
      name: "Daniel F.",
      since: "Paciente desde 2022",
    },
    {
      text: "El proceso de duelo fue muy difícil, pero tener a la Dra. Barcia como guía hizo toda la diferencia. Su empatía es genuina y se nota en cada sesión.",
      initials: "SG",
      name: "Sofía G.",
      since: "Paciente desde 2023",
    },
    {
      text: "Empecé terapia con mucho escepticismo, pero desde la primera sesión sentí confianza. Hoy tengo herramientas que uso todos los días para mi bienestar.",
      initials: "RT",
      name: "Roberto T.",
      since: "Paciente desde 2024",
    },
    {
      text: "Quería entender más sobre mi situación, porque siempre he tenido apego muy fuerte cuando he estado en pareja, la psicóloga me ayudó a entenderme a mi mismo y superar todos esos miedos al abandono.",
      initials: "RT",
      name: "Patricio L.",
      since: "Paciente desde 2024",
    },
  ];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 2;
  const maxTestimonialIndex = testimonials.length - visibleCount;
  const slidePercent = isMobile ? 100 : 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev >= maxTestimonialIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxTestimonialIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Cal.com URL with Spanish language and styling
  const calUrl = `https://cal.com/tori-softt-dza5dw/${selectedDuration}?embed=true&layout=month_view&theme=light&lang=es&brandColor=%236B7B5E`;

  return (
    <div className="min-h-screen bg-[var(--sand-beige)] organic-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--sand-beige)]/90 backdrop-blur-sm border-b border-[var(--olive-green)]/15">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-[var(--font-playfair)] font-semibold text-2xl text-[var(--warm-grey)] tracking-wide">
            Dra. Barcia
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("agendar")}
              className="bg-[var(--olive-green)] text-white px-6 py-2.5 rounded-full text-sm hover:bg-[var(--olive-green-hover)] transition-colors"
            >
              Agendar Cita
            </button>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[var(--warm-grey)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="md:hidden bg-[var(--sand-beige)]/95 backdrop-blur-sm border-t border-[var(--olive-green)]/10 px-6 py-4 space-y-3">
            <button
              onClick={() => { scrollToSection("inicio"); setMenuOpen(false); }}
              className="block w-full text-left text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => { scrollToSection("sobre-mi"); setMenuOpen(false); }}
              className="block w-full text-left text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide py-2"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => { scrollToSection("servicios"); setMenuOpen(false); }}
              className="block w-full text-left text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => { scrollToSection("contacto"); setMenuOpen(false); }}
              className="block w-full text-left text-[var(--warm-grey)] hover:text-[var(--olive-green)] transition-colors text-sm tracking-wide py-2"
            >
              Contacto
            </button>
            <button
              onClick={() => { scrollToSection("agendar"); setMenuOpen(false); }}
              className="w-full bg-[var(--olive-green)] text-white py-3 rounded-full text-sm hover:bg-[var(--olive-green-hover)] transition-colors mt-2"
            >
              Agendar Cita
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-end md:items-center">
        {/* Background Image — mobile: heromovil, desktop: heroimagen1 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heromovil.png"
            alt="Dra. Barcia - Psicóloga Clínica en su consultorio"
            fill
            sizes="100vw"
            quality={100}
            unoptimized
            className="object-cover object-top md:hidden"
            priority
          />
          <Image
            src={heroImg}
            alt="Dra. Barcia - Psicóloga Clínica en su consultorio"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover object-center hidden md:block"
            priority
          />
        </div>
        {/* Mobile gradient: white from bottom to middle */}
        <div className="absolute inset-0 z-[1] md:hidden bg-[linear-gradient(to_top,white_0%,rgba(255,255,255,0.95)_25%,rgba(255,255,255,0.7)_40%,transparent_50%)]"></div>
        {/* Desktop gradient: left side */}
        <div className="absolute inset-0 z-[1] hidden md:block bg-[linear-gradient(to_right,rgba(232,234,237,0.95)_0%,rgba(232,234,237,0.85)_25%,rgba(232,234,237,0.3)_45%,transparent_55%)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-8 pt-24 md:py-32 w-full">
          <div className="max-w-xl">
            <div className="space-y-4 md:space-y-6">
              <span className="inline-block bg-[var(--olive-green)] md:bg-transparent text-white md:text-[var(--moss-green)] text-sm tracking-widest uppercase font-medium px-4 py-1.5 md:px-0 md:py-0 rounded-full">
                Psicóloga Clínica
              </span>
              <h1 className="font-[var(--font-playfair)] font-semibold text-3xl md:text-5xl lg:text-6xl text-[var(--warm-grey)] leading-tight">
                Tu bienestar emocional es mi prioridad
              </h1>
              {/* Paragraph hidden on mobile, shown on desktop */}
              <p className="hidden md:block text-[var(--warm-grey-light)] text-base md:text-lg leading-relaxed max-w-lg">
                Te acompaño en un proceso de autoconocimiento y crecimiento personal, en un espacio seguro, cálido y sin juicios. La terapia es un camino de transformación: cada sesión te acerca a una vida más consciente, equilibrada y plena, promoviendo cambios reales y duraderos.
              </p>
              {/* Shorter version for mobile */}
              <p className="md:hidden text-[var(--warm-grey-light)] text-sm leading-relaxed">
                Te acompaño en un espacio seguro y cálido hacia tu bienestar emocional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
              <button
                onClick={() => scrollToSection("agendar")}
                className="bg-[var(--olive-green)] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base hover:bg-[var(--olive-green-hover)] transition-all hover:shadow-lg shadow-md"
              >
                Agenda tu primera sesión
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="border-2 border-[var(--warm-grey-lighter)] text-[var(--warm-grey)] px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base hover:border-[var(--olive-green)] hover:text-[var(--olive-green)] transition-colors bg-white/50 backdrop-blur-sm"
              >
                Conoce más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="w-full aspect-square rounded-[2rem] bg-[var(--linen)] overflow-hidden shadow-lg relative">
                <Image
                  src="/assets/WhatsApp%20Image%202026-01-16%20at%2008.54.05.jpeg"
                  alt="Dra. Barcia - Psicóloga Clínica"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
              {/* Decorative organic shape */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2rem] bg-[var(--moss-green)]/10"></div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <p className="text-[var(--moss-green)] text-sm tracking-widest uppercase">
                Conóceme
              </p>
              <h2 className="font-[var(--font-playfair)] font-semibold text-3xl md:text-4xl text-[var(--warm-grey)]">
                Sobre Mí
              </h2>
              <div className="space-y-4 text-[var(--warm-grey-light)] leading-relaxed text-sm md:text-base">
                <p>
                  Soy psicóloga clínica, con más de 20 años de experiencia acompañando a personas en su camino hacia el bienestar emocional. A lo largo de mi trayectoria he tenido el privilegio de trabajar con muchas personas en distintos momentos de su vida, apoyándolas en procesos de cambio, sanación y crecimiento personal.
                </p>
                <p>
                  Mi enfoque es humanista e integrativo, lo que me permite adaptar diferentes herramientas terapéuticas a las necesidades únicas de cada persona, siempre desde un acompañamiento respetuoso, empático y personalizado. Creo firmemente que cada ser humano tiene la capacidad de sanar y crecer; mi rol como terapeuta es facilitar ese proceso, ofreciendo un espacio de escucha genuina, contención emocional y recursos prácticos que te ayuden a avanzar.
                </p>
                <p>
                  La terapia es un espacio para comprenderte mejor, fortalecer tus recursos internos y generar cambios positivos y duraderos en tu vida.
                </p>
                <p>
                  Fuera del consultorio, disfruto del contacto con la naturaleza y soy amante de los gatos, quienes en ocasiones también participan de las sesiones, aportando un ambiente aún más cercano y acogedor.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-[var(--sand-beige)] rounded-full text-sm text-[var(--warm-grey)]">
                  Terapia Individual
                </span>
                <span className="px-4 py-2 bg-[var(--sand-beige)] rounded-full text-sm text-[var(--warm-grey)]">
                  Ansiedad y Estrés
                </span>
                <span className="px-4 py-2 bg-[var(--sand-beige)] rounded-full text-sm text-[var(--warm-grey)]">
                  Autoestima
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[var(--sand-beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--moss-green)] text-sm tracking-widest uppercase mb-4">
              Cómo puedo ayudarte
            </p>
            <h2 className="font-[var(--font-playfair)] font-semibold text-3xl md:text-4xl text-[var(--warm-grey)] mb-6">
              Servicios
            </h2>
            <p className="text-[var(--warm-grey-light)] max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
              Trabajo con sesiones presenciales y en modalidad online, ambas con la misma calidad y enfoque clínico. La diferencia de tarifa responde únicamente a la modalidad de atención, ya que la sesión online no implica costos de consultorio, manteniendo siempre el mismo acompañamiento terapéutico.
            </p>
            <p className="text-[var(--warm-grey-light)] max-w-3xl mx-auto leading-relaxed text-sm md:text-base mt-3">
              Además, para favorecer la continuidad del proceso, cuento con paquetes mensuales de 4 sesiones, pensados para quienes desean un seguimiento más constante y un ajuste en el costo total.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 - Terapia Individual */}
            <div className="bg-[var(--cream)] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 bg-[var(--moss-green)]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--olive-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-playfair)] font-semibold text-xl text-[var(--warm-grey)] mb-1">
                Terapia Individual
              </h3>
              <p className="text-[var(--moss-green)] text-sm font-medium mb-4">60 minutos</p>
              <p className="text-[var(--warm-grey-light)] text-sm leading-relaxed flex-1">
                La terapia individual es un espacio de confianza y acompañamiento, donde trabajamos de manera conjunta en tu bienestar emocional y desarrollo personal. A través del proceso terapéutico podrás comprender mejor tus emociones, pensamientos y comportamientos, así como identificar aquello que hoy te genera malestar.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--sand-beige)]">
                <p className="text-[var(--warm-grey)] font-semibold text-sm mb-2">Tarifas</p>
                <div className="space-y-1 text-sm text-[var(--warm-grey-light)]">
                  <p>Presencial: <span className="text-[var(--warm-grey)] font-medium">USD $80</span></p>
                  <p>Online: <span className="text-[var(--warm-grey)] font-medium">USD $60</span></p>
                  <p>Paquete mensual online (4 sesiones): <span className="text-[var(--warm-grey)] font-medium">USD $220</span></p>
                </div>
                <a
                  href="https://wa.me/593995321569?text=Hola%2C%20me%20interesa%20la%20Terapia%20Individual."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--olive-green)] text-sm font-medium mt-4 hover:text-[var(--olive-green-hover)] transition-colors"
                >
                  Consultar
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Card 2 - Terapia de Pareja */}
            <div className="bg-[var(--cream)] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 bg-[var(--moss-green)]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--olive-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-playfair)] font-semibold text-xl text-[var(--warm-grey)] mb-1">
                Terapia de Pareja
              </h3>
              <p className="text-[var(--moss-green)] text-sm font-medium mb-4">90 minutos</p>
              <p className="text-[var(--warm-grey-light)] text-sm leading-relaxed flex-1">
                Espacio terapéutico para parejas que quieran aprender a resolver sus conflictos, mejorar su comunicación, fortalecer su conexión emocional y, en definitiva, adquirir herramientas para conseguir una relación más sana y satisfactoria.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--sand-beige)]">
                <p className="text-[var(--warm-grey)] font-semibold text-sm mb-2">Tarifas</p>
                <div className="space-y-1 text-sm text-[var(--warm-grey-light)]">
                  <p>Presencial: <span className="text-[var(--warm-grey)] font-medium">USD $95</span></p>
                  <p>Online: <span className="text-[var(--warm-grey)] font-medium">USD $75</span></p>
                  <p>Paquete mensual online (4 sesiones): <span className="text-[var(--warm-grey)] font-medium">USD $280</span></p>
                </div>
                <a
                  href="https://wa.me/593995321569?text=Hola%2C%20me%20interesa%20la%20Terapia%20de%20Pareja."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--olive-green)] text-sm font-medium mt-4 hover:text-[var(--olive-green-hover)] transition-colors"
                >
                  Consultar
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Card 3 - Sesión Online */}
            <div className="bg-[var(--cream)] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-14 h-14 bg-[var(--moss-green)]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--olive-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-playfair)] font-semibold text-xl text-[var(--warm-grey)] mb-4">
                Sesión Online
              </h3>
              <p className="text-[var(--warm-grey-light)] text-sm leading-relaxed flex-1">
                Accede a tus sesiones desde cualquier lugar con conexión a internet, ahorrando tiempo y desplazamientos. Ideal para personas con agendas apretadas, movilidad reducida o que viven en zonas geográficas con difícil acceso a servicios de salud mental. La terapia online te brinda la oportunidad de recibir apoyo psicológico sin importar dónde te encuentres.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--sand-beige)]">
                <p className="text-[var(--olive-green)] font-semibold text-sm">
                  Misma calidad y confidencialidad que las sesiones presenciales.
                </p>
                <a
                  href="https://wa.me/593995321569?text=Hola%2C%20me%20interesa%20la%20Sesi%C3%B3n%20Online."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--olive-green)] text-sm font-medium mt-4 hover:text-[var(--olive-green-hover)] transition-colors"
                >
                  Consultar
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--moss-green)] text-sm tracking-widest uppercase mb-4">
              Conversemos
            </p>
            <h2 className="font-[var(--font-playfair)] font-semibold text-3xl md:text-4xl text-[var(--warm-grey)]">
              Contacto
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Form Column */}
            <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 flex flex-col">
              <h3 className="font-[var(--font-playfair)] font-semibold text-xl text-[var(--warm-grey)] mb-2">
                Escríbeme directamente
              </h3>
              <p className="text-[var(--warm-grey-light)] text-sm mb-8">
                Completa tus datos y te responderé a la brevedad por WhatsApp.
              </p>
              <div className="space-y-5 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wa-name" className="block text-sm text-[var(--warm-grey)] font-medium mb-2">
                      Nombre completo <span className="text-[var(--olive-green)]">*</span>
                    </label>
                    <input
                      id="wa-name"
                      type="text"
                      required
                      value={waName}
                      onChange={(e) => setWaName(e.target.value)}
                      placeholder="María García"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--warm-grey-lighter)] bg-[var(--sand-beige)]/30 text-[var(--warm-grey)] placeholder:text-[var(--warm-grey-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)]/30 focus:border-[var(--olive-green)] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="wa-phone" className="block text-sm text-[var(--warm-grey)] font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      id="wa-phone"
                      type="tel"
                      value={waPhone}
                      onChange={(e) => setWaPhone(e.target.value)}
                      placeholder="+593 99 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--warm-grey-lighter)] bg-[var(--sand-beige)]/30 text-[var(--warm-grey)] placeholder:text-[var(--warm-grey-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)]/30 focus:border-[var(--olive-green)] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="wa-email" className="block text-sm text-[var(--warm-grey)] font-medium mb-2">
                    Correo electrónico <span className="text-[var(--olive-green)]">*</span>
                  </label>
                  <input
                    id="wa-email"
                    type="email"
                    required
                    value={waEmail}
                    onChange={(e) => setWaEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--warm-grey-lighter)] bg-[var(--sand-beige)]/30 text-[var(--warm-grey)] placeholder:text-[var(--warm-grey-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)]/30 focus:border-[var(--olive-green)] transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wa-date" className="block text-sm text-[var(--warm-grey)] font-medium mb-2">
                      Fecha preferida
                    </label>
                    <input
                      id="wa-date"
                      type="date"
                      value={waDate}
                      onChange={(e) => setWaDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--warm-grey-lighter)] bg-[var(--sand-beige)]/30 text-[var(--warm-grey)] focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)]/30 focus:border-[var(--olive-green)] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="wa-topic" className="block text-sm text-[var(--warm-grey)] font-medium mb-2">
                      Motivo de consulta
                    </label>
                    <select
                      id="wa-topic"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--warm-grey-lighter)] bg-[var(--sand-beige)]/30 text-[var(--warm-grey)] focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)]/30 focus:border-[var(--olive-green)] transition-all appearance-none"
                      value={waTopic}
                      onChange={(e) => setWaTopic(e.target.value)}
                    >
                      <option value="" disabled>Selecciona</option>
                      <option value="Terapia Individual">Terapia Individual</option>
                      <option value="Terapia de Pareja">Terapia de Pareja</option>
                      <option value="Ansiedad o Estrés">Ansiedad o Estrés</option>
                      <option value="Autoestima">Autoestima</option>
                      <option value="Duelo">Duelo</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="wa-message" className="block text-sm text-[var(--warm-grey)] font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="wa-message"
                    value={waMessage}
                    onChange={(e) => setWaMessage(e.target.value)}
                    placeholder={"Indica tu vía de contacto preferida (WhatsApp, telefónico, videollamada) y si prefieres la sesión informativa de 30 minutos o agendar directamente las sesiones regulares."}
                    rows={3}
                    className="w-full h-[calc(100%-2rem)] min-h-[80px] px-4 py-3 rounded-xl border border-[var(--warm-grey-lighter)] bg-[var(--sand-beige)]/30 text-[var(--warm-grey)] placeholder:text-[var(--warm-grey-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)]/30 focus:border-[var(--olive-green)] transition-all resize-none"
                  />
                </div>
                <a
                  href={
                    waName && waEmail
                      ? `https://wa.me/593995321569?text=${encodeURIComponent(
                          [
                            `Hola, soy ${waName}.`,
                            waPhone ? `Mi teléfono: ${waPhone}.` : "",
                            `Correo: ${waEmail}.`,
                            waDate ? `Fecha preferida: ${waDate}.` : "",
                            waTopic ? `Motivo de consulta: ${waTopic}.` : "",
                            waMessage || "",
                          ].filter(Boolean).join("\n")
                        )}`
                      : undefined
                  }
                  onClick={(e) => {
                    if (!waName || !waEmail) {
                      e.preventDefault();
                      alert("Por favor completa tu nombre y correo electrónico.");
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-all shadow-md mt-auto ${
                    waName && waEmail
                      ? "bg-[var(--olive-green)] text-white hover:bg-[var(--olive-green-hover)] hover:shadow-lg cursor-pointer"
                      : "bg-[var(--olive-green)]/50 text-white/70 cursor-not-allowed"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar mensaje
                </a>
              </div>
            </div>

            {/* Images Column — matches form height */}
            <div className="relative grid grid-cols-2 gap-3 md:gap-4 grid-rows-2 min-h-[320px] md:min-h-0">
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/assets/WhatsApp%20Image%202026-01-16%20at%2009.02.26.jpeg"
                  alt="Consultorio de la Dra. Barcia"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/assets/WhatsApp%20Image%202026-01-16%20at%2008.54.06.jpeg"
                  alt="Espacio de terapia"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/assets/WhatsApp%20Image%202026-01-16%20at%2009.00.59%20(1).jpeg"
                  alt="Ambiente acogedor del consultorio"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/assets/WhatsApp%20Image%202026-01-16%20at%2009.01.00.jpeg"
                  alt="Dra. Barcia en consulta"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </div>

              {/* Floating mini card */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl px-4 py-2.5 md:px-5 md:py-3 shadow-lg border border-white/50">
                <p className="text-[var(--warm-grey)] text-xs md:text-sm leading-relaxed text-center font-medium">
                  Un espacio seguro, cálido y libre de juicios donde podrás
                  explorar tus emociones con total confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="agendar" className="py-24 bg-[var(--linen)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--moss-green)] text-sm tracking-widest uppercase mb-4">
              Da el primer paso
            </p>
            <h2 className="font-[var(--font-playfair)] font-semibold text-3xl md:text-4xl text-[var(--warm-grey)] mb-6">
              Agenda tu Cita
            </h2>
            <div className="text-[var(--warm-grey-light)] max-w-2xl mx-auto space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                Elige el tipo de sesión y el horario que mejor se adapte a ti.
              </p>
              <p>
                Te invito a reservar una <strong className="text-[var(--warm-grey)]">cita informativa</strong>, un primer espacio de encuentro donde podremos conversar con calma, conocer tu motivo de consulta y valorar juntas/os cómo puedo acompañarte en tu proceso.
              </p>
              <p>
                Este espacio está pensado para que puedas resolver tus dudas, sentirte escuchado/a y tomar una decisión con mayor claridad y tranquilidad.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg relative">
                <Image
                  src="/assets/WhatsApp%20Image%202026-01-16%20at%2009.02.26%20(1).jpeg"
                  alt="Dra. Barcia - Espacio de terapia"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-3xl bg-[var(--moss-green)]/10"></div>
            </div>

            {/* Card Side */}
            <div className="order-1 md:order-2">
              {/* Session Info Card */}
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 text-center mb-8">
                <div className="w-16 h-16 bg-[var(--moss-green)]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[var(--olive-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-playfair)] font-semibold text-xl text-[var(--warm-grey)] mb-2">
                  Cita Informativa
                </h3>
                <p className="text-[var(--moss-green)] font-medium mb-4">
                  Duración: 20–30 minutos
                </p>
                <p className="text-3xl font-semibold text-[var(--olive-green)] mb-6">
                  USD $20
                </p>
                <p className="text-[var(--warm-grey-light)] text-sm leading-relaxed mb-6">
                  Ponte en contacto y da el primer paso hacia tu bienestar emocional, en un entorno de respeto, confidencialidad y cuidado.
                </p>
                <p className="text-[var(--warm-grey-light)] text-xs">
                  Horarios disponibles: 16h00 a 20h00
                </p>
              </div>

              {/* Contact CTA */}
              <div className="text-center">
                <a
                  href="https://wa.me/593995321569?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20informativa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[var(--olive-green)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--olive-green-hover)] transition-all hover:shadow-lg shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[var(--sand-beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--moss-green)] text-sm tracking-widest uppercase mb-4">
              Lo que dicen mis pacientes
            </p>
            <h2 className="font-[var(--font-playfair)] font-semibold text-3xl md:text-4xl text-[var(--warm-grey)]">
              Testimonios
            </h2>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${testimonialIndex * slidePercent}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-[var(--cream)] p-8 rounded-3xl h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-[var(--moss-green)]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[var(--warm-grey-light)] italic leading-relaxed mb-6 flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--sand-beige)] rounded-full flex items-center justify-center">
                        <span className="text-[var(--olive-green)] font-medium text-sm">{t.initials}</span>
                      </div>
                      <div>
                        <p className="text-[var(--warm-grey)] text-sm font-medium">{t.name}</p>
                        <p className="text-[var(--warm-grey-light)] text-xs">{t.since}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxTestimonialIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === testimonialIndex
                    ? "bg-[var(--olive-green)] w-6"
                    : "bg-[var(--warm-grey-lighter)] hover:bg-[var(--moss-green)] w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[var(--warm-grey)] text-white/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-[var(--font-playfair)] font-semibold text-2xl text-white mb-4">
                Dra. Barcia
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Psicóloga clínica dedicada a tu bienestar emocional.
                Terapia personalizada en un ambiente cálido y acogedor.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Enlaces</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("inicio")} className="block text-white/60 hover:text-white transition-colors text-sm">
                  Inicio
                </button>
                <button onClick={() => scrollToSection("sobre-mi")} className="block text-white/60 hover:text-white transition-colors text-sm">
                  Sobre Mí
                </button>
                <button onClick={() => scrollToSection("servicios")} className="block text-white/60 hover:text-white transition-colors text-sm">
                  Servicios
                </button>
                <button onClick={() => scrollToSection("contacto")} className="block text-white/60 hover:text-white transition-colors text-sm">
                  Contacto
                </button>
                <button onClick={() => scrollToSection("agendar")} className="block text-white/60 hover:text-white transition-colors text-sm">
                  Agendar Cita
                </button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4">Contacto</h4>
              <div className="space-y-3 text-sm">
                <a href="mailto:contacto@drabarcia.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contacto@drabarcia.com
                </a>
                <a href="https://wa.me/593995321569" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm space-y-1">
            <p>&copy; {new Date().getFullYear()} Dra. Barcia. Todos los derechos reservados.</p>
            <p>
              Sitio web creado por{" "}
              <a
                href="https://torisoftt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Torisoftt
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/593995321569?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20tus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-auto md:h-auto md:pl-5 md:pr-4 md:py-3 bg-[var(--olive-green)] text-white rounded-full shadow-lg hover:bg-[var(--olive-green-hover)] hover:shadow-xl transition-all group"
      >
        <span className="hidden md:inline text-sm font-medium max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:mr-3 transition-all duration-300">
          Estamos para ti
        </span>
        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
