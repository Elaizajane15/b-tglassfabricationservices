import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { C, IMG, STATS } from "../lib/constants";
import Reveal from "../components/Reveal";
import { Logo } from "../components/Logo";

const FEATS = [
  { label:"Durability",        body:"UPVC and aluminum profiles resist UV radiation, salt air and tropical humidity — no warping, no rust, no repainting ever needed. Built for decades of performance." },
  { label:"Security",          body:"Multi-point locking mechanisms and toughened safety glass on every installation. Every entry point engineered for your peace of mind." },
  { label:"Energy Efficiency", body:"Thermally insulated frames significantly reduce solar heat gain, cutting air-conditioning costs year-round and contributing to a greener environment." },
  { label:"Low Maintenance",   body:"A simple wipe-down is all that's required — no sanding, no painting, no specialist treatment. Ever. Your investment looks perfect with minimal effort." },
];

export default function About() {
  const navigate = useNavigate();
  const go = to => navigate(to);
  const [feat, setFeat] = useState(0);

  return (
    <div>
      {/* Cinematic banner */}
      <div style={{ position:"relative", height:"70vh", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.about})`, backgroundSize:"cover", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(13,27,53,0.5) 0%, rgba(13,27,53,0.92) 100%)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px 72px", width:"100%" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:16 }}>About Us</p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(44px,6vw,80px)", fontWeight:700, color:"#fff", lineHeight:1.05, letterSpacing:"-0.01em", margin:0 }}>
              A Decade of<br /><em style={{ fontStyle:"italic", color:C.glass, fontWeight:400 }}>Precision Craft.</em>
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Story */}
      <section style={{ background:"#fff", padding:"100px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:96 }} className="twoCol">
            <Reveal from="left">
              <div style={{ position:"relative" }}>
                <div style={{ aspectRatio:"4/5", backgroundImage:`url(${IMG.about})`, backgroundSize:"cover", backgroundPosition:"center", borderRadius:2 }} />
                <div style={{ position:"absolute", bottom:-32, right:-32, background:C.navy, padding:"28px 32px", borderRadius:2, border:`1px solid rgba(139,189,212,0.15)` }}>
                  <Logo size={52} light />
                  <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:16, fontWeight:700, color:"#fff", marginTop:12, letterSpacing:"0.08em" }}>B &amp; T GLASS</p>
                  <p style={{ fontSize:10, color:C.gold, letterSpacing:"0.18em", textTransform:"uppercase", marginTop:4 }}>Fabrication Services</p>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" delay={0.1}>
              <div style={{ paddingTop:24 }}>
                <p style={{ fontSize:11, color:C.navy, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:20, fontWeight:600 }}>Our Story</p>
                <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(28px,3vw,44px)", fontWeight:700, color:C.navy, lineHeight:1.1, margin:"0 0 32px" }}>Who We Are.</h2>
                <p style={{ fontSize:15, lineHeight:1.9, color:C.steel, marginBottom:20 }}>B &amp; T Glass Fabrication Services was built on a single conviction: that windows and doors deserve the same attention to craft as everything inside a building.</p>
                <p style={{ fontSize:15, lineHeight:1.9, color:C.muted, marginBottom:36 }}>Founded in Carcar City, Cebu, we supply, fabricate and install UPVC and aluminum systems for homes, offices, and commercial developments across the Visayas. Every project is personally supervised — no hand-offs, no shortcuts, no compromise on quality.</p>
                <div style={{ borderLeft:`3px solid ${C.navy}`, paddingLeft:24 }}>
                  <p style={{ fontSize:10, color:C.navy, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:10, fontWeight:700 }}>Mission</p>
                  <p style={{ fontSize:15, lineHeight:1.8, color:C.steel, fontStyle:"italic" }}>"To enhance the comfort, security and aesthetic appeal of every property we touch — through superior materials, meticulous installation, and a lasting commitment to our clients."</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats — parallax bg */}
      <section style={{ position:"relative", overflow:"hidden", padding:"100px 0" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.hero})`, backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"rgba(13,27,53,0.9)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, border:"1px solid rgba(139,189,212,0.1)" }} className="fourCol">
            {STATS.map((s,i) => (
              <Reveal key={s.label} delay={i*0.1}>
                <div style={{ padding:"52px 36px", borderRight: i<3?"1px solid rgba(139,189,212,0.1)":0, textAlign:"center" }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:72, fontWeight:700, color:C.gold, lineHeight:1, margin:0 }}>{s.value}</p>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:14, letterSpacing:"0.14em", textTransform:"uppercase" }}>{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features interactive */}
      <section style={{ background:C.off, padding:"100px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.navy, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:16, fontWeight:600 }}>Why Choose Us</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(28px,3vw,48px)", fontWeight:700, color:C.navy, lineHeight:1.1, margin:"0 0 64px" }}>Built to Last.</h2>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, background:C.border }} className="twoCol">
            {FEATS.map((f,i) => (
              <Reveal key={f.label} delay={i*0.08}>
                <div onClick={() => setFeat(i)} style={{ background: feat===i ? C.navy : "#fff", padding:"48px 40px", cursor:"pointer", transition:"background .35s", borderBottom:"1px solid "+C.border }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
                    <span style={{ fontSize:11, color: feat===i ? C.gold : C.glass, letterSpacing:"0.12em" }}>0{i+1}</span>
                    <span style={{ fontSize:18, color: feat===i ? C.gold : C.border, transition:"color .3s" }}>→</span>
                  </div>
                  <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:24, fontWeight:700, color: feat===i ? "#fff" : C.navy, margin:"0 0 14px" }}>{f.label}</p>
                  <p style={{ fontSize:13, lineHeight:1.75, color: feat===i ? "rgba(255,255,255,0.6)" : C.muted, maxWidth:340 }}>{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:C.navy, padding:"100px 48px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.contact})`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.07 }} />
        <div style={{ position:"relative", maxWidth:600, margin:"0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(32px,4vw,54px)", fontWeight:700, color:"#fff", margin:"0 0 40px", lineHeight:1.1 }}>Ready to Work With Us?</h2>
            <button onClick={() => go("/contact")} style={{ background:C.gold, color:C.navy, border:"none", borderRadius:1, padding:"15px 44px", fontSize:12, cursor:"pointer", letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textTransform:"uppercase" }}>Contact Us →</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
