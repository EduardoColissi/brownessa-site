"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** atraso em ms para escalonar elementos numa mesma seção */
  delay?: number;
};

/**
 * Faz fade-up quando o conteúdo entra na viewport.
 *
 * Progressive enhancement: o conteúdo SEMPRE renderiza visível por padrão.
 * Só ativamos o estado escondido (classe `js-reveal`) depois que o componente
 * monta no cliente — assim, se o JS não rodar ou o observer falhar, nada
 * desaparece. Se o IntersectionObserver não existir, revela na hora.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  // armed = já montou no cliente e vai animar; visible = já apareceu.
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay && armed ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${armed ? "js-reveal" : ""} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
