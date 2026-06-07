import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollY } from "../lib/hooks";
import { C, IMG, SERVICES_DATA, STATS, VIDEO_URL, VIDEO_FALLBACK } from "../lib/constants";
import Reveal from "../components/Reveal";

export default function Home() {
  const navigate = useNavigate();
  const go = to => navigate(to);
  const scrollY = useScrollY();
  const videoRef = useRef(null);
  const [videoErr, setVideoErr] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoErr(true));
    }
  }, []);

  return (
    <div>
      {/* ── VIDEO HERO ── */}
      <section style={{ position:"relative", height:"100vh", overflow:"hidden", display:"flex", alignItems:"center" }}>
        {!videoErr ? (
          <video
            ref={videoRef}
            autoPlay muted loop playsInline
            onError={() => setVideoErr(true)}
            style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transform:`translateY(${scrollY * 0.3}px)` }}
          >
            <source src={VIDEO_URL} type="video/mp4" />
            <source src={VIDEO_FALLBACK} type="video/mp4" />
          </video>
        ) : (
          <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.hero})`, backgroundSize:"cover", backgroundPosition:"center", transform:`translateY(${scrollY * 0.25}px)` }} />
        )}

        <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, rgba(13,27,53,0.88) 0%, rgba(13,27,53,0.65) 50%, rgba(13,27,53,0.82) 100%)` }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(120deg, transparent 55%, rgba(139,189,212,0.06) 100%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:200, background:"linear-gradient(to bottom, transparent, rgba(13,27,53,0.9))" }} />

        <div style={{ position:"absolute", top:"20%", right:"8%", width:1, height:"35%", background:`linear-gradient(to bottom, transparent, ${C.glass}, transparent)`, opacity:0.4 }} />
        <div style={{ position:"absolute", top:"25%", right:"10%", width:1, height:"25%", background:`linear-gradient(to bottom, transparent, ${C.glass2}, transparent)`, opacity:0.2 }} />

        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px", width:"100%" }}>
          <div style={{ animation:"heroIn 1.1s cubic-bezier(.16,1,.3,1) forwards", opacity:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:32 }}>
              <div style={{ width:48, height:1, background:C.gold }} />
              <span style={{ fontSize:11, color:C.gold, letterSpacing:"0.24em", textTransform:"uppercase" }}>Carcar City, Cebu · Est. 2014</span>
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(52px,7vw,108px)", fontWeight:700, color:"#fff", lineHeight:0.95, letterSpacing:"-0.02em", margin:"0 0 12px" }}>
              Precision
            </h1>
            <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(52px,7vw,108px)", fontWeight:400, fontStyle:"italic", color:C.glass, lineHeight:0.95, letterSpacing:"-0.02em", margin:"0 0 12px" }}>
              Glass
            </h1>
            <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(52px,7vw,108px)", fontWeight:700, color:"#fff", lineHeight:0.95, letterSpacing:"-0.02em", margin:"0 0 40px" }}>
              Fabrication.
            </h1>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.62)", lineHeight:1.85, maxWidth:480, marginBottom:52 }}>
              UPVC windows, aluminum doors, and custom glazing systems — built for the Philippine climate, crafted to endure it.
            </p>
            <div style={{ display:"flex", gap:18, flexWrap:"wrap" }}>
              <button onClick={() => go("/services")} style={{ background:C.gold, color:C.navy, border:"none", borderRadius:1, padding:"15px 40px", fontSize:12, cursor:"pointer", letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textTransform:"uppercase", transition:"opacity .2s" }}
                onMouseEnter={e=>e.currentTarget.style.opacity=".85"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                Explore Services
              </button>
              <button onClick={() => go("/contact")} style={{ background:"transparent", color:"#fff", border:"1px solid rgba(255,255,255,0.3)", borderRadius:1, padding:"15px 40px", fontSize:12, cursor:"pointer", letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", textTransform:"uppercase", transition:"border-color .2s" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.7)"} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.3)"}>
                Get a Free Quote →
              </button>
            </div>
          </div>

          <div style={{ position:"absolute", bottom:-80, right:48, display:"flex", gap:10 }}>
            {["Precision","Quality","Durability"].map(t => (
              <span key={t} style={{ fontSize:10, color:C.glass, border:`1px solid rgba(139,189,212,0.35)`, padding:"6px 16px", letterSpacing:"0.18em", textTransform:"uppercase" }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, animation:"bounce 2s infinite" }}>
          <span style={{ fontSize:10, color:"rgba(255,255,255,0.35)", letterSpacing:"0.16em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:40, background:`linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)` }} />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.stat})`, backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"rgba(13,27,53,0.88)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", borderLeft:`1px solid rgba(139,189,212,0.12)` }}>
            {STATS.map((s,i) => (
              <Reveal key={s.label} delay={i*0.1}>
                <div style={{ padding:"60px 40px", borderRight:`1px solid rgba(139,189,212,0.12)`, borderTop:"1px solid rgba(139,189,212,0.12)", borderBottom:"1px solid rgba(139,189,212,0.12)" }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:64, fontWeight:700, color:C.gold, lineHeight:1, margin:0 }}>{s.value}</p>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:12, letterSpacing:"0.14em", textTransform:"uppercase" }}>{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SHOWCASE ── */}
      <section style={{ background:C.navy, padding:"120px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <Reveal>
            <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:72, flexWrap:"wrap", gap:24 }}>
              <div>
                <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:16 }}>What We Do</p>
                <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(36px,4vw,60px)", fontWeight:700, color:"#fff", lineHeight:1.05, letterSpacing:"-0.01em", margin:0 }}>
                  Our Services.
                </h2>
              </div>
              <button onClick={() => go("/services")} style={{ background:"none", color:"rgba(255,255,255,0.5)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:1, padding:"10px 24px", fontSize:11, cursor:"pointer", letterSpacing:"0.12em", fontFamily:"'DM Sans',sans-serif", textTransform:"uppercase", transition:"all .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.5)"; e.currentTarget.style.color="#fff";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"; e.currentTarget.style.color="rgba(255,255,255,0.5)";}}>
                View All →
              </button>
            </div>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"320px 1fr", gap:1, background:"rgba(139,189,212,0.08)", border:"1px solid rgba(139,189,212,0.08)", borderRadius:2, overflow:"hidden", minHeight:440 }}>
            <div style={{ background:"rgba(13,27,53,0.6)" }}>
              {SERVICES_DATA.map((s,i) => (
                <button key={s.num} onClick={() => setActiveService(i)} style={{
                  display:"flex", alignItems:"center", gap:16, width:"100%",
                  background: activeService===i ? "rgba(139,189,212,0.1)" : "transparent",
                  border:"none", borderLeft: activeService===i ? `3px solid ${C.gold}` : "3px solid transparent",
                  borderBottom:"1px solid rgba(139,189,212,0.06)",
                  padding:"22px 28px", cursor:"pointer", textAlign:"left",
                  transition:"all .25s",
                }}>
                  <span style={{ fontSize:10, color: activeService===i ? C.gold : "rgba(255,255,255,0.2)", letterSpacing:"0.1em", minWidth:22 }}>{s.num}</span>
                  <div>
                    <p style={{ fontSize:14, fontWeight:500, color: activeService===i ? "#fff" : "rgba(255,255,255,0.5)", fontFamily:"'DM Sans',sans-serif", margin:0, letterSpacing:"0.02em" }}>{s.title}</p>
                    <p style={{ fontSize:11, color:"rgba(255,255,255,0.25)", marginTop:3, letterSpacing:"0.04em" }}>{s.short}</p>
                  </div>
                </button>
              ))}
            </div>
            <div style={{ position:"relative", overflow:"hidden", minHeight:440 }}>
              <div key={activeService} style={{ position:"absolute", inset:0, backgroundImage:`url(${SERVICES_DATA[activeService].img})`, backgroundSize:"cover", backgroundPosition:"center", animation:"imgFade .6s ease forwards" }} />
              <div style={{ position:"absolute", inset:0, background:`linear-gradient(to right, rgba(13,27,53,0.85) 0%, rgba(13,27,53,0.4) 100%)` }} />
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"40px" }}>
                <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:32, fontWeight:700, color:"#fff", margin:"0 0 12px" }}>{SERVICES_DATA[activeService].title}</p>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.7)", lineHeight:1.75, maxWidth:380, marginBottom:24 }}>{SERVICES_DATA[activeService].desc}</p>
                <button onClick={() => go("/contact")} style={{ background:C.gold, color:C.navy, border:"none", borderRadius:1, padding:"10px 24px", fontSize:11, cursor:"pointer", letterSpacing:"0.12em", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textTransform:"uppercase" }}>
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.about})`, backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(13,27,53,0.92) 0%, rgba(13,27,53,0.75) 100%)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"120px 48px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:96, alignItems:"center" }} className="twoCol">
          <Reveal from="left">
            <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:20 }}>About B &amp; T Glass</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(36px,4vw,58px)", fontWeight:700, color:"#fff", lineHeight:1.08, margin:"0 0 28px" }}>
              A Decade of<br /><em style={{ fontStyle:"italic", color:C.glass, fontWeight:400 }}>Precision Craft.</em>
            </h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.6)", lineHeight:1.9, marginBottom:40 }}>
              Founded in Carcar City, Cebu, B &amp; T Glass Fabrication Services has spent over a decade supplying, fabricating, and installing premium glass systems for homes, offices, and commercial developments across the Visayas.
            </p>
            <button onClick={() => go("/about")} style={{ background:"transparent", color:"#fff", border:`1px solid rgba(255,255,255,0.35)`, borderRadius:1, padding:"13px 32px", fontSize:12, cursor:"pointer", letterSpacing:"0.12em", fontFamily:"'DM Sans',sans-serif", textTransform:"uppercase", transition:"all .2s" }}
              onMouseEnter={e=>{e.currentTarget.style.background=C.gold; e.currentTarget.style.color=C.navy; e.currentTarget.style.borderColor=C.gold;}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="rgba(255,255,255,0.35)";}}>
              Our Story →
            </button>
          </Reveal>
          <Reveal from="right">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, background:"rgba(139,189,212,0.1)" }}>
              {[["Durability","UPVC profiles resist UV, salt air, and humidity."],["Security","Multi-point locks on every installation."],["Energy Efficiency","Thermally insulated frames cut cooling costs."],["Low Maintenance","A simple wipe-down is all that's needed."]].map(([t,d]) => (
                <div key={t} style={{ background:"rgba(13,27,53,0.5)", padding:"28px 24px", backdropFilter:"blur(8px)" }}>
                  <div style={{ width:20, height:2, background:C.gold, marginBottom:14 }} />
                  <p style={{ fontSize:13, fontWeight:600, color:"#fff", marginBottom:8, letterSpacing:"0.04em" }}>{t}</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.45)", lineHeight:1.65 }}>{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:C.navy2, padding:"120px 48px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.services})`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.08 }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(13,27,53,0.6) 0%, transparent 100%)" }} />
        <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:1, height:80, background:`linear-gradient(to bottom, transparent, ${C.gold})`, opacity:0.5 }} />
        <div style={{ position:"relative", maxWidth:680, margin:"0 auto" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:24 }}>Ready to Build?</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(36px,5vw,68px)", fontWeight:700, color:"#fff", lineHeight:1.05, margin:"0 0 24px", letterSpacing:"-0.01em" }}>
              Transform Your Space<br />with <em style={{ fontStyle:"italic", color:C.glass }}>Precision Glass.</em>
            </h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.5)", marginBottom:52, lineHeight:1.75 }}>
              Contact us today for a free consultation and quote. We respond within 24 hours.
            </p>
            <div style={{ display:"flex", gap:20, justifyContent:"center", flexWrap:"wrap" }}>
              <button onClick={() => go("/contact")} style={{ background:C.gold, color:C.navy, border:"none", borderRadius:1, padding:"16px 44px", fontSize:12, cursor:"pointer", letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textTransform:"uppercase" }}>
                Get a Free Quote
              </button>
              <button onClick={() => go("/services")} style={{ background:"transparent", color:"#fff", border:"1px solid rgba(255,255,255,0.25)", borderRadius:1, padding:"16px 44px", fontSize:12, cursor:"pointer", letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", textTransform:"uppercase" }}>
                See Services →
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
