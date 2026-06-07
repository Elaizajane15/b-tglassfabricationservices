import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollY } from "../lib/hooks";
import { C } from "../lib/constants";
import { LogoFull } from "./Logo";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const scrolled = scrollY > 60;

  const go = to => { navigate(to); setOpen(false); };

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        transition:"all .4s ease",
        background: scrolled ? "rgba(13,27,53,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,189,212,0.12)" : "none",
      }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px", height:72, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={() => go("/")} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
            <LogoFull light />
          </button>
          <div style={{ display:"flex", alignItems:"center", gap:6 }} className="navD">
            {LINKS.map(l => {
              const active = pathname === l.to;
              return (
                <button key={l.label} onClick={() => go(l.to)} style={{
                  background:"none", border:"none", cursor:"pointer",
                  fontFamily:"'DM Sans',sans-serif", fontSize:12, letterSpacing:"0.1em",
                  textTransform:"uppercase", padding:"8px 16px",
                  color: active ? "#fff" : "rgba(255,255,255,0.5)",
                  borderBottom: active ? `1px solid ${C.gold}` : "1px solid transparent",
                  transition:"color .2s, border-color .2s",
                }}>{l.label}</button>
              );
            })}
            <button onClick={() => go("/contact")} style={{
              marginLeft:16, background:"transparent",
              color:C.gold, border:`1px solid rgba(201,169,110,0.5)`,
              borderRadius:1, padding:"9px 24px",
              fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase",
              fontFamily:"'DM Sans',sans-serif", cursor:"pointer",
              transition:"background .25s, color .25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background=C.gold; e.currentTarget.style.color=C.navy; }}
            onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=C.gold; }}>
              Get a Quote
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="navM" style={{ display:"none", background:"none", border:"none", cursor:"pointer", padding:6, flexDirection:"column", gap:5 }}>
            {[0,1,2].map(i => <span key={i} style={{ display:"block", width:26, height:1.5, background:"#fff", transition:"all .25s", transform: open?(i===0?"rotate(45deg) translate(4.5px,5px)":i===2?"rotate(-45deg) translate(4.5px,-5px)":"none"):"none", opacity:open&&i===1?0:1 }} />)}
          </button>
        </div>
      </nav>
      {open && (
        <div style={{ position:"fixed", top:72, left:0, right:0, zIndex:999, background:C.navy, borderBottom:`1px solid rgba(139,189,212,0.1)`, padding:"20px 48px 32px" }}>
          {LINKS.map(l => {
            const active = pathname === l.to;
            return <button key={l.label} onClick={() => go(l.to)} style={{ display:"block", width:"100%", background:"none", border:"none", borderBottom:`1px solid rgba(139,189,212,0.08)`, textAlign:"left", cursor:"pointer", fontSize:16, padding:"14px 0", fontFamily:"'DM Sans',sans-serif", color: active?"#fff":"rgba(255,255,255,0.5)", letterSpacing:"0.06em" }}>{l.label}</button>;
          })}
          <button onClick={() => go("/contact")} style={{ marginTop:16, background:C.gold, color:C.navy, border:"none", borderRadius:1, padding:"12px 28px", fontSize:12, cursor:"pointer", letterSpacing:"0.12em", fontFamily:"'DM Sans',sans-serif", textTransform:"uppercase", fontWeight:700 }}>Get a Quote</button>
        </div>
      )}
    </>
  );
}
