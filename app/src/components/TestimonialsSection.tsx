import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "María G.",
    feedback: "La lectura de Yamid fue transformadora. Me dio claridad en un momento de mucha confusión.",
  },
  {
    name: "Carlos V.",
    feedback: "No solo entendí mi situación actual, sino que salí con acciones claras. Totalmente recomendable.",
  },
  {
    name: "Ana L.",
    feedback: "El enfoque místico pero aterrizado de Yamid me hizo sentir vista y guiada con respeto.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-4 bg-indigo-950 text-white text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-semibold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonios
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.blockquote
            key={index}
            className="bg-indigo-900 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-relaxed italic">“{t.feedback}”</p>
            <footer className="mt-4 text-pink-300 font-semibold">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
