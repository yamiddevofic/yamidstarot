import ConoceMasButton from "../ConoceMasButton";
export const AboutSection = () => (
  <section id="sobre-mí" className=" bg-gray-900 pt-[7%] pb-[15%] md:pt-[8%] md:pb-[8%]">
    <div className="container mx-auto px-4 ">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
        <div className="relative group order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all duration-300" />
          <img
            src="./yamidtarot-3.png"
            alt="Yamid Tarot"
            className="relative rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-300 w-full"
          />
        </div>
        <div className="flex order-1 md:order-2 flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center md:text-left">
            Mi enfoque espiritual
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
            Combinando la sabiduría ancestral del tarot con técnicas modernas de coaching,
            ofrezco una experiencia única de autodescubrimiento y crecimiento personal.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start">
            <ConoceMasButton />
          </div>
        </div>
      </div>
    </div>
  </section>
);

