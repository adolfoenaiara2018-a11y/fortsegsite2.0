import React from "react";
import { motion } from "framer-motion";

const whatsappLink = "https://wa.me/5534992744960?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Fortseg%20Consultoria%20em%20Seguran%C3%A7a%20do%20Trabalho.";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <header className="bg-[#1E3A8A] text-white fixed w-full top-0 z-50 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide">Fortseg</h1>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="hover:text-[#F97316]">Início</a></li>
            <li><a href="#sobre" className="hover:text-[#F97316]">Sobre Nós</a></li>
            <li><a href="#servicos" className="hover:text-[#F97316]">Serviços</a></li>
            <li><a href="#contato" className="hover:text-[#F97316]">Fale Conosco</a></li>
          </ul>
        </nav>
      </header>

      {/* Início */}
      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091215367-59ab6c1df62b?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-2xl">
          <img
            src="/logo-fortseg.png"
            alt="Logo Fortseg"
            className="w-32 mx-auto mb-4"
          />
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fortseg Consultoria em Segurança do Trabalho
          </motion.h2>
          <motion.p className="text-lg text-gray-200 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Prevenção, conformidade e proteção para o seu negócio.
          </motion.p>
          <motion.a
            href="#contato"
            className="bg-[#F97316] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#fb923c] inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Entre em Contato
          </motion.a>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Sobre Nós</h2>

          <motion.div className="mb-6 text-lg text-gray-700 leading-relaxed" variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <p className="mb-4">
              A <strong>Fortseg Consultoria em Segurança do Trabalho</strong> é uma empresa especializada em oferecer soluções completas e estratégicas na área de Saúde e Segurança do Trabalho (SST). Nosso objetivo é garantir que empresas de todos os portes estejam em conformidade com as normas regulamentadoras, reduzam riscos e promovam um ambiente de trabalho mais seguro e produtivo.
            </p>

            <p className="mb-4">
              Com uma equipe técnica altamente qualificada, atuamos de forma consultiva e personalizada, identificando necessidades, elaborando programas, e implementando ações de prevenção e controle. Trabalhamos lado a lado com nossos clientes, construindo relações baseadas em confiança, eficiência e resultados.
            </p>

            <p>
              Na Fortseg, acreditamos que segurança é mais do que uma obrigação legal — é um valor essencial para o crescimento sustentável das empresas. Por isso, estamos comprometidos em oferecer suporte contínuo, tecnologia e conhecimento técnico para que nossos parceiros alcancem excelência em SST.
            </p>

            <p className="mt-4 font-semibold">Fortseg — Segurança que gera confiança e tranquilidade para o seu negócio.</p>
          </motion.div>

          {/* Galeria de Imagens with animation */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div className="rounded-xl overflow-hidden shadow-lg" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Equipe Fortseg em reunião"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-[#1E3A8A]">Trabalho em equipe e comprometimento</p>
              </div>
            </motion.div>

            <motion.div className="rounded-xl overflow-hidden shadow-lg" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <img
                src="https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=80"
                alt="Consultoria e planejamento de segurança"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-[#1E3A8A]">Consultoria personalizada para cada cliente</p>
              </div>
            </motion.div>

            <motion.div className="rounded-xl overflow-hidden shadow-lg" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Entrega de EPIs e orientações de segurança"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-[#1E3A8A]">Cuidado com as pessoas e a segurança no trabalho</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-10">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">PGR - Programa de Gerenciamento de Riscos</h3>
              <p className="text-gray-700">Identificação e controle de riscos ocupacionais conforme a NR-1, promovendo um ambiente mais seguro.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">PCMSO - Programa de Controle Médico de Saúde Ocupacional</h3>
              <p className="text-gray-700">Planejamento e acompanhamento médico periódico dos colaboradores, conforme a NR-7.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</h3>
              <p className="text-gray-700">Documento essencial para fins previdenciários, elaborado conforme as condições ambientais reais de trabalho.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Gestão de eSocial</h3>
              <p className="text-gray-700">Gerenciamento completo das obrigações de SST no eSocial, garantindo conformidade e redução de riscos fiscais.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Treinamentos em SST</h3>
              <p className="text-gray-700">Capacitações em NRs e práticas de segurança para colaboradores e gestores, com foco em prevenção e produtividade.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">Assessoria Contínua em SST</h3>
              <p className="text-gray-700">Suporte técnico permanente para empresas que buscam excelência e atualização constante em segurança do trabalho.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fale Conosco */}
      <section id="contato" className="py-20 bg-[#1E3A8A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Fale Conosco</h2>
          <p className="mb-6 text-lg">
            Entre em contato pelo WhatsApp e garanta mais segurança para sua empresa.
          </p>
          <div className="mb-6">
            <p>📍 Rua Nair de Castro Moraes, 448 – Bairro Valim de Melo – Uberaba/MG</p>
            <p>📞 WhatsApp: (34) 99274-4960</p>
          </div>
          <form className="grid gap-4 max-w-md mx-auto text-black">
            <input
              type="text"
              placeholder="Seu nome"
              className="p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="p-3 rounded-lg"
            />
            <textarea
              placeholder="Sua mensagem"
              rows="4"
              className="p-3 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F97316] text-white font-semibold py-3 rounded-lg hover:bg-[#fb923c]"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Fale conosco via WhatsApp">
        <motion.div className="fixed right-6 bottom-6 z-50 flex items-center space-x-3 bg-[#25D366] hover:bg-[#1eb954] text-white px-4 py-3 rounded-full shadow-lg cursor-pointer" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} whileHover={{ scale: 1.04 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3c.52 0 1 .2 1.36.56l2.2 2.2c.36.36.59.86.59 1.39 0 .58-.22 1.14-.62 1.56l-1.2 1.2a11.72 11.72 0 0 0 5.2 5.2l1.2-1.2c.42-.4.98-.62 1.56-.62.53 0 1.03.23 1.39.59l2.2 2.2c.36.36.56.84.56 1.36z"></path>
          </svg>
          <span className="font-semibold">Fale Conosco</span>
        </motion.div>
      </a>

      {/* Rodapé */}
      <footer className="bg-[#0f1724] text-gray-300 py-6 text-center mt-10">
        <p>
          © {new Date().getFullYear()} Fortseg Consultoria em Segurança do Trabalho. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
