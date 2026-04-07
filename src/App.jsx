import React, { useState, useEffect } from 'react'
import {
  CheckCircle,
  Calendar,
  FileText,
  Users,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Menu,
  X as CloseIcon,
  ZapIcon,
  Mail,
  Phone,
  Settings,
  BarChart3,
  Box,
  Truck,
  Briefcase,
  Check,
  X,
  Search,
  Code,
  LineChart,
} from 'lucide-react'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


const navToHome = () => {
  setIsMenuOpen(false)

  if (currentPage !== 'home') {
    setCurrentPage('home')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

  const navToPrograma = () => {
    setCurrentPage('programa')
    setIsMenuOpen(false)
  }

const handleNav = (sectionId) => {
  setIsMenuOpen(false)

  const performScroll = () => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerOffset = 96
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }

  if (currentPage !== 'home') {
    setCurrentPage('home')

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(performScroll, 50)
      })
    })
  } else {
    performScroll()
  }
}

  const Brand = () => (
    <button onClick={navToHome} className="flex items-center gap-3 group cursor-pointer focus:outline-none">
      <img
        src="/logo-icon.png"
        alt="AgentySolutions"
        className="h-11 w-11 md:h-12 md:w-12 object-contain rounded-xl shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform"
      />
      <div className="flex flex-col items-start leading-none">
        <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">
          Agenty<span className="text-blue-600">Solutions</span>
        </span>
        <span className="hidden md:block text-[10px] uppercase tracking-[0.22em] text-slate-500 mt-1">
          Automatización y sistemas
        </span>
      </div>
    </button>
  )

  const HomeView = () => (
    <div className="animate-fade-in">
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Gestión 360: Tu negocio conectado
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.08]">
            Convierte tu negocio en un sistema <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              que funciona sin fricción
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
            Diseñamos e implementamos sistemas de automatización que centralizan la operativa empresarial y eliminan
            cuellos de botella, permitiendo que tu organización escale con control total y eficiencia máxima.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={navToPrograma}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
            >
              Analizar mi negocio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNav('servicios')}
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Más información
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Clock />, text: 'Atención inmediata' },
              { icon: <Calendar />, text: 'Agenda siempre llena' },
              { icon: <Zap />, text: 'Sin tareas manuales' },
              { icon: <TrendingUp />, text: 'Resultados reales' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-1">{item.icon}</div>
                <span className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider text-center">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistemas que hacen que tu negocio funcione de verdad</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
              Automatizamos y conectamos las áreas clave de tu empresa para eliminar tareas manuales, reducir errores y
              mejorar la eficiencia operativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Control financiero sin fricción',
                desc: 'Centraliza ingresos, gastos y facturación mediante flujos automatizados que eliminan el error humano.',
                icon: <BarChart3 />,
              },
              {
                title: 'Operativa integrada y alto rendimiento',
                desc: 'Sincroniza tus proyectos y equipos bajo un sistema único que garantiza la trazabilidad del trabajo.',
                icon: <Briefcase />,
              },
              {
                title: 'Optimización de activos y logística',
                desc: 'Gestiona tu inventario y cadena de suministro con procesos inteligentes que aseguran la disponibilidad de recursos.',
                icon: <Box />,
              },
              {
                title: 'Estandarización de compras y pagos',
                desc: 'Estandariza la relación con proveedores y el control de costes para proteger el margen de beneficio.',
                icon: <Zap />,
              },
              {
                title: 'Gestión interna estructurada',
                desc: 'Estructura la información de talento y procesos internos para facilitar la toma de decisiones y el crecimiento.',
                icon: <Users />,
              },
              {
                title: 'Ecosistema de negocio sincronizado',
                desc: 'Consigue que todas las áreas de tu empresa operen como un solo sistema cohesionado y escalable.',
                icon: <Settings />,
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Cómo transformamos tu negocio <br className="hidden md:block" />
              <span className="text-blue-500">en un sistema automatizado</span>
            </h2>
            <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-light">
              No implementamos herramientas aisladas. Diseñamos sistemas completos que optimizan tu operativa de
              principio a fin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
            {[
              {
                num: '01',
                title: 'Diagnóstico operativo',
                desc: 'Identificamos ineficiencias operativas, redundancias y puntos críticos de fuga de rendimiento.',
                icon: <Search className="text-blue-400" />,
              },
              {
                num: '02',
                title: 'Arquitectura del sistema',
                desc: 'Diseñamos la lógica de automatización y el mapa estratégico de integración entre herramientas.',
                icon: <Code className="text-blue-400" />,
              },
              {
                num: '03',
                title: 'Implementación estratégica',
                desc: 'Desplegamos el sistema en tu operativa diaria asegurando una integración técnica sin fricción.',
                icon: <Zap className="text-blue-400" />,
              },
              {
                num: '04',
                title: 'Optimización continua',
                desc: 'Medimos resultados, refinamos procesos y mejoramos el sistema según el comportamiento real del negocio.',
                icon: <LineChart className="text-blue-400" />,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-black text-white/10 group-hover:text-blue-500/30 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-red-500/5 border border-red-500/10">
              <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-3">
                <X className="w-6 h-6" />
                Sin sistema
              </h3>
              <ul className="space-y-5">
                {[
                  'Procesos manuales y repetitivos',
                  'Información desorganizada',
                  'Dependencia de personas',
                  'Falta de control',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ZapIcon size={80} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-emerald-400 flex items-center gap-3">
                <Check className="w-6 h-6" />
                Con Agenty
              </h3>
              <ul className="space-y-5">
                {[
                  'Procesos automatizados',
                  'Información centralizada',
                  'Operativa escalable',
                  'Control en tiempo real',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Impacto operativo medible</h2>
            <p className="text-slate-600 text-base md:text-lg mt-4">
              Mejoras concretas en eficiencia, control y capacidad de respuesta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: '-70%', text: 'tiempo en gestión de clientes', color: 'text-blue-600' },
              { value: '+40%', text: 'citas confirmadas', color: 'text-indigo-600' },
              { value: 'Segundos', text: 'respuesta automática inmediata', color: 'text-emerald-600' },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-10 rounded-[2rem] bg-white border border-slate-100 text-center hover:shadow-lg transition-all"
              >
                <div className={`text-4xl font-extrabold mb-2 ${metric.color}`}>{metric.value}</div>
                <p className="text-slate-600 font-medium tracking-tight">{metric.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            Indicadores orientativos según procesos automatizados e integraciones aplicadas.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trabajamos con un enfoque claro: sistemas, no parches</h2>
              <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                No implementamos herramientas aisladas ni soluciones genéricas. Analizamos cómo funciona tu negocio,
                diseñamos un sistema adaptado y lo implementamos para que funcione de forma integrada y sostenible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Visión de negocio',
                  text: 'Entendemos procesos, no solo herramientas. Cada decisión tiene impacto operativo.',
                },
                {
                  title: 'Implementación real',
                  text: 'No nos quedamos en teoría. Construimos sistemas que funcionan en el día a día.',
                },
                {
                  title: 'Escalabilidad',
                  text: 'Diseñamos soluciones que crecen contigo, no que se rompen al aumentar volumen.',
                },
              ].map((pillar, idx) => (
                <div key={idx} className="py-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">
            Tu negocio puede funcionar mejor de lo que imaginas
          </h2>
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 space-y-6">
            <p>La mayoría de empresas no tienen un problema de clientes, sino de organización y procesos.</p>
            <p>
              Cuando automatizas y conectas las áreas clave, todo cambia:
              <br className="hidden md:block" />
              <span className="text-blue-600 font-semibold italic">
                menos errores, más control y más capacidad de crecimiento.
              </span>
            </p>
          </div>

          <button
            onClick={navToPrograma}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 group mb-8"
          >
            Solicitar análisis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium uppercase tracking-wider">
            {['Sin compromiso', 'Evaluación real de tu negocio', 'Propuesta clara y aplicable'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check size={16} className="text-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const ProgramaView = () => (
    <div className="animate-fade-in pt-32 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <Settings className="w-4 h-4 animate-spin-slow" />
            Automatización inteligente
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Programa Agenty</h1>
          <p className="text-xl md:text-2xl text-blue-600 font-bold mb-8 uppercase tracking-widest">Gestión de procesos</p>

          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-900/5 mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <BarChart3 className="text-blue-600" />
              Objetivo del Programa
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed italic">
              &quot;Automatizar procesos de negocio y flujos de trabajo relacionados con los aspectos operativos o
              productivos para aumentar su productividad.&quot;
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Servicios</h2>
            <p className="text-slate-600 text-lg mb-8">Soluciones que permiten automatizar procesos tales como:</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Contabilidad y finanzas', icon: <FileText /> },
                { title: 'Facturación', icon: <BarChart3 /> },
                { title: 'Proyectos', icon: <Briefcase /> },
                { title: 'Inventario', icon: <Box /> },
                { title: 'Compras y pagos', icon: <Zap /> },
                { title: 'Recursos humanos', icon: <Users /> },
                { title: 'Logística', icon: <Truck /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-600 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl"></div>

            <h3 className="text-3xl font-bold mb-4">Analizamos tu negocio y diseñamos tu sistema</h3>
            <p className="text-slate-400 mb-8 font-light text-sm">
              Cuéntanos cómo funciona tu empresa y detectaremos oportunidades reales de automatización y mejora
              operativa.
            </p>

            <form action="https://formsubmit.co/ventas@agentysolutions.com" method="POST" target="_blank" className="space-y-6">
              <input type="hidden" name="_subject" value="Nuevo lead desde AgentySolutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Nombre</label>
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Teléfono</label>
                <input
                  name="telefono"
                  type="tel"
                  placeholder="+34 ..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">
                  Información de operativa
                </label>
                <textarea
                  name="mensaje"
                  required
                  placeholder="Ej: gestión de clientes, facturación, citas, tareas internas, etc."
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none placeholder:text-slate-500"
                ></textarea>
                <p className="text-xs text-slate-500">Cuanto más concreto, mejor podremos ayudarte.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                Solicitar análisis
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 ${
          scrolled ? 'py-3 shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Brand />

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <button onClick={navToHome} className="hover:text-blue-600 transition-colors text-sm">
              Inicio
            </button>
            <button onClick={() => handleNav('servicios')} className="hover:text-blue-600 transition-colors text-sm">
              Servicios
            </button>
            <button onClick={() => handleNav('contacto')} className="hover:text-blue-600 transition-colors text-sm">
              Contacto
            </button>
            <button
              onClick={navToPrograma}
              className={`px-4 py-2 rounded-lg transition-all text-sm ${
                currentPage === 'programa' ? 'text-blue-600 font-bold bg-blue-50 shadow-sm' : 'hover:text-blue-600'
              }`}
            >
              Programa Agenty
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-6 space-y-4 animate-fade-in shadow-xl">
            <button onClick={navToHome} className="block w-full text-left font-medium text-slate-600">
              Inicio
            </button>
            <button onClick={() => handleNav('servicios')} className="block w-full text-left font-medium text-slate-600">
              Servicios
            </button>
            <button onClick={() => handleNav('contacto')} className="block w-full text-left font-medium text-slate-600">
              Contacto
            </button>
            <button onClick={navToPrograma} className="block w-full text-left font-medium text-blue-600 font-bold">
              Programa Agenty
            </button>
          </div>
        )}
      </nav>

      <main>{currentPage === 'home' ? <HomeView /> : <ProgramaView />}</main>

      <section id="contacto" className="py-20 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:info@agentysolutions.com"
                  className="text-lg text-slate-600 hover:text-blue-600 transition-colors font-medium break-all"
                >
                  info@agentysolutions.com
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:+34691409903"
                  className="text-lg text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  +34 691 40 99 03
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
