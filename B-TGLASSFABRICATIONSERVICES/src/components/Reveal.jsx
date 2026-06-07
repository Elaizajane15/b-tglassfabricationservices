import { useInView } from "../lib/hooks";

export default function Reveal({ children, delay = 0, from = "bottom", style = {} }) {
  const [ref, v] = useInView();
  const transforms = { bottom:"translateY(40px)", left:"translateX(-40px)", right:"translateX(40px)", scale:"scale(0.94)" };
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "none" : (transforms[from] || "translateY(40px)"),
      transition: `opacity .85s cubic-bezier(.16,1,.3,1) ${delay}s, transform .85s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}
