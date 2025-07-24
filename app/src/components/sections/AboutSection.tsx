export const AboutSection = () => (
    <section id="sobre-mí" className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-300" />
            <img
              src="./yamidtarot.png"
              alt="Yamid Tarot"
              className="relative rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-300 w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mi enfoque espiritual
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Combinando la sabiduría ancestral del tarot con técnicas modernas de coaching,
              ofrezco una experiencia única de autodescubrimiento y crecimiento personal.
            </p>
            
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-600/40 flex items-center justify-center gap-2 transition-all">
              <span>Conoce más sobre mí</span>
              <div className="animate-[wiggle_1s_infinite]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  