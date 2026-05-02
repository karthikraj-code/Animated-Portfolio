import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    let raf: number;
    const animateOuter = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 20}px, ${outerPos.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animateOuter);
    };

    const onEnterInteractive = () => {
      if (outerRef.current) {
        outerRef.current.style.width = "56px";
        outerRef.current.style.height = "56px";
        outerRef.current.style.borderColor = "#a78bfa";
        outerRef.current.style.marginLeft = "-28px";
        outerRef.current.style.marginTop = "-28px";
      }
      if (innerRef.current) {
        innerRef.current.style.opacity = "0";
      }
    };

    const onLeaveInteractive = () => {
      if (outerRef.current) {
        outerRef.current.style.width = "40px";
        outerRef.current.style.height = "40px";
        outerRef.current.style.borderColor = "#58a6ff";
        outerRef.current.style.marginLeft = "0px";
        outerRef.current.style.marginTop = "0px";
      }
      if (innerRef.current) {
        innerRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animateOuter);

    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 transition-all duration-200"
        style={{
          width: 40,
          height: 40,
          borderColor: "#58a6ff",
          willChange: "transform",
        }}
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-200"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#58a6ff",
          willChange: "transform",
        }}
      />
    </>
  );
}
