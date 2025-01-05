import  { FC, useEffect, useState } from 'react';

interface MaintenancePageProps {
  estimatedTime?: string;
  title?: string;
  description?: string;
}

const MaintenancePage: FC<MaintenancePageProps> = ({
  title = "Sitio en Mantenimiento",
  description = "Estamos realizando mejoras en nuestro sitio para brindarte una mejor experiencia. Volveremos pronto con novedades emocionantes."
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#524799] to-[#6e75e2] p-4">
      <div 
        className={`max-w-2xl mx-auto text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Card Logo */}
        <div className="w-48 h-48 mx-auto mb-8 animate-float">
          <svg 
            viewBox="0 0 512 512" 
            className="w-full h-full filter drop-shadow-lg"
            aria-hidden="true"
          >
            <g>
              <path 
                d="m444 45v357c0 16.57-13.43 30-30 30h-244c-16.57 0-30-13.43-30-30v-357c0-16.57 13.43-30 30-30h244c16.57 0 30 13.43 30 30z" 
                fill="#524799"
                className="animate-slide"
              />
              <path 
                d="m372 110v357c0 16.57-13.43 30-30 30h-244c-16.57 0-30-13.43-30-30v-357c0-16.57 13.43-30 30-30h244c16.57 0 30 13.43 30 30z" 
                fill="#8bb9ff"
              />
              <path 
                d="m372 110v357c0 16.57-13.43 30-30 30h-122v-417h122c16.57 0 30 13.43 30 30z" 
                fill="#6e75e2"
              />
              <path 
                d="m294.32 288 26.82-48.77c2.56-4.65 2.47-10.3-.23-14.86-2.7-4.57-7.61-7.37-12.91-7.37h-47.97l-27.55-41.32c-2.78-4.17-7.46-6.68-12.48-6.68s-9.7 2.51-12.48 6.68l-27.55 41.32h-47.97c-5.3 0-10.21 2.8-12.91 7.37-2.7 4.56-2.79 10.21-.23 14.86l26.82 48.77-26.82 48.77c-2.56 4.65-2.47 10.3.23 14.86 2.7 4.57 7.61 7.37 12.91 7.37h47.97l27.55 41.32c2.78 4.17 7.46 6.68 12.48 6.68s9.7-2.51 12.48-6.68l27.55-41.32h47.97c5.3 0 10.21-2.8 12.91-7.37 2.7-4.56 2.79-10.21.23-14.86z" 
                fill="#ffd845"
                // Si quieres un pulso custom:
                // className="animate-custom-pulse"
              />
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h1>
          
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
