import { useNavigate } from "react-router-dom";
import { C, IMG } from "../lib/constants";
import { LogoFull } from "./Logo";

const PAGES = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();
  const go = to => navigate(to);
  return (
    <footer style={{ background:C.navy, borderTop:"1px solid rgba(139,189,212,0.08)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.hero})`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.04, pointerEvents:"none" }} />
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"72px 48px 52px", display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:64, position:"relative" }}>
        <div>
          <LogoFull light />
          <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.2em", marginTop:20, textTransform:"uppercase" }}>Precision · Quality · Durability</p>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", lineHeight:1.85, marginTop:16, maxWidth:340 }}>Expert glass fabrication and installation for residential and commercial properties across Cebu and the Visayas.</p>
        </div>
        <div>
          <p style={{ fontSize:10, color:C.gold, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:24 }}>Pages</p>
          {PAGES.map(l => <button key={l.label} onClick={() => go(l.to)} style={{ display:"block", background:"none", border:"none", cursor:"pointer", fontSize:13, color:"rgba(255,255,255,0.45)", fontFamily:"'DM Sans',sans-serif", padding:"6px 0", textAlign:"left", letterSpacing:"0.04em", transition:"color .2s" }} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.45)"}>{l.label}</button>)}
        </div>
        <div>
          <p style={{ fontSize:10, color:C.gold, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:24 }}>Contact</p>
          {[["📞","09624920133"],["✉","info@bandtglass.com"],["📍","Carcar City, Cebu"],["🌐","bandtglass.com"]].map(([icon,val]) => (
            <div key={val} style={{ display:"flex", gap:10, marginBottom:14, alignItems:"flex-start" }}>
              <span style={{ fontSize:13 }}>{icon}</span>
              <span style={{ fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.6 }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(139,189,212,0.07)", padding:"20px 48px", maxWidth:1280, margin:"0 auto" }}>
        <p style={{ fontSize:11, color:"rgba(255,255,255,0.2)", letterSpacing:"0.06em" }}>© 2025 B &amp; T Glass Fabrication Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
