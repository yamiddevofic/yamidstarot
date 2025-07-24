import { services } from '../../data/services';
import { ServiceCard } from '../service/ServiceCard';

export const ServicesSection = () => (
  <section id="servicios" className="py-16 sm:py-24 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Experiencias Transformadoras
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} price={s.price} icon={s.icon} />
        ))}
      </div>
    </div>
  </section>
);
