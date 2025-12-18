"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "top bottom",
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}
