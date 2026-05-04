import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook personalizado para detectar cuando un elemento entra en el viewport.
 * Optimizado para animaciones de entrada (fade-in, slide-up) con Glassmorphism.
 * 
 * @param {number} threshold - Porcentaje de visibilidad para activar (0 a 1).
 * @param {number} delay - Retraso en milisegundos para la activación.
 * @param {boolean} once - Si es true, no se desactiva al salir del viewport.
 * @returns {object} Objeto con { ref, isVisible, position }.
 */
export const useScrollAnimation = (threshold = 0.1, delay = 0, once = false) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento es visible y cumple el umbral
        if (entry.isIntersecting) {
          setIsVisible(true);
          setPosition(entry.boundingClientRect.top);
          
          // Si 'once' es true, desconectamos el observador para evitar reactivaciones
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          // Si no es 'once', reseteamos para permitir animaciones de salida si se desea
          setIsVisible(false);
          setPosition(0);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  return { ref, isVisible, position, delay };
};

export default useScrollAnimation;