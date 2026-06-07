import { C } from "../lib/constants";

export function Logo({ size = 42, light = false }) {
  const B = light ? "#FFFFFF" : C.navy;
  const T = light ? C.glass2  : C.steel;
  const G = light ? "rgba(255,255,255,0.22)" : "rgba(139,189,212,0.28)";
  const Gs = light ? "rgba(255,255,255,0.55)" : C.glass;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <polygon points="44,6 52,13 52,80 44,73" fill={G} stroke={Gs} strokeWidth="0.9"/>
      <polygon points="52,6 62,13 62,80 52,73" fill="rgba(255,255,255,0.09)" stroke={Gs} strokeWidth="0.7" opacity="0.7"/>
      <polygon points="62,12 70,19 70,74 62,67" fill="rgba(255,255,255,0.05)" stroke={Gs} strokeWidth="0.5" opacity="0.45"/>
      <text x="4"  y="78" fontFamily="Georgia,serif" fontSize="76" fontWeight="800" fill={B} letterSpacing="-4">B</text>
      <text x="54" y="78" fontFamily="Georgia,serif" fontSize="76" fontWeight="800" fill={T} letterSpacing="-4">T</text>
      <text x="44" y="62" fontFamily="Georgia,serif" fontSize="17" fontWeight="400" fill={light?"rgba(255,255,255,0.85)":C.navy} opacity="0.9">&amp;</text>
    </svg>
  );
}

export function LogoFull({ light = false }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }}>
      <Logo size={38} light={light} />
      <div style={{ lineHeight:1.15 }}>
        <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:17, fontWeight:700, letterSpacing:"0.14em", color: light ? "#fff" : C.navy }}>B &amp; T GLASS</div>
        <div style={{ fontSize:8.5, letterSpacing:"0.22em", color: light ? "rgba(255,255,255,0.5)" : C.muted, textTransform:"uppercase", marginTop:1 }}>Fabrication Services</div>
      </div>
    </div>
  );
}
